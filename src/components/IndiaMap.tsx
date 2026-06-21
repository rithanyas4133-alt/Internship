import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { indiaStatesData } from './IndiaMapData';

interface CityInfo {
  name: string;
  state: string;
  stateId: string;
  x: number; // X coordinate in 612x696 SVG space
  y: number; // Y coordinate in 612x696 SVG space
  clusters: string[];
  type: string;
  opportunities: string;
}

const priorityCities: CityInfo[] = [
  {
    name: 'Chennai',
    state: 'Tamil Nadu',
    stateId: 'tn',
    x: 238,
    y: 565,
    clusters: ['Automotive Manufacturing', 'SaaS & Tech Parks', 'Hardware Electronics'],
    type: 'Automotive & SaaS Hub',
    opportunities: 'High demand for defect tracking in automotive assembly lines and SaaS audit compliance.'
  },
  {
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    stateId: 'tn',
    x: 182,
    y: 622,
    clusters: ['Textile Engineering', 'Pumps & Motors Manufacturing', 'Auto Components'],
    type: 'Industrial Engineering Center',
    opportunities: 'Excellent territory for Vericea® Manufacturing and FactSafe risk monitoring.'
  },
  {
    name: 'Tiruppur',
    state: 'Tamil Nadu',
    stateId: 'tn',
    x: 190,
    y: 624,
    clusters: ['Cotton Knitwear Exports', 'Textile Processing', 'Apparel Garments'],
    type: 'Textile Export Giant',
    opportunities: 'Massive opportunity for courier cost management and production efficiency systems.'
  },
  {
    name: 'Bengaluru',
    state: 'Karnataka',
    stateId: 'ka',
    x: 185,
    y: 560,
    clusters: ['IT & Software Development', 'Aerospace & Defence', 'Electronics Assembly'],
    type: 'Tech Capital of India',
    opportunities: 'Enterprise hub for compliance audit tracking and vendor risk tools.'
  },
  {
    name: 'Surat',
    state: 'Gujarat',
    stateId: 'gj',
    x: 75,
    y: 385,
    clusters: ['Synthetic Textiles', 'Diamond Processing', 'Zari & Embroidery Exports'],
    type: 'Diamond & Textile Hub',
    opportunities: 'High concentration of MSME clusters demanding production efficiency tools.'
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    stateId: 'mh',
    x: 118,
    y: 435,
    clusters: ['Automotive Assembly', 'Heavy Engineering', 'Industrial Goods'],
    type: 'Auto & Heavy Industry Hub',
    opportunities: 'Target market for OEE monitoring systems and compliance tracking products.'
  },
  {
    name: 'Noida',
    state: 'Uttar Pradesh',
    stateId: 'up',
    x: 191,
    y: 211,
    clusters: ['Mobile & Electronics Manufacturing', 'Software Services', 'BPO/KPO Services'],
    type: 'Electronics & Software Hub',
    opportunities: 'Perfect landscape for compliance automation and enterprise security audits.'
  },
  {
    name: 'Ludhiana',
    state: 'Punjab',
    stateId: 'pb',
    x: 145,
    y: 145,
    clusters: ['Bicycle Manufacturing', 'Sewing Machines & Tools', 'Hosiery & Knitwear'],
    type: 'Light Engineering Leader',
    opportunities: 'Vast potential for manufacturing deficiency trackers and logistics logistics analytics.'
  }
];

export default function IndiaMap() {
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(priorityCities[3]);
  const [hoveredCity, setHoveredCity] = useState<CityInfo | null>(null);
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);

  // Get active state IDs to highlight regions
  const activeStateId = selectedCity?.stateId || null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      {/* Map visual card */}
      <div 
        className="map-premium-card"
        style={{
          background: '#ffffff',
          border: '2px solid #38BDF8',
          boxShadow: '0 10px 30px rgba(14, 165, 233, 0.15)',
        }}
      >
        {/* Subtle grid background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />

        {/* Map visual wrapper */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '520px', 
            aspectRatio: '612 / 696',
            borderRadius: '16px',
            overflow: 'visible',
            padding: '10px'
          }}
        >
          {/* Geographically accurate SVG India Map */}
          <svg 
            viewBox="0 0 612 696" 
            style={{ 
              width: '100%', 
              height: '100%', 
              overflow: 'visible',
              filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.6))'
            }}
          >
            <defs>
              {/* Soft sky-blue glow filter for active pins */}
              <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Sky Blue gradient for routes */}
              <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Render all States & Union Territories */}
            <g id="india-states">
              {indiaStatesData.map((state) => {
                const isSelectedState = activeStateId === state.id;
                // Highlight Noida's region (Delhi dl or UP up)
                const isNoidaStateSelected = selectedCity?.name === 'Noida' && (state.id === 'up' || state.id === 'dl');
                const isStateActive = isSelectedState || isNoidaStateSelected;
                
                const isHovered = hoveredStateId === state.id;
                const isNoidaStateHovered = hoveredCity?.name === 'Noida' && (state.id === 'up' || state.id === 'dl');
                const isStateHovered = isHovered || isNoidaStateHovered;

                return (
                  <path
                    key={state.id}
                    d={state.d}
                    fill={isStateActive ? '#BAE6FD' : isStateHovered ? '#F0F9FF' : '#ffffff'}
                    stroke={isStateActive ? '#0284C7' : isStateHovered ? '#38BDF8' : '#334155'}
                    strokeWidth={isStateActive ? 2.0 : isStateHovered ? 1.5 : 1.0}
                    style={{
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredStateId(state.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                    onClick={() => {
                      // Click to select corresponding city in that region
                      let targetCity = priorityCities.find(c => c.stateId === state.id);
                      if (state.id === 'dl' || state.id === 'up') {
                        targetCity = priorityCities.find(c => c.name === 'Noida');
                      }
                      if (targetCity) {
                        setSelectedCity(targetCity);
                      }
                    }}
                  />
                );
              })}
            </g>

            {/* Connection routes/lines visual effect */}
            {selectedCity && (
              <g id="connection-routes">
                {priorityCities.filter(c => c.name !== selectedCity.name).map((city, idx) => (
                  <motion.line
                    key={`line-${idx}`}
                    x1={selectedCity.x}
                    y1={selectedCity.y}
                    x2={city.x}
                    y2={city.y}
                    stroke="url(#route-grad)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -20 }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                    style={{ opacity: 0.65, pointerEvents: 'none' }}
                  />
                ))}
              </g>
            )}

            {/* Pulsing city markers */}
            <g id="city-markers">
              {priorityCities.map((city) => {
                const isSelected = selectedCity?.name === city.name;
                const isHovered = hoveredCity?.name === city.name;
                
                return (
                  <g 
                    key={city.name} 
                    transform={`translate(${city.x}, ${city.y})`}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCity(city);
                    }}
                    onMouseEnter={() => {
                      setHoveredCity(city);
                      setHoveredStateId(city.stateId);
                    }}
                    onMouseLeave={() => {
                      setHoveredCity(null);
                      setHoveredStateId(null);
                    }}
                  >
                    {/* Pulsing outer glow ring */}
                    <circle cx="0" cy="0" r="16" fill="none" style={{ pointerEvents: 'none' }}>
                      <animate attributeName="r" values="6;22" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values={isSelected ? '#0284C7' : 'rgba(56, 189, 248, 0.4)'} dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="1.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Sky blue glow backing for active items */}
                    {isSelected && (
                      <circle 
                        cx="0" 
                        cy="0" 
                        r="8" 
                        fill="rgba(56, 189, 248, 0.3)" 
                        filter="url(#gold-glow)"
                        style={{ pointerEvents: 'none' }}
                      />
                    )}

                    {/* Central pin base dot */}
                    <motion.circle 
                      cx="0" 
                      cy="0" 
                      r={isSelected ? 6 : 4.5} 
                      fill={isSelected ? '#0284C7' : '#38BDF8'} 
                      stroke="#FFFFFF" 
                      strokeWidth="1.5"
                      animate={{ scale: isSelected || isHovered ? 1.3 : 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    />

                    {/* Dynamic state badge on hover */}
                    {isHovered && (
                      <circle 
                        cx="0" 
                        cy="0" 
                        r="1.5" 
                        fill="#ffffff" 
                        style={{ pointerEvents: 'none' }}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating dynamic tooltip */}
          <AnimatePresence>
            {hoveredCity && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  background: 'rgba(14, 31, 53, 0.96)',
                  border: '1px solid var(--accent)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  pointerEvents: 'none'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <MapPin size={18} color="#38BDF8" />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#ffffff' }}>{hoveredCity.name}</h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--text-muted)' }}>{hoveredCity.type}</p>
                </div>
                <div style={{ fontSize: '11px', color: '#38BDF8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Click to Select
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
