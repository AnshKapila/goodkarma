const fs = require('fs');

const path = 'web/src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '<h3 className="text-h3 font-medium text-white leading-[1.2] drop-shadow-md group-hover:text-marigold transition-colors duration-300">{title}</h3>',
  '<h3 className="text-p2 font-medium text-white leading-snug drop-shadow-md group-hover:text-marigold transition-colors duration-300">{title}</h3>'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated heading size in videos to text-p2 in page.tsx');
