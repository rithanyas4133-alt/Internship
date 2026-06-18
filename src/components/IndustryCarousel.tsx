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
    <section className="industry-carousel-section">
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: 18 }}>
          <span className="section-subtitle" style={{ color: themeColor }}>Target Verticals</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>Industries Served</h2>
          <p className="section-desc" style={{ color: '#9CA3AF' }}>Customized configuration templates are available for these primary sectors.</p>
        </div>

        <div className="industry-carousel-canvas">
          <div className="carousel-platform">
            <div className="platform-rings" aria-hidden />
            <div className="platform-pulse" aria-hidden />
          </div>

          <button className="carousel-nav carousel-prev" onClick={prev} aria-label="Previous">
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
                  <motion.div key={it.id} className={`industry-card ${isActive ? 'is-active' : ''}`} style={{ scale }} animate={{ x }} transition={{ type: 'spring', stiffness: 160, damping: 22 }} whileHover={{ y: -8 }}>
                    <div className="industry-card-inner">
                      <div className="industry-icon" style={{ borderColor: themeColor }}>{it.icon}</div>
                      <div className="industry-body">
                        <div className="industry-name">{it.name}</div>
                        <div className="industry-desc">{it.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button className="carousel-nav carousel-next" onClick={next} aria-label="Next">
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
