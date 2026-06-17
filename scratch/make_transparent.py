import os
from PIL import Image, ImageOps, ImageDraw

def make_transparent_by_keying(image_path, output_path, threshold=240):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # item is (r, g, b, a)
        # If the pixel is very close to white, make it transparent
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Auto-crop transparent boundaries
    # Find bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved keyed transparent image to {output_path}")

def make_circular_transparent(image_path, output_path, padding=5):
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    
    # We want to find the circle. Let's find the bounding box of non-white pixels
    # Or we can scan from edges to find where the non-white circle starts.
    # Alternatively, since the logo is circular and centered, we can create a circular mask.
    # Let's find the circular boundary:
    # Scan from top down, bottom up, left to right, right to left for first non-white pixel.
    threshold = 240
    
    top = 0
    for y in range(height):
        row_has_content = False
        for x in range(width):
            pixel = img.getpixel((x, y))
            if not (pixel[0] >= threshold and pixel[1] >= threshold and pixel[2] >= threshold):
                row_has_content = True
                break
        if row_has_content:
            top = y
            break
            
    bottom = height - 1
    for y in range(height - 1, -1, -1):
        row_has_content = False
        for x in range(width):
            pixel = img.getpixel((x, y))
            if not (pixel[0] >= threshold and pixel[1] >= threshold and pixel[2] >= threshold):
                row_has_content = True
                break
        if row_has_content:
            bottom = y
            break
            
    left = 0
    for x in range(width):
        col_has_content = False
        for y in range(height):
            pixel = img.getpixel((x, y))
            if not (pixel[0] >= threshold and pixel[1] >= threshold and pixel[2] >= threshold):
                col_has_content = True
                break
        if col_has_content:
            left = x
            break
            
    right = width - 1
    for x in range(width - 1, -1, -1):
        col_has_content = False
        for y in range(height):
            pixel = img.getpixel((x, y))
            if not (pixel[0] >= threshold and pixel[1] >= threshold and pixel[2] >= threshold):
                col_has_content = True
                break
        if col_has_content:
            right = x
            break
            
    print(f"Detected circle boundaries: left={left}, top={top}, right={right}, bottom={bottom}")
    
    # Let's crop to this box
    cropped = img.crop((left - padding, top - padding, right + padding, bottom + padding))
    w, h = cropped.size
    
    # Create circular mask
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((padding, padding, w - padding, h - padding), fill=255)
    
    # Create output image with transparency
    output = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    output.paste(cropped, (0, 0), mask=mask)
    
    # Optional: also remove any remaining white background in the outer corners (the mask already did this, but let's crop to content)
    output.save(output_path, "PNG")
    print(f"Saved circular transparent image to {output_path}")

if __name__ == "__main__":
    os.makedirs("public/images", exist_ok=True)
    
    # 1. Vericea
    make_transparent_by_keying("public/images/Vericea.jpeg", "public/images/Vericea.png", threshold=245)
    
    # 2. FactSafe
    make_transparent_by_keying("public/images/Fact_safe.jpeg", "public/images/Fact_safe.png", threshold=245)
    
    # 3. Courier Cost Optimizer
    make_circular_transparent("public/images/Courier Cost Optimizer.jpeg", "public/images/Courier Cost Optimizer.png")
