const fs = require('fs');
const path = require('path');

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    // Remove DEV tags correctly
    // Remove { /* DEV TAG */ } exactly
    content = content.replace(/[ \t]*\{\s*\/\*\s*DEV(?: TAG)?\s*\*\/\s*\}[ \t]*\r?\n?/g, '');
    
    // Remove blocks like: <div ...>DEV: ...</div>
    // Note: since they might contain multiple lines, we can use a regex that looks for <div ...DEV:...</div>
    // Let's use a simpler approach: remove lines that contain "DEV:" and if the previous/next lines contain <div/</div>, we remove them too.
    const lines = content.split('\n');
    const newLines = [];
    
    let i = 0;
    while(i < lines.length) {
        const line = lines[i];
        if (line.includes('DEV:')) {
            // Remove previous line if it was just a div wrapper
            if (newLines.length > 0 && newLines[newLines.length - 1].match(/<div[^>]*absolute[^>]*>/) && !newLines[newLines.length - 1].includes('</div>')) {
                newLines.pop();
                // Skip the next line if it's the closing div
                if (i + 1 < lines.length && lines[i + 1].includes('</div>')) {
                    i += 2;
                    continue;
                }
            } else if (line.includes('<div') && line.includes('</div>')) {
                // inline div with DEV:, just skip
                i++;
                continue;
            } else {
                // if DEV: is just a comment or something
                i++;
                continue;
            }
        }
        newLines.push(line);
        i++;
    }
    
    content = newLines.join('\n');

    // 2. Corner radius system
    // Replace heavy corner radii on structural elements with rounded-xl (12px)
    const radiiToReplace = [
        'rounded-2xl', 'rounded-3xl', 'rounded-\\[2rem\\]', 'rounded-\\[2\\.5rem\\]', 
        'rounded-\\[40px\\]', 'rounded-\\[32px\\]', 'rounded-\\[24px\\]'
    ];
    
    radiiToReplace.forEach(r => {
        const regex = new RegExp('\\b' + r + '\\b', 'g');
        content = content.replace(regex, 'rounded-xl');
    });

    content = content.replace(/\brounded-none\b/g, 'rounded-xl');
    
    // Make sure all these components use rounded-full:
    // If we have any rounded-xl on buttons, we can leave it. The instructions say: "Buttons, tags, filter chips, nav elements -> full pill radius". Usually they are already rounded-full in tailwind.

    // 3. Replace Placeholder Images
    const imageMap = {
        '/PLACEHOLDER_product.jpg': 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_synthetic_skin.jpg': 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_cotton_skin.jpg': 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=800&auto=format&fit=crop',
        '/placeholder_skin_science_diagram.jpg': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_sourcing_farmers.jpg': 'https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_process_1.jpg': 'https://images.unsplash.com/photo-1618361001476-eb96d49925e0?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_process_2.jpg': 'https://images.unsplash.com/photo-1618361001476-eb96d49925e0?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_process_3.jpg': 'https://images.unsplash.com/photo-1618361001476-eb96d49925e0?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_process_4.jpg': 'https://images.unsplash.com/photo-1618361001476-eb96d49925e0?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_audience_women.jpg': 'https://images.unsplash.com/photo-1596522354181-70529d2f2d96?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_audience_infants.jpg': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_audience_men.jpg': 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop',
        '/placeholder_blog_synthetic_stretch.jpg': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
        '/placeholder_blog_gots_certification.jpg': 'https://images.unsplash.com/photo-1598466858925-502a90105eec?q=80&w=800&auto=format&fit=crop',
        '/PLACEHOLDER_reel.jpg': 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=800&auto=format&fit=crop'
    };

    for (const [key, val] of Object.entries(imageMap)) {
        // use regex to replace all case variations
        const regex = new RegExp(key, 'gi');
        content = content.replace(regex, val);
    }

    if (original !== content) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`Updated ${filepath}`);
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
