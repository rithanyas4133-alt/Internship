import { useRef, useEffect, useState, useCallback, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Stage {
  stageNumber: string;
  title: string;
  category: string;
  icon: ReactNode;
  desc: string;
  activities: string[];
  outcome: string;
  image: string;
}

interface ComplianceLifecycleProps {
  stages: Stage[];
}

export default function ComplianceLifecycle({ stages }: ComplianceLifecycleProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalStages = stages.length;

  // Detect mobile/tablet
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP ScrollTrigger — desktop only
  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalStages * 100}vh`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const rawProgress = self.progress;
          // Map progress [0, 1] to stage indices [0, totalStages - 1]
          const stageProgress = rawProgress * totalStages;
          const currentStage = Math.min(
            Math.floor(stageProgress),
            totalStages - 1
          );
          setActiveIndex(currentStage);

          // Move the ambient glow
          if (glowRef.current) {
            const yShift = 20 + rawProgress * 60; // 20% → 80%
            const xShift = 60 + Math.sin(rawProgress * Math.PI) * 20;
            glowRef.current.style.background = `radial-gradient(circle at ${xShift}% ${yShift}%, rgba(184, 155, 94, 0.12) 0%, transparent 55%)`;
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, totalStages]);

  const handleMobileClick = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="compliance-lifecycle-section compliance-section-texture"
      style={{ borderBottom: '1px solid rgba(200, 162, 118, 0.10)' }}
    >
      {/* Ambient glow layer */}
      <div
        ref={glowRef}
        className="compliance-lifecycle-glow"
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-title-wrapper" style={{ marginBottom: '28px' }}>
          <span className="section-subtitle">Audit Command Center</span>
          <h2 className="section-title">Explore the Compliance Lifecycle</h2>
          <p className="section-desc">
            Explore every stage of the compliance lifecycle through an interactive audit management dashboard.
          </p>
        </div>

        {/* Mobile Navigation slider */}
        {isMobile && (
          <div className="compliance-lifecycle-mobile-nav">
            {stages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  className={`compliance-lifecycle-mobile-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleMobileClick(idx)}
                  type="button"
                  aria-label={`Stage ${stage.stageNumber}: ${stage.title}`}
                >
                  {stage.stageNumber}
                </button>
              );
            })}
          </div>
        )}

        {/* 3-Column Layout */}
        <div className="compliance-lifecycle-grid">
          
          {/* === COLUMN 1 (LEFT): Active Stage Title === */}
          <div className="compliance-lifecycle-col-left">
            <div className="compliance-lifecycle-title-stack">
              {stages.map((stage, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                const stateClass = isActive ? 'is-active' : isPast ? 'is-past' : 'is-future';

                return (
                  <div
                    key={idx}
                    className={`compliance-lifecycle-title-item ${stateClass}`}
                    aria-hidden={!isActive}
                  >
                    <h3 className="compliance-lifecycle-left-title">
                      {stage.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* === COLUMN 2 (CENTER): Giant Number Anchor === */}
          <div className="compliance-lifecycle-col-center">
            <div className="compliance-lifecycle-number-stack">
              {stages.map((stage, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                const stateClass = isActive ? 'is-active' : isPast ? 'is-past' : 'is-future';

                return (
                  <div
                    key={idx}
                    className={`compliance-lifecycle-number-item ${stateClass}`}
                    aria-hidden={!isActive}
                  >
                    {stage.stageNumber}
                  </div>
                );
              })}
            </div>
          </div>

          {/* === COLUMN 3 (RIGHT): Detailed Content Card === */}
          <div className="compliance-lifecycle-col-right">
            <div className="compliance-lifecycle-content-stack">
              {stages.map((stage, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                const stateClass = isActive ? 'is-active' : isPast ? 'is-past' : 'is-future';

                return (
                  <div
                    key={idx}
                    className={`compliance-lifecycle-content-card ${stateClass}`}
                    aria-hidden={!isActive}
                  >
                    {/* Mobile Header (Hidden on Desktop) */}
                    <div className="compliance-lifecycle-mobile-header">
                      <span className="compliance-lifecycle-mobile-num">
                        {stage.stageNumber}
                      </span>
                      <h3 className="compliance-lifecycle-mobile-title">
                        {stage.title}
                      </h3>
                    </div>

                    <div className="compliance-lifecycle-content-body">
                      {/* Left: Details */}
                      <div className="compliance-lifecycle-details">
                        <span className="stage-category-badge">
                          {stage.category}
                        </span>
                        <p className="compliance-lifecycle-desc">
                          {stage.desc}
                        </p>

                        {/* Key Activities */}
                        <h5 className="compliance-lifecycle-activities-heading">
                          Key Activities:
                        </h5>
                        <div className="compliance-lifecycle-activities-grid">
                          {stage.activities.map((act, actIdx) => (
                            <div key={actIdx} className="stage-activity-item">
                              <CheckCircle2 size={15} className="stage-activity-icon" />
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>

                        {/* Expected Outcome */}
                        <div className="compliance-lifecycle-outcome">
                          <h6 className="compliance-lifecycle-outcome-label">
                            Expected Outcome:
                          </h6>
                          <p className="compliance-lifecycle-outcome-text">
                            {stage.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Right: Image */}
                      <div className="compliance-lifecycle-image-col">
                        <div className="compliance-lifecycle-image-wrapper">
                          <img
                            src={stage.image}
                            alt={stage.title}
                            className="compliance-lifecycle-image"
                            loading="lazy"
                          />
                          <div className="compliance-lifecycle-image-overlay" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
