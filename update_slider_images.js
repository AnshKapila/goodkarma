const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldSlider = /<ComparisonSlider[\s\S]*?\/>/;

const newSlider = `<ComparisonSlider 
              leftImage="/images/cotton-hand.png" 
              rightImage="/images/synthetic-hand.jpg"
              leftLabel="100% GOTS Cotton (Breathable)"
              rightLabel="Synthetic (Traps Heat)"
              zoom={1.13}
              className="aspect-square md:aspect-auto md:h-full md:flex-1 min-h-[400px]"
            />`;

if (oldSlider.test(content)) {
  content = content.replace(oldSlider, newSlider);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated ComparisonSlider in page.tsx');
} else {
  console.log('Regex did not match');
}
