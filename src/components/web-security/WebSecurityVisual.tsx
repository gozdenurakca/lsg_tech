"use client";

import { ICONS } from "@/lib/icons";

type NodeItem = {
  cx: string;
  cy: string;
  icon: keyof typeof ICONS;
  color: string;
  label: string;
};

const nodes: NodeItem[] = [
  { cx: "18%", cy: "22%", icon: "server", color: "#0EA5E9", label: "cdn-01" },
  { cx: "80%", cy: "18%", icon: "globe", color: "#6366F1", label: "app-gw" },
  { cx: "12%", cy: "74%", icon: "lock", color: "#10B981", label: "ssl-proxy" },
  { cx: "82%", cy: "72%", icon: "wifi", color: "#F59E0B", label: "waf-edge" },
];

export default function WebSecurityVisual() {
  const CenterIcon = ICONS.shield;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #060f1e 0%, #0a1628 50%, #071220 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,179,237,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[60, 110, 165, 220].map((r, i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={r}
            fill="none"
            stroke={`rgba(14,165,233,${0.12 - i * 0.025})`}
            strokeWidth="1"
            strokeDasharray={`${4 + i * 2} ${4 + i * 2}`}
          />
        ))}

        {nodes.map((n, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={n.cx}
            y2={n.cy}
            stroke={`${n.color}35`}
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {nodes.map((n, i) => (
          <circle
            key={`dot-${i}`}
            cx={`calc(50% * 0.5 + ${n.cx} * 0.5)`}
            cy={`calc(50% * 0.5 + ${n.cy} * 0.5)`}
            r="2.5"
            fill={`${n.color}80`}
          />
        ))}
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div
          className="absolute w-28 h-28 rounded-full animate-ping opacity-10"
          style={{
            background: "radial-gradient(circle, #34d399, transparent)",
          }}
        />

        <div
          className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #052e16 0%, #065f46 100%)",
            border: "1px solid rgba(52,211,153,0.3)",
            boxShadow:
              "0 0 48px rgba(16,185,129,0.25), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <CenterIcon
            size={38}
            className="text-emerald-400"
            strokeWidth={1.5}
          />
        </div>

        <div
          className="mt-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-emerald-400 tracking-wide">
            Aktif Koruma
          </span>
        </div>
      </div>

      {nodes.map((n, i) => {
        const Icon = ICONS[n.icon] ?? ICONS.shield;

        return (
          <div
            key={i}
            className="absolute flex flex-col items-center gap-1.5"
            style={{
              left: n.cx,
              top: n.cy,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `${n.color}15`,
                border: `1px solid ${n.color}35`,
                boxShadow: `0 4px 16px ${n.color}20`,
              }}
            >
              <Icon size={16} style={{ color: n.color }} strokeWidth={1.8} />
            </div>

            <span
              className="text-[9px] font-mono tracking-wide"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              {n.label}
            </span>
          </div>
        );
      })}

      <div
        className="absolute bottom-6 left-5 flex items-center gap-3 px-4 py-3 rounded-2xl"
        style={{
          background: "rgba(10,22,44,0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(99,179,237,0.12)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5L2 4v4c0 3.3 2.5 5.7 6 6.5 3.5-.8 6-3.2 6-6.5V4L8 1.5z"
              stroke="#f87171"
              strokeWidth="1.4"
              fill="none"
              strokeLinejoin="round"
            />
            <path
              d="M6 6l4 4M10 6l-4 4"
              stroke="#f87171"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <div
            className="text-[10px] font-medium"
            style={{ color: "rgba(148,163,184,0.6)" }}
          >
            Engellenen Tehdit
          </div>
          <div className="text-[13px] font-bold text-white">
            1.247 / son 24 saat
          </div>
        </div>
      </div>

      <div
        className="absolute top-5 right-5 px-4 py-3 rounded-2xl"
        style={{
          background: "rgba(10,22,44,0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(99,179,237,0.12)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
          minWidth: "148px",
        }}
      >
        <div
          className="text-[9px] uppercase tracking-[.14em] mb-2 font-medium"
          style={{ color: "rgba(148,163,184,0.55)" }}
        >
          Tarama Durumu
        </div>

        <div
          className="h-1.5 w-full rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: "78%",
              background: "linear-gradient(90deg, #0EA5E9, #34d399)",
            }}
          />
        </div>

        <div className="text-[10px] mt-1.5 text-right font-medium text-emerald-400">
          78% tamamlandı
        </div>
      </div>
    </div>
  );
}
