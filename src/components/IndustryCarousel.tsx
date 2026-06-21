import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Globe, TestTube, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
  { id: 'factories', name: 'Factories', icon: <Factory size={26} />, desc: 'Production sites, assembly lines and plant operations.' },
  { id: 'export-houses', name: 'Export Houses', icon: <Globe size={26} />, desc: 'Export logistics, packing and compliance workflows.' },
  { id: 'pharma', name: 'Pharmaceuticals', icon: <TestTube size={26} />, desc: 'Regulated manufacturing and evidence retention.' },
  { id: 'logistics', name: 'Logistics Operations', icon: <Truck size={26} />, desc: 'Transport hubs, terminals and inventory traceability.' }
];

export default function IndustryCarousel({ themeColor = 'var(--accent)' }: { themeColor?: string }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const prev = () => setIndex(i => (i - 1 + industries.length) % industries.length);
  const next = () => setIndex(i => (i + 1) % industries.length);

  const onDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) prev();
    else if (info.offset.x < -threshold) next();
  };

  return (
    <section 
      className="industry-carousel-section"
      style={{
        backgroundColor: '#EAF6FF',
        background: 'none',
        padding: '80px 0',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: 40, textAlign: 'center' }}>
          <span className="section-subtitle" style={{ color: '#D4AF37', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>Target Verticals</span>
          <h2 className="section-title" style={{ color: '#0B0F19', fontSize: '32px', fontWeight: '800', fontFamily: 'var(--font-headings)', margin: 0 }}>Industries Served</h2>
          <p className="section-desc" style={{ color: '#475569', fontSize: '18px', lineHeight: '1.6', marginTop: '12px', marginBottom: 0 }}>Customized configuration templates are available for these primary sectors.</p>
        </div>

        <div className="industry-carousel-canvas" style={{ padding: '40px 0' }}>
          <div className="carousel-platform">
            <div className="platform-rings" style={{ boxShadow: '0 0 0 2px rgba(212, 175, 55, 0.12) inset', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 40%)' }} aria-hidden />
            <div className="platform-pulse" style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(10,20,36,0) 60%)' }} aria-hidden />
          </div>

          <button 
            className="carousel-nav carousel-prev" 
            onClick={prev} 
            aria-label="Previous"
            style={{
              backgroundColor: '#0B0F19',
              border: '1.5px solid rgba(212, 175, 55, 0.25)',
              color: '#D4AF37',
              boxShadow: '0 4px 12px rgba(11, 15, 25, 0.15)'
            }}
          >
            <ChevronLeft />
          </button>

          <div className="carousel-viewport">
            <motion.div className="carousel-track" ref={trackRef} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={onDragEnd} whileTap={{ cursor: 'grabbing' }}>
              {industries.map((it, i) => {
                const offset = i - index;
                const isActive = i === index;
                const scale = isActive ? 1.1 : Math.max(0.88, 1 - Math.abs(offset) * 0.08);
                const x = offset * 60;

                return (
                  <motion.div 
                    key={it.id} 
                    className={`industry-card ${isActive ? 'is-active' : ''}`} 
                    style={{ 
                      scale,
                      backgroundColor: '#0B0F19',
                      background: 'none',
                      border: isActive ? '1.5px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.25)',
                      boxShadow: isActive ? '0 20px 50px rgba(11, 15, 25, 0.25)' : '0 8px 30px rgba(11, 15, 25, 0.15)',
                      backdropFilter: 'none',
                      WebkitBackdropFilter: 'none'
                    }} 
                    animate={{ x }} 
                    transition={{ type: 'spring', stiffness: 160, damping: 22 }} 
                    whileHover={{ y: -8 }}
                  >
                    <div className="industry-card-inner" style={{ padding: '24px' }}>
                      <div className="industry-icon" style={{ borderColor: 'rgba(212, 175, 55, 0.25)', backgroundColor: 'rgba(212, 175, 55, 0.08)', color: '#FFD700' }}>{it.icon}</div>
                      <div className="industry-body">
                        <div className="industry-name" style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: '700' }}>{it.name}</div>
                        <div className="industry-desc" style={{ color: '#E5E7EB', fontSize: '18px', lineHeight: '1.5', marginTop: '8px' }}>{it.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button 
            className="carousel-nav carousel-next" 
            onClick={next} 
            aria-label="Next"
            style={{
              backgroundColor: '#0B0F19',
              border: '1.5px solid rgba(212, 175, 55, 0.25)',
              color: '#D4AF37',
              boxShadow: '0 4px 12px rgba(11, 15, 25, 0.15)'
            }}
          >
            <ChevronRight />
          </button>

          <div className="carousel-particles" aria-hidden>
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="particle" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
