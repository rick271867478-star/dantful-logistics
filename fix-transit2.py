"""
Second pass: fix remaining bracketed placeholders in tables
"""
import os

ROOT = r"C:\Users\rick\WorkBuddy\2026-09-01-17-44-25\freight-site-v2\src"

RULES = [
    # === china-to-usa tables ===
    ("[14-18]", "18-25"),
    ("[18-22]", "22-28"),
    ("[19-24]", "22-28"),
    ("[30-36]", "35-42"),

    # === china-to-canada tables ===
    ("[14-18]", "18-25"),
    ("[18-24]", "24-30"),
    ("[22-30]", "24-30"),
    ("[19-26]", "22-28"),
    ("[28-34]", "32-40"),

    # === china-to-uk tables ===
    ("[28-32]", "30-38"),
    ("[30-35]", "32-40"),
    ("[35-42]", "40-48"),
    ("[37-45]", "42-50"),
    ("[38-45]", "40-48"),

    # === china-to-australia tables ===
    ("[18-24]", "20-26"),
    ("[22-28]", "24-30"),
    ("[20-26]", "24-30"),
    ("[26-32]", "30-38"),
    ("[5-9 days]", "5-9 days"),
    ("[5-9]", "5-9"),
    ("[7-12]", "7-12 days"),

    # === china-to-singapore tables ===
    ("[7-10]", "7-10"),
    ("[10-14]", "10-14"),
    ("[7-11]", "7-11"),
    ("[10-15]", "10-15"),
    ("[5-8]", "5-8"),
    ("[8-12]", "8-12"),
    ("[10-14]", "10-14"),
    ("[13-18]", "13-18"),
    ("[12-16]", "12-16"),

    # === fcl-vs-lcl remaining ===
    ("[32-40] days", "32-40 days"),
    ("[30-38] days", "32-40 days"),
    ("[36-44] days", "38-46 days"),
    ("[28-35] days", "30-38 days"),
    ("[34-42] days", "36-44 days"),
    ("[24-32] days", "26-34 days"),
    ("[12-18] days", "12-18 days"),
    ("[18-26] days", "20-28 days"),

    # === customs-clearance ===
    ("[4 hours]", "4 hours"),
    ("[4-8h]", "4-8 hours"),

    # === ocean-freight ===
    ("[30-36]", "35-42"),
    ("[34-42]", "38-46"),
    ("[18-26]", "20-28"),

    # === FBA china-to-usa ===
    ("[25-35 days]", "25-35 days"),
    ("[7-12 days]", "7-12 days"),
    ("[22-28]", "22-28"),
    ("[7-10]", "7-10"),
    ("[28-35]", "28-35"),
    ("[8-12]", "8-12"),
    ("[25-32]", "25-32"),
    ("[7-11]", "7-11"),
    ("[30-38]", "30-38"),
    ("[9-13]", "9-13"),
    ("[24-30]", "24-30"),
    ("[3-6]", "3-6"),

    # === Minimum CBM ===
    ("[1 CBM]", "1 CBM"),
]


def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in RULES:
        content = content.replace(old, new)
    
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False


def main():
    changed = []
    for root, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in ('node_modules', 'dist', '.astro')]
        for fname in files:
            if not fname.endswith(('.astro', '.ts')):
                continue
            fpath = os.path.join(root, fname)
            if process_file(fpath):
                changed.append(os.path.relpath(fpath, ROOT))
    
    print(f"Round 2: Changed {len(changed)} files:")
    for f in changed:
        print(f"  ✓ {f}")


if __name__ == '__main__':
    main()
