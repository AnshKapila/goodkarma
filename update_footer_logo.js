const fs = require('fs');

const path = 'web/src/components/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /<div className="font-display text-5xl text-marigold mb-6 tracking-tight">good karma<\/div>\s*<p className="text-p1 text-muted-foreground max-w-\[340px\] mb-10 font-light">\s*A trusted friend, backed by science\. Be good\. Wear good\.\s*<\/p>/;

const newFooter = `<Link href="/" className="inline-block mb-6" aria-label="Good Karma Home">
            <img 
              src="/images/logo-dark.png" 
              alt="Good Karma - Be Good, Wear Good." 
              className="h-10 md:h-11 w-auto object-contain" 
            />
          </Link>
          <p className="text-p1 text-muted-foreground max-w-[340px] mb-10 font-light">
            A trusted friend, backed by science.
          </p>`;

if (regex.test(content)) {
  content = content.replace(regex, newFooter);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated Footer with official Good Karma logo');
} else {
  console.log('Regex did not match');
}
