"use client";

import { ICONS } from "@/lib/icons";
import type { ContactChannel } from "@/components/destek/data";

type BadgeColor = "green" | "blue";

interface ContactCardProps {
  channel: ContactChannel;
  featured?: boolean;
}

export default function ContactCard({
  channel,
  featured = false,
}: ContactCardProps) {
  const Icon = ICONS[channel.icon] || ICONS.message;

  const badgeClasses: Record<BadgeColor, string> = {
    green: "bg-emerald-100 text-emerald-700",
    blue: "bg-blue-100 text-blue-700",
  };

  if (featured) {
    return (
      <a
        href={channel.href}
        className="group flex flex-col md:flex-row items-center gap-8
        bg-[#152238] rounded-2xl p-8 md:p-10
        border border-emerald-600/30 hover:border-emerald-500
        transition-all duration-200 shadow-xl"
      >
        <div
          className="shrink-0 w-24 h-24 rounded-2xl
          bg-emerald-600 flex items-center justify-center text-white
          shadow-lg shadow-emerald-600/25
          group-hover:scale-110 transition-transform duration-200"
        >
          <Icon size={40} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <h3 className="text-white font-extrabold text-2xl">
              {channel.title}
            </h3>

            {channel.badge && (
              <span className="bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full animate-pulse">
                {channel.badge}
              </span>
            )}
          </div>

          {channel.subtitle && (
            <p className="text-emerald-400 font-semibold text-sm mb-2">
              {channel.subtitle}
            </p>
          )}

          <p className="text-white/70 text-base leading-relaxed">
            {channel.description}
          </p>
        </div>

        <div className="shrink-0">
          <span
            className="inline-flex items-center gap-2
            bg-emerald-600 hover:bg-emerald-700
            text-white font-bold px-8 py-4 rounded-xl
            text-base transition-all whitespace-nowrap
            shadow-lg shadow-emerald-600/30"
          >
            {channel.cta}
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={channel.href}
      className="group flex flex-col bg-white rounded-2xl p-7
      border border-gray-200/70
      hover:border-emerald-500/40
      shadow-sm hover:shadow-lg hover:shadow-emerald-600/10
      transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100
          flex items-center justify-center
          group-hover:scale-110 transition-transform duration-200"
        >
          <Icon size={26} />
        </div>

        {channel.badge && (
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              channel.badgeColor
                ? badgeClasses[channel.badgeColor]
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {channel.badge}
          </span>
        )}
      </div>

      <h3 className="font-bold text-[#1b2a4a] text-lg mb-1 group-hover:text-emerald-600 transition-colors">
        {channel.title}
      </h3>

      {channel.subtitle && (
        <p className="text-emerald-600 text-sm font-semibold mb-3">
          {channel.subtitle}
        </p>
      )}

      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {channel.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[#1b2a4a] font-bold text-sm group-hover:text-emerald-600 transition-colors">
        {channel.cta}
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </div>
    </a>
  );
}
