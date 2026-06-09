"use client";

import { Check, FileText, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { GITHUB_URL, LINKEDIN_URL, PROFILE_PHOTO_URL, RESUME_URL } from "@/lib/links";

const photoSrc = PROFILE_PHOTO_URL;

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
    <aside className="relative mx-auto mt-6 w-full max-w-[16rem] md:mt-0 lg:-ml-4 lg:-mr-2" aria-label="Sarmad Hussain profile summary">
      <div className="absolute -inset-3 rounded-[2.5rem] bg-[#FAEDCD]/55 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-visible rounded-[1.45rem] border border-[#D4A373]/10 bg-[#FEFAE0]/80 p-2.5 shadow-2xl shadow-[#D4A373]/15 backdrop-blur-2xl">
        <div className="relative min-h-[12rem] overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-[#FAEDCD]/80 via-[#FEFAE0] to-[#D4A373]/10 md:min-h-[14rem]">
          <div className="absolute inset-x-6 bottom-0 h-2/3 rounded-t-full bg-[#D4A373]/10 blur-2xl" aria-hidden="true" />
          {photoReady ? (
            <img
              src={photoSrc}
              alt="Sarmad Hussain"
              className="absolute left-1/2 top-2 z-10 h-[11.25rem] w-auto max-w-none -translate-x-1/2 object-contain object-top mix-blend-multiply drop-shadow-[0_32px_44px_rgba(1,62,55,0.24)] md:top-2 md:h-[13.25rem]"
            />
          ) : (
            <div className="absolute inset-x-10 bottom-0 z-10 flex h-[11.25rem] items-center justify-center rounded-t-[8rem] bg-gradient-to-b from-[#D4A373]/20 to-[#D4A373]/35 text-6xl font-black text-[#8A5A2B]/40 md:h-[13.25rem]">
              SH
            </div>
          )}
        </div>

        <div className="relative z-20 -mt-6 rounded-[1.2rem] border border-white/80 bg-[#FAEDCD]/80 p-3 shadow-xl shadow-[#D4A373]/10 backdrop-blur-xl md:-mt-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-heading text-lg font-semibold text-[#111827]">Sarmad Hussain</p>
              <p className="mt-1 text-sm font-medium text-[#8A5A2B]">Senior Software Engineer | Product Engineer</p>
            </div>
            <span className="rounded-full bg-[#FAEDCD] px-2.5 py-1 text-[11px] font-semibold text-[#8A5A2B]">Available</span>
          </div>

          <div className="mt-2.5 grid gap-1.5 text-sm font-medium text-[#111827]">
            {stats.map((stat) => (
              <p key={stat} className="rounded-2xl bg-[#FEFAE0] px-2.5 py-1.5">{stat}</p>
            ))}
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-xs font-medium text-[#8A5A2B]">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#D4A373]/10 bg-[#FEFAE0] px-2 py-2 transition hover:bg-[#FAEDCD]/45"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>

          <p className="mt-2.5 rounded-2xl bg-[#FAEDCD]/35 px-3 py-2.5 text-sm leading-6 text-slate-700">Built products across fintech, payroll, SaaS, AI, and enterprise systems.</p>

          <div className="mt-2.5 border-t border-[#D4A373]/10 pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Available For</p>
            <div className="mt-2 space-y-1.5">
              {availability.map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm leading-6 text-slate-700">
                  <Check className="h-4 w-4 text-[#8A5A2B]" aria-hidden="true" />
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
