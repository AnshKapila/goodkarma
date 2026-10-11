const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '<div className="flex flex-col items-center gap-10 bg-paper py-12 px-6 rounded-[20px] border border-border/40">',
  '<div className="flex flex-col items-center gap-8 py-4">'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully removed background color from certifications strip');
