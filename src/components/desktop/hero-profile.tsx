"use client";

import { Check, FileText, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/links";

const photoSrc = "/api/profile-photo";

const stats = ["6+ Years Experience", "10+ Products Built"];
const availability = ["Founding Engineer Roles", "Senior Software Engineer Roles", "Startup Partnerships"];

const socials = [
  { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { label: "GitHub", href: GITHUB_URL, icon: Github },
  { label: "Resume", href: RESUME_URL, icon: FileText },
];

export function HeroProfile() {
  const [photoReady, setPhotoReady] = useState(false);

  useEffect(() => {
    const image = new window.Image();
    image.src = photoSrc;
    image.onload = () => setPhotoReady(true);
    image.onerror = () => setPhotoReady(false);
  }, []);

  return (
    <aside className="relative mx-auto mt-6 w-full max-w-[17rem] md:mt-0 lg:-mr-2" aria-label="Sarmad Hussain profile summary">
      <div className="absolute -inset-4 rounded-[2.5rem] bg-[#F3E7BE]/55 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-visible rounded-[1.5rem] border border-[#013E37]/10 bg-[#FAFAF7]/80 p-2.5 shadow-2xl shadow-[#013E37]/15 backdrop-blur-2xl">
        <div className="relative min-h-[13rem] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#F3E7BE]/80 via-white to-[#013E37]/10 md:min-h-[15.5rem]">
          <div className="absolute inset-x-6 bottom-0 h-2/3 rounded-t-full bg-[#013E37]/10 blur-2xl" aria-hidden="true" />
          {photoReady ? (
            <img
              src={photoSrc}
              alt="Sarmad Hussain"
              className="absolute bottom-0 left-1/2 z-10 h-[14.25rem] w-auto max-w-none -translate-x-1/2 object-contain mix-blend-multiply drop-shadow-[0_32px_44px_rgba(1,62,55,0.24)] md:h-[16.5rem]"
            />
          ) : (
            <div className="absolute inset-x-10 bottom-0 z-10 flex h-[12rem] items-center justify-center rounded-t-[8rem] bg-gradient-to-b from-[#013E37]/20 to-[#013E37]/35 text-6xl font-black text-[#013E37]/40 md:h-[14rem]">
              SH
            </div>
          )}
        </div>

        <div className="relative z-20 -mt-9 rounded-[1.25rem] border border-white/80 bg-white/90 p-3 shadow-xl shadow-[#013E37]/10 backdrop-blur-xl md:-mt-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-heading text-lg font-semibold text-[#111827]">Sarmad Hussain</p>
              <p className="mt-1 text-sm font-medium text-[#013E37]">Senior Software Engineer | Product Engineer</p>
            </div>
            <span className="rounded-full bg-[#F3E7BE] px-3 py-1 text-xs font-semibold text-[#013E37]">Available</span>
          </div>

          <div className="mt-3 grid gap-2 text-sm font-medium text-[#111827]">
            {stats.map((stat) => (
              <p key={stat} className="rounded-2xl bg-[#FAFAF7] px-3 py-2">{stat}</p>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-medium text-[#013E37]">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#013E37]/10 bg-white px-2 py-2 transition hover:bg-[#F3E7BE]/45"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>

          <p className="mt-3 rounded-2xl bg-[#F3E7BE]/35 px-3 py-3 text-[15px] leading-6 text-slate-700">Built products across fintech, payroll, SaaS, AI, and enterprise systems.</p>

          <div className="mt-3 border-t border-[#013E37]/10 pt-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Available For</p>
            <div className="mt-2 space-y-1.5">
              {availability.map((item) => (
                <p key={item} className="flex items-center gap-2 text-[15px] leading-6 text-slate-700">
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
