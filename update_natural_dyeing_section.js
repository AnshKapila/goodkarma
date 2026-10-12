const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const marker = '{/* 7. "For sight of every new piece" (Natural Dyeing) */}';
const nextMarker = '{/* 8. Doctor Trust (Compact Bento) */}';

const startIndex = content.indexOf(marker);
const endIndex = content.indexOf(nextMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* 7. "For sight of every new piece" (Natural Dyeing) */}
      <section className="px-6 py-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-ink rounded-xl overflow-hidden text-white flex flex-col md:flex-row items-stretch shadow-xl">
          <div className="p-8 md:p-14 lg:p-20 flex-1 flex flex-col justify-center">
            <span className="text-marigold font-bold text-xs uppercase tracking-widest mb-6 block">Our Process</span>
            <h2 className="text-h2 font-editorial italic mb-8 drop-shadow-sm">
              Colours drawn <br /> directly from nature.
            </h2>
            <p className="text-p1 text-white/80 mb-10 max-w-[450px] font-light">
              Marigold, Madder root, and Pomegranate. We use real ingredients to create our palette, ensuring no harmful chemicals ever touch your skin.
            </p>
            <Button href="/educate/natural-dyeing" variant="primary" fullWidthMobile={true}>
              Explore the Dye Library
            </Button>
          </div>
          <div className="w-full md:w-1/2 min-h-[420px] md:min-h-full aspect-square md:aspect-auto relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/natural-dye-stack.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ink via-ink/20 to-transparent opacity-80 md:opacity-50" />
          </div>
        </div>
      </section>\n\n      `;
  const original = content.substring(startIndex, endIndex);
  content = content.replace(original, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated Section 7 (Natural Dyeing)');
} else {
  console.log('Markers not found', { startIndex, endIndex });
}
