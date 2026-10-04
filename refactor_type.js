const fs = require('fs');
const path = require('path');

const directory = "web/src/app";

function stripTextClasses(classStr) {
    const classes = classStr.split(/\s+/);
    const newClasses = [];
    for (const c of classes) {
        if (/^(sm:|md:|lg:|xl:)?text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|h1|h2|h3|p1|p2|p3)$/.test(c)) {
            continue;
        }
        if (/^(sm:|md:|lg:|xl:)?leading-[a-zA-Z0-9\[\]\.-]+$/.test(c)) {
            continue;
        }
        newClasses.push(c);
    }
    return newClasses.join(" ");
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk(directory);

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace classNames in h1, h2, h3, p
    let newContent = content.replace(/<(h1|h2|h3|p)([^>]*?)className="([^"]*)"([^>]*)/g, (match, tag, prefix, classesStr, suffix) => {
        let cleanClasses = stripTextClasses(classesStr);
        let token = "";
        
        if (tag === "h1") {
            token = "text-h1";
        } else if (tag === "h2") {
            token = "text-h2";
        } else if (tag === "h3") {
            token = "text-h3";
        } else if (tag === "p") {
            if (classesStr.includes("text-lg") || classesStr.includes("text-xl") || classesStr.includes("text-2xl")) {
                token = "text-p1";
            } else if (classesStr.includes("text-sm") || classesStr.includes("text-xs")) {
                token = "text-p3";
            } else {
                token = "text-p2";
            }
        }
        
        if (token) {
            cleanClasses = `${token} ${cleanClasses}`.trim();
        }
        
        return `<${tag}${prefix}className="${cleanClasses}"${suffix}`;
    });
    
    // Replace unsplash product image with PLACEHOLDER_product.jpg
    newContent = newContent.replace(/img: "https:\/\/images\.unsplash\.com\/[^"]+"/g, 'img: "/PLACEHOLDER_product.jpg"');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
}
