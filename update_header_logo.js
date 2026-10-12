const fs = require('fs');

const path = 'web/src/components/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldLogo = `<Link href="/" className={\`font-display text-3xl tracking-tight \${scrolled ? "text-marigold" : "text-white"}\`}>
          good karma
        </Link>`;

const newLogo = `<Link href="/" className="inline-flex items-center group relative h-8 md:h-9" aria-label="Good Karma Home">
          <img 
            src="/images/logo-white.png" 
            alt="Good Karma - Be Good, Wear Good." 
            className={\`h-7 md:h-8 w-auto object-contain transition-opacity duration-300 \${scrolled ? "opacity-0 pointer-events-none absolute" : "opacity-100"}\`} 
          />
          <img 
            src="/images/logo-dark.png" 
            alt="Good Karma - Be Good, Wear Good." 
            className={\`h-7 md:h-8 w-auto object-contain transition-opacity duration-300 \${scrolled ? "opacity-100" : "opacity-0 pointer-events-none absolute"}\`} 
          />
        </Link>`;

if (content.includes(oldLogo)) {
  content = content.replace(oldLogo, newLogo);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated Header with official Good Karma logo');
} else {
  console.log('Old logo not found in Header.tsx');
}
