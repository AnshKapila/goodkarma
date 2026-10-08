const fs = require('fs');

const filepath = 'web/src/app/page.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Update main flex container gap
content = content.replace(/gap-24 md:gap-32 pb-32/g, 'gap-8 pb-8');

// Remove extra margins on sections
content = content.replace(/<section className="px-6 max-w-\[1400px\] mx-auto w-full mb-12">/g, '<section className="px-6 max-w-[1400px] mx-auto w-full">');
content = content.replace(/<section className="px-6 max-w-\[1400px\] mx-auto w-full mb-32">/g, '<section className="px-6 max-w-[1400px] mx-auto w-full">');
content = content.replace(/<section className="px-6 max-w-\[1400px\] mx-auto w-full mb-24">/g, '<section className="px-6 max-w-[1400px] mx-auto w-full">');

// The Difference section has py-20. The user specifically asked about margins.
// "change the margins between all the sections on top and bottom margins to 32px"
// Let's leave py-20 since it's internal padding, but wait, it might create visual space larger than 32px.
// I will change py-20 to py-8 (32px padding) so it matches, just in case.
content = content.replace(/min-h-\[110vh\] flex items-center py-20/g, 'min-h-[110vh] flex items-center py-8');

fs.writeFileSync(filepath, content, 'utf8');
console.log('Updated margins in page.tsx');
