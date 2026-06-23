const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src/pages/Partners.tsx');
const destPath = path.join(__dirname, '../src/pages/PartnersFlyer.tsx');

const content = fs.readFileSync(srcPath, 'utf8');

// Find all the section comment demarcators
const sections = [
  { name: 'hero', marker: '{/* ── SECTION 1: HERO ────────────────────────────────────────────────── */}' },
  { name: 'showcase', marker: '{/* ── SECTION 2: PRODUCT ECOSYSTEM SHOWCASE ────────────────────────── */}' },
  { name: 'benefits', marker: '{/* ── SECTION 3: WHY PARTNERS SAY YES ────────────────────────────────── */}' },
  { name: 'co_investment', marker: '{/* ── SECTION 4: REVENUE SHARING MODEL ───────────────────────────── */}' },
  { name: 'models', marker: '{/* ── SECTION 5: PARTNER BUSINESS MODELS ────────────────────────────── */}' },
  { name: 'projection', marker: '{/* ── SECTION 6: REVENUE OPPORTUNITY PROJECTION ───────────────────────── */}' },
  { name: 'maps', marker: '{/* ── SECTION 7: PRIORITY TERRITORIES & GLOBAL FOOTPRINT ────────── */}' },
  { name: 'profiles', marker: '{/* ── SECTION 9: WHO WE ARE LOOKING FOR ────────────────────────────── */}' },
  { name: 'excl', marker: '{/* ── SECTION 10: TERRITORIES ARE EXCLUSIVE ─────────────────────────── */}' },
  { name: 'cta', marker: '{/* ── FINAL CTA ──────────────────────────────────────────────────────── */}' }
];

// Find the index of each marker
const parsed = sections.map((s, idx) => {
  const index = content.indexOf(s.marker);
  if (index === -1) {
    console.error(`Marker not found: ${s.name}`);
    process.exit(1);
  }
  return { ...s, index };
});

// Sort them by index to make sure they are in order
parsed.sort((a, b) => a.index - b.index);

// Find the main component start
const componentStartMarker = 'export default function Partners()';
const componentStartIndex = content.indexOf(componentStartMarker);
if (componentStartIndex === -1) {
  console.error("Could not find 'export default function Partners()' in Partners.tsx");
  process.exit(1);
}

// Find the first 'return (' AFTER the main component start
const returnMarker = 'return (';
const returnIndex = content.indexOf(returnMarker, componentStartIndex);
if (returnIndex === -1) {
  console.error("Could not find 'return (' statement after component start in Partners.tsx");
  process.exit(1);
}

// Header is everything from line 1 up to the return (inclusive)
const startOfComponent = content.slice(0, returnIndex + returnMarker.length);

// Extract each section block
const blocks = {};
for (let i = 0; i < parsed.length; i++) {
  const start = parsed[i].index;
  const end = (i + 1 < parsed.length) ? parsed[i + 1].index : content.lastIndexOf('</div>');
  blocks[parsed[i].name] = content.slice(start, end).trim();
}

// Build the restructured JSX return
const newReturn = `
    <div className="partners-flyer-page" onMouseMove={handleMouseMove}>
      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* ── PAGE 1 ──────────────────────────────────────────────────────────── */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div className="flyer-page">
        {/* Flyer Header */}
        <header 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 16px', 
            borderBottom: '1px solid var(--gold-divider)', 
            background: 'rgba(11, 15, 25, 0.95)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <img src="/images/logo.png" style={{ height: '32px', width: 'auto' }} alt="CEA Logo" />
          <span 
            style={{ 
              color: 'var(--accent)', 
              fontWeight: '850', 
              textTransform: 'uppercase', 
              fontSize: '12px', 
              letterSpacing: '2.5px',
              fontFamily: 'var(--font-headings)'
            }}
          >
            PARTNERS PROSPECTUS FLYER
          </span>
        </header>

        {/* Page 1 Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', flexGrow: 1, minHeight: 0, padding: '10px 0', boxSizing: 'border-box' }}>
          {/* Left Column (Hero & Showcase Portfolio) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0, justifyContent: 'space-between' }}>
            <div style={{ transform: 'scale(0.92)', transformOrigin: 'top left' }}>
              ${blocks['hero']}
            </div>
            <div style={{ transform: 'scale(0.92)', transformOrigin: 'bottom left', marginTop: 'auto' }}>
              ${blocks['showcase']}
            </div>
          </div>

          {/* Right Column (Why Partners Say Yes & Strategic Co-investment) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0, justifyContent: 'space-between' }}>
            <div style={{ transform: 'scale(0.92)', transformOrigin: 'top left' }}>
              ${blocks['benefits']}
            </div>
            <div style={{ transform: 'scale(0.92)', transformOrigin: 'bottom left', marginTop: 'auto' }}>
              ${blocks['co_investment']}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flyer-footer" style={{ padding: '4px 0', marginTop: '0' }}>
          <div>CEA Infotech Private Limited • Confidential Business Prospectus</div>
          <div>Page 1 of 2</div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* ── PAGE 2 ──────────────────────────────────────────────────────────── */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <div className="flyer-page">
        {/* Flyer Header Page 2 */}
        <header 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '10px 16px', 
            borderBottom: '1px solid var(--gold-divider)', 
            background: 'rgba(11, 15, 25, 0.95)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <img src="/images/logo.png" style={{ height: '32px', width: 'auto' }} alt="CEA Logo" />
          <span 
            style={{ 
              color: 'var(--accent)', 
              fontWeight: '850', 
              textTransform: 'uppercase', 
              fontSize: '12px', 
              letterSpacing: '2.5px',
              fontFamily: 'var(--font-headings)'
            }}
          >
            PARTNERS PROSPECTUS FLYER
          </span>
        </header>

        {/* Page 2 Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', flexGrow: 1, minHeight: 0, padding: '10px 0', boxSizing: 'border-box' }}>
          {/* Left Column (Who We Are, Business Model, Projections) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0, justifyContent: 'space-between' }}>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left' }}>
              ${blocks['profiles']}
            </div>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'center left' }}>
              ${blocks['models']}
            </div>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'bottom left' }}>
              ${blocks['projection']}
            </div>
          </div>

          {/* Right Column (Maps, Exclusivity, Final CTA) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minHeight: 0, justifyContent: 'space-between' }}>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left' }}>
              ${blocks['maps']}
            </div>
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'bottom left', marginTop: 'auto' }}>
              ${blocks['excl']}
              ${blocks['cta']}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flyer-footer" style={{ padding: '4px 0', marginTop: '0' }}>
          <div>CEA Infotech Private Limited • Confidential Business Prospectus</div>
          <div>Page 2 of 2</div>
        </div>
      </div>
    </div>
  );
}
`;

// Combine the start, components, and export
const output = startOfComponent + newReturn;

// Rename the component to PartnersFlyer
const finalOutput = output
  .replace('export default function Partners()', 'export default function PartnersFlyer()')
  .replace('export default function Partners (', 'export default function PartnersFlyer (');

fs.writeFileSync(destPath, finalOutput, 'utf8');
console.log('Successfully wrote restructured PartnersFlyer.tsx');
