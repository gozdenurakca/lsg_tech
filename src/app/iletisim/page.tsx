import type { Metadata } from "next";

import ContactHero from "@/components/destek/DestekHero";
import ContactCard from "@/components/destek/DestekCard";
import ContactForm from "@/components/destek/DestekForm";
import { ICONS } from "@/lib/icons";

import {
  CONTACT_CHANNELS,
  QUICK_TOPICS,
  WORKING_HOURS,
} from "@/components/destek/data";

const ClockIcon = ICONS.clock;
export const metadata: Metadata = {
  title: "Bize Ulaşın | domaintr",
  description:
    "domaintr destek ekibiyle 7/24 canlı sohbet, telefon veya e-posta yoluyla iletişime geçin.",
};

export default function ContactPage(): JSX.Element {
  const [chatChannel, ...otherChannels] = CONTACT_CHANNELS;

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-[#1b2a4a]">
      <ContactHero topics={QUICK_TOPICS} />

      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-10">
        <ContactCard channel={chatChannel} featured />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {otherChannels.map((channel) => (
            <ContactCard key={channel.id} channel={channel} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-8 shadow-lg shadow-black/5">
            <div className="mb-7">
              <h2 className="text-2xl font-extrabold mb-1">Bize Yazın</h2>

              <p className="text-gray-500 text-sm">
                Formu doldurun, en geç 8 saat içinde size dönüş yapalım.
              </p>
            </div>

            <ContactForm />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm">
              <h3 className="font-extrabold mb-5 flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-blue-600" />
                Çalışma Saatleri
              </h3>
              <ul className="flex flex-col gap-3">
                {WORKING_HOURS.map(({ day, hours }) => (
                  <li className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-gray-400" />
                      {day}
                    </span>

                    <span
                      className={`font-bold ${
                        hours === "Kapalı" ? "text-red-400" : "text-[#1b2a4a]"
                      }`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
