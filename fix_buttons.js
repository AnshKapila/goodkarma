const fs = require('fs');
const glob = require('glob');
const path = require('path');

const buttonPattern = /<Link[^>]*className="[^"]*rounded-full[^"]*"[^>]*>.*?<\/Link>/gs;
const buttonPattern2 = /<button[^>]*className="[^"]*rounded-full[^"]*"[^>]*>.*?<\/button>/gs;

// Actually writing a robust script for this sweep is better.
const files = [
  'web/src/app/certifications/page.tsx',
  'web/src/app/contact/page.tsx',
  'web/src/components/Footer.tsx',
  'web/src/components/Header.tsx'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Convert certifications page buttons
    if (file.includes('certifications')) {
      content = content.replace(/<button[^>]*>[\s\S]*?<Download[^>]*>.*?Download Certificate[\s\S]*?<\/button>/g, '<Button variant="secondary" icon="download" href="#">Download Certificate</Button>');
      content = content.replace(/<Link[^>]*>[\s\S]*?<Download[^>]*>.*?View Disclosure[\s\S]*?<\/Link>/g, '<Button variant="secondary" icon="download" href="#" fullWidthMobile={true}>View Disclosure</Button>');
      content = content.replace(/<Link[^>]*>[\s\S]*?<Download[^>]*>.*?Download Doc[\s\S]*?<\/Link>/g, '<Button variant="secondary" icon="download" href="#" fullWidthMobile={true}>Download Doc</Button>');
      
      // import Button if not present
      if (!content.includes('import { Button }')) {
        content = 'import { Button } from "@/components/ui/button";\n' + content;
      }
      // remove unused Download/ArrowRight imports
      content = content.replace(/import \{ ArrowRight, Download \} from "lucide-react";/, '');
      content = content.replace(/import Link from "next\/link";/, '');
    }
    
    // Convert contact page button
    if (file.includes('contact')) {
      content = content.replace(/<Button className="bg-ink hover:bg-ink\/90 text-white rounded-full px-8 py-6 mt-4 text-base font-medium transition-colors">([\s\S]*?)<\/Button>/g, '<Button variant="primary" fullWidthMobile={true}>$1</Button>');
    }

    fs.writeFileSync(file, content, 'utf8');
  }
}
console.log("Replaced certs and contact.");
