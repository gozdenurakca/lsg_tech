"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  loading: boolean;
}

export default function Form({ onSubmit, loading }: Props) {
  const [focused, setFocused] = useState<string | null>(null);

  const BuildingIcon = ICONS.building;
  const MailIcon = ICONS.mail;
  const GlobeIcon = ICONS.globe;
  const FileIcon = ICONS.file;
  const ArrowIcon = ICONS.arrowRight;

  return (
    <section className="relative pb-28 px-6">
      <style>{FORM_STYLES}</style>

      <div className="max-w-2xl mx-auto">
        <div className="hf-card">
          <p className="hf-section-label">Partner Bilgileri</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <FormField
              id="companyName"
              name="companyName"
              label="Şirket Adı"
              type="text"
              required
              icon="building"
              focused={focused}
              setFocused={setFocused}
            />

            <FormField
              id="email"
              name="email"
              label="Kurumsal E-posta"
              type="email"
              required
              icon="mail"
              focused={focused}
              setFocused={setFocused}
            />

            <FormField
              id="website"
              name="website"
              label="Web Sitesi"
              type="text"
              icon="globe"
              focused={focused}
              setFocused={setFocused}
            />

            <div>
              <label className="hf-label" htmlFor="message">
                <span style={{ color: "#6366F1" }}>
                  <FileIcon size={13} />
                </span>
                Altyapı & Beklenti
              </label>

              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="hf-textarea"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button type="submit" disabled={loading} className="hf-btn">
              {loading ? (
                "Gönderiliyor..."
              ) : (
                <>
                  Başvuruyu Gönder
                  <ArrowIcon size={16} />
                </>
              )}
            </button>
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
  icon,
  focused,
  setFocused,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  required?: boolean;
  icon: React.ReactNode;
  focused: string | null;
  setFocused: (v: string | null) => void;
}) {
  const isFocused = focused === id;
  return (
    <div>
      <label className="hf-label" htmlFor={id}>
        <span style={{ color: "#6366F1" }}>{icon}</span>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="hf-input"
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
        style={{
          borderColor: isFocused ? "rgba(99,102,241,0.5)" : undefined,
          boxShadow: isFocused ? "0 0 0 3px rgba(99,102,241,0.12)" : undefined,
        }}
      />
    </div>
  );
}

const FORM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .hf-card {
    position: relative;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 24px;
    padding: 48px 44px;
    backdrop-filter: blur(12px);
    overflow: hidden;
  }

  .hf-section-label {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #E2EFFF;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .hf-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.07);
  }

  .hf-label {
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

  .hf-input {
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
  .hf-input::placeholder { color: rgba(186,214,255,0.2); }
  .hf-input:hover { border-color: rgba(255,255,255,0.18); }

  .hf-textarea {
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
  .hf-textarea::placeholder { color: rgba(186,214,255,0.2); }

  .hf-note {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(99,102,241,0.08);
    border: 1px solid rgba(99,102,241,0.2);
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: rgba(165,180,252,0.75);
    line-height: 1.6;
  }
  .hf-note-dot {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #818CF8;
    margin-top: 4px;
    box-shadow: 0 0 6px #818CF8;
  }

  .hf-btn {
    width: 100%;
    background: linear-gradient(135deg, #6366F1, #818CF8);
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
  .hf-btn:hover:not(:disabled) {
    box-shadow: 0 0 32px rgba(99,102,241,0.45);
    transform: translateY(-1px);
  }
  .hf-btn:disabled { opacity: .5; cursor: not-allowed; }
`;
