const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const replacement = `{/* 3. Certifications Strip (Inline List) */}
      <section className="px-6 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col items-center gap-10 bg-paper py-12 px-6 rounded-[20px] border border-border/40">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full justify-center">
            <span className="text-xl md:text-2xl font-editorial italic text-ink shrink-0">
              Certified where it counts:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale">
              <div className="font-bold text-ink text-lg tracking-widest uppercase flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-xs">G</div>
                GOTS
              </div>
              <div className="font-bold text-ink text-lg tracking-widest uppercase flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-xs">O</div>
                OEKO-TEX
              </div>
              <div className="font-bold text-ink text-lg tracking-widest uppercase flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-xs">B</div>
                BRSR
              </div>
              <div className="font-bold text-ink text-lg tracking-widest uppercase flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-xs">V</div>
                Vegan Dye
              </div>
            </div>
          </div>
          <Button href="/certifications" variant="secondary">
            View All Standards
          </Button>
        </div>
      </section>`;

// Target the start and end of the block
const startComment = '{/* 3. Certifications Strip (Compact Bento) */}';
const endComment = '{/* 4. Shop by Concern */}';

const startIndex = content.indexOf(startComment);
const endIndex = content.indexOf(endComment);

if (startIndex !== -1 && endIndex !== -1) {
    const originalBlock = content.substring(startIndex, endIndex);
    content = content.replace(originalBlock, replacement + '\n\n      ');
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully replaced certifications strip.");
} else {
    console.log("Could not find start or end comment.");
}
