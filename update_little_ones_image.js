const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldLittleOnes = `{ 
              title: "Little Ones", 
              desc: "Soft natural cotton for babies and growing kids with sensitive skin.", 
              img: "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=1000&auto=format&fit=crop" 
            }`;

const newLittleOnes = `{ 
              title: "Little Ones", 
              desc: "Soft natural cotton for babies and growing kids with sensitive skin.", 
              img: "/images/little-ones.jpg",
              position: "bg-center"
            }`;

content = content.replace(oldLittleOnes, newLittleOnes);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Little Ones card image in page.tsx');
