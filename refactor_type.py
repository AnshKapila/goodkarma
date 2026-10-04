import os
import re

directory = "web/src/app"

def strip_text_classes(class_str):
    classes = class_str.split()
    new_classes = []
    for c in classes:
        # Ignore arbitrary tailwind font sizes and leading utilities
        if re.match(r'^(sm:|md:|lg:|xl:)?text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|h1|h2|h3|p1|p2|p3)$', c):
            continue
        if re.match(r'^(sm:|md:|lg:|xl:)?leading-[a-zA-Z0-9\[\]\.-]+$', c):
            continue
        new_classes.append(c)
    return " ".join(new_classes)

def process_match(match):
    tag = match.group(1)
    prefix = match.group(2)
    classes_str = match.group(3)
    suffix = match.group(4)
    
    clean_classes = strip_text_classes(classes_str)
    
    token = ""
    if tag == "h1":
        token = "text-h1"
    elif tag == "h2":
        token = "text-h2"
    elif tag == "h3":
        token = "text-h3"
    elif tag == "p":
        if "text-lg" in classes_str or "text-xl" in classes_str or "text-2xl" in classes_str:
            token = "text-p1"
        elif "text-sm" in classes_str or "text-xs" in classes_str:
            token = "text-p3"
        else:
            token = "text-p2"
            
    # Combine
    if token:
        clean_classes = f"{token} {clean_classes}".strip()
        
    return f"<{tag}{prefix}className=\"{clean_classes}\"{suffix}"

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".tsx"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
                
            # Replace classNames in h1, h2, h3, p
            new_content = re.sub(r'<(h1|h2|h3|p)([^>]*?)className="([^"]*)"([^>]*)', process_match, content)
            
            # Replace unsplash product image with PLACEHOLDER_product.jpg
            # Only where it's currently an unsplash image for products
            # In products/page.tsx:
            new_content = re.sub(r'img: "https://images\.unsplash\.com/[^"]+"', 'img: "/PLACEHOLDER_product.jpg"', new_content)
            
            if content != new_content:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {path}")
