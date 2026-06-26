import Image from "next/image";
import { profile, contact, technologies, education, languages } from "@/lib/data";
import { SocialLink } from "@/components/ui/SocialLink";

export function Sidebar() {
  return (
    <aside
      aria-label="Perfil profissional"
      className="
        w-full lg:w-72 xl:w-80 shrink-0
        bg-gradient-to-b from-sidebar-from to-sidebar-to
        text-white
        lg:min-h-screen lg:sticky lg:top-0 lg:self-start
        flex flex-col
      "
    >
      <div className="flex flex-col gap-8 p-8 lg:p-10">
        {/* Avatar + Identity */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/20 shrink-0">
            <Image
              src={profile.avatarUrl}
              alt={`Foto de ${profile.name}`}
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </div>
          <div>
            <h1 className="text-base font-display font-bold leading-tight tracking-tight text-white">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-xs text-slate-400 leading-snug">
              {profile.title}
            </p>
          </div>
        </div>

        <Divider />

        {/* Contact */}
        <SidebarBlock title="Contato">
          <ul className="flex flex-col gap-3" role="list">
            {contact.map((item) => (
              <li key={item.label}>
                <SocialLink contact={item} variant="dark" />
              </li>
            ))}
          </ul>
        </SidebarBlock>

        <Divider />

        {/* Stack */}
        <SidebarBlock title="Stack Principal">
          <div className="flex flex-wrap gap-1.5">
            {technologies
              .filter((t) => t.category === "backend" || t.category === "language")
              .map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-white/10 text-slate-300 border border-white/10"
                >
                  {tech.name}
                </span>
              ))}
          </div>
        </SidebarBlock>

        <Divider />

        {/* Education */}
        <SidebarBlock title="Formação">
          <ul className="flex flex-col gap-4" role="list">
            {education.map((edu) => (
              <li key={edu.degree}>
                <p className="text-xs font-medium text-white leading-snug">{edu.degree}</p>
                <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                <p className="text-xs text-slate-500 mt-0.5">{edu.period}</p>
              </li>
            ))}
          </ul>
        </SidebarBlock>

        <Divider />

        {/* Languages */}
        <SidebarBlock title="Idiomas">
          <ul className="flex flex-col gap-2" role="list">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between">
                <span className="text-xs text-slate-300">{lang.name}</span>
                <span className="text-xs text-slate-500">{lang.level}</span>
              </li>
            ))}
          </ul>
        </SidebarBlock>
      </div>
    </aside>
  );
}

function Divider() {
  return <hr className="border-white/10" />;
}

function SidebarBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-display font-semibold uppercase tracking-widest text-slate-500">
        {title}
      </h2>
      {children}
    </div>
  );
}
