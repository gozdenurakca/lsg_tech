export const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

/* section eyebrow */

.section-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: #38BDF8;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.section-eyebrow::before,
.section-eyebrow::after {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: #38BDF8;
  opacity: .4;
}

/* hero */

.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 800;
  color: #E2EFFF;
  letter-spacing: -.025em;
  line-height: 1.08;
}

.hero-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: rgba(186,214,255,0.65);
  line-height: 1.7;
}

/* shimmer text */

@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.shimmer-text {
  background: linear-gradient(90deg,#fff 0%,#93C5FD 35%,#38BDF8 55%,#fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s linear infinite;
}

/* trust pill */

.trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: rgba(125,196,248,0.8);
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(14,165,233,0.2);
}

/* form */

.form-card {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 24px;
  padding: 48px 44px;
  backdrop-filter: blur(12px);
}

.form-section-label {
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #E2EFFF;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.field-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: rgba(186,214,255,0.6);
  margin-bottom: 8px;
}

.field-input {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 13px 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #E2EFFF;
  outline: none;
}

.field-input:hover {
  border-color: rgba(255,255,255,0.18);
}

.field-textarea {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 13px 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #E2EFFF;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #1E6ADC, #0EA5E9);
  color: #fff;
  padding: 16px;
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.submit-btn:hover {
  box-shadow: 0 0 32px rgba(14,165,233,0.4);
}

/* success */

.success-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 28px;
  padding: 56px 48px;
  backdrop-filter: blur(12px);
}

.success-title {
  font-family: 'Syne', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #E2EFFF;
}

.success-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(186,214,255,0.65);
}
`;