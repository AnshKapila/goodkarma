const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const marker = '{/* Cell 4: Wide Image (Col span 2, Row span 1) */}';
const nextMarker = '{/* Cell 5: Naturally Dyed (Col span 1, Row span 1) */}';

const startIndex = content.indexOf(marker);
const endIndex = content.indexOf(nextMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Cell 4: Wide Image (Col span 2, Row span 1) */}
          <div className="md:col-span-2 md:row-span-1 rounded-xl bg-paper relative overflow-hidden shadow-sm border border-border/40 group">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-700 group-hover:scale-[1.18]" 
              style={{ backgroundImage: "url('/images/connecting-skin-nature.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8 z-10">
               <h3 className="text-xl font-medium text-white drop-shadow-md">Connecting Skin & Nature</h3>
            </div>
          </div>\n\n          `;
  const original = content.substring(startIndex, endIndex);
  content = content.replace(original, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully replaced Cell 4');
} else {
  console.log('Markers not found', { startIndex, endIndex });
}
