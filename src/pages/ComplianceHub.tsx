import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck2, 
  LockKeyhole, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  ChevronDown,
  ChevronUp,
  Cpu,
  TrendingUp,
  Factory,
  FileText,
  FileCheck,
  Info,
  UserCheck
} from 'lucide-react';

export default function ComplianceHub() {
  const navigate = useNavigate();

  // State for Major Audit Types (Expandable on click)
  const [expandedAudit, setExpandedAudit] = useState<number | null>(null);

  // State for "How Vericea Works" Interactive Tabs
  const [activeTab, setActiveTab] = useState<number>(0);

  // State for "Audit Command Center" selected stage
  const [activeCommandStage, setActiveCommandStage] = useState<number>(0);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Framer Motion Animation Settings
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };



  // 1. "Why Compliance Matters" Card Data
  // 2. "Key Compliance Challenges" Data
  const challenges = [
    {
      num: '01',
      title: 'Time-Consuming Audit Preparation',
      desc: 'Manual collection of evidence, spreadsheets, and paper records leads to severe operational delays, tracking errors, and last-minute preparation stress.'
    },
    {
      num: '02',
      title: 'Limited Visibility',
      desc: 'Corporate management and site directors lack a unified dashboard to monitor real-time readiness status, pending actions, and overall plant safety scores.'
    },
    {
      num: '03',
      title: 'Repeated Non-Conformities',
      desc: 'The same compliance, quality, and environmental issues reappear during subsequent audits due to ineffective corrective action (CAPA) tracking.'
    },
    {
      num: '04',
      title: 'Dependency on Individuals',
      desc: 'Critical knowledge regarding compliance rules, checklists, and documentation is locked with a few veteran employees rather than being institutionalized.'
    },
    {
      num: '05',
      title: 'Corrective Action Monitoring',
      desc: 'Assigned supervisors struggle to track and verify the timely execution, effectiveness, and permanent closure of corrective actions.'
    },
    {
      num: '06',
      title: 'Cross-Department Accountability',
      desc: 'Difficulty in distributing and enforcing compliance ownership consistently across operations, maintenance, quality control, and HR teams.'
    }
  ];

  // 3. "Audit Command Center" Stages Data
  const commandCenterStages = [
    {
      stageNumber: '01',
      title: 'Audit Scheduling',
      category: 'Initiation',
      icon: <Calendar size={18} />,
      desc: 'Define periodic audit frequencies (daily, weekly, monthly, quarterly and annual) and create structured audit plans across departments, locations and business units.',
      activities: ['Define audit calendar', 'Set frequencies', 'Schedule locations', 'Establish priorities'],
      outcome: 'A clear compliance roadmap with planned audit activities.',
      image: '/images/business_consultation_1780850767888.png'
    },
    {
      stageNumber: '02',
      title: 'Resource Allocation',
      category: 'Planning',
      icon: <Users size={18} />,
      desc: 'Assign qualified auditors, department representatives and compliance owners to execute audit activities efficiently.',
      activities: ['Auditor assignment', 'Team allocation', 'Responsibility mapping', 'Department ownership'],
      outcome: 'Clearly defined accountability across the organization.',
      image: '/images/about_us_md_cards_1780850959717.png'
    },
    {
      stageNumber: '03',
      title: 'Interviews & Assessments',
      category: 'Execution',
      icon: <UserCheck size={18} />,
      desc: 'Engage employees, supervisors and process owners using predefined questionnaires and structured assessments.',
      activities: ['Staff interviews', 'Process reviews', 'Awareness evaluation', 'Compliance checks'],
      outcome: 'Understanding of process adherence and compliance maturity.',
      image: '/images/about_us_section_1780850946744.png'
    },
    {
      stageNumber: '04',
      title: 'Document Verification',
      category: 'Execution',
      icon: <FileText size={18} />,
      desc: 'Review operating procedures, certifications, legal registers, calibration records and supporting documentation.',
      activities: ['SOP review', 'Certification checks', 'Record validation', 'Documentation assessment'],
      outcome: 'Verification of documented compliance requirements.',
      image: '/images/product_tab_compliance_1780851018319.png'
    },
    {
      stageNumber: '05',
      title: 'Production Observation',
      category: 'Execution',
      icon: <Factory size={18} />,
      desc: 'Observe production activities, workplace conditions, machinery operations and safety practices.',
      activities: ['Factory walkthroughs', 'Safety inspections', 'Process observation', 'Equipment verification'],
      outcome: 'Validation of actual operational practices.',
      image: '/images/safety_inspection_1780850817856.png'
    },
    {
      stageNumber: '06',
      title: 'Quality System Verification',
      category: 'Execution',
      icon: <Cpu size={18} />,
      desc: 'Evaluate quality management systems, process controls, defect handling and operational consistency.',
      activities: ['Process audits', 'Quality checks', 'Non-conformance review', 'Corrective action verification'],
      outcome: 'Improved quality system effectiveness.',
      image: '/images/quality_audit_1780850801169.png'
    },
    {
      stageNumber: '07',
      title: 'Social Compliance Verification',
      category: 'Execution',
      icon: <ShieldCheck size={18} />,
      desc: 'Assess labor practices, employee welfare, workplace ethics and social compliance standards.',
      activities: ['Labor verification', 'Welfare assessment', 'Working hour review', 'Ethical compliance checks'],
      outcome: 'Enhanced workforce compliance and ethical standards.',
      image: '/images/manufacturing_floor_1780850784796.png'
    },
    {
      stageNumber: '08',
      title: 'Final Reporting',
      category: 'Closure',
      icon: <FileCheck size={18} />,
      desc: 'Compile findings, classify observations, document non-conformities and generate comprehensive reports.',
      activities: ['Findings summary', 'NC documentation', 'Rating generation', 'Report publishing'],
      outcome: 'Actionable audit reports ready for management review.',
      image: '/images/vericea_dashboard_mockup.png'
    },
    {
      stageNumber: '09',
      title: 'Analytics & Continuous Improvement',
      category: 'Optimization',
      icon: <TrendingUp size={18} />,
      desc: 'Analyze historical audits, identify recurring issues and drive continuous improvement initiatives.',
      activities: ['Trend analysis', 'Root cause review', 'KPI tracking', 'Improvement planning'],
      outcome: 'Long-term compliance excellence and operational improvement.',
      image: '/images/logistics_terminal_1780850837146.png'
    }
  ];

  // 4. "Major Audit Types" Data
  const auditTypes = [
    {
      title: 'Technical & Quality Audit (TQA)',
      desc: 'Evaluate quality management systems, operational process controls, equipment calibrations, defect management, and production standards.',
      details: 'Essential for compliance with global standards like ISO 9001. Focuses on machine health registers, incoming raw material inspections, laboratory test logs, worker training logs, and process capability indexing (Cp/Cpk).'
    },
    {
      title: 'Social Compliance Audit (SCA)',
      desc: 'Assess workplace ethical practices, fair wages, working hours, employee welfare, sanitation, and health & safety compliance.',
      details: 'Ensures compliance with international buyers standards (like BSCI, SMETA, WRAP). Covers working hour records, pay registers, employee contracts, fire safety systems, dormitory conditions, and chemical safety data sheets (MSDS).'
    },
    {
      title: 'Initial Factory Evaluation (IFE)',
      desc: 'Comprehensive evaluation of facility capacity, physical infrastructure, machinery, and management capability before business engagement.',
      details: 'Required during vendor onboarding. Evaluates plant layout viability, power backup capacities, material flow safety, machine redundancy plans, security protocols, and operational licenses.'
    },
    {
      title: 'Internal Audit',
      desc: 'Routine checks conducted by internal safety/quality coordinators to monitor ongoing process effectiveness and audit readiness.',
      details: 'Helps teams self-correct before external audits. Features quick daily safety check-sheets, weekly machinery checks, monthly chemical hazard drills, and quarterly regulatory gap assessments.'
    },
    {
      title: 'Buyer Audit',
      desc: 'Customer-specific compliance audits mapping to the safety, ethical, and quality expectations of global retailers and brands.',
      details: 'Tailored checklists customized to specific corporate codes of conduct. Includes direct floor inspections, worker interview samples, and evidence archives accessible to the customer compliance portal.'
    },
    {
      title: 'Certification Body Audit',
      desc: 'Formal third-party assessments to secure and renew international certifications (ISO, OSHA, HIGG, OEKO-TEX).',
      details: 'Focuses heavily on compliance logs, management review records, previous corrective actions (CAPA), documentation history, and management policy commitments.'
    }
  ];

  // 5. "How Vericea Works" Interactive Tabs Data
  const worksTabs = [
    {
      title: 'Plan',
      subtitle: 'Audit Scheduling & Scoping',
      desc: 'Configure customizable audit schedules based on calendar cycles or dynamic triggers. Allocate responsibilities to specific plant inspectors, safety leads, or external agencies. Scope specific audit checklists, department targets, and regulatory standards to be verified.',
      features: ['Dynamic Master Planner', 'Auditor Assignment System', 'Standard Checklist Mapping'],
      image: '/images/business_consultation_1780850767888.png',
      badge: 'Planning & Governance'
    },
    {
      title: 'Assess',
      subtitle: 'Mobile & Tablet Floor Auditing',
      desc: 'Equip floor inspectors with standard tablet/mobile templates. Inspectors record findings live on the production floor, completing structured compliance questions (Yes/No, scored, or textual). The system operates seamlessly offline in areas with poor network coverage.',
      features: ['Configurable Audit Templates', 'Scored & Qualitative Questions', 'Offline-First Floor Logging'],
      image: '/images/safety_inspection_1780850817856.png',
      badge: 'Floor Inspections'
    },
    {
      title: 'Verify',
      subtitle: 'Rich Media Evidence Collection',
      desc: 'Prevent verbal approximations. Inspectors capture and attach real-time evidence directly to specific checklist questions. Store photos with annotations, voice notes explaining issues, legal PDF uploads, and video records into the secure Vericea Evidence Locker.',
      features: ['Secure Evidence Locker', 'Photo Annotations & Tags', 'Multi-format File Uploads'],
      image: '/images/vericea_dashboard_mockup.png',
      badge: 'Evidence Management'
    },
    {
      title: 'Monitor',
      subtitle: 'Real-time Metrics & Dashboarding',
      desc: 'View compliance performance globally or zoom in on individual branches, departments, or machine lines. Track pending corrective actions, open non-conformities, and overall safety scores. Get automated email reports and urgent compliance flags as they arise.',
      features: ['Multi-plant Performance Matrix', 'CAPA Routing & Ticket Tracking', 'Executive Email Digests'],
      image: '/images/product_tab_compliance_1780851018319.png',
      badge: 'Management Visibility'
    },
    {
      title: 'Improve',
      subtitle: 'Analytics & Trend Assessments',
      desc: 'Utilize long-term analytical tools to examine recurrent failures, pinpoint weak manufacturing zones, and optimize corrective loops. Compare monthly performance graphs and historical ratings to guide training, investments, and process standardization.',
      features: ['Historical Score Comparison', 'Recurring NC Analytics', 'Continuous Training Insights'],
      image: '/images/manufacturing_floor_1780850784796.png',
      badge: 'Continuous Optimization'
    }
  ];



  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="compliance-page compliance-page-bg"
      style={{ overflow: 'hidden', color: 'var(--text-main)' }}
    >
      {/* INJECT PREMIUM CUSTOM STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Theme Overrides & Global Component Styles (mapped to design tokens) */
        :root {
          --c-navy: var(--tertiary-bg);
          --c-teal: var(--accent);
          --c-gold: var(--supporting);
          --c-slate-50: rgba(255, 255, 255, 0.08);
          --c-slate-100: var(--tertiary-bg);
          --c-slate-200: rgba(200, 162, 118, 0.18);
          --c-slate-700: var(--text-muted);
          --c-slate-800: rgba(255, 255, 255, 0.05);
          --c-slate-900: var(--text-main);
        }

        .compliance-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(var(--accent-rgb), 0.15);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          border-radius: 100px;
          color: var(--accent);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }

        .premium-text-gradient {
          background: linear-gradient(135deg, var(--text-main) 40%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .compliance-card-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .compliance-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .compliance-card-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Why Compliance Card Design */
        .why-card {
          background: rgba(17, 34, 64, 0.85);
          border: 1px solid rgba(200, 162, 118, 0.18);
          border-radius: var(--border-radius-lg);
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
 
        .why-card:hover {
          transform: translateY(-8px);
          background: rgba(17, 34, 64, 0.92);
          border-color: var(--c-teal);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
 
        .why-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          color: var(--c-teal);
          background: rgba(200, 162, 118, 0.12);
          padding: 3px 8px;
          border-radius: 4px;
        }
 
        .why-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          background: rgba(200, 162, 118, 0.12);
          color: var(--c-teal);
          display: flex;
          align-items: center;
          justifyContent: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }
 
        .why-card:hover .why-card-icon {
          background: var(--c-teal);
          color: var(--text-main);
          transform: scale(1.05);
        }

        /* Challenge Cards */
        .challenge-card {
          background: rgba(17, 34, 64, 0.85);
          border: 1px solid rgba(200, 162, 118, 0.12);
          border-radius: var(--border-radius-md);
          padding: 30px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
 
        .challenge-card:hover {
          border-color: var(--c-teal);
          background: rgba(17, 34, 64, 0.92);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
          transform: translateY(-2px);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .challenge-num {
          font-family: var(--font-headings);
          font-size: 20px;
          font-weight: 800;
          color: var(--c-gold);
          opacity: 0.8;
          line-height: 1;
        }

        /* Audit Command Center Styles */
        .command-center-container {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 32px;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .command-center-container {
            grid-template-columns: 1fr;
          }
        }

        .stage-nav-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 580px;
          overflow-y: auto;
          padding-right: 8px;
        }
        
        .stage-nav-list::-webkit-scrollbar {
          width: 6px;
        }
        .stage-nav-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 100px;
        }
        .stage-nav-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 100px;
        }
        .stage-nav-list::-webkit-scrollbar-thumb:hover {
          background: var(--c-teal);
        }

        .stage-nav-card {
          background: rgba(17, 34, 64, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(200, 162, 118, 0.12);
          border-radius: var(--border-radius-md);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
 
        .stage-nav-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: var(--c-teal);
          transition: width 0.25s ease;
        }
 
        .stage-nav-card:hover {
          background: rgba(17, 34, 64, 0.92);
          transform: translateX(4px);
          border-color: var(--c-teal);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
 
        .stage-nav-card.active {
          background: rgba(17, 34, 64, 0.95);
          border-color: var(--c-teal);
          box-shadow: 0 10px 30px rgba(200, 162, 118, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
 
        .stage-nav-card.active::before {
          width: 4px;
        }

        .stage-nav-num {
          font-size: 13px;
          font-weight: 700;
          color: var(--c-gold);
          background: rgba(234, 179, 8, 0.08);
          width: 26px;
          height: 26px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stage-nav-card.active .stage-nav-num {
          background: var(--c-teal);
          color: #ffffff;
        }

        .stage-nav-title {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          flex-grow: 1;
          margin: 0;
          text-align: left;
        }

        .stage-nav-icon {
          color: var(--c-teal);
          opacity: 0.7;
          display: flex;
          align-items: center;
          justifyContent: center;
          transition: transform 0.3s ease;
        }

        .stage-nav-card:hover .stage-nav-icon {
          transform: scale(1.1);
          opacity: 1;
        }

        .stage-nav-card.active .stage-nav-icon {
          color: var(--c-gold);
          opacity: 1;
        }

        .stage-content-panel {
          background: rgba(17, 34, 64, 0.85);
          border: 1px solid rgba(200, 162, 118, 0.18);
          border-radius: var(--border-radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .stage-content-body {
          padding: 40px;
          flex-grow: 1;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .stage-content-body {
            grid-template-columns: 1fr;
            padding: 24px;
          }
        }

        .stage-category-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          color: var(--c-teal);
          background: rgba(6, 182, 212, 0.12);
          padding: 4px 12px;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          width: fit-content;
        }

        .stage-activity-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #cbd5e1;
          font-weight: 500;
          text-align: left;
        }

        .stage-activity-icon {
          color: var(--c-teal);
          flex-shrink: 0;
        }

        .stage-image-wrapper {
          position: relative;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          min-height: 320px;
          height: 100%;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Major Audit Types Grid */
        .audit-type-card {
          background: rgba(17, 34, 64, 0.85);
          border: 1px solid rgba(200, 162, 118, 0.18);
          border-radius: var(--border-radius-md);
          padding: 28px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
 
        .audit-type-card:hover {
          border-color: var(--c-teal);
          background: rgba(17, 34, 64, 0.92);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Interactive Works Tabs */
        .works-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          background: rgba(17, 34, 64, 0.85);
          border: 1px solid rgba(200, 162, 118, 0.12);
          border-radius: var(--border-radius-md);
          color: #cbd5e1;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
 
        .works-tab-btn:hover {
          background: rgba(17, 34, 64, 0.92);
          color: #ffffff;
          border-color: var(--c-teal);
        }
 
        .works-tab-btn.active {
          background: var(--c-gold);
          color: #ffffff;
          border-color: var(--c-gold);
          box-shadow: 0 8px 20px rgba(200, 162, 118, 0.25);
        }

        /* Hierarchy visual flowchart styles */
        .hierarchy-node {
          background: rgba(30, 41, 59, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--border-radius-md);
          padding: 16px 28px;
          font-weight: 700;
          color: #ffffff;
          font-size: 16px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
        }

        .hierarchy-node:hover {
          border-color: var(--c-teal);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.15);
          color: var(--c-teal);
        }

        .hierarchy-node::after {
          content: '';
          position: absolute;
          width: 2px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%);
        }

        .hierarchy-container > div:last-child .hierarchy-node::after {
          display: none;
        }

        .hierarchy-node-icon {
          color: var(--c-gold);
        }

        /* Response pills preview */
        .preview-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        /* Client grid logo list */
        .client-logo-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius-sm);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          text-align: center;
          min-height: 100px;
          filter: grayscale(100%);
          opacity: 0.65;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .client-logo-card:hover {
          filter: grayscale(0%);
          opacity: 1;
          border-color: var(--c-teal);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.15);
          transform: translateY(-4px);
        }

        .client-logo-title {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .client-logo-tag {
          font-size: 10px;
          color: var(--c-teal);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
      `}} />

      {/* --- HERO SECTION --- */}
      <section 
        className="section" 
        style={{ 
          padding: '170px 0 110px 0', 
          color: 'var(--text-main)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--primary-bg)',
          backgroundImage: `linear-gradient(rgba(11, 25, 44, 0.85), rgba(7, 17, 30, 0.92)), url("/images/quality_audit_1780850801169.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(200, 162, 118, 0.18)'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at 80% 20%, rgba(200, 162, 118, 0.15) 0%, transparent 60%)`, zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Centered Content Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card"
              style={{
                padding: '48px',
                borderRadius: '24px',
                width: '100%',
                maxWidth: '740px',
                textAlign: 'center'
              }}
            >
              <div className="compliance-hero-badge" style={{ margin: '0 auto 24px auto' }}>
                <Sparkles size={14} style={{ color: 'var(--c-gold)' }} />
                <span>Compliance Excellence Platform</span>
              </div>
              
              <h1 className="premium-text-gradient" style={{ fontSize: '46px', lineHeight: '1.2', margin: '0 0 16px 0', letterSpacing: '-1.5px', fontWeight: 800 }}>
                Compliance Excellence Through Structured Audit Management
              </h1>
              
              <h3 style={{ fontSize: '20px', color: 'var(--accent)', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.5px' }}>
                Create. Maintain. Monitor.
              </h3>
              
              <p style={{ fontSize: '16.5px', color: 'rgba(255, 255, 255, 0.88)', marginBottom: '36px', lineHeight: '1.6' }}>
                Empowering organizations to achieve continuous compliance, audit readiness and operational excellence through structured processes, monitoring and accountability.
              </p>
              
              <div className="btn-group" style={{ justifyContent: 'center' }}>
                <motion.button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn btn-cta"
                  whileHover={{ scale: 1.03, boxShadow: '0px 6px 15px rgba(200, 162, 118, 0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ color: '#0F172A' }}
                >
                  Explore Vericea Compliance
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  onClick={() => navigate('/contact')} 
                  className="btn btn-dark-outline"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- KEY COMPLIANCE CHALLENGES SECTION --- */}
      <section className="section about-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--c-teal)' }}>Key Compliance Challenges</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Common Challenges Organizations Face</h2>
            <p className="section-desc" style={{ color: 'var(--c-slate-700)' }}>
              Operational bottlenecks and fragmented systems often prevent companies from reaching total compliance efficiency.
            </p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="challenge-card"
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <span className="challenge-num">{challenge.num}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '18px', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                    {challenge.title}
                  </h3>
                  <p style={{ color: 'var(--c-slate-700)', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    {challenge.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUDIT COMMAND CENTER SECTION --- */}
      <section className="section compliance-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)', overflow: 'hidden' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '60px' }}>
            <span className="section-subtitle">Audit Command Center</span>
            <h2 className="section-title">Explore the Compliance Lifecycle</h2>
            <p className="section-desc">
              Explore every stage of the compliance lifecycle through an interactive audit management dashboard.
            </p>
          </div>

          {/* split-screen dashboard */}
          <div className="command-center-container">
            {/* LEFT SIDE (Navigation Panel) */}
            <div className="stage-nav-list">
              {commandCenterStages.map((stage, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveCommandStage(idx)}
                  className={`stage-nav-card ${activeCommandStage === idx ? 'active' : ''}`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="stage-nav-num">{stage.stageNumber}</span>
                  <span className="stage-nav-title">{stage.title}</span>
                  <div className="stage-nav-icon">
                    {stage.icon}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE (Dynamic Content Panel) */}
            <div className="stage-content-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCommandStage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="stage-content-body"
                >
                  {/* Left Side of Panel */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span className="stage-category-badge">
                      {commandCenterStages[activeCommandStage].category}
                    </span>
                    <h3 style={{ fontSize: '28px', color: '#ffffff', fontWeight: 800, marginBottom: '16px', textAlign: 'left' }}>
                      {commandCenterStages[activeCommandStage].title}
                    </h3>
                    <p style={{ color: 'var(--c-slate-700)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', textAlign: 'left' }}>
                      {commandCenterStages[activeCommandStage].desc}
                    </p>

                    {/* Key Activities */}
                    <h5 style={{ fontSize: '12px', fontWeight: 700, color: 'var(--c-teal)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>
                      Key Activities:
                    </h5>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                      {commandCenterStages[activeCommandStage].activities.map((act, actIdx) => (
                        <div key={actIdx} className="stage-activity-item">
                          <CheckCircle2 size={15} className="stage-activity-icon" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expected Outcome */}
                    <div style={{ background: 'var(--c-slate-50)', padding: '16px 20px', borderRadius: '12px', borderLeft: '4px solid var(--c-gold)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <h6 style={{ margin: 0, fontSize: '11px', fontWeight: 700, color: 'var(--c-gold)', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>
                        Expected Outcome:
                      </h6>
                      <p style={{ margin: 0, fontSize: '13.5px', color: '#ffffff', fontWeight: 500, lineHeight: '1.4', textAlign: 'left' }}>
                        {commandCenterStages[activeCommandStage].outcome}
                      </p>
                    </div>
                  </div>

                  {/* Right Side of Panel */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="stage-image-wrapper">
                      <img 
                        src={commandCenterStages[activeCommandStage].image} 
                        alt={commandCenterStages[activeCommandStage].title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                      />
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(11, 31, 58, 0.3) 0%, transparent 100%)', pointerEvents: 'none' }}></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAJOR AUDIT TYPES SECTION --- */}
      <section className="section services-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: 'var(--c-teal)' }}>Major Audit Types</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Supporting Every Audit Requirement</h2>
            <p className="section-desc" style={{ color: 'var(--c-slate-700)' }}>
              Comprehensive frameworks tailored to help your facilities prepare for any local or international assessment standard.
            </p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {auditTypes.map((type, index) => {
              const isExpanded = expandedAudit === index;
              return (
                <motion.div
                  key={index}
                  className="audit-type-card"
                  onClick={() => setExpandedAudit(isExpanded ? null : index)}
                  layout
                  whileHover={{ y: -4 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '18px', color: '#ffffff', fontWeight: 700, margin: 0 }}>
                      {type.title}
                    </h3>
                    <div style={{ color: 'var(--c-teal)', display: 'flex', alignItems: 'center' }}>
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                  <p style={{ color: 'var(--c-slate-700)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    {type.desc}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', marginTop: '16px', borderTop: '1px solid var(--c-slate-200)', paddingTop: '16px' }}
                      >
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                          <Info size={16} style={{ color: 'var(--c-gold)', flexShrink: 0, marginTop: '2px' }} />
                          <h5 style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>Detailed Scope:</h5>
                        </div>
                        <p style={{ color: 'var(--c-slate-700)', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                          {type.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- HOW Vericea COMPLIANCE WORKS SECTION --- */}
      <section id="how-it-works" className="section products-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '56px' }}>
            <span className="section-subtitle" style={{ color: 'var(--c-teal)' }}>How Vericea Compliance Works</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>A Smarter Way To Manage Compliance</h2>
            <p className="section-desc" style={{ color: 'var(--c-slate-700)' }}>
              Vericea provides an end-to-end digital dashboard to map, measure, and scale compliance management processes.
            </p>
          </div>

          {/* Interactive Tabs Selector */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px', justifyContent: 'center' }}>
            {worksTabs.map((tab, idx) => (
              <button
                key={idx}
                className={`works-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
                style={{ maxWidth: '200px' }}
              >
                {idx === 0 && <Calendar size={18} />}
                {idx === 1 && <FileCheck2 size={18} />}
                {idx === 2 && <LockKeyhole size={18} />}
                {idx === 3 && <BarChart3 size={18} />}
                {idx === 4 && <TrendingUp size={18} />}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--c-slate-50)',
                borderRadius: '24px',
                border: '1px solid var(--c-slate-200)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div className="grid-2" style={{ gap: 0, alignItems: 'stretch' }}>
                {/* Left Text Block */}
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--c-teal)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    background: 'rgba(14, 116, 144, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    width: 'fit-content',
                    marginBottom: '16px'
                  }}>
                    {worksTabs[activeTab].badge}
                  </span>
                  
                  <h3 style={{ fontSize: '28px', color: '#ffffff', fontWeight: 800, marginBottom: '8px' }}>
                    {worksTabs[activeTab].subtitle}
                  </h3>
                  
                  <p style={{ color: 'var(--c-slate-700)', fontSize: '15px', lineHeight: '1.7', marginBottom: '28px' }}>
                    {worksTabs[activeTab].desc}
                  </p>

                  <h5 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--c-teal)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Key Features Included:
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {worksTabs[activeTab].features.map((feat, fidx) => (
                      <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--c-slate-700)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--c-teal)' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image Block */}
                <div style={{ position: 'relative', minHeight: '340px', background: '#0b1f3a' }}>
                  <img 
                    src={worksTabs[activeTab].image} 
                    alt={worksTabs[activeTab].subtitle} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(11,31,58,0.3) 0%, transparent 100%)', pointerEvents: 'none' }}></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>



      {/* --- MANAGEMENT BENEFITS SECTION --- */}
      <section className="section about-section-texture" style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className="section-subtitle" style={{ color: 'var(--c-teal)' }}>Management Benefits</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Benefits For Leadership & Compliance Teams</h2>
            <p className="section-desc" style={{ color: 'var(--c-slate-700)' }}>
              Enable your executives to control risks, optimize resources, and standardize operational excellence.
            </p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Better Audit Readiness',
                desc: 'Always know the compliance readiness index across your facilities, reducing pre-audit overheads.'
              },
              {
                title: 'Reduced Repeat Issues',
                desc: 'Trace and permanently resolve recurrent non-conformity findings through automated corrective action loops.'
              },
              {
                title: 'Improved Accountability',
                desc: 'Assign clear task ownership for floor issues and monitor target compliance deadlines systematically.'
              },
              {
                title: 'Training & Development Insights',
                desc: 'Analyze audit scores to identify training gaps, operational errors, and skills needs among team leads.'
              },
              {
                title: 'Continuous Monitoring',
                desc: 'Receive constant operational updates rather than waiting for scheduled third-party reviews.'
              },
              {
                title: 'Best Practice Implementation',
                desc: 'Standardize safety protocols, machinery maintenance logs, and quality checksheets into unified templates.'
              }
            ].map((benefit, bidx) => (
              <motion.div 
                key={bidx} 
                className="glass-card" 
                style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.06)', display: 'flex', gap: '16px', padding: '28px' }}
                whileHover={{ y: -5, borderColor: 'var(--c-teal)' }}
              >
                <div style={{ color: 'var(--c-teal)', flexShrink: 0, marginTop: '4px' }}>
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '17px', color: '#ffffff', fontWeight: 700 }}>
                    {benefit.title}
                  </h4>
                  <p style={{ margin: 0, color: 'var(--c-slate-700)', fontSize: '13.5px', lineHeight: '1.6' }}>
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- FINAL CTA SECTION --- */}
      <section 
        className="section contact-section-texture" 
        style={{ 
          padding: '100px 0', 
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 20% 80%, rgba(200, 162, 118, 0.15) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '720px' }}>
          <span className="section-subtitle" style={{ color: 'var(--c-gold)' }}>Take Control of Compliance</span>
          <h2 style={{ fontSize: '38px', color: '#ffffff', marginBottom: '20px', fontWeight: 800 }}>
            Ready To Strengthen Your Compliance Framework?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: '1.6', marginBottom: '36px' }}>
            Transform compliance from a reactive activity into a structured and continuously monitored business process with Vericea Compliance.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button 
              onClick={() => navigate('/contact')} 
              className="btn btn-cta"
              whileHover={{ scale: 1.03, boxShadow: '0px 6px 15px rgba(200, 162, 118, 0.35)' }}
              whileTap={{ scale: 0.98 }}
              style={{ color: '#0F172A' }}
            >
              Request Demo
            </motion.button>
            <motion.button 
              onClick={() => navigate('/contact')} 
              className="btn btn-dark-outline"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              Talk To Compliance Experts
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
