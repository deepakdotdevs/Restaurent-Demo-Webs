# Quick Testing Guide - Responsive Mobile Fixes
## Shahi Rasoi Website

### 🎯 Test These Critical Issues on Mobile (320px-480px)

#### 1. Hero Section
**What to check:**
- [ ] Title text is readable and centered (not cut off)
- [ ] Subtitle is visible and properly spaced
- [ ] Two buttons stack vertically with full width
- [ ] No horizontal scrolling
- [ ] Hero takes ~80% viewport height on mobile

**Expected:** Clean, centered content. Buttons below each other.

---

#### 2. Menu Tabs (MOST CRITICAL)
**What to check:**
- [ ] Category buttons (All, Veg, Non-Veg, etc.) scroll horizontally
- [ ] NO layout breaking when scrolling tabs
- [ ] All buttons remain inside container
- [ ] Horizontal scroll doesn't affect rest of page
- [ ] Tabs are touch-friendly (easy to tap)

**Expected:** Smooth horizontal scroll with no overflow issues.

---

#### 3. Form Inputs (Enquiry Section)
**What to check:**
- [ ] All form inputs visible and properly sized
- [ ] Input fields not cut off on edges
- [ ] Input width = 100% of container
- [ ] Single column layout on mobile
- [ ] Spacing between fields is consistent
- [ ] Button is full-width or properly sized

**Expected:** All inputs fit perfectly within viewport.

---

#### 4. Images & Gallery
**What to check:**
- [ ] All images display without distortion
- [ ] Images scale to fit viewport
- [ ] Gallery items display 1-2 columns max on mobile
- [ ] No image bleeding outside container
- [ ] Aspect ratios maintained

**Expected:** Images crisp and properly sized.

---

#### 5. Global Layout
**What to check:**
- [ ] NO horizontal scroll bar at any viewport width
- [ ] Sections have proper padding (not touching edges)
- [ ] All text readable on small screens
- [ ] Footer stacked in single column on mobile
- [ ] Navbar collapses to hamburger menu

**Expected:** Everything fits naturally on screen.

---

### 📱 Breakpoint Testing

**Test at these specific widths:**

| Device | Width | Test |
|--------|-------|------|
| iPhone SE | 375px | Menu tabs scroll, forms single column |
| iPhone 12 | 390px | All buttons readable, proper spacing |
| iPad Mini | 768px | Two-column layouts appear |
| iPad Pro | 1024px | Three-column grids, full layout |
| Desktop | 1440px | Wide gallery spans, full features |

---

### 🔍 Chrome DevTools Testing

1. **Enable Device Toolbar** (Ctrl+Shift+M / Cmd+Shift+M)
2. **Select Device:** 
   - iPhone SE (375x667)
   - iPhone 12 (390x844)
   - iPad (768x1024)
3. **Slow down network:** Throttle to see images loading
4. **Test Orientation:** Portrait & Landscape on each device

---

### ✅ Verification Checklist

**Hero Section:**
- [ ] Content centered vertically
- [ ] Title uses responsive font size
- [ ] Buttons are touch targets (44px+)
- [ ] Padding adjusts with screen size

**Menu Tabs:**
- [ ] Horizontal scroll enabled
- [ ] Tabs stay in row (no wrapping)
- [ ] Scrollbar hidden but functional
- [ ] Active tab indicator works

**Forms:**
- [ ] `width: 100%` on all inputs
- [ ] Single column on mobile (< 768px)
- [ ] Two columns on tablet+ (> 768px)
- [ ] Proper input margins/padding

**Images:**
- [ ] `width: 100%;` applied
- [ ] `height: auto;` for aspect ratio
- [ ] `object-fit: cover;` for scaling
- [ ] No overflow outside containers

**Global:**
- [ ] `max-width: 100vw` prevents overflow
- [ ] `overflow-x: hidden` on html/body
- [ ] All sections have proper padding
- [ ] Responsive fonts with clamp()

---

### 🐛 If Something Breaks

**Horizontal scroll appears?**
→ Check for fixed-width containers or missing `width: 100%`

**Buttons/inputs overlap?**
→ Ensure `box-sizing: border-box` is applied

**Images distorted?**
→ Verify `object-fit: cover` and `object-position: center` are set

**Text too small/large?**
→ Check if `clamp()` values are properly configured

**Menu tabs crashing?**
→ Ensure `overflow-x: auto` and `flexWrap: nowrap` are set

---

### 📊 Performance Check

Use Chrome DevTools → Lighthouse:
1. Run Mobile Performance audit
2. Check Cumulative Layout Shift (CLS) < 0.1
3. Verify First Contentful Paint (FCP) < 3s
4. Ensure no major layout shifts on interaction

---

### 💾 Files to Verify After Testing

- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/app/globals.css`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/components/Hero.tsx`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/components/Menu.tsx`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/components/Enquiry.tsx`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/components/Gallery.tsx`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/components/Navbar.tsx`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/components/Footer.tsx`
- ✅ `d:/Restaurent Demo Web/shahi-rasoi-nextjs/shahi-rasoi/app/layout.tsx`

---

### 🚀 Next Steps

1. Start dev server: `npm run dev`
2. Open DevTools (F12)
3. Enable mobile view (Ctrl+Shift+M)
4. Test each breakpoint
5. Verify no console errors
6. Check each section above

**Expected Result:** Pixel-perfect responsive design from 320px to 4K! 🎯

