const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const marker = '{/* Cell 3: Tall Image (Col span 1, Row span 2) */}';
const nextMarker = '{/* Cell 4: Wide Image (Col span 2, Row span 1) */}';

const startIndex = content.indexOf(marker);
const endIndex = content.indexOf(nextMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Cell 3: Tall Image (Col span 1, Row span 2) */}
          <div className="md:col-span-1 md:row-span-2 rounded-xl bg-paper relative overflow-hidden shadow-sm flex flex-col justify-end p-8 group">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-700 group-hover:scale-[1.18]" 
              style={{ backgroundImage: "url('/images/designed-for-body.jpg')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="relative z-10 text-white">
              <h3 className="text-xl font-medium mb-2">Designed for the Body</h3>
              <p className="text-sm font-light text-white/90">Supporting your natural microclimate all day.</p>
            </div>
          </div>\n\n          `;
  const original = content.substring(startIndex, endIndex);
  content = content.replace(original, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully replaced Cell 3');
} else {
  console.log('Markers not found', { startIndex, endIndex });
}
