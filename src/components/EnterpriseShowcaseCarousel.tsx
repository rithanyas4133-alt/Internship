import { useEffect, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isHovered, total]);

  const goToSlide = (direction: 'prev' | 'next') => {
    setIndex((current) =>
      direction === 'next'
        ? (current + 1) % total
        : (current - 1 + total) % total
    );
  };

  const handleDragEnd = (_event: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -80) {
      goToSlide('next');
    } else if (info.offset.x > 80) {
      goToSlide('prev');
    }
  };

  return (
    <section
      style={{ background: '#061A33', padding: '36px 0', borderRadius: 12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container" style={{ color: '#E6EEF8' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '15% 70% 15%',
              gap: 16,
              alignItems: 'center'
            }}
          >
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0.45, x: -24 }}
              animate={{ opacity: 0.88, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                height: 420,
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 18px 48px rgba(2,6,23,0.62)',
                transform: 'rotateY(12deg)'
              }}
            >
              <img
                src={capabilities[(index - 1 + total) % total].image}
                alt={capabilities[(index - 1 + total) % total].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key={`center-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                cursor: 'grab'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  height: 340,
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 42px 90px rgba(2,6,23,0.78), inset 0 0 0 1px rgba(212,175,55,0.06)',
                  background: '#0B1833'
                }}
              >
                <motion.img
                  key={capabilities[index].image}
                  src={capabilities[index].image}
                  alt={capabilities[index].title}
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              <motion.div
                key={`content-${index}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px',
                  borderRadius: 12,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 14px 42px rgba(2,6,23,0.58)'
                }}
              >
                <div style={{ color: '#D4AF37', fontWeight: 900, fontSize: 16 }}>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>

                <div style={{ flex: 1, marginLeft: 16 }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#FFFFFF' }}>{capabilities[index].title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(230,238,248,0.95)', marginTop: 6 }}>{capabilities[index].desc}</div>
                </div>

                <div style={{ width: 160, marginLeft: 16 }}>
                  <div style={{ height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 8, overflow: 'hidden' }}>
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: `${((index + 1) / total) * 100}%` }}
                      transition={{ duration: 0.8 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg,#C8A276,#D4AF37)' }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0.45, x: 24 }}
              animate={{ opacity: 0.88, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                height: 420,
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 18px 48px rgba(2,6,23,0.62)',
                transform: 'rotateY(-12deg)'
              }}
            >
              <img
                src={capabilities[(index + 1) % total].image}
                alt={capabilities[(index + 1) % total].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
