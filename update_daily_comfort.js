const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldDailyComfort = `{ 
              title: "Daily Comfort", 
              desc: "Breathable cotton that stays cool and comfortable from morning to night.", 
              img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
            }`;

const newDailyComfort = `{ 
              title: "Daily Comfort", 
              desc: "Breathable cotton that stays cool and comfortable from morning to night.", 
              img: "/images/daily-comfort.jpg",
              position: "bg-top"
            }`;

content = content.replace(oldDailyComfort, newDailyComfort);

// Update map inner div to support concern.position
content = content.replace(
  '<div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${concern.scale || "group-hover:scale-105"}`} style={{ backgroundImage: `url(${concern.img})` }} />',
  '<div className={`absolute inset-0 bg-cover ${concern.position || "bg-center"} transition-transform duration-700 ${concern.scale || "group-hover:scale-105"}`} style={{ backgroundImage: `url(${concern.img})` }} />'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Daily Comfort image in page.tsx');
