"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const photoSrc = "/api/profile-photo";

const stats = ["6+ Years Experience", "10+ Products Built", "AI Hackathon Winner"];
const availability = ["Founding Engineer Roles", "Senior Software Engineer Roles", "Startup Partnerships"];

export function HeroProfile() {
  const [photoReady, setPhotoReady] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = photoSrc;
    image.onload = () => setPhotoReady(true);
    image.onerror = () => setPhotoReady(false);
  }, []);

  return (
    <aside className="relative mx-auto mt-8 w-full max-w-sm md:mt-0 lg:-mr-12 lg:-mb-12" aria-label="Sarmad Hussain profile summary">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[#F3E7BE]/55 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-visible rounded-[2rem] border border-[#013E37]/10 bg-[#FAFAF7]/80 p-4 shadow-2xl shadow-[#013E37]/15 backdrop-blur-2xl">
        <div className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F3E7BE]/80 via-white to-[#013E37]/10">
          <div className="absolute inset-x-6 bottom-0 h-2/3 rounded-t-full bg-[#013E37]/10 blur-2xl" aria-hidden="true" />
          {photoReady ? (
            <img
              src={photoSrc}
              alt="Sarmad Hussain"
              className="absolute bottom-0 left-1/2 z-10 h-[27rem] w-auto max-w-none -translate-x-1/2 object-contain mix-blend-multiply drop-shadow-[0_32px_44px_rgba(1,62,55,0.24)]"
            />
          ) : (
            <div className="absolute inset-x-10 bottom-0 z-10 flex h-[23rem] items-center justify-center rounded-t-[8rem] bg-gradient-to-b from-[#013E37]/20 to-[#013E37]/35 text-6xl font-black text-[#013E37]/40">
              SH
            </div>
          )}
        </div>

        <div className="relative z-20 -mt-20 rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-heading text-xl font-semibold text-[#111827]">Sarmad Hussain</p>
              <p className="mt-1 text-sm font-medium text-[#013E37]">Founder Engineer</p>
            </div>
            <span className="rounded-full bg-[#F3E7BE] px-3 py-1 text-xs font-semibold text-[#013E37]">Available</span>
          </div>

          <div className="mt-4 grid gap-2 text-sm font-medium text-[#111827]">
            {stats.map((stat) => (
              <p key={stat} className="rounded-2xl bg-[#FAFAF7] px-3 py-2">{stat}</p>
            ))}
          </div>

          <div className="mt-5 border-t border-[#013E37]/10 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Available For</p>
            <div className="mt-3 space-y-2">
              {availability.map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-[#013E37]" aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
