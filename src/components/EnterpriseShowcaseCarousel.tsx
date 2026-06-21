import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Capability {
  title: string;
  desc: string;
  image: string;
}

const capabilities: Capability[] = [
  {
    title: 'Project Management',
    desc: 'Structured execution roadmaps tracking dependencies, risk metrics, and release timelines for system predictability.',
    image: '/images/project_management.jpg'
  },
  {
    title: 'Consulting Services',
    desc: 'Deep process diagnostics to align ERP setups, logistics pipelines, and warehouse tracking with corporate targets.',
    image: '/images/business_consultation_1780850767888.png'
  },
  {
    title: 'Web Application Development',
    desc: 'High-performance cloud databases and executive dashboards built utilizing secure React & TypeScript.',
    image: '/images/sol_dev_project.jpg'
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
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Easing curve for high-end transitions
  const premiumTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  // Timer interval for progress bar
  useEffect(() => {
    if (isHovered) return;

    const tickTime = 50; // ms
    const increment = (tickTime / 5000) * 100; // 5000ms duration

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, tickTime);

    return () => window.clearInterval(interval);
  }, [isHovered, index]);

  // Handle slide transition when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      setDirection('next');
      setIndex((current) => (current + 1) % total);
      setProgress(0);
    }
  }, [progress, total]);

  const goToSlide = (dir: 'prev' | 'next') => {
    setProgress(0);
    setDirection(dir);
    setIndex((current) =>
      dir === 'next'
        ? (current + 1) % total
        : (current - 1 + total) % total
    );
  };

  const handleDragEnd = (_event: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) {
      goToSlide('next');
    } else if (info.offset.x > 60) {
      goToSlide('prev');
    }
  };

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #061A33 0%, #030D1A 100%)',
        padding: '48px 0',
        borderRadius: 20,
        border: '1px solid rgba(200, 162, 118, 0.08)',
        boxShadow: 'var(--shadow-xl)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        .showcase-grid {
          display: grid;
          grid-template-columns: 18% 64% 18%;
          gap: 24px;
          align-items: center;
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        .showcase-side {
          display: block;
        }
        @media (max-width: 992px) {
          .showcase-grid {
            grid-template-columns: 10% 80% 10%;
            gap: 16px;
          }
        }
        @media (max-width: 768px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .showcase-side {
            display: none !important;
          }
        }
      `}</style>

      <div className="container" style={{ color: '#E6EEF8' }}>
        <div className="showcase-grid">
          {/* Left Preview Image */}
          <motion.div
            key={`left-${index}`}
            initial={{ opacity: 0.15, scale: 0.8, rotateY: 25 }}
            animate={{ opacity: 0.45, scale: 0.85, rotateY: 12 }}
            transition={premiumTransition}
            style={{
              height: '320px',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transformStyle: 'preserve-3d',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
            onClick={() => goToSlide('prev')}
            whileHover={{ opacity: 0.7, scale: 0.88, transition: { duration: 0.2 } }}
            className="showcase-side"
          >
            <img
              src={capabilities[(index - 1 + total) % total].image}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Active Center Slide Container */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              cursor: 'grab'
            }}
            whileTap={{ cursor: 'grabbing' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Stable Active Image Container */}
            <div
              style={{
                height: 400,
                borderRadius: 18,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(2, 6, 23, 0.85), 0 0 40px rgba(200, 162, 118, 0.15)',
                border: '1.5px solid rgba(200, 162, 118, 0.25)',
                background: '#0B1833'
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: direction === 'next' ? 60 : -60 
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: direction === 'next' ? -60 : 60 
                  }}
                  transition={premiumTransition}
                  style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                >
                  <motion.img
                    initial={{ 
                      x: direction === 'next' ? '12%' : '-12%', 
                      scale: 1.15 
                    }}
                    animate={{ 
                      x: '0%', 
                      scale: 1.05 
                    }}
                    transition={premiumTransition}
                    src={capabilities[index].image}
                    alt={capabilities[index].title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stable Content Card Wrapper */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderRadius: 16,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 14px 42px rgba(2,6,23,0.58)',
                gap: 20,
                flexWrap: 'wrap',
                minHeight: '110px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: '1 1 300px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ color: '#D4AF37', fontWeight: 900, fontSize: 18, fontFamily: 'var(--font-headings)', minWidth: '60px' }}>
                  {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>

                <div style={{ flex: 1, position: 'relative', minHeight: '64px' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                    >
                      <h3 style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-headings)' }}>
                        {capabilities[index].title}
                      </h3>
                      <p style={{ fontSize: 14, color: 'rgba(230,238,248,0.85)', marginTop: 4, margin: '4px 0 0 0', lineHeight: 1.4 }}>
                        {capabilities[index].desc}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Stable Progress Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 160, flexGrow: 0 }}>
                <div style={{ width: 120, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 8, overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #C8A276, #D4AF37)',
                      transition: isHovered ? 'none' : 'width 50ms linear',
                      borderRadius: 8
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Preview Image */}
          <motion.div
            key={`right-${index}`}
            initial={{ opacity: 0.15, scale: 0.8, rotateY: -25 }}
            animate={{ opacity: 0.45, scale: 0.85, rotateY: -12 }}
            transition={premiumTransition}
            style={{
              height: '320px',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transformStyle: 'preserve-3d',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
            onClick={() => goToSlide('next')}
            whileHover={{ opacity: 0.7, scale: 0.88, transition: { duration: 0.2 } }}
            className="showcase-side"
          >
            <img
              src={capabilities[(index + 1) % total].image}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
