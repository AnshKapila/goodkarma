const fs = require('fs');

const path = 'web/src/app/products/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace Infant Bodysuit with Little Ones Bodysuit
content = content.replace(
  'name: "Infant Bodysuit"',
  'name: "Little Ones Bodysuit"'
);

// Add Concern Filter Chips below the header
const filterChips = `        {/* Concern Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none animate-in fade-in duration-1000 delay-200">
          {["All Collection", "Daily Comfort", "New Mothers", "Fertility & Wellness", "Little Ones"].map((cat, i) => (
            <button 
              key={cat} 
              className={\`rounded-full px-5 py-2.5 text-sm font-medium transition-all whitespace-nowrap \${
                i === 0 
                  ? "bg-ink text-white shadow-sm" 
                  : "bg-paper text-ink/80 hover:bg-ink/10 border border-border/50"
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}`;

content = content.replace('{/* Product Grid */}', filterChips);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully updated products page with concern filter pills');
