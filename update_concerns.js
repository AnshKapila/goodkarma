const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const updatedCategories = `        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { 
              title: "Daily Comfort", 
              desc: "Breathable cotton that stays cool and comfortable from morning to night.", 
              img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
            },
            { 
              title: "New Mothers", 
              desc: "Soft, breathable cotton for sensitive skin in the months after birth.", 
              img: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1000&auto=format&fit=crop" 
            },
            { 
              title: "Fertility & Wellness", 
              desc: "Breathable cotton for him and for her, as you start or grow your family.", 
              img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop" 
            },
            { 
              title: "Little Ones", 
              desc: "Soft natural cotton for babies and growing kids with sensitive skin.", 
              img: "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=1000&auto=format&fit=crop" 
            }
          ].map((concern) => (
            <Link href="/products" key={concern.title} className="group relative rounded-xl aspect-[3/4] flex flex-col justify-end items-start border border-border/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: \`url(\${concern.img})\` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="relative z-10 p-6 md:p-8 w-full">
                <span className="font-medium text-xl text-white mb-2 block">{concern.title}</span>
                <span className="text-sm text-white/90 leading-relaxed font-light block">{concern.desc}</span>
              </div>
            </Link>
          ))}
        </div>`;

// Replace between the title div and end of section
const startMarker = '<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">';
const endMarker = '</section>\n\n      {/* 5. How We\'re Made';
const endMarkerCRLF = '</section>\r\n\r\n      {/* 5. How We\'re Made';

const startIndex = content.indexOf(startMarker);
let endIndex = content.indexOf('</section>', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const original = content.substring(startIndex, endIndex);
  content = content.replace(original, updatedCategories + '\n      ');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated Shop by Concern in page.tsx');
} else {
  console.log('Markers not found', { startIndex, endIndex });
}
