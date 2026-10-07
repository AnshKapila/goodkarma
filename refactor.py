import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Remove DEV tags (both HTML comments and the div blocks)
    content = re.sub(r'\{\s*/\*\s*DEV TAG\s*\*/\s*\}', '', content)
    content = re.sub(r'<div[^>]*>.*?DEV:.*?</div>', '', content, flags=re.DOTALL)
    # Also remove some stray DEV text or labels
    content = re.sub(r'\{\s*/\*\s*DEV:.*?\*/\s*\}', '', content)

    # 2. Corner radius system
    # Replace heavy corner radii on structural elements with rounded-xl (12px)
    radii_to_replace = [
        'rounded-2xl', 'rounded-3xl', r'rounded-\[2rem\]', r'rounded-\[2\.5rem\]', 
        r'rounded-\[40px\]', r'rounded-\[32px\]', r'rounded-\[24px\]'
    ]
    for r in radii_to_replace:
        content = re.sub(r'\b' + r + r'\b', 'rounded-xl', content)
        
    # Replace rounded-none with rounded-xl (if any)
    content = re.sub(r'\brounded-none\b', 'rounded-xl', content)
    
    # Make sure buttons and badges use rounded-full (mostly already there, but let's check manually later if needed)

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('web/src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
            process_file(os.path.join(root, file))
