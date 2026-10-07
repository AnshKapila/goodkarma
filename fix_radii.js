const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    content = content.replace(/rounded-\[2\.5rem\]/g, 'rounded-xl');
    content = content.replace(/rounded-\[2rem\]/g, 'rounded-xl');
    content = content.replace(/rounded-\[40px\]/g, 'rounded-xl');
    content = content.replace(/rounded-\[32px\]/g, 'rounded-xl');
    content = content.replace(/rounded-\[24px\]/g, 'rounded-xl');
    content = content.replace(/rounded-3xl/g, 'rounded-xl');
    content = content.replace(/rounded-2xl/g, 'rounded-xl');
    
    if (original !== content) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated radii in ${filepath}`);
    }
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (/\.(tsx|ts|jsx|js)$/.test(file)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('web/src');
files.forEach(file => processFile(file));
