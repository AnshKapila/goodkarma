const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const marker = '{/* 8. Doctor Trust (Compact Bento) */}';
const nextMarker = '{/* 8.5 In Motion (Short Content) */}';

const startIndex = content.indexOf(marker);
const endIndex = content.indexOf(nextMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* 8. Doctor Trust (Continuous Creative Banner) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="bg-[#485646] rounded-xl overflow-hidden text-white flex flex-col md:flex-row items-stretch justify-between shadow-xl relative min-h-[460px]">
          
          {/* Left: Content */}
          <div className="p-8 md:p-14 lg:p-20 flex-1 z-10 flex flex-col justify-center max-w-[650px]">
            <span className="text-white/80 font-bold text-xs uppercase tracking-widest mb-4 block">
              Clinical Partnership
            </span>
            <h2 className="text-h2 font-editorial italic text-white mb-6 leading-tight drop-shadow-sm">
              Recommended by practitioners.
            </h2>
            <p className="text-p1 text-white/90 mb-10 max-w-[500px] font-light leading-relaxed">
              Trusted by doctors and wellness practitioners for patients who need chemical-free, breathable garments. Backed by the highest global standards.
            </p>
            <div>
              <Button href="/educate/for-doctors" variant="primary" fullWidthMobile={true}>
                Explore Clinical Resources
              </Button>
            </div>
          </div>

          {/* Right: Creative Visual & Script Element */}
          <div className="w-full md:w-1/2 relative flex items-end justify-center md:justify-end self-stretch min-h-[380px] md:min-h-full overflow-hidden">
            {/* Script Text Accent (matching Image 2's delicate handwritten aesthetic) */}
            <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 pointer-events-none">
              <span className="font-editorial italic text-xl md:text-2xl text-white/90 drop-shadow-sm block">
                Pure science, proven on skin ♡
              </span>
            </div>

            {/* Doctor Portrait Image */}
            <div 
              className="w-full h-full min-h-[380px] md:min-h-[480px] bg-cover bg-[center_top] relative"
              style={{ backgroundImage: "url('/images/doctor-trust.jpg')" }}
            >
              {/* Seamless feathering gradient into the continuous card background */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#485646] via-[#485646]/20 to-transparent opacity-90 md:opacity-60" />
            </div>
          </div>

        </div>
      </section>\n\n      `;
  const original = content.substring(startIndex, endIndex);
  content = content.replace(original, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully replaced Section 8 with continuous banner');
} else {
  console.log('Markers not found', { startIndex, endIndex });
}
