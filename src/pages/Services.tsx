import { useState } from 'react';
import { motion as motionFramer } from 'framer-motion';
import { 
  Briefcase, 
  Lightbulb, 
  Monitor, 
  Smartphone, 
  Layers, 
  Settings, 
  Factory, 
  Cog, 
  Shirt, 
  HeartHandshake, 
  ShoppingBag, 
  Landmark, 
  Truck, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const coreServices = [
    {
      title: 'Project Management',
      icon: <Briefcase />,
      desc: 'Structured execution timelines, resource management, and risk mitigation workflows built specifically to support large industrial technology deployments.'
    },
    {
      title: 'Consulting Services',
      icon: <Lightbulb />,
      desc: 'Expert reviews of standard ERP, CRM, and logistics frameworks. We analyze your process inefficiencies and identify scaling opportunities.'
    },
    {
      title: 'Application Delivery',
      icon: <Settings />,
      desc: 'Seamless deployment of pre-configured software solutions, ensuring third-party APIs, data layers, and device interfaces link without delays.'
    },
    {
      title: 'Product Development',
      icon: <Layers />,
      desc: 'Engineering proprietary tools tailored to unique workflows, moving manual shop floor processes into robust automated digital applications.'
    },
    {
      title: 'Web Development',
      icon: <Monitor />,
      desc: 'Creating high-fidelity analytics platforms and dashboard hubs. Secure database designs with optimized page speed and responsive web grids.'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone />,
      desc: 'Developing specialized hand-held software. Includes offline supervisor entries, equipment alerts, bar-code readers, and quality logs.'
    }
  ];

  const processStages = [
    {
      label: 'Discovery',
      title: 'Stage 1: Operational Audit & Scope Definition',
      subtitle: 'Auditing manual operations on the shop floor',
      details: 'We begin by studying your existing workflows. Our engineers evaluate current bottlenecks, log sheets, data entry speeds, and software integrations to define precise functional targets.',
      deliverables: ['Functional Scope Document', 'Integration Compatibility Report', 'ROI Projection Analysis']
    },
    {
      label: 'Planning',
      title: 'Stage 2: Architecture & SLA Engineering',
      subtitle: 'Mapping software designs to operational load',
      details: 'We outline the core data tables, API gateways, system boundaries, and user hierarchies. The project timeline is structured into clear sprints with specific milestone SLAs.',
      deliverables: ['System Architecture Diagram', 'SLA Agreement', 'Project Sprint Schedule']
    },
    {
      label: 'Design',
      title: 'Stage 3: High-Fidelity UI/UX & Data Modeling',
      subtitle: 'Visualizing dashboard consoles and floor inputs',
      details: 'Our product designers create mock dashboards matching the premium visuals of modern SaaS platforms. Inputs are simplified to ensure high accuracy in high-stress factory floors.',
      deliverables: ['Interactive UI Prototypes', 'Database Schema Models', 'User Access Matrices']
    },
    {
      label: 'Development',
      title: 'Stage 4: Modular Agile Coding',
      subtitle: 'Writing secure, containerized, and fast code',
      details: 'Engineering is split into microservices. Frontend components are linked to backend logic using secure APIs, integrating existing warehouse scanners, production lines, and legacy databases.',
      deliverables: ['Production-Ready Codebase', 'API Integration Gateways', 'Encrypted Database Setup']
    },
    {
      label: 'Testing',
      title: 'Stage 5: High-Load QA & Validation audits',
      subtitle: 'Simulating floor volumes and input exceptions',
      details: 'Before shipping, the platform undergoes stress testing. We simulate peak production volumes, verify database failovers, and perform compliance checks against international guidelines.',
      deliverables: ['Stress Testing Report', 'Vulnerability Scan Logs', 'User Acceptance Test Sign-off']
    },
    {
      label: 'Deployment',
      title: 'Stage 6: Server Setup & Handover Training',
      subtitle: 'Activating cloud servers and supervisor training',
      details: 'We provision production servers, migrate existing database records, and activate dashboard interfaces. Onsite walkthrough training sessions are conducted for floor supervisors and team leaders.',
      deliverables: ['Active Live Instances', 'Operator User Manuals', 'Handover Certification']
    },
    {
      label: 'Support',
      title: 'Stage 7: Active SLAs & System Enhancements',
      subtitle: 'Ensuring continuous system operational uptime',
      details: 'Our Bangalore team provides active assistance. We monitor server loads, release hotfixes, and update system features as your business scales and product lines expand.',
      deliverables: ['24/7 SLA Service Desk', 'Performance Health Checks', 'Monthly Progress Review']
    }
  ];

  const industriesServed = [
    { name: 'Manufacturing', icon: <Factory /> },
    { name: 'Engineering', icon: <Cog /> },
    { name: 'Textiles', icon: <Shirt /> },
    { name: 'NGO & Non-Profits', icon: <HeartHandshake /> },
    { name: 'Retail & Distribution', icon: <ShoppingBag /> },
    { name: 'Finance & Banking', icon: <Landmark /> },
    { name: 'Logistics & Shipping', icon: <Truck /> }
  ];

  return (
    <motionFramer.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
    >
      {/* --- HERO SECTION --- */}
      <section className="inner-hero services-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Our Expertise</span>
          <h1 className="inner-hero-title">Technology Solutions That Drive Business Growth</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto' }}>
            We support enterprise modernization through consulting, design integration, and customized SaaS deployment.
          </p>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {coreServices.map((service, index) => (
              <motionFramer.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="glass-card"
              >
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.desc}</p>
              </motionFramer.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE DEVELOPMENT PROCESS --- */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Workflow</span>
            <h2 className="section-title">Our Development Lifecycle</h2>
            <p className="section-desc">Click through the stages of our structured process from audit to long-term support.</p>
          </div>

          <div className="process-wrapper">
            {/* Steps tabs indicators */}
            <div className="process-tabs">
              {processStages.map((stage, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`process-tab-btn ${activeStage === index ? 'active' : ''}`}
                >
                  {index + 1}
                  <span className="process-tab-label">{stage.label}</span>
                </button>
              ))}
            </div>

            {/* Stage content details */}
            <motionFramer.div
              key={activeStage}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="process-content-card"
            >
              <div className="grid-2" style={{ gap: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px', color: 'var(--primary)' }}>
                    {processStages[activeStage].title}
                  </h3>
                  <h4 style={{ fontSize: '14px', color: 'var(--secondary)', fontWeight: '600', marginBottom: '20px' }}>
                    {processStages[activeStage].subtitle}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
                    {processStages[activeStage].details}
                  </p>
                  <button onClick={() => navigate('/contact')} className="btn btn-cta btn-sm">
                    Talk to our Team
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div style={{ padding: '24px', backgroundColor: 'var(--alternate-bg)', borderRadius: 'var(--border-radius-md)', border: '1px solid rgba(10,37,64,0.05)' }}>
                  <h4 style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--secondary)' }} />
                    Key Deliverables
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {processStages[activeStage].deliverables.map((deliv, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-main)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--cta)', display: 'inline-block' }}></span>
                        {deliv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motionFramer.div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SERVED --- */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle">Sectors</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-desc">Specialized software configurations adapting to compliance standards across sectors.</p>
          </div>

          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {industriesServed.map((ind, index) => (
              <motionFramer.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="glass-card" 
                style={{ padding: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div className="card-icon" style={{ backgroundColor: 'var(--alternate-bg)', color: 'var(--primary)', marginBottom: '16px' }}>{ind.icon}</div>
                <h3 className="card-title" style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>{ind.name}</h3>
              </motionFramer.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Need a Custom Integration?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '540px', margin: '0 auto 32px auto' }}>
            Schedule a session with our developers to review existing systems and scope custom integrations.
          </p>
          <button onClick={() => navigate('/contact')} className="btn btn-cta">
            Request Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </motionFramer.div>
  );
}
