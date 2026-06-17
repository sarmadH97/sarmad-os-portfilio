import { StaggerGroup, StaggerItem } from "@/components/ui/motion";

const recommendations = [
  { name: "Saad Hussain", role: "Manager | Lead | Developer", context: "Managed Sarmad directly", excerpt: "Strong teamwork and technical proficiency, with ownership of assigned tasks.", theme: "Ownership · React expertise", link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/" },
  { name: "Lau Guan Kiat", role: "Product Management | Board Advisor", context: "Client relationship", excerpt: "Remarkable autonomy in decision-making and strong problem solving.", theme: "Autonomy · Delivery impact", link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/" },
  { name: "Anthonia Essiet", role: "Product Designer", context: "Worked on same team", excerpt: "A front-end wizard who turns ideas into reality.", theme: "Frontend expertise · Collaboration", link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/" },
  { name: "Narendraprasad Upadhyay", role: "Scrum Master", context: "Payment team", excerpt: "Exceptional technical skill, attention to detail, and team contribution.", theme: "Quality · Reliability", link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/" },
  { name: "Alvaro Castañón", role: "Certified Product Owner", context: "Product team", excerpt: "Translated product requirements into working functionality and improvements.", theme: "Product thinking · Communication", link: "https://www.linkedin.com/in/sarmad-hussainz/details/recommendations/" },
];

export function RecommendationsWindow() {
  return (
    <StaggerGroup className="grid gap-3 md:grid-cols-2">
      {recommendations.map((recommendation) => (
        <StaggerItem key={recommendation.name}>
          <article className="rounded-2xl border border-[#D4A373]/10 bg-[#FAEDCD]/70 p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#D4A373]/20 hover:shadow-md motion-reduce:transform-none">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FAEDCD] to-[#D4A373]/25" />
            <div>
              <p className="text-sm font-semibold text-[#111827]">{recommendation.name}</p>
              <p className="text-sm text-slate-500">{recommendation.role}</p>
              <p className="text-[11px] text-slate-400">{recommendation.context}</p>
            </div>
          </div>
          <p className="text-base leading-7 text-slate-600">“{recommendation.excerpt}”</p>
          <p className="mt-3 text-xs text-[#8A5A2B]">{recommendation.theme}</p>
          <a href={recommendation.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs font-medium text-[#111827] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#8A5A2B] hover:underline motion-reduce:transform-none">View on LinkedIn ↗</a>
          </article>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
