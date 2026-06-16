import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Capability {
  title: string;
  desc: string;
  image: string;
}

const capabilities: Capability[] = [
  {
    title: 'Project Management',
    desc: 'Structured execution roadmaps tracking dependencies, risk metrics, and release timelines for system predictability.',
    image: '/images/vericea_dashboard_mockup.png'
  },
  {
    title: 'Consulting Services',
    desc: 'Deep process diagnostics to align ERP setups, logistics pipelines, and warehouse tracking with corporate targets.',
    image: '/images/business_consultation_1780850767888.png'
  },
  {
    title: 'Web Application Development',
    desc: 'High-performance cloud databases and executive dashboards built utilizing secure React & TypeScript.',
    image: '/images/product_tab_compliance_1780851018319.png'
  },
  {
    title: 'Mobile Application Development',
    desc: 'Offline-capable floor logging systems enabling supervisors and field teams to report status live.',
    image: '/images/manufacturing_floor_1780850784796.png'
  },
  {
    title: 'Product Development',
    desc: 'Transforming industrial requirements into scalable custom SaaS products with modular structures.',
    image: '/images/flagship_familytree.jpg'
  },
  {
    title: 'Enterprise Software Services',
    desc: 'Consulting, custom programming, and application delivery engineered for industrial scale.',
    image: '/images/industrial_control_room_1780849774868.png'
  }
];

export default function EnterpriseShowcaseCarousel() {
  const total = capabilities.length;
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoRef = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) {
      if (autoRef.current) window.clearInterval(autoRef.current);
      return;
    }
    autoRef.current = window.setInterval(() => setIndex(i => (i + 1) % total), 5000);
    return () => { if (autoRef.current) window.clearInterval(autoRef.current); };
  }, [isHovered, total]);


  return (
    <section
      style={{ background: '#061A33', padding: '36px 0', borderRadius: 12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container" ref={containerRef} style={{ color: '#E6EEF8' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
          {/* Prev button centered */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            <button onClick={() => setIndex((index - 1 + total) % total)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.06)', color: '#E6EEF8', padding: '8px 14px', borderRadius: 8, cursor: 'pointer' }}>Previous</button>
          </div>

          {/* Three-column center-focused slider: 15% | 70% | 15% */}
          <div style={{ display: 'grid', gridTemplateColumns: '15% 70% 15%', gap: 16, alignItems: 'center' }}>
            {/* Left preview */}
            <motion.div key="left" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ height: 420, borderRadius: 12, overflow: 'hidden', boxShadow: '0 18px 48px rgba(2,6,23,0.6)', transform: 'rotateY(12deg)' }}>
              <img src={capabilities[(index - 1 + total) % total].image} alt={capabilities[(index - 1 + total) % total].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>

            {/* Active center */}
            <motion.div key="center" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <motion.div whileHover={{ scale: 1.02 }} style={{ height: 340, borderRadius: 12, overflow: 'hidden', position: 'relative', boxShadow: '0 40px 90px rgba(2,6,23,0.7)', border: '1px solid rgba(212,175,55,0.06)' }}>
                <img src={capabilities[index].image} alt={capabilities[index].title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </motion.div>

              {/* Glass panel below image with number, title, description */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', borderRadius: 12, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.008))', border: '1px solid rgba(255,255,255,0.04)', boxShadow: '0 12px 40px rgba(2,6,23,0.6)' }}>
                <div style={{ color: '#D4AF37', fontWeight: 900, fontSize: 16 }}>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>

                <div style={{ flex: 1, marginLeft: 16 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF' }}>{capabilities[index].title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(230,238,248,0.95)', marginTop: 6 }}>{capabilities[index].desc}</div>
                </div>

                <div style={{ width: 160, marginLeft: 16 }}>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.03)', borderRadius: 8, overflow: 'hidden' }}>
                    <motion.div key={index} initial={{ width: 0 }} animate={{ width: `${((index + 1) / total) * 100}%` }} transition={{ duration: 0.8 }} style={{ height: '100%', background: 'linear-gradient(90deg,#C8A276,#D4AF37)' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right preview */}
            <motion.div key="right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} style={{ height: 420, borderRadius: 12, overflow: 'hidden', boxShadow: '0 18px 48px rgba(2,6,23,0.6)', transform: 'rotateY(-12deg)' }}>
              <img src={capabilities[(index + 1) % total].image} alt={capabilities[(index + 1) % total].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>

          {/* Next button centered */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
            <button onClick={() => setIndex((index + 1) % total)} style={{ background: 'linear-gradient(135deg,#C8A276,#D4AF37)', border: 'none', color: '#071027', padding: '8px 14px', borderRadius: 8, fontWeight: 800, cursor: 'pointer' }}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}
