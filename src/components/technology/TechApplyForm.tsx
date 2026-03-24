"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
}

export default function TechApplyForm({ onSubmit, loading }: Props) {
  const [focused, setFocused] = useState<string | null>(null);

  const focusStyle = (id: string) =>
    focused === id
      ? {
          borderColor: "rgba(14,165,233,0.5)",
          boxShadow: "0 0 0 3px rgba(14,165,233,0.12)",
        }
      : undefined;

  return (
    <section className="relative pb-28 px-6">
      <style>{FORM_STYLES}</style>

      <div className="max-w-2xl mx-auto">
        <div className="tf-card">
          <div
            className="absolute top-0 left-8 right-8 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg,transparent,#0EA5E9,#38BDF8,transparent)",
            }}
          />

          <p className="tf-section-label">
            <ICONS.code size={16} className="text-blue-400" />
            Teknoloji Partner Bilgileri
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <FormField
              id="companyName"
              name="companyName"
              label="Şirket Adı"
              type="text"
              required
              placeholder="Teknoloji A.Ş."
              icon="building"
              focused={focused}
              setFocused={setFocused}
              focusStyle={focusStyle}
            />

            <FormField
              id="email"
              name="email"
              label="Kurumsal E-posta"
              type="email"
              required
              placeholder="teknik@sirket.com"
              icon="mail"
              focused={focused}
              setFocused={setFocused}
              focusStyle={focusStyle}
            />

            <div className="grid md:grid-cols-2 gap-5">
              <FormField
                id="website"
                name="website"
                label="Web Sitesi"
                type="text"
                placeholder="https://sirket.com"
                icon="globe"
                focused={focused}
                setFocused={setFocused}
                focusStyle={focusStyle}
              />

              <FormField
                id="monthlyUsers"
                name="monthlyUsers"
                label="Aylık Aktif Kullanıcı"
                type="text"
                placeholder="örn. 50.000"
                icon="users"
                focused={focused}
                setFocused={setFocused}
                focusStyle={focusStyle}
              />
            </div>

            <div>
              <label className="tf-label" htmlFor="message">
                <ICONS.file size={13} className="text-blue-400" />
                Platform & Entegrasyon Beklentisi
              </label>

              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="tf-textarea"
                placeholder="Platformunuz ve entegrasyon beklentilerinizi yazın…"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                style={{
                  borderColor:
                    focused === "message" ? "rgba(14,165,233,0.5)" : undefined,
                  boxShadow:
                    focused === "message"
                      ? "0 0 0 3px rgba(14,165,233,0.12)"
                      : undefined,
                }}
              />
            </div>

            <div className="tf-note">
              <span className="tf-note-dot" />
              API ve sandbox erişimi onboarding sonrası verilir.
            </div>

            <button type="submit" disabled={loading} className="tf-btn">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 2a6 6 0 0 1 6 6"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Gönderiliyor...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Başvuruyu Gönder
                  <ICONS.arrowRight size={16} />
                </span>
              )}
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                color: "rgba(186,214,255,0.3)",
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Başvurular teknik ekip tarafından manuel değerlendirilir.
              Verileriniz üçüncü taraflarla paylaşılmaz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  id,
  name,
  label,
  type,
  required,
  placeholder,
  icon,
  focused,
  setFocused,
  focusStyle,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  icon: string;
  focused: string | null;
  setFocused: (v: string | null) => void;
  focusStyle: (id: string) => React.CSSProperties | undefined;
}) {
  const Icon = ICONS[icon] ?? ICONS.file;

  return (
    <div>
      <label className="tf-label" htmlFor={id}>
        <Icon size={14} className="text-blue-400" />
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="tf-input"
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
        style={focusStyle(id)}
      />
    </div>
  );
}

const FORM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .tf-card {
    position: relative;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 24px;
    padding: 48px 44px;
    backdrop-filter: blur(12px);
    overflow: hidden;
  }

  .tf-section-label {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #E2EFFF;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .tf-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.07);
  }

  .tf-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: rgba(186,214,255,0.6);
    letter-spacing: .04em;
    margin-bottom: 8px;
  }

  .tf-input {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 13px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #E2EFFF;
    outline: none;
    transition: border-color .2s, box-shadow .2s;
  }
  .tf-input::placeholder { color: rgba(186,214,255,0.2); }
  .tf-input:hover { border-color: rgba(255,255,255,0.18); }

  .tf-textarea {
    width: 100%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 13px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #E2EFFF;
    outline: none;
    resize: vertical;
    transition: border-color .2s, box-shadow .2s;
  }
  .tf-textarea::placeholder { color: rgba(186,214,255,0.2); }

  .tf-note {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(14,165,233,0.08);
    border: 1px solid rgba(14,165,233,0.2);
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: rgba(125,211,252,0.75);
    line-height: 1.6;
  }

  .tf-note-dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38BDF8;
    margin-top: 4px;
    box-shadow: 0 0 6px #38BDF8;
  }

  .tf-btn {
    width: 100%;
    background: linear-gradient(135deg, #0EA5E9, #38BDF8);
    color: #fff;
    padding: 16px;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: box-shadow .2s, transform .2s, opacity .2s;
    margin-top: 4px;
  }
  .tf-btn:hover:not(:disabled) {
    box-shadow: 0 0 32px rgba(14,165,233,0.45);
    transform: translateY(-1px);
  }
  .tf-btn:disabled { opacity: .5; cursor: not-allowed; }
`;
