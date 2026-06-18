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
    <section className="platform-workflow-section" aria-label="How the platform works">
      <div className="container">
        <div className="workflow-header">
          <span className="section-subtitle" style={{ color: accent }}>How It Works</span>
          <h2 className="section-title">How the Platform Works</h2>
          <p className="section-desc">Transforming compliance requirements into a structured, auditable digital process.</p>
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
                <div className="workflow-connector" aria-hidden />

                <div className="workflow-card">
                  <div className="workflow-icon" style={{ borderColor: accent }}>
                    <div className="workflow-icon-fill" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.12), rgba(200,162,118,0.06))' }}>{s.icon}</div>
                  </div>

                  <div className="workflow-card-body">
                    <div className="workflow-step-num">{s.key}</div>
                    <h4 className="workflow-step-title">{s.title}</h4>
                  </div>

                  <div className="workflow-thumb">
                    <img src={s.img} alt={s.title} loading="lazy" />
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
