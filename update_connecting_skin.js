const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldCell4 = `{/* Cell 4: Wide Image (Col span 2, Row span 1) */}
          <div className="md:col-span-2 md:row-span-1 rounded-xl bg-paper relative overflow-hidden shadow-sm border border-border/40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-ink/10" />
            <div className="absolute bottom-6 left-8">
               <h3 className="text-xl font-medium text-white drop-shadow-md">Connecting Skin & Nature</h3>
            </div>
          </div>`;

const newCell4 = `{/* Cell 4: Wide Image (Col span 2, Row span 1) */}
          <div className="md:col-span-2 md:row-span-1 rounded-xl bg-paper relative overflow-hidden shadow-sm border border-border/40 group">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-700 group-hover:scale-[1.18]" 
              style={{ backgroundImage: "url('/images/connecting-skin-nature.png')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8 z-10">
               <h3 className="text-xl font-medium text-white drop-shadow-md">Connecting Skin & Nature</h3>
            </div>
          </div>`;

content = content.replace(oldCell4, newCell4);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated Connecting Skin & Nature cell in page.tsx');
