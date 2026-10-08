const fs = require('fs');

// 1. /for-doctors/page.tsx
const forDoctorsPath = 'web/src/app/educate/for-doctors/page.tsx';
let docContent = fs.readFileSync(forDoctorsPath, 'utf8');
docContent = docContent.replace(/<Link href="\/contact"[^>]*>([\s\S]*?)<\/Link>/, '<Button variant="primary" href="/contact">Get in Touch</Button>');
if (!docContent.includes('import { Button }')) {
  docContent = 'import { Button } from "@/components/ui/button";\n' + docContent;
}
fs.writeFileSync(forDoctorsPath, docContent);

// 2. /natural-dyeing/page.tsx
const dyeingPath = 'web/src/app/educate/natural-dyeing/page.tsx';
let dyeContent = fs.readFileSync(dyeingPath, 'utf8');
dyeContent = dyeContent.replace(/<Link href="\/certifications" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border\/60 text-sm font-medium text-ink hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 w-fit">[\s\S]*?<svg[^>]*>.*?<\/svg>[\s\S]*?Read the Standards[\s\S]*?<\/Link>/, '<Button variant="secondary" href="/certifications">Read the Standards</Button>');
if (!dyeContent.includes('import { Button }')) {
  dyeContent = 'import { Button } from "@/components/ui/button";\n' + dyeContent;
}
fs.writeFileSync(dyeingPath, dyeContent);

// 3. /products/page.tsx
const productsPath = 'web/src/app/products/page.tsx';
let prodContent = fs.readFileSync(productsPath, 'utf8');
prodContent = prodContent.replace(/<button className="flex items-center gap-3 px-6 py-3 rounded-full border border-border text-ink hover:bg-paper transition-colors font-medium">[\s\S]*?<SlidersHorizontal className="w-4 h-4" \/> Filter[\s\S]*?<\/button>/, '<Button variant="secondary" icon="none"><SlidersHorizontal className="w-[18px] h-[18px]" /> Filter</Button>');
if (!prodContent.includes('import { Button }')) {
  prodContent = 'import { Button } from "@/components/ui/button";\n' + prodContent;
}
fs.writeFileSync(productsPath, prodContent);

// 4. /products/[slug]/page.tsx
const slugPath = 'web/src/app/products/[slug]/page.tsx';
let slugContent = fs.readFileSync(slugPath, 'utf8');
slugContent = slugContent.replace(/<Button className="w-full bg-ink text-white rounded-full py-7 text-base font-medium shadow-md hover:bg-ink\/90 transition-all hover:-translate-y-1">\s*Add to Bag\s*<\/Button>/, '<Button variant="primary" icon="bag" fullWidthMobile={true}>Add to Bag</Button>');
fs.writeFileSync(slugPath, slugContent);

console.log("Updated remaining buttons.");
