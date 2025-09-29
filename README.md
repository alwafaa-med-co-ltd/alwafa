# AL-WAFA'A Medical Co., Ltd - Bilingual Website

A complete responsive bilingual website for AL-WAFA'A MEDICAL CO., LTD with Arabic and English versions.

## 🌟 Features

- **Bilingual Support**: Complete Arabic (RTL) and English (LTR) versions
- **Dynamic Header**: Language-specific slider with 12 images per language
- **Smart Footer**: Automatically changes background and content based on language
- **Special Contact Pages**: No header/footer, only compact topbar navigation
- **Responsive Design**: Optimized for all devices (mobile to desktop)
- **Accessibility**: Full ARIA support, keyboard navigation, screen reader friendly
- **Performance**: Image preloading, lazy loading, and optimized assets

## 📁 Project Structure

```
/project-root
├─ index.html                    # Arabic HOME
├─ about.html                    # Arabic about page
├─ brands.html                   # Arabic brands page  
├─ commitments.html              # Arabic commitments page
├─ conclusion.html               # Arabic conclusion page
├─ contact.html                  # Arabic contact (no header/footer)
├─ management.html               # Arabic management page
├─ position.html                 # Arabic position page
├─ services.html                 # Arabic services page
├─ strategy.html                 # Arabic strategy page
├─ success.html                  # Arabic success page
│
├─ /en/                          # English pages directory
│   ├─ index.html                # English HOME
│   ├─ about.html                # English about page
│   ├─ brands.html               # English brands page
│   ├─ commitments.html          # English commitments page
│   ├─ conclusion.html           # English conclusion page
│   ├─ contact.html              # English contact (no header/footer)
│   ├─ management.html           # English management page
│   ├─ position.html             # English position page
│   ├─ services.html             # English services page
│   ├─ strategy.html             # English strategy page
│   └─ success.html              # English success page
│
├─ /partials/
│   ├─ header.html               # Reusable header partial
│   └─ footer.html               # Reusable footer partial
│
├─ /assets/
│   ├─ /css/
│   │   └─ main.css              # Main stylesheet with responsive variables
│   ├─ /js/
│   │   └─ main.js               # Main JavaScript controller
│   ├─ /images/                  # All website images
│   │   ├─ footerba-ar.webp      # Arabic footer background (1650x700)
│   │   ├─ footerba-en.webp      # English footer background (1650x700)
│   │   ├─ logo.svg              # Arabic logo
│   │   ├─ logo-en.svg           # English logo
│   │   ├─ toplabel-ar.webp      # Arabic desktop top label
│   │   ├─ toplabel-ar-m.webp    # Arabic mobile top label
│   │   ├─ toplabel-en.webp      # English desktop top label
│   │   ├─ toplabel-en-m.webp    # English mobile top label
│   │   ├─ wafa-ar-1.webp ... wafa-ar-12.webp   # Arabic slider images
│   │   ├─ wafa-en-1.webp ... wafa-en-12.webp   # English slider images
│   │   └─ prand-1.webp ... prand-9.webp        # Brand logos
│   └─ /fonts/
│       ├─ YaModernBold.ttf      # Arabic bold font
│       └─ FFShamelFamily2.ttf   # Arabic regular font
│
└─ README.md
```

## 🚀 Quick Start

1. **Upload Images**: Place all required images in `assets/images/` directory
2. **Upload Fonts**: Place the TTF font files in `assets/fonts/` directory
3. **Open in Browser**: Start with `index.html` for Arabic or `en/index.html` for English
4. **Test Functionality**: Verify slider, language switching, and responsive behavior

## 🖼️ Required Images

### Slider Images (24 total)
- **Arabic**: `wafa-ar-1.webp` through `wafa-ar-12.webp`
- **English**: `wafa-en-1.webp` through `wafa-en-12.webp`

### Top Labels (4 total)
- `toplabel-ar.webp` (Arabic desktop)
- `toplabel-ar-m.webp` (Arabic mobile)
- `toplabel-en.webp` (English desktop)
- `toplabel-en-m.webp` (English mobile)

### Footer Backgrounds (2 total)
- `footerba-ar.webp` (1650x700 recommended)
- `footerba-en.webp` (1650x700 recommended)

### Logos (2 total)
- `logo.svg` (Arabic/default)
- `logo-en.svg` (English)

### Brand Images (9 total)
- `prand-1.webp` through `prand-9.webp`

## 🎯 Key Features

### Language Detection
- Automatic detection from `<html lang="">` attribute
- Fallback to `dir` attribute (rtl/ltr)
- Browser language as final fallback

### Header Behavior
- Shows on all pages except contact pages
- Dynamic slider with language-specific images
- Responsive top label switching (desktop/mobile)
- Autoplay with pause on hover/focus
- Keyboard and touch navigation support

### Footer Behavior
- Shows on all pages except contact pages
- Automatic background switching based on language
- Dynamic logo switching
- Clickable phone numbers with `tel:` links
- Clickable email addresses with `mailto:` links

### Contact Pages Special Behavior
- No header or footer displayed
- Compact topbar with back/home/nav icons
- Back button uses `history.back()` with fallback
- Navigation overlay for menu access

## 📱 Responsive Breakpoints

- **≥1650px**: Extra large screens
- **1200-1649px**: Large screens  
- **980-1199px**: Medium screens
- **640-979px**: Small screens
- **<640px**: Mobile screens

## ♿ Accessibility Features

- **ARIA Labels**: Complete ARIA support for all interactive elements
- **Keyboard Navigation**: Full keyboard support for sliders and navigation
- **Screen Readers**: Live regions for dynamic content updates
- **Focus Management**: Clear focus indicators and logical tab order
- **Semantic HTML**: Proper use of headings, landmarks, and roles

## 🔧 Customization

### Adding New Pages
1. Create HTML file with proper language attributes
2. Include header/footer placeholders
3. Add page-specific content
4. Update navigation menus

### Modifying Slider Content
Edit the `headerConfig` object in `assets/js/main.js` to change:
- Slider images
- Top label images
- Label text for each page

### Updating Contact Information
Modify the `footerData` object in `assets/js/main.js` to update:
- Phone numbers
- Email addresses
- Physical address
- Social media links

## 🌐 WordPress Integration

### Using as Static Site
1. Upload all files to your web server
2. Ensure proper MIME types for WebP images
3. Configure server to handle Arabic/RTL content

### WordPress Integration
1. Convert HTML pages to PHP templates
2. Use WordPress functions for dynamic content
3. Implement conditional loading:

```php
<?php if (!is_page('contact')): ?>
  <?php get_template_part('partials/header'); ?>
<?php endif; ?>

<!-- Page content -->

<?php if (!is_page('contact')): ?>
  <?php get_template_part('partials/footer'); ?>
<?php endif; ?>
```

## ⚡ Performance Optimization

- **Critical Resource Preloading**: Hero images, fonts, and key assets
- **Lazy Loading**: Non-critical images load when needed  
- **WebP Format**: Modern image format for smaller file sizes
- **CSS/JS Minification**: Recommended for production
- **CDN Integration**: Consider using CDN for external resources

## 🧪 Testing Checklist

### Arabic Pages (`/`)
- [ ] Header displays with Arabic slides
- [ ] Footer shows Arabic background (`footerba-ar.webp`)
- [ ] RTL layout and text direction
- [ ] Language switch to English works
- [ ] Contact page shows compact topbar only

### English Pages (`/en/`)
- [ ] Header displays with English slides  
- [ ] Footer shows English background (`footerba-en.webp`)
- [ ] LTR layout and text direction
- [ ] Language switch to Arabic works
- [ ] Contact page shows compact topbar only

### Functionality
- [ ] Slider auto-plays and pauses on hover
- [ ] Keyboard navigation works (arrow keys)
- [ ] Touch/swipe navigation works on mobile
- [ ] Phone numbers are clickable (`tel:` links)
- [ ] Email addresses are clickable (`mailto:` links)
- [ ] All pages are responsive across breakpoints

## 📞 Support

For questions about implementation or customization, refer to the code comments or contact the development team.

## 📄 License

© 2025 AL-WAFA'A MEDICAL CO., LTD. All rights reserved.
