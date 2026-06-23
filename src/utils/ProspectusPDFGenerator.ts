/**
 * ProspectusPDFGenerator.ts
 * 
 * Generates a premium 2-page A4 Partnership Prospectus PDF using jsPDF
 * direct vector rendering with embedded images (logo, products, maps).
 * 
 * Design: Obsidian Navy + Enterprise Gold — exact live webpage layout.
 * Layout: 90–95% page utilization across exactly 2 pages.
 */

import { jsPDF } from 'jspdf';

// ─── DESIGN SYSTEM ─────────────────────────────────────────────────────────────

const C = {
  obsidian:     [11, 17, 31]   as [number, number, number],
  deepNavy:     [15, 23, 42]   as [number, number, number],
  card:         [22, 30, 50]   as [number, number, number],
  cardLight:    [28, 38, 60]   as [number, number, number],
  cardAlt:      [18, 26, 44]   as [number, number, number],
  panelDark:    [13, 21, 38]   as [number, number, number],

  gold:         [56, 189, 248] as [number, number, number],
  brightGold:   [56, 189, 248]  as [number, number, number],
  blue:         [56, 189, 248] as [number, number, number],
  silverBlue:   [111, 137, 168] as [number, number, number],
  teal:         [16, 185, 129] as [number, number, number],

  white:        [255, 255, 255] as [number, number, number],
  muted:        [148, 163, 184] as [number, number, number],
  dim:          [100, 116, 139] as [number, number, number],
  faintText:    [74, 90, 115]  as [number, number, number],

  divider:      [38, 50, 71]   as [number, number, number],
};

const PG = { w: 210, h: 297, mx: 12, my: 4, cw: 186 };

// ─── IMAGE LOADING ─────────────────────────────────────────────────────────────

interface PDFImages {
  logo: string | null;
  products: (string | null)[];
  indiaMap: string | null;
  worldMap: string | null;
  heroEcosystem: string | null;
}

/** Load a regular image (jpg/png) from a URL path into a data URL */
function loadImage(src: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) { resolve(null); return; }
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch { resolve(null); }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

/** Capture an SVG element from the DOM by ID and render it to a data URL */
function captureSvg(svgId: string, width: number, height: number): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const svgEl = document.getElementById(svgId) as SVGSVGElement | null;
      if (!svgEl) { resolve(null); return; }

      // Clone the SVG so we don't modify the live DOM
      const clone = svgEl.cloneNode(true) as SVGSVGElement;
      
      // Set explicit dimensions for rendering
      clone.setAttribute('width', String(width));
      clone.setAttribute('height', String(height));
      
      // Remove CSS animations/transitions that won't render in canvas
      clone.querySelectorAll('*').forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.style) {
          htmlEl.style.transition = 'none';
          htmlEl.style.animation = 'none';
        }
      });

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clone);
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const scale = 2.5; // High resolution map/vector capture
          canvas.width = width * scale;
          canvas.height = height * scale;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(url);
            resolve(null);
            return;
          }
          ctx.scale(scale, scale);
          ctx.drawImage(img, 0, 0, width, height);
          URL.revokeObjectURL(url);
          resolve(canvas.toDataURL('image/png'));
        } catch (err) {
          console.error(`Failed to export SVG "${svgId}" to canvas:`, err);
          URL.revokeObjectURL(url);
          resolve(null);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    } catch { resolve(null); }
  });
}

/** Load all images needed for the PDF */
async function loadAllImages(): Promise<PDFImages> {
  const [logo, p1, p2, p3, p4, indiaMap, worldMap, heroEcosystem] = await Promise.all([
    loadImage('/images/logo.png'),
    loadImage('/images/flagship_manufacturing.jpg'),
    loadImage('/images/flagship_courier.jpg'),
    loadImage('/images/flagship_compliance.jpg'),
    loadImage('/images/flagship_factsafe.jpg'),
    captureSvg('pdf-india-map', 612, 696),
    captureSvg('pdf-world-map', 784, 458),
    captureSvg('pdf-hero-ecosystem', 460, 460),
  ]);

  return { logo, products: [p1, p2, p3, p4], indiaMap, worldMap, heroEcosystem };
}

// ─── DRAWING PRIMITIVES ────────────────────────────────────────────────────────

function fill(d: jsPDF, c: [number, number, number]) { d.setFillColor(c[0], c[1], c[2]); }
function ink(d: jsPDF, c: [number, number, number])  { d.setTextColor(c[0], c[1], c[2]); }
function pen(d: jsPDF, c: [number, number, number])  { d.setDrawColor(c[0], c[1], c[2]); }

function rect(d: jsPDF, x: number, y: number, w: number, h: number, c: [number, number, number], r = 0) {
  fill(d, c); r > 0 ? d.roundedRect(x, y, w, h, r, r, 'F') : d.rect(x, y, w, h, 'F');
}

function line(d: jsPDF, x1: number, y1: number, x2: number, y2: number, c: [number, number, number], w = 0.3) {
  pen(d, c); d.setLineWidth(w); d.line(x1, y1, x2, y2);
}

function txt(d: jsPDF, t: string, x: number, y: number, o: {
  s?: number; c?: [number, number, number]; b?: boolean; a?: 'left' | 'center' | 'right'; mw?: number;
} = {}) {
  const { s = 10, c = C.white, b = false, a = 'left', mw } = o;
  d.setFontSize(s); d.setFont('helvetica', b ? 'bold' : 'normal'); ink(d, c);
  mw ? d.text(t, x, y, { maxWidth: mw, align: a }) : d.text(t, x, y, { align: a });
}

function wrap(d: jsPDF, t: string, x: number, y: number, mw: number, o: {
  s?: number; c?: [number, number, number]; b?: boolean; lh?: number;
} = {}): number {
  const { s = 9, c = C.muted, b = false, lh = 3.8 } = o;
  d.setFontSize(s); d.setFont('helvetica', b ? 'bold' : 'normal'); ink(d, c);
  const lines = d.splitTextToSize(t, mw);
  d.text(lines, x, y);
  return y + lines.length * lh;
}

function badge(d: jsPDF, t: string, x: number, y: number, bg: [number, number, number], tc: [number, number, number], fs = 5.5) {
  d.setFontSize(fs); d.setFont('helvetica', 'bold');
  const tw = d.getTextWidth(t);
  const px = 2.0, py = 1.2;
  const bw = tw + px * 2, bh = fs * 0.35 + py * 2;
  rect(d, x, y - bh + 1.0, bw, bh, bg, 1.0);
  ink(d, tc); d.text(t, x + px, y);
  return bw;
}

function check(d: jsPDF, x: number, y: number, c: [number, number, number] = C.blue) {
  fill(d, c); d.circle(x, y, 1.2, 'F');
  pen(d, C.obsidian); d.setLineWidth(0.3);
  d.line(x - 0.5, y, x - 0.1, y + 0.4);
  d.line(x - 0.1, y + 0.4, x + 0.5, y - 0.3);
}

function sectionLabel(d: jsPDF, label: string, x: number, y: number, lineEndX: number) {
  txt(d, label, x, y, { s: 6.2, c: C.gold, b: true });
  d.setFontSize(6.2); d.setFont('helvetica', 'bold');
  const labelW = d.getTextWidth(label);
  line(d, x + labelW + 3, y - 1.0, lineEndX, y - 1.0, C.divider, 0.25);
}

function borderedCard(d: jsPDF, x: number, y: number, w: number, h: number, bg = C.card, r = 2.0) {
  rect(d, x, y, w, h, bg, r);
  pen(d, C.divider); d.setLineWidth(0.25); d.roundedRect(x, y, w, h, r, r, 'S');
}

/** Safely add an image to the PDF, returns true if added */
function addImg(d: jsPDF, dataUrl: string | null, x: number, y: number, w: number, h: number): boolean {
  if (!dataUrl) return false;
  try {
    d.addImage(dataUrl, 'PNG', x, y, w, h);
    return true;
  } catch {
    return false;
  }
}

function drawHeader(doc: jsPDF, title: string, logo: string | null) {
  const mx = PG.mx;
  const right = PG.w - mx;

  rect(doc, 0, 0, PG.w, 12, C.deepNavy);
  line(doc, 0, 12, PG.w, 12, C.gold, 0.5);

  if (logo) {
    addImg(doc, logo, mx, 2, 8, 8);
    txt(doc, 'CEA INFOTECH', mx + 10, 7.5, { s: 9, c: C.white, b: true });
    txt(doc, 'PRIVATE LIMITED', mx + 38, 7.5, { s: 5.5, c: C.muted });
  } else {
    txt(doc, 'CEA INFOTECH', mx, 7.5, { s: 10, c: C.white, b: true });
    txt(doc, 'PRIVATE LIMITED', mx + 30, 7.5, { s: 5.5, c: C.muted });
  }
  txt(doc, title, right, 7.2, { s: 7.5, c: C.gold, b: true, a: 'right' });
  txt(doc, 'Co-Investment JV — Confidential', right, 10.2, { s: 5, c: C.dim, a: 'right' });
}

function drawFooter(doc: jsPDF, pageNum: number) {
  const mx = PG.mx;
  const right = PG.w - mx;

  line(doc, mx, PG.h - 6, right, PG.h - 6, C.gold, 0.3);
  txt(doc, 'CEA Infotech Pvt. Ltd. — Confidential Partnership Prospectus', mx, PG.h - 3.5, { s: 4.8, c: C.dim });
  txt(doc, `Page ${pageNum} of 2`, right, PG.h - 3.5, { s: 4.8, c: C.dim, a: 'right' });
}

// ─── PAGE 1: HERO, PORTFOLIO, BENEFITS & BUSINESS MODELS ───────────────────────

function drawPage1(doc: jsPDF, imgs: PDFImages) {
  const mx = PG.mx;
  const cw = PG.cw;
  const right = PG.w - mx;

  rect(doc, 0, 0, PG.w, PG.h, C.obsidian);
  drawHeader(doc, 'CEA PARTNERSHIP PROSPECTUS', imgs.logo);

  let y = 15;

  // Hero Container (height = 46mm)
  const heroH = 46;
  rect(doc, mx - 1, y, cw + 2, heroH, C.panelDark, 2.5);
  const hp = mx + 5;
  const hw = cw - 10;

  badge(doc, 'CO-INVESTMENT JOINT VENTURE', hp, y + 4.5, C.card, C.gold, 4.8);
  txt(doc, 'We Built The Software.', hp, y + 13.5, { s: 15, c: C.white, b: true });
  txt(doc, 'You Build The Empire.', hp, y + 20, { s: 15, c: C.gold, b: true });

  const vpText = 'A co-investment joint venture for entrepreneurs, consultants, sales organizations, and growth partners. Leverage ready-to-market software packages to capitalize on industrial clusters.';
  wrap(doc, vpText, hp, y + 25.5, hw * 0.58, { s: 6.8, c: C.muted, lh: 2.8 });

  // Programmatic Vector representation of interactive software ecosystem
  const cx = mx + 153;
  const cy = y + 23;
  
  // Draw Orbit Ring
  pen(doc, C.divider); doc.setLineWidth(0.3);
  doc.circle(cx, cy, 14, 'S');
  
  // Draw gold connection lines
  line(doc, cx, cy, cx - 14, cy - 14, C.gold, 0.4);
  line(doc, cx, cy, cx + 14, cy - 14, C.gold, 0.4);
  line(doc, cx, cy, cx + 14, cy + 14, C.gold, 0.4);
  line(doc, cx, cy, cx - 14, cy + 14, C.gold, 0.4);
  
  // Central Hub (Logo)
  rect(doc, cx - 5, cy - 5, 10, 10, C.obsidian, 5);
  pen(doc, C.gold); doc.setLineWidth(0.6); doc.roundedRect(cx - 5, cy - 5, 10, 10, 5, 5, 'S');
  if (imgs.logo) {
    addImg(doc, imgs.logo, cx - 3.5, cy - 3.5, 7, 7);
  }
  
  // 4 Orbit Node Cards
  const drawOrbitNode = (nx: number, ny: number, title: string) => {
    borderedCard(doc, nx - 10.5, ny - 3.5, 21, 7, C.card, 1.2);
    txt(doc, title, nx, ny + 0.6, { s: 4.5, c: C.white, b: true, a: 'center' });
  };
  
  drawOrbitNode(cx - 14, cy - 14, 'Vericea® Mfg');
  drawOrbitNode(cx + 14, cy - 14, 'Vericea® Comp');
  drawOrbitNode(cx + 14, cy + 14, 'Logistics');
  drawOrbitNode(cx - 14, cy + 14, 'Risk Mgmt');

  y += heroH + 3;

  // Section 2: Portfolio (Height = 35mm)
  sectionLabel(doc, 'ENTERPRISE SOFTWARE PORTFOLIO', mx, y, right);
  y += 4.5;

  const products = [
    { name: 'Vericea® Mfg', tag: 'OEE & DEFECTS', focus: 'Smart Factory',
      desc: 'Real-time production visibility, yield metrics, and AI defect tracking to optimize factory execution.' },
    { name: 'Courier Cost', tag: 'LOGISTICS SPEND', focus: 'Logistics Audit',
      desc: 'Deep audit analytics mapping shipping invoices to SLAs. Reclaims automatic refunds for late shipments.' },
    { name: 'Vericea® Comp', tag: 'GOVERNANCE & AUDIT', focus: 'Regulatory Gov',
      desc: 'Automates scheduling and tracks visual evidence of compliance metrics across manufacturing sites.' },
    { name: 'FactSafe', tag: 'RISK CONTROL', focus: 'Risk Dashboard',
      desc: 'Proactive industrial safety monitoring, vendor surveys, and real-time environment dashboard logs.' },
  ];

  const pCardW = (cw - 9) / 4;
  const pCardH = 30.5;
  const pCardGap = 3;
  products.forEach((p, i) => {
    const cx = mx + i * (pCardW + pCardGap);
    borderedCard(doc, cx, y, pCardW, pCardH);

    const imgData = imgs.products[i];
    const imgW = 15;
    const imgH = 10;
    if (imgData) {
      addImg(doc, imgData, cx + 1.8, y + 1.8, imgW, imgH);
    } else {
      rect(doc, cx + 1.8, y + 1.8, imgW, imgH, C.cardLight, 1.2);
    }

    badge(doc, p.tag, cx + 18.5, y + 4.0, C.obsidian, C.blue, 3.8);
    txt(doc, p.name, cx + 18.5, y + 9.0, { s: 6.8, c: C.white, b: true });
    wrap(doc, p.desc, cx + 2, y + 14.5, pCardW - 4, { s: 5.5, c: C.muted, lh: 2.1 });
    txt(doc, p.focus, cx + pCardW - 2, y + pCardH - 1.8, { s: 4.8, c: C.gold, b: true, a: 'right' });
  });

  y += pCardH + 3.5;

  // Section 3: Why Partners Say Yes (Height = 33mm)
  sectionLabel(doc, 'WHY PARTNERS SAY YES', mx, y, right);
  y += 4.5;

  const benefits = [
    { t: 'Ready Products', d: 'Deploy 4 pre-built suites with proven PMF. Instantly co-sell without custom coding.' },
    { t: 'Low Tech Risk', d: 'CEA handles development, hosting, and security. Zero developer overhead.' },
    { t: 'Faster Revenue', d: 'Shorter sales cycles and ready-to-use demos get you earning in weeks.' },
    { t: 'Run It Your Way', d: 'Complete commercial autonomy. Set your own margins and licensing terms.' },
    { t: 'Recurring SaaS', d: 'Predictable multi-year licensing splits secure long-term stable growth.' },
    { t: '5 Target Markets', d: 'Target Apparel, Manufacturing, Logistics, Construction, and Finance clusters.' },
  ];

  const bCardW = (cw - 8) / 3;
  const bCardH = 13.5;
  const bCardGap = 2.5;
  benefits.forEach((b, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const cx = mx + col * (bCardW + 4);
    const cy = y + row * (bCardH + bCardGap);

    borderedCard(doc, cx, cy, bCardW, bCardH, C.cardAlt);
    check(doc, cx + 3, cy + 4, C.teal);

    txt(doc, b.t, cx + 6.5, cy + 4.8, { s: 7.2, c: C.white, b: true });
    wrap(doc, b.d, cx + 3, cy + 8.2, bCardW - 6, { s: 5.2, c: C.muted, lh: 2.1 });
  });

  y += 2 * bCardH + bCardGap + 3.5;

  // Section 4: Strategic Co-Investment Partnership (Height = 65mm)
  sectionLabel(doc, 'MUTUAL CO-INVESTMENT PARTNERSHIP', mx, y, right);
  y += 4.5;

  const coH = 59;
  const colW = (cw - 4) / 2;
  const rightXCol = mx + colW + 4;

  // CEA Provides (Left)
  borderedCard(doc, mx, y, colW, coH, C.panelDark);
  rect(doc, mx, y, colW, 1.0, C.blue, 2.5);
  txt(doc, 'CEA INFOTECH PROVIDES', mx + 5, y + 5.5, { s: 7.5, c: C.blue, b: true });

  const ceaItems = [
    { t: 'Core Technology', d: 'Secure enterprise cloud codebase.' },
    { t: 'Server Infrastructure', d: 'Scalable cloud databases.' },
    { t: 'Hosting & Security', d: '24/7 server monitoring, SSL control.' },
    { t: 'Implementation Scoping', d: 'Assistance during system setups.' },
    { t: 'Dedicated Support', d: 'Expert troubleshooting assistance.' },
    { t: 'Product Upgrades', d: 'Continuous enhancements & patches.' },
    { t: 'Pre-Sales Consulting', d: 'Technical advisory & security support.' }
  ];

  ceaItems.forEach((item, i) => {
    const iy = y + 9.5 + i * 6.8;
    check(doc, mx + 4, iy + 1.2, C.blue);
    txt(doc, item.t, mx + 7.5, iy + 1.8, { s: 6.8, c: C.white, b: true });
    txt(doc, item.d, mx + 7.5, iy + 4.2, { s: 5.5, c: C.muted });
  });

  // Partner Provides (Right)
  borderedCard(doc, rightXCol, y, colW, coH, C.panelDark);
  rect(doc, rightXCol, y, colW, 1.0, C.gold, 2.5);
  txt(doc, 'PARTNER PROVIDES', rightXCol + 5, y + 5.5, { s: 7.5, c: C.gold, b: true });

  const partnerItems = [
    { t: 'Local Sales & Demos', d: 'Direct outreach, scoping, and closures.' },
    { t: 'Marketing Campaigns', d: 'Regional MSME cluster promotions.' },
    { t: 'Lead Generation', d: 'Identifying factories needing digitizing.' },
    { t: 'Customer Acquisition', d: 'Managing contract signs & purchase orders.' },
    { t: 'Territory Expansion', d: 'Building sub-reseller routes.' },
    { t: 'Relationship Management', d: 'First line contact & reviews.' },
    { t: 'Setup Assistance', d: 'Client integration checklist execution.' }
  ];

  partnerItems.forEach((item, i) => {
    const iy = y + 9.5 + i * 6.8;
    check(doc, rightXCol + 4, iy + 1.2, C.gold);
    txt(doc, item.t, rightXCol + 7.5, iy + 1.8, { s: 6.8, c: C.white, b: true });
    txt(doc, item.d, rightXCol + 7.5, iy + 4.2, { s: 5.5, c: C.muted });
  });

  // Overlapping Shared Growth center circle
  const cxMid = mx + colW + 2;
  const cyMid = y + coH / 2;
  const circleD = 15;
  rect(doc, cxMid - circleD / 2, cyMid - circleD / 2, circleD, circleD, C.card, circleD / 2);
  pen(doc, C.divider); doc.setLineWidth(0.3); doc.roundedRect(cxMid - circleD / 2, cyMid - circleD / 2, circleD, circleD, circleD / 2, circleD / 2, 'S');
  txt(doc, 'SHARED', cxMid, cyMid - 1.2, { s: 4.8, c: C.gold, b: true, a: 'center' });
  txt(doc, 'GROWTH', cxMid, cyMid + 2.0, { s: 4.8, c: C.gold, b: true, a: 'center' });

  y += coH + 3.5;

  // Section 5: Choose Your Business Model (Height = 66mm)
  sectionLabel(doc, 'CHOOSE YOUR BUSINESS MODEL', mx, y, right);
  y += 4.5;

  const models = [
    { t: 'Growth Consultant', badge: 'STRATEGIC ENABLER', inv: '₹5–10 Lakhs', team: '1–3 Experts', rev: '₹1.5 Crores', roi: '15x',
      desc: 'Focuses on integrating compliance audit solutions, process mapping, and advisory audits into regional manufacturing clusters.' },
    { t: 'Tech Reseller', badge: 'INTEGRATION SPECIALIST', inv: '₹10–20 Lakhs', team: '3–5 Engineers', rev: '₹1.5 Crores', roi: '7.5x',
      desc: 'Drives SaaS deployments, custom system configurations, and handles localized front-line support services for enterprise clients.' },
    { t: 'Regional Distributor', badge: 'TERRITORY CHAMPION', inv: '₹20–50 Lakhs', team: '5–10 Pros', rev: '₹3.0+ Crores', roi: '6x+',
      desc: 'Enjoys complete exclusive administrative control over designated states. Builds, trains, and manages their own sub-reseller networks.' },
  ];

  const mCardW = (cw - 8) / 3;
  const mCardH = 62;
  const mCardGap = 4;
  models.forEach((m, i) => {
    const cx = mx + i * (mCardW + mCardGap);
    borderedCard(doc, cx, y, mCardW, mCardH);
    rect(doc, cx, y, 1.0, mCardH, C.gold);

    badge(doc, m.badge, cx + 4, y + 4.5, C.cardLight, C.blue, 4.2);
    txt(doc, m.t, cx + 4, y + 10, { s: 8.5, c: C.white, b: true });
    wrap(doc, m.desc, cx + 4, y + 14, mCardW - 8, { s: 5.8, c: C.muted, lh: 2.3 });

    // Projections
    const py1 = y + 35;
    txt(doc, 'INVESTMENT', cx + 4, py1, { s: 4.5, c: C.dim, b: true });
    txt(doc, m.inv, cx + 4, py1 + 3.2, { s: 6.5, c: C.white, b: true });

    txt(doc, 'YR 3 REVENUE', cx + 32, py1, { s: 4.5, c: C.dim, b: true });
    txt(doc, m.rev, cx + 32, py1 + 3.2, { s: 6.5, c: C.blue, b: true });

    const py2 = y + 44;
    txt(doc, 'TEAM SIZE', cx + 4, py2, { s: 4.5, c: C.dim, b: true });
    txt(doc, m.team, cx + 4, py2 + 3.2, { s: 6.5, c: C.white, b: true });

    txt(doc, 'ROI POTENTIAL', cx + 32, py2, { s: 4.5, c: C.dim, b: true });
    txt(doc, m.roi, cx + 32, py2 + 3.2, { s: 6.5, c: C.gold, b: true });

    // Bullet points at bottom
    txt(doc, '• Tier-aligned margin splits', cx + 4, y + 54, { s: 5.2, c: C.muted });
    txt(doc, '• Comprehensive partner training', cx + 4, y + 58, { s: 5.2, c: C.muted });
  });

  drawFooter(doc, 1);
}

// ─── PAGE 2: PROJECTIONS, TERRITORIES MAPS, PROFILES & CONTACT FOOTER ───────────

function drawPage2(doc: jsPDF, imgs: PDFImages) {
  const mx = PG.mx;
  const cw = PG.cw;
  const right = PG.w - mx;

  rect(doc, 0, 0, PG.w, PG.h, C.obsidian);
  drawHeader(doc, 'REVENUE OPPORTUNITY & TERRITORIES', imgs.logo);

  let y = 15;

  // Section 6: Revenue Projections Chart (Height = 52mm)
  sectionLabel(doc, 'REVENUE OPPORTUNITY PROJECTION', mx, y, right);
  y += 4.5;

  const chartH = 46;
  borderedCard(doc, mx, y, cw, chartH, C.card, 2.5);
  rect(doc, mx, y, cw, 1.0, C.gold, 2.5);

  txt(doc, 'Cumulative Revenue Growth (₹ in Lakhs)', mx + 5, y + 6.5, { s: 8.5, c: C.white, b: true });
  txt(doc, '3-Year Comparative Analysis Across Tiers', mx + 5, y + 10.5, { s: 5.5, c: C.dim });

  const legends = [
    { l: 'Consultant (₹5–10L)', c: C.blue },
    { l: 'Reseller (₹10–20L)', c: C.silverBlue },
    { l: 'Distributor (₹20–50L)', c: C.white },
  ];
  legends.forEach((lg, i) => {
    const lx = right - 5 - (2 - i) * 38;
    rect(doc, lx, y + 5.5, 2.5, 2.5, lg.c, 0.5);
    txt(doc, lg.l, lx + 4, y + 7.8, { s: 5.2, c: C.white, b: true });
  });

  const barTop = y + 15;
  const barBot = y + chartH - 7;
  const barHeight = barBot - barTop;
  const maxVal = 300;
  const barStartX = mx + 16;
  const barEndX = right - 5;

  [300, 150, 0].forEach((v) => {
    const yPos = barTop + (1 - v / maxVal) * barHeight;
    txt(doc, `${v}L`, mx + 4, yPos + 1.0, { s: 5.2, c: C.dim });
    line(doc, barStartX, yPos, barEndX, yPos, C.divider, 0.12);
  });

  const chartData = [
    { yr: 'Year 1', c: 25, r: 30, d: 50 },
    { yr: 'Year 2', c: 75, r: 85, d: 150 },
    { yr: 'Year 3', c: 150, r: 150, d: 300 },
  ];

  const groupW = (barEndX - barStartX) / 3;
  const barW = 8;
  const barGap = 2.5;

  chartData.forEach((rd, gi) => {
    const gcx = barStartX + gi * groupW + groupW / 2;
    const bars = [
      { v: rd.c, c: C.blue },
      { v: rd.r, c: C.silverBlue },
      { v: rd.d, c: C.white },
    ];

    bars.forEach((bar, bi) => {
      const bh = (bar.v / maxVal) * barHeight;
      const bx = gcx - (barW * 1.5 + barGap) + bi * (barW + barGap);
      const by = barBot - bh;
      rect(doc, bx, by, barW, bh, bar.c, 1.0);
      txt(doc, `₹${bar.v}L`, bx + barW / 2, by - 1.8, { s: 4.8, c: bar.c, b: true, a: 'center' });
    });

    txt(doc, rd.yr, gcx, barBot + 4.5, { s: 7, c: C.white, b: true, a: 'center' });
  });

  line(doc, barStartX, barBot, barEndX, barBot, C.dim, 0.3);

  y += chartH + 3.5;

  // Section 7: Priority Territories Maps (Height = 88mm)
  sectionLabel(doc, 'PRIORITY TERRITORIES & GLOBAL FOOTPRINT', mx, y, right);
  y += 4.5;

  const mapW = (cw - 4) / 2;
  const mapH = 83;
  const rightXColMap = mx + mapW + 4;

  // India map card
  borderedCard(doc, mx, y, mapW, mapH, C.panelDark, 2);
  rect(doc, mx, y, mapW, 1.0, C.blue, 2);
  txt(doc, 'INDIA — NATIONAL COVERAGE', mx + 4, y + 5, { s: 6, c: C.blue, b: true });

  if (imgs.indiaMap) {
    const areaY = y + 8;
    const areaH = mapH - 24;
    const aspect = 612 / 696;
    let imgW = mapW - 10;
    let imgH2 = imgW / aspect;
    if (imgH2 > areaH) {
      imgH2 = areaH;
      imgW = imgH2 * aspect;
    }
    const imgX = mx + (mapW - imgW) / 2;
    addImg(doc, imgs.indiaMap, imgX, areaY, imgW, imgH2);
  }

  const indiaCities = 'Priority Cities: Bangalore, Chennai, Coimbatore, Tiruppur, Surat, Pune, Noida, Ludhiana.';
  wrap(doc, indiaCities, mx + 4, y + mapH - 12, mapW - 8, { s: 5.2, c: C.muted, lh: 2.1 });
  txt(doc, '8 High-Growth Industrial Clusters Targeted', mx + 4, y + mapH - 3.2, { s: 5, c: C.blue, b: true });

  // World map card
  borderedCard(doc, rightXColMap, y, mapW, mapH, C.panelDark, 2);
  rect(doc, rightXColMap, y, mapW, 1.0, C.gold, 2);
  txt(doc, 'INTERNATIONAL — GLOBAL EXPANSION', rightXColMap + 4, y + 5, { s: 6, c: C.gold, b: true });

  if (imgs.worldMap) {
    const areaY = y + 8;
    const areaH = mapH - 24;
    const aspect = 784 / 458;
    let imgW = mapW - 10;
    let imgH3 = imgW / aspect;
    if (imgH3 > areaH) {
      imgH3 = areaH;
      imgW = imgH3 * aspect;
    }
    const imgX = rightXColMap + (mapW - imgW) / 2;
    addImg(doc, imgs.worldMap, imgX, areaY, imgW, imgH3);
  }

  const worldHubs = 'Expansion Hubs: Dubai/Riyadh (Middle East), Singapore/Hanoi (Southeast Asia), London/Frankfurt (Europe), New York/Toronto (North America).';
  wrap(doc, worldHubs, rightXColMap + 4, y + mapH - 12, mapW - 8, { s: 5.2, c: C.muted, lh: 2.1 });
  txt(doc, '4 Strategic Continental Operations Hubs Enabled', rightXColMap + 4, y + mapH - 3.2, { s: 5, c: C.gold, b: true });

  y += mapH + 3.5;

  // Section 8: Who We Are Looking For (Height = 66mm)
  sectionLabel(doc, 'WHO WE ARE LOOKING FOR — IDEAL PARTNER PROFILES', mx, y, right);
  y += 4.5;

  const targetAudiences = [
    { title: 'BD Professionals', badge: 'Sales', synergy: 95, focus: 'Direct Lead Gen', desc: 'Developers with deep relationships in factories. Tap contacts to introduce Vericea®.' },
    { title: 'Sales Agencies', badge: 'Channel', synergy: 90, focus: 'Market Campaigns', desc: 'Agencies expanding portfolios with premium enterprise SaaS packages.' },
    { title: 'Consultants', badge: 'Advisory', synergy: 92, focus: 'Workflow Audits', desc: 'Operations consultants mapping manufacturer yields. Recommend CEA to fix OEE.' },
    { title: 'Compliance Firms', badge: 'Governance', synergy: 96, focus: 'Audit Readiness', desc: 'Auditing bodies automating proof collection. Introduce Vericea® Compliance.' },
    { title: 'Tech Resellers', badge: 'Systems', synergy: 88, focus: 'Local Support', desc: 'IT resellers packaging software services. Sell, setup, and support CEA.' },
    { title: 'Solution Providers', badge: 'Integrator', synergy: 85, focus: 'Scoping & Setup', desc: 'Agencies looking to bundle ready-made tools rather than coding from scratch.' },
    { title: 'Regional Partners', badge: 'Territory', synergy: 94, focus: 'Exclusive Control', desc: 'Distributors seeking control over territories. Build local sub-reseller routes.' },
    { title: 'Industry Networks', badge: 'Network', synergy: 87, focus: 'Cluster Deployments', desc: 'Associations representing manufacturers. Introduce CEA to members to digitize.' },
    { title: 'Strategic Investors', badge: 'Equity', synergy: 82, focus: 'Territory Funding', desc: 'Capital partners backing distributor models. Fund territory rollout teams.' }
  ];

  const pWidth = (cw - 8) / 3;
  const pHeight = 18.5;
  const pGap = 2;
  targetAudiences.forEach((a, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const px = mx + col * (pWidth + 4);
    const py = y + row * (pHeight + pGap);

    borderedCard(doc, px, py, pWidth, pHeight, C.cardAlt, 1.5);

    txt(doc, a.title, px + 3, py + 3.8, { s: 7, c: C.white, b: true });
    txt(doc, `${a.synergy}% Synergy`, px + 3, py + 6.8, { s: 4.8, c: C.teal, b: true });
    txt(doc, a.focus, px + pWidth - 3, py + 6.8, { s: 4.5, c: C.blue, b: true, a: 'right' });

    // Progress Bar
    rect(doc, px + 3, py + 8.5, pWidth - 6, 0.8, [40, 52, 75], 0.4);
    rect(doc, px + 3, py + 8.5, (pWidth - 6) * (a.synergy / 100), 0.8, C.teal, 0.4);

    wrap(doc, a.desc, px + 3, py + 11.5, pWidth - 6, { s: 5.0, c: C.muted, lh: 2.0 });
  });

  y += 3 * (pHeight + pGap) + 3.5;

  // Section 9: CTA & Complete Site Footer (Height = 42mm)
  const footerCardH = 39;
  borderedCard(doc, mx, y, cw, footerCardH, C.panelDark, 2.5);

  // Left CTA col
  txt(doc, "LET'S BUILD SUCCESS TOGETHER", mx + 4, y + 5, { s: 7.5, c: C.white, b: true });
  txt(doc, 'Multi-crore framework. Contact our executive team.', mx + 4, y + 9.5, { s: 5.2, c: C.muted });
  
  // CTA buttons placeholders (small badges)
  rect(doc, mx + 4, y + 13.5, 22, 5, C.gold, 1.0);
  txt(doc, 'Become a Partner', mx + 15, y + 16.8, { s: 4.5, c: C.obsidian, b: true, a: 'center' });

  rect(doc, mx + 28, y + 13.5, 24, 5, C.cardLight, 1.0);
  txt(doc, 'Schedule Discussion', mx + 40, y + 16.8, { s: 4.5, c: C.white, b: true, a: 'center' });

  // Contact info
  txt(doc, 'Email: manohar.md@ceainfotech.com', mx + 4, y + 23.5, { s: 5.2, c: C.blue, b: true });
  txt(doc, 'Phone: +91 9980138172', mx + 4, y + 27, { s: 5.2, c: C.white, b: true });
  txt(doc, 'Address: B-205 Century Marvel, Hebbal, Bangalore', mx + 4, y + 30.5, { s: 5.0, c: C.dim });

  // Middle Solutions Col
  const linkCol1X = mx + 68;
  txt(doc, 'SOLUTIONS', linkCol1X, y + 5, { s: 5.5, c: C.gold, b: true });
  const solLinks = ['Vericea® Manufacturing', 'Vericea® Compliance', 'FactSafe Risk Platform', 'Courier Cost Optimizer'];
  solLinks.forEach((link, idx) => {
    txt(doc, link, linkCol1X, y + 9.5 + idx * 3.5, { s: 5.0, c: C.muted });
  });

  // Right Company Col
  const linkCol2X = mx + 120;
  txt(doc, 'COMPANY', linkCol2X, y + 5, { s: 5.5, c: C.gold, b: true });
  const compLinks = ['About Us', 'Courier Audit', 'Compliance Hub', 'Risk Management', 'Contact Us'];
  compLinks.forEach((link, idx) => {
    txt(doc, link, linkCol2X, y + 9.5 + idx * 3.5, { s: 5.0, c: C.muted });
  });

  // Logo on extreme right
  if (imgs.logo) {
    addImg(doc, imgs.logo, right - 16, y + 4, 10, 10);
    txt(doc, 'CEA INFOTECH', right - 20, y + 7, { s: 7, c: C.white, b: true, a: 'right' });
  }

  // Bottom Line inside card
  txt(doc, '© 2026 CEA Infotech. All Rights Reserved.', mx + 4, y + footerCardH - 3, { s: 4.8, c: C.dim });
  txt(doc, 'Privacy Policy  |  Terms of Service', right - 4, y + footerCardH - 3, { s: 4.8, c: C.dim, a: 'right' });

  drawFooter(doc, 2);
}

// ─── PUBLIC API ─────────────────────────────────────────────────────────────────

export async function generatePartnerProspectus(): Promise<void> {
  // Load all images and SVGs in parallel
  const imgs = await loadAllImages();

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  drawPage1(doc, imgs);
  doc.addPage();
  drawPage2(doc, imgs);

  doc.save('CEA_Infotech_Partnership_Prospectus_2026.pdf');
}

export default generatePartnerProspectus;

