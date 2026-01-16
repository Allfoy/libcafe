
# TA & Peer Feedback Implementation

## HTML Changes
- Improved alt text descriptions for accessibility
- Renamed form IDs: formAdd → Add, formUp → Up` (removed redundancy, -1pt fix)
- Replaced `<picture>` element with `<div class="ad-image"></div>` (removed CSS in HTML, -2pt fix)

## JavaScript Changes
- Updated image alt text to "promotional poster" for dynamic content

## CSS Changes

### Font Size Fixes (Mobile Readability)
- Replaced all vw font units with clamp() for responsive and readable text
- Applied to captions, table text, navigation, headings, forms, placeholders

### Color Contrast
- Adjusted visited link color: `hsl(339, 80%, 40%)` → `hsl(339, 80%, 50%)` for WCAG compliance

### Mobile Layout
- Reduced description column padding: `11%` → `2%` (better space utilization)
- Changed `dd` from `display: none` to `display: inline`
- Maintained desktop padding at `8%` for readability

### Advertisement Handling
- Moved responsive image logic from HTML to CSS
- Ad has been made static for complicance of standards

### Print Styles
- Hidden navigation in print output (-1pt fix)
- Hidden forms in print output via `tfoot { display: none; }` (-1pt fix)
- Changed `page-break-after: always` → `auto` to eliminate blank page (-1pt fix)
