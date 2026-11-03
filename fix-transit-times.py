"""
Bulk transit time fix — all files in freight-site-v2/src
Run from project root: python fix-transit-times.py
"""
import os
import re
import pathlib

ROOT = r"C:\Users\rick\WorkBuddy\2026-09-01-17-44-25\freight-site-v2\src"

# === REPLACEMENT RULES ===
# Each tuple: (old_text, new_text)
# Order matters — do longer strings first

REPLACEMENTS = [
    # === DOUBLE "from" TYPO ===
    ("from from", "from"),

    # === REMOVE ALL BRACKETS (placeholders) ===
    ("[14-20 days]", "18-25 days"),
    ("[14-20]", "18-25"),
    ("[15-20]", "18-25"),
    ("[15-20 days]", "18-25 days"),
    ("[16-22 days]", "20-28 days"),
    ("[16-22]", "20-28"),
    ("[18-24 days]", "18-26 days"),
    ("[18-26 days]", "18-26 days"),
    ("[20-28]", "24-32"),
    ("[22-30 days]", "28-35 days"),
    ("[26-32] days", "28-35 days"),
    ("[28-33]", "30-38"),
    ("[28-35 days]", "30-38 days"),
    ("[28-40 days]", "30-38 days"),
    ("[20-28 days]", "20-28 days"),
    ("[3-5]", "3-5"),
    ("[3-7 days]", "3-7 days"),
    ("[33-40]", "38-45"),
    ("[33-45 days]", "38-48 days"),
    ("[35-45 days]", "38-48 days"),
    ("[5-10]", "6-10 days"),
    ("[7-12] days", "7-14 days"),
    ("[7-14 days]", "7-14 days"),
    ("[10-18 days]", "10-18 days"),
    ("[12-15 days]", "12-15 days"),
    ("[18-25 days]", "18-25 days"),
    ("[3-5 days]", "3-5 days"),
    ("[2-4 days]", "2-4 days"),
    ("[1-3 days]", "1-3 days"),

    # === SEA PORT-TO-PORT TRANSIT TIMES ===
    
    # US West Coast
    ("Sea FCL from Shenzhen Yantian to Los Angeles takes 14 to 18 days port-to-port", 
     "Sea FCL from Shenzhen Yantian to Los Angeles takes 18 to 25 days port-to-port"),
    ("Sea FCL from Shenzhen or Shanghai to Los Angeles takes 14 to 18 days port-to-port", 
     "Sea FCL from Shenzhen or Shanghai to Los Angeles takes 18 to 25 days port-to-port"),
    ("14 to 20 days port-to-port", "18 to 25 days port-to-port"),
    ("14-20 days port-to-port", "18-25 days port-to-port"),
    ("14-20 days from", "18-25 days from"),
    ("14-20 days. Air freight", "18-25 days. Air freight"),
    ("14-18 days port-to-port", "18-25 days port-to-port"),
    ("14-18 days door-to-door", "18-25 days door-to-port"),
    
    # US East Coast
    ("22 to 30 days", "28 to 35 days"),
    ("22-30 days", "28-35 days"),
    ("26-32 days via Panama", "28-35 days via Panama"),
    ("26-32 days", "28-35 days"),
    ("25-30 days", "30-38 days"),

    # Canada (Vancouver)
    ("16-22 days", "20-28 days"),
    ("16 to 22 days", "20 to 28 days"),
    
    # UK
    ("28-35 days port-to-port", "30-38 days port-to-port"),
    ("28-35 days.", "30-38 days."),
    ("28-35 days,", "30-38 days,"),
    ("28-40 days", "30-38 days"),
    
    # Europe (Rotterdam/Hamburg)
    ("30-38 days port-to-port", "32-40 days port-to-port"),
    ("30-38 days.", "32-40 days."),
    ("30-38 days,", "32-40 days,"),
    ("30-38 days", "32-40 days"),
    ("32-40 days", "34-42 days"),
    
    # Australia
    ("16-20 days", "18-26 days"),
    ("18-22 days", "20-28 days"),
    ("18-24 days", "20-26 days"),
    ("18-26 days", "20-26 days"),

    # South America
    ("38-42 days", "40-48 days"),
    ("40-45 days", "42-50 days"),

    # Middle East
    ("18-22 days", "20-25 days"),
    ("22-26 days", "24-30 days"),

    # Africa
    ("28-32 days", "30-36 days"),

    # Russia/Vladivostok
    ("10-14 days", "12-16 days"),
    ("12-15 days", "14-18 days"),

    # === DOOR-TO-DOOR ===
    ("18-22 days door-to-door", "22-30 days door-to-door"),
    ("18-25 days door-to-door", "22-30 days door-to-door"),
    ("26 to 33 days", "32 to 40 days"),
    ("26-33 days", "32-40 days"),
    
    # FBA-specific
    ("14-18 days.", "18-25 days."),
    ("20-25 days.", "25-35 days."),
    ("22-25 days at a fraction", "25-35 days at a fraction"),
    ("22-30 days", "25-35 days"),
    ("22-35 days", "25-35 days"),
    ("25 days. Then trucking", "18-25 days. Then trucking"),
]


def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False


def main():
    changed_files = []
    skip_files = {'fix-transit-times.py', 'transit-plan.md'}
    
    for root, dirs, files in os.walk(ROOT):
        # Skip node_modules, dist
        dirs[:] = [d for d in dirs if d not in ('node_modules', 'dist', '.astro')]
        
        for fname in files:
            if fname in skip_files:
                continue
            if not fname.endswith(('.astro', '.ts', '.tsx', '.js', '.md')):
                continue
            
            fpath = os.path.join(root, fname)
            if process_file(fpath):
                rel = os.path.relpath(fpath, ROOT)
                changed_files.append(rel)
    
    print(f"Changed {len(changed_files)} files:")
    for f in changed_files:
        print(f"  ✓ {f}")


if __name__ == '__main__':
    main()
