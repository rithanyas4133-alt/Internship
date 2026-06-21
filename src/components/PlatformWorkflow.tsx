import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardList, UserCheck, UploadCloud, CheckCircle2, ShieldCheck, BarChart2 } from 'lucide-react';

const stages = [
  { key: '01', title: 'Compliance Standards Setup', icon: <FileText size={20} />, img: '/images/product_tab_compliance_1780851018319.png' },
  { key: '02', title: 'Automated Checklist Generation', icon: <ClipboardList size={20} />, img: '/images/product_tab_manufacturing_1780851000218.png' },
  { key: '03', title: 'Floor-Level Task Assignment', icon: <UserCheck size={20} />, img: '/images/manufacturing_floor_1780850784796.png' },
  { key: '04', title: 'Evidence Upload & Documentation', icon: <UploadCloud size={20} />, img: '/images/flagship_familytree.jpg' },
  { key: '05', title: 'Supervisor Verification', icon: <CheckCircle2 size={20} />, img: '/images/quality_audit_1780850801169.png' },
  { key: '06', title: 'Audit Readiness Validation', icon: <ShieldCheck size={20} />, img: '/images/industrial_control_room_1780849774868.png' },
  { key: '07', title: 'Executive Compliance Dashboard', icon: <BarChart2 size={20} />, img: '/images/vericea_dashboard_mockup.png' }
];

export default function PlatformWorkflow({ accent = 'var(--accent)' }: { accent?: string }) {
  return (
    <section 
      className="platform-workflow-section" 
      aria-label="How the platform works"
      style={{
        backgroundColor: '#EAF6FF',
        background: 'none',
        padding: '80px 0',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container">
        <div className="workflow-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-subtitle" style={{ color: '#D4AF37', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '8px' }}>How It Works</span>
          <h2 className="section-title" style={{ color: '#0B0F19', fontSize: '32px', fontWeight: '800', fontFamily: 'var(--font-headings)', margin: 0 }}>How the Platform Works</h2>
          <p className="section-desc" style={{ color: '#475569', fontSize: '18px', lineHeight: '1.6', marginTop: '12px', marginBottom: 0 }}>Transforming compliance requirements into a structured, auditable digital process.</p>
        </div>

        <div className="workflow-canvas">
          <motion.div className="workflow-track" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {stages.map((s, i) => (
              <motion.div
                key={s.key}
                className="workflow-step"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }
                }}
                whileHover={{ scale: 1.02 }}
                role="article"
                aria-label={s.title}
              >
                <div 
                  className="workflow-connector" 
                  aria-hidden 
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)'
                  }}
                />

                <div className="workflow-card">
                  <div className="workflow-icon" style={{ borderColor: accent }}>
                    <div className="workflow-icon-fill" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.12), rgba(200,162,118,0.06))' }}>{s.icon}</div>
                  </div>

                  <div className="workflow-card-body">
                    <div className="workflow-step-num" style={{ color: '#D4AF37', fontSize: '14px', fontWeight: '700' }}>{s.key}</div>
                    <h4 className="workflow-step-title" style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '700', margin: 0 }}>{s.title}</h4>
                  </div>

                  <div className="workflow-thumb">
                    <img src={s.img} alt={s.title} loading="lazy" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
