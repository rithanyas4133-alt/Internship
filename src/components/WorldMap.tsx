import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { worldMapData } from './WorldMapData';

interface HubInfo {
  name: string;
  region: string;
  x: number;
  y: number;
  focus: string;
  opportunity: string;
  marketPotential: string;
}

const internationalHubs: HubInfo[] = [
  {
    name: 'Dubai / Riyadh',
    region: 'Middle East Hub',
    x: 535,
    y: 468,
    focus: 'Enterprise Compliance & Audit Systems',
    opportunity: 'High compliance mandates in heavy industrial zones, construction, and oil/gas distribution.',
    marketPotential: 'Tier 1 Region for Vericea® Compliance and FactSafe'
  },
  {
    name: 'Singapore / Hanoi',
    region: 'Southeast Asia Hub',
    x: 660,
    y: 512,
    focus: 'OEE Manufacturing & Logistics Analytics',
    opportunity: 'Massive apparel and electronics manufacturing corridors. High demand for courier cost management.',
    marketPotential: 'Rapid scaling in garment export clusters'
  },
  {
    name: 'London / Frankfurt',
    region: 'European Hub',
    x: 420,
    y: 385,
    focus: 'ESG Compliance Auditing & Vendor Safety',
    opportunity: 'Stricter carbon tracking and supply chain liability compliance. Integrates with FactSafe environment logs.',
    marketPotential: 'Multi-country corporate supplier network audits'
  },
  {
    name: 'New York / Toronto',
    region: 'North American Expansion',
    x: 210,
    y: 380,
    focus: 'SaaS Spend Analytics & Risk Audits',
    opportunity: 'Enterprise logistics audits. Reclaiming freight invoice variance for manufacturing distributors.',
    marketPotential: 'High margin recurring SaaS integrations'
  }
];

const continentToHubs: Record<string, string[]> = {
  na: ['New York / Toronto'],
  eurasia: ['Dubai / Riyadh', 'Singapore / Hanoi', 'London / Frankfurt']
};

export default function WorldMap() {
  const [selectedHub, setSelectedHub] = useState<HubInfo | null>(null);
  const [hoveredHub, setHoveredHub] = useState<HubInfo | null>(null);
  const [hoveredContinentId, setHoveredContinentId] = useState<string | null>(null);

  // CEA headquarters in India (located geographically on the new viewBox space)
  const indiaHQ = { x: 605, y: 480 };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      {/* Map visual card */}
      <div className="map-premium-card">
        {/* Subtle grid background */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(rgba(212,168,90,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,90,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />

        {/* Map visual wrapper */}
        <div 
          style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '600px', 
            aspectRatio: '784 / 458',
            borderRadius: '16px',
            overflow: 'visible',
            padding: '10px'
          }}
        >
          <svg 
            viewBox="30.767 241.591 784.077 458.627" 
            style={{ 
              width: '100%', 
              height: '100%', 
              overflow: 'visible',
              filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.6))'
            }}
          >
            <defs>
              {/* Soft gold glow filter for active pins */}
              <filter id="world-gold-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gold gradient for routes */}
              <linearGradient id="world-route-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4A85A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E6C27A" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Render all country paths dynamically with precise geography */}
            <g id="world-countries">
              {worldMapData.map((country) => {
                const isContinentActive = selectedHub ? continentToHubs[country.continent]?.includes(selectedHub.name) : false;
                const isContinentHoveredByHub = hoveredHub ? continentToHubs[country.continent]?.includes(hoveredHub.name) : false;
                const isHighlighted = isContinentActive || isContinentHoveredByHub;
                const isHoverState = hoveredContinentId === country.continent;

                const fill = isHighlighted 
                  ? 'rgba(21, 50, 97, 0.95)' 
                  : isHoverState 
                    ? 'rgba(31, 74, 135, 0.7)' 
                    : 'rgba(11, 27, 61, 0.55)';
                const stroke = isHighlighted 
                  ? '#D4A85A' 
                  : isHoverState 
                    ? 'rgba(212, 168, 90, 0.6)' 
                    : 'rgba(43, 74, 115, 0.6)';
                const strokeWidth = isHighlighted 
                  ? 1.5 
                  : isHoverState 
                    ? 1.0 
                    : 0.75;

                const handleMouseEnter = () => {
                  if (['na', 'eurasia'].includes(country.continent)) {
                    setHoveredContinentId(country.continent);
                  }
                };

                const handleMouseLeave = () => {
                  setHoveredContinentId(null);
                };

                const handleClick = () => {
                  if (country.continent === 'na') {
                    const targetHub = internationalHubs.find(h => h.name === 'New York / Toronto');
                    if (targetHub) setSelectedHub(targetHub);
                  } else if (country.continent === 'eurasia') {
                    const eurasianHubs = internationalHubs.filter(h => h.name !== 'New York / Toronto');
                    const currentIndex = eurasianHubs.findIndex(h => h.name === selectedHub?.name);
                    const nextIndex = (currentIndex + 1) % eurasianHubs.length;
                    setSelectedHub(eurasianHubs[nextIndex]);
                  }
                };

                if (country.type === 'group' && country.paths) {
                  return (
                    <g 
                      key={country.id} 
                      id={country.id}
                      style={{ cursor: ['na', 'eurasia'].includes(country.continent) ? 'pointer' : 'default' }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleClick}
                    >
                      {country.paths.map((pPath, pIdx) => (
                        <path
                          key={`${country.id}-${pIdx}`}
                          d={pPath}
                          fill={fill}
                          stroke={stroke}
                          strokeWidth={strokeWidth}
                          style={{ transition: 'all 0.3s ease' }}
                        />
                      ))}
                    </g>
                  );
                } else if (country.d) {
                  return (
                    <path
                      key={country.id}
                      id={country.id}
                      d={country.d}
                      fill={fill}
                      stroke={stroke}
                      strokeWidth={strokeWidth}
                      style={{ 
                        transition: 'all 0.3s ease',
                        cursor: ['na', 'eurasia'].includes(country.continent) ? 'pointer' : 'default'
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={handleClick}
                    />
                  );
                }
                return null;
              })}
            </g>

            {/* Connection Arcs from India to World Hubs */}
            <g id="world-expansion-routes">
              {internationalHubs.map((hub, idx) => (
                <g key={`route-${idx}`}>
                  {/* Dynamic flowing route line */}
                  <motion.path
                    d={`M ${indiaHQ.x} ${indiaHQ.y} Q ${(indiaHQ.x + hub.x) / 2} ${Math.min(indiaHQ.y, hub.y) - 35}, ${hub.x} ${hub.y}`}
                    fill="none"
                    stroke="url(#world-route-grad)"
                    strokeWidth="1.2"
                    strokeDasharray="4 4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -20 }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                    style={{ opacity: 0.65, pointerEvents: 'none' }}
                  />
                  {/* Outer subtle glow arc background */}
                  <path
                    d={`M ${indiaHQ.x} ${indiaHQ.y} Q ${(indiaHQ.x + hub.x) / 2} ${Math.min(indiaHQ.y, hub.y) - 35}, ${hub.x} ${hub.y}`}
                    fill="none"
                    stroke="rgba(212, 168, 90, 0.08)"
                    strokeWidth="3.0"
                    style={{ pointerEvents: 'none' }}
                  />
                </g>
              ))}
            </g>

            {/* India HQ Marker (Base Center) */}
            <g transform={`translate(${indiaHQ.x}, ${indiaHQ.y})`}>
              <circle cx="0" cy="0" r="8" fill="rgba(212, 168, 90, 0.25)" style={{ pointerEvents: 'none' }} />
              <circle cx="0" cy="0" r="3.5" fill="#D4A85A" stroke="#0e1f35" strokeWidth="1" />
              {/* HQ Label */}
              <text x="0" y="-12" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" letterSpacing="0.5">
                CEA HQ
              </text>
            </g>

            {/* Pulsing City Hub Markers */}
            <g id="world-markers">
              {internationalHubs.map((hub) => {
                const isSelected = selectedHub?.name === hub.name;
                const isHovered = hoveredHub?.name === hub.name;

                return (
                  <g
                    key={hub.name}
                    transform={`translate(${hub.x}, ${hub.y})`}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedHub(hub);
                    }}
                    onMouseEnter={() => {
                      setHoveredHub(hub);
                      const parentContinent = Object.keys(continentToHubs).find(c => continentToHubs[c].includes(hub.name));
                      if (parentContinent) {
                        setHoveredContinentId(parentContinent);
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredHub(null);
                      setHoveredContinentId(null);
                    }}
                  >
                    {/* Pulsing ring */}
                    <circle cx="0" cy="0" r="16" fill="none" style={{ pointerEvents: 'none' }}>
                      <animate attributeName="r" values="6;22" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values={isSelected ? '#D4A85A' : 'rgba(212, 168, 90, 0.4)'} dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke-width" values="1" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Gold backing glow filter for active */}
                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r="8"
                        fill="rgba(212, 168, 90, 0.3)"
                        filter="url(#world-gold-glow)"
                        style={{ pointerEvents: 'none' }}
                      />
                    )}

                    {/* Pin base dot */}
                    <motion.circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 6 : 4.5}
                      fill={isSelected ? '#D4A85A' : '#E6C27A'}
                      stroke="#0e1f35"
                      strokeWidth="1.5"
                      animate={{ scale: isSelected || isHovered ? 1.3 : 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    />
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating dynamic tooltip */}
          <AnimatePresence>
            {hoveredHub && (
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
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(212, 168, 90, 0.15)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <MapPin size={18} color="#D4A85A" />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#ffffff' }}>{hoveredHub.name}</h4>
                  <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--text-muted)' }}>{hoveredHub.region}</p>
                </div>
                <div style={{ fontSize: '11px', color: '#D4A85A', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Click to Pin
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
