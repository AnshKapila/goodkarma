const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldFertility = `{ 
              title: "Fertility & Wellness", 
              desc: "Breathable cotton for him and for her, as you start or grow your family.", 
              img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop" 
            }`;

const newFertility = `{ 
              title: "Fertility & Wellness", 
              desc: "Breathable cotton for him and for her, as you start or grow your family.", 
              img: "/images/fertility-wellness.jpg",
              position: "bg-top"
            }`;

content = content.replace(oldFertility, newFertility);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Fertility & Wellness image in page.tsx');
