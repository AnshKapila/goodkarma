const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update New Mothers entry
const oldNewMothers = `{ 
              title: "New Mothers", 
              desc: "Soft, breathable cotton for sensitive skin in the months after birth.", 
              img: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1000&auto=format&fit=crop" 
            }`;

const newNewMothers = `{ 
              title: "New Mothers", 
              desc: "Soft, breathable cotton for sensitive skin in the months after birth.", 
              img: "/images/new-mothers.png",
              scale: "scale-110 group-hover:scale-[1.18]"
            }`;

content = content.replace(oldNewMothers, newNewMothers);

// Update map inner div to support concern.scale
content = content.replace(
  '<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${concern.img})` }} />',
  '<div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${concern.scale || "group-hover:scale-105"}`} style={{ backgroundImage: `url(${concern.img})` }} />'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated New Mothers card image and 10% zoom in page.tsx');
