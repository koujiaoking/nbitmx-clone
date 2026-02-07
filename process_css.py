
import re
import os

input_path = '/Users/ls/codedev/liushuo/nbitmx-clone/src/views/nbitmx.com/mobile/index.css'
output_path = '/Users/ls/codedev/liushuo/nbitmx-clone/src/assets/css/mobile-index.css'

with open(input_path, 'r') as f:
    content = f.read()

# Remove [data-v-...]
content = re.sub(r'\[data-v-[a-z0-9]+\]', '', content)

# Fix asset paths
# Original: /assets/filename-HASH.ext or /assets/filename.ext
# Target: @/assets/images/filename.ext
# We need to be careful with the hash removal. 
# The regex should find /assets/ and capture the filename, optionally removing the hash.

def replace_asset(match):
    full_match = match.group(0) # e.g. url(/assets/bg1-oRY_bVzD.png)
    # Extract path inside url(...)
    path_match = re.search(r'url\((.*?)\)', full_match)
    if path_match:
        url = path_match.group(1).strip('\'"')
        if url.startswith('/assets/'):
            filename = url.replace('/assets/', '')
            # Remove hash if present: name-HASH.ext -> name.ext
            # Hash seems to be -[a-zA-Z0-9_]+ before extension
            # But wait, I downloaded them with new names?
            # I used "curl -o src/assets/images/mobile-Strategy-2.png https://nbitmx.com/assets/mobile-Strategy-2-CX6YHAmN.png"
            # So I renamed them manually in the download.
            # I need to map the ORIGINAL names (with hashes) to the NEW names (without hashes).
            
            # Map of renamed files from my previous step:
            # mobile-Strategy-2-CX6YHAmN.png -> mobile-Strategy-2.png
            # img008-DGKVmDxD.png -> img008.png
            # img005-3sGTYIlD.png -> img005.png
            # ai-bg3-Dax8nZUf.png -> ai-bg3.png
            # home-icon1-Cga8uWnD.svg -> home-icon1.svg
            # home-icon4-C3MJvSge.svg -> home-icon4.svg
            # nft-logo-CxWGmblF.png -> nft-logo.png
            # home-icon5-Cr9JwbfX.svg -> home-icon5.svg
            # partner-3-b6OXgqG0.svg -> partner-3.svg
            # home-icon2-C2Am2Fnt.svg -> home-icon2.svg
            # bg1-oRY_bVzD.png -> bg1.png
            # nft-bg1-Cb3BGXz8.png -> nft-bg1.png
            
            # Also existing ones might have hashes in CSS but I need to see if they are in my folder.
            # For simplicity, I will attempt to remove the hash part via regex.
            # Hash pattern: -[a-zA-Z0-9_-]{8} (approx)
            
            name_parts = os.path.splitext(filename)
            base = name_parts[0]
            ext = name_parts[1]
            
            # Try to remove hash at the end of base
            # Example: mobile-Strategy-1-BcbZuS5- 
            # It seems hash is separated by last dash?
            
            clean_base = re.sub(r'-[a-zA-Z0-9_]+$', '', base)
            
            # Special cases where my manual mapping might differ or hash structure is weird?
            # Let's just fix the specific ones we know.
            
            # Check known downloads
            if 'mobile-Strategy-2' in base: clean_base = 'mobile-Strategy-2'
            elif 'img008' in base: clean_base = 'img008'
            elif 'img005' in base: clean_base = 'img005'
            elif 'ai-bg3' in base: clean_base = 'ai-bg3'
            elif 'home-icon1' in base: clean_base = 'home-icon1'
            elif 'home-icon4' in base: clean_base = 'home-icon4'
            elif 'nft-logo' in base: clean_base = 'nft-logo'
            elif 'home-icon5' in base: clean_base = 'home-icon5'
            elif 'partner-3' in base: clean_base = 'partner-3'
            elif 'home-icon2' in base: clean_base = 'home-icon2'
            elif 'bg1' in base and 'ai' not in base and 'nft' not in base: clean_base = 'bg1'
            elif 'nft-bg1' in base: clean_base = 'nft-bg1'
            
            # Existing ones that might need hash removal
            # trends-btn-D7rmkEl_.png -> trends-btn.png
            elif 'trends-btn' in base: clean_base = 'trends-btn'
            # charity-bg-DnuQENdi.png -> charity-bg.png
            elif 'charity-bg' in base and 'bg1' not in base: clean_base = 'charity-bg'
             # charity-bg1-D30C4H0n.png -> charity-bg1.png
            elif 'charity-bg1' in base: clean_base = 'charity-bg1'
            # border-BWz2L3Pm.png -> border-bg.png (Wait, I saw border-bg.png in ls, but CSS has border-...)
            # I should verify what I have. ls showed `border-bg.png`. 
            # CSS has `url(/assets/border-BWz2L3Pm.png)`
            # I'll check if I need to rename or if it's a different file.
            # Assuming standard de-hashing: `border.png`? 
            # `ls` output: `border-bg.png`
            # Let's map `border-BWz2L3Pm.png` to `border-bg.png` if it looks like it? Or just `border.png` and I need to rename `border-bg.png`?
            # Actually I'll just map it to what I think it is. I'll check later.
            elif 'border-' in base: clean_base = 'border-bg' # tentative
            
            elif 'nft-bg-' in base: clean_base = 'nft-bg'
            elif 'icon-follow' in base: clean_base = 'icon-follow'
            elif 'ai-bg1' in base: clean_base = 'ai-bg1'
            elif 'ai-bg2' in base: clean_base = 'ai-bg2'
            
            # The URL replacement
            return f'url(@/assets/images/{clean_base}{ext})'
            
    return full_match

content = re.sub(r'url\(/assets/[^)]+\)', replace_asset, content)

# Ensure directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, 'w') as f:
    f.write(content)

print("CSS cleaned and saved.")
