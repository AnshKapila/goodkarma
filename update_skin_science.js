const fs = require('fs');

const path = 'web/src/app/educate/skin-science/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace For Infants block with For Little Ones
content = content.replace(
  /<span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block">For Infants<\/span>/,
  '<span className="text-mauve font-bold text-xs uppercase tracking-widest mb-4 block">For Little Ones</span>'
);

content = content.replace(
  /<p className="text-p2 text-muted-foreground font-light">A baby's skin is still learning to protect itself.<\/p>/,
  '<p className="text-p2 text-muted-foreground font-light">A baby or growing child\'s skin is still learning to protect itself.</p>'
);

content = content.replace(
  /<p className="text-p2 text-muted-foreground font-light">An infant's skin barrier is thinner and more easily irritated by synthetic fibers and dye residue than adult skin.<\/p>/,
  '<p className="text-p2 text-muted-foreground font-light">An infant or young child\'s skin barrier is thinner and more easily irritated by synthetic fibers and chemical dye residue than adult skin.</p>'
);

content = content.replace(
  /<p className="text-p2 text-ink font-medium">Natural dye and certified cotton mean nothing unnecessary ever touches it.<\/p>/,
  '<p className="text-p2 text-ink font-medium">Soft natural cotton and gentle botanical dyeing ensure nothing unnecessary or irritating ever touches delicate skin.</p>'
);

// Update image for Little Ones
content = content.replace(
  /bg-\[url\('https:\/\/images\.unsplash\.com\/photo-1519689680058-324335c77eba\?q=80&w=800&auto=format&fit=crop'\)\]/,
  "bg-[url('https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=800&auto=format&fit=crop')]"
);

// Update image for Men / Fertility & Wellness to man stretching outdoors in loose cotton
content = content.replace(
  /bg-\[url\('https:\/\/images\.unsplash\.com\/photo-1600093463592-8e36ae95ef56\?q=80&w=800&auto=format&fit=crop'\)\]/,
  "bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop')]"
);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated skin-science page');
