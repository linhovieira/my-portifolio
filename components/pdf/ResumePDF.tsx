import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import {
  profile,
  contact,
  stats,
  experiences,
  projects,
  skills,
  education,
  languages,
  achievements,
} from "@/lib/data";

// ─── Paleta ────────────────────────────────────────────────────────────────────

const C = {
  sidebarBg:     "#0f172a",
  sidebarText:   "#e2e8f0",
  sidebarMuted:  "#94a3b8",
  sidebarBorder: "#1e293b",
  action:        "#2563eb",
  accent:        "#38bdf8",
  primary:       "#0f172a",
  muted:         "#475569",
  border:        "#e2e8f0",
  surface:       "#f8fafc",
  white:         "#ffffff",
} as const;

const STAT_COLORS = ["#3B82F6", "#22C55E", "#A855F7", "#F97316"] as const;
const STAT_BGS    = ["#EFF6FF", "#F0FDF4", "#FAF5FF", "#FFF7ED"] as const;

const STACK_TECHS = [
  "Java", "Spring Boot", "REST API", "PostgreSQL", "SQL Server",
  "Redis", "Docker", "Angular", "React", "TypeScript",
  "JavaScript", "RabbitMQ", "GitLab CI/CD", "JWT / OAuth2",
];

const SOCIAL_ICONS = new Set(["Github", "Linkedin"]);
const CERTIFICATIONS = [
  "Java, Spring Boot, Angular",
  "School of Net – Java EE, Spring, Angular",
  "SENAI – Lógica de Programação",
  "Soliseon – Java, CK, SQL, HTML5",
];

// ─── Estilos ────────────────────────────────────────────────────────────────────
// Tamanhos calibrados para caber tudo em uma única página A4 (842pt de altura).

const s = StyleSheet.create({
  // Página
  page: {
    flexDirection: "row",
    fontFamily: "Helvetica",
    backgroundColor: C.white,
    fontSize: 7,
  },

  // ── Sidebar ────────────────────────────────────────────────────────────────
  sidebar: {
    width: 180,
    backgroundColor: C.sidebarBg,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    paddingRight: 12,
  },
  photoWrap: {
    alignItems: "center",
    marginBottom: 10,
  },
  photo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.2)",
  },
  sdivider: {
    height: 0.5,
    backgroundColor: "rgba(255,255,255,0.1)",
    marginBottom: 8,
  },
  sBlock: {
    marginBottom: 8,
  },
  sTitle: {
    fontSize: 6,
    fontFamily: "Helvetica-Bold",
    color: C.sidebarMuted,
    textTransform: "uppercase",
    letterSpacing: 1.0,
    marginBottom: 5,
  },
  sText: {
    fontSize: 7,
    color: C.sidebarText,
    lineHeight: 1.3,
  },
  sMuted: {
    fontSize: 6,
    color: C.sidebarMuted,
    lineHeight: 1.25,
  },

  // Chips do sidebar
  chipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "rgba(255,255,255,0.07)",
    borderWidth: 0.5,
    borderColor: "rgba(255,255,255,0.12)",
    borderRadius: 3,
    paddingTop: 1.5,
    paddingBottom: 1.5,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 2,
    marginBottom: 2,
  },
  chipText: {
    fontSize: 6,
    color: C.sidebarText,
  },

  // Progress bars
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1.5,
  },
  progressTrack: {
    height: 2,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 2,
    marginBottom: 4,
  },

  // ── Main ───────────────────────────────────────────────────────────────────
  main: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 14,
    paddingLeft: 18,
    paddingRight: 14,
  },

  // Nome
  nameFirst: {
    fontSize: 19,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    lineHeight: 1,
    letterSpacing: -0.3,
  },
  nameSecond: {
    fontSize: 19,
    fontFamily: "Helvetica-Bold",
    color: C.action,
    lineHeight: 1.05,
    letterSpacing: -0.3,
    marginBottom: 4,
  },

  // Badge
  badge: {
    backgroundColor: C.action,
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 7,
    paddingRight: 7,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  badgeText: {
    fontSize: 5,
    fontFamily: "Helvetica-Bold",
    color: C.white,
    letterSpacing: 0.2,
  },

  // Contatos
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 1,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 2,
  },
  contactDot: {
    width: 3.5,
    height: 3.5,
    borderRadius: 2,
    marginRight: 3,
  },
  contactLabel: {
    fontSize: 6.5,
    color: C.muted,
  },

  // Tagline
  tagline: {
    fontSize: 7,
    color: C.muted,
    fontStyle: "italic",
    borderLeftWidth: 1.5,
    borderLeftColor: C.action,
    paddingLeft: 6,
    lineHeight: 1.35,
    marginBottom: 6,
    marginTop: 3,
  },

  // Stats
  statsRow: {
    flexDirection: "row",
    marginBottom: 7,
  },
  statCard: {
    flex: 1,
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: C.border,
  },
  statValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1,
    marginBottom: 1.5,
  },
  statLabel: {
    fontSize: 5,
    color: C.muted,
    lineHeight: 1.25,
  },

  // Seções
  secHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  secBar: {
    width: 2.5,
    height: 8,
    backgroundColor: C.action,
    borderRadius: 2,
    marginRight: 5,
  },
  secTitle: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  mdivider: {
    height: 0.5,
    backgroundColor: C.border,
    marginTop: 5,
    marginBottom: 5,
  },

  // Sobre mim
  aboutText: {
    fontSize: 6.5,
    color: C.muted,
    lineHeight: 1.4,
    marginBottom: 1.5,
  },

  // Experiência
  expItem: {
    paddingLeft: 7,
    borderLeftWidth: 1,
    borderLeftColor: C.border,
    marginBottom: 5,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.5,
  },
  expRole: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    flex: 1,
  },
  expPeriod: {
    fontSize: 6,
    color: C.muted,
  },
  expMeta: {
    fontSize: 6,
    color: C.action,
    marginBottom: 1.5,
  },
  expDesc: {
    fontSize: 6,
    color: C.muted,
    lineHeight: 1.3,
    marginBottom: 2,
  },
  expTechs: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  expChip: {
    backgroundColor: "rgba(37,99,235,0.08)",
    borderRadius: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 2,
    marginBottom: 1.5,
  },
  expChipText: {
    fontSize: 5,
    color: C.action,
  },

  // Projetos
  projectGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  projectCard: {
    width: "49%",
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: C.border,
    backgroundColor: C.surface,
    marginBottom: 3,
  },
  projectCardLeft: {
    marginRight: "2%",
  },
  projectTitle: {
    fontSize: 6.5,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    marginBottom: 1.5,
  },
  projectDesc: {
    fontSize: 5.5,
    color: C.muted,
    lineHeight: 1.3,
    marginBottom: 3,
  },
  projectTechs: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  projectChip: {
    backgroundColor: "rgba(37,99,235,0.08)",
    borderRadius: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 2,
    marginBottom: 1.5,
  },
  projectChipText: {
    fontSize: 4.5,
    color: C.action,
  },

  // Conquistas
  achGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  achCard: {
    width: "49%",
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: C.border,
    backgroundColor: C.surface,
    marginBottom: 3,
  },
  achCardLeft: {
    marginRight: "2%",
  },
  achTitle: {
    fontSize: 6,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    marginBottom: 1.5,
  },
  achDesc: {
    fontSize: 5.5,
    color: C.muted,
    lineHeight: 1.25,
  },

  // Rodapé
  footer: {
    marginTop: 6,
    paddingTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: C.border,
  },
  footerText: {
    fontSize: 5,
    color: C.muted,
    textAlign: "center",
  },
});

// ─── Helpers ────────────────────────────────────────────────────────────────────

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <View style={s.progressTrack}>
      <View style={{ height: 2, borderRadius: 2, backgroundColor: color, width: `${value}%` }} />
    </View>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={s.secHeader}>
      <View style={s.secBar} />
      <Text style={s.secTitle}>{title}</Text>
    </View>
  );
}

// ─── Documento ─────────────────────────────────────────────────────────────────

interface ResumePDFProps {
  imageUrl: string;
}

export function ResumePDF({ imageUrl }: ResumePDFProps) {
  const basicContacts  = contact.filter((c) => !SOCIAL_ICONS.has(c.icon));
  const socialContacts = contact.filter((c) =>  SOCIAL_ICONS.has(c.icon));

  return (
    <Document
      title="Paulo Vieira — Software Engineer"
      author="Paulo Ricardo da Silva Vieira"
      subject="Currículo Profissional"
      keywords="Software Engineer, Java, Spring Boot, AWS, Backend, Salvador"
      creator="paulovieira.gpv-tech.com.br"
    >
      <Page size="A4" style={s.page}>

        {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
        <View style={s.sidebar}>

          <View style={s.photoWrap}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={imageUrl} style={s.photo} />
          </View>

          <View style={s.sdivider} />

          {/* Stack */}
          <View style={s.sBlock}>
            <Text style={s.sTitle}>Stack Principal</Text>
            <View style={s.chipWrap}>
              {STACK_TECHS.map((tech) => (
                <View key={tech} style={s.chip}>
                  <Text style={s.chipText}>{tech}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={s.sdivider} />

          {/* Habilidades */}
          <View style={s.sBlock}>
            <Text style={s.sTitle}>Habilidades</Text>
            {skills.map((skill) => (
              <View key={skill.name}>
                <View style={s.progressRow}>
                  <Text style={s.sText}>{skill.name}</Text>
                </View>
                <ProgressBar value={skill.level} color={C.action} />
              </View>
            ))}
          </View>

          <View style={s.sdivider} />

          {/* Idiomas */}
          <View style={s.sBlock}>
            <Text style={s.sTitle}>Idiomas</Text>
            {languages.map((lang) => (
              <View key={lang.name}>
                <View style={s.progressRow}>
                  <Text style={s.sText}>{lang.name}</Text>
                  <Text style={s.sMuted}>{lang.level}</Text>
                </View>
                <ProgressBar value={lang.percentage} color={C.accent} />
              </View>
            ))}
          </View>

          <View style={s.sdivider} />

          {/* Formação */}
          <View style={s.sBlock}>
            <Text style={s.sTitle}>Formação</Text>
            {education.map((edu) => (
              <View key={edu.degree} style={{ marginBottom: 7 }}>
                <Text style={[s.sText, { fontFamily: "Helvetica-Bold", marginBottom: 1 }]}>
                  {edu.degree}
                </Text>
                <Text style={s.sMuted}>{edu.institution}</Text>
                <Text style={s.sMuted}>{edu.period}</Text>
              </View>
            ))}
          </View>

          <View style={s.sdivider} />

          {/* Certificações */}
          <View style={s.sBlock}>
            <Text style={s.sTitle}>Certificações e Cursos</Text>
            {CERTIFICATIONS.map((cert) => (
              <Text key={cert} style={[s.sMuted, { marginBottom: 3 }]}>
                • {cert}
              </Text>
            ))}
          </View>

        </View>

        {/* ── MAIN ────────────────────────────────────────────────────── */}
        <View style={s.main}>

          {/* Nome */}
          <Text style={s.nameFirst}>{profile.nameFirstLine}</Text>
          <Text style={s.nameSecond}>{profile.nameSecondLine}</Text>

          {/* Badge de cargo */}
          <View style={s.badge}>
            <Text style={s.badgeText}>{profile.title}</Text>
          </View>

          {/* Contatos — linha 1: básicos | linha 2: redes sociais */}
          <View style={{ marginBottom: 7 }}>
            <View style={s.contactRow}>
              {basicContacts.map((item) => (
                <View key={item.icon} style={s.contactItem}>
                  <View style={[s.contactDot, { backgroundColor: C.action }]} />
                  <Text style={s.contactLabel}>{item.label}</Text>
                </View>
              ))}
            </View>
            <View style={s.contactRow}>
              {socialContacts.map((item) => (
                <View key={item.icon} style={s.contactItem}>
                  <View style={[s.contactDot, { backgroundColor: "#24292f" }]} />
                  <Text style={s.contactLabel}>{item.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Tagline */}
          <Text style={s.tagline}>{profile.tagline}</Text>

          {/* Stats */}
          <View style={s.statsRow}>
            {stats.map((stat, i) => (
              <View
                key={stat.label}
                style={[s.statCard, { backgroundColor: STAT_BGS[i], marginRight: i < stats.length - 1 ? 4 : 0 }]}
              >
                <Text style={[s.statValue, { color: STAT_COLORS[i] }]}>{stat.value}</Text>
                <Text style={s.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* Sobre Mim */}
          <SectionHeader title="Sobre Mim" />
          <Text style={s.aboutText}>{profile.summary}</Text>
          <Text style={[s.aboutText, { marginBottom: 0 }]}>{profile.summary2}</Text>

          <View style={s.mdivider} />

          {/* Trajetória */}
          <SectionHeader title="Trajetória Profissional" />
          {experiences.map((exp) => (
            <View key={`${exp.company}-${exp.period}`} style={s.expItem}>
              <View style={s.expHeader}>
                <Text style={s.expRole}>{exp.role}</Text>
                <Text style={s.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={s.expMeta}>
                {exp.company}{exp.employmentType ? ` · ${exp.employmentType}` : ""}
              </Text>
              <Text style={s.expDesc}>{exp.description}</Text>
              <View style={s.expTechs}>
                {exp.technologies.map((tech) => (
                  <View key={tech} style={s.expChip}>
                    <Text style={s.expChipText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View style={s.mdivider} />

          {/* Projetos */}
          <SectionHeader title="Projetos de Destaque" />
          <View style={s.projectGrid}>
            {projects.map((project, i) => (
              <View
                key={project.title}
                style={[s.projectCard, i % 2 === 0 ? s.projectCardLeft : {}]}
              >
                <Text style={s.projectTitle}>{project.title}</Text>
                <Text style={s.projectDesc}>{project.description}</Text>
                <View style={s.projectTechs}>
                  {project.technologies.map((tech) => (
                    <View key={tech} style={s.projectChip}>
                      <Text style={s.projectChipText}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <View style={s.mdivider} />

          {/* Conquistas */}
          <SectionHeader title="Principais Conquistas" />
          <View style={s.achGrid}>
            {achievements.map((ach, i) => (
              <View
                key={ach.title}
                style={[s.achCard, i % 2 === 0 ? s.achCardLeft : {}]}
              >
                <Text style={s.achTitle}>{ach.title}</Text>
                <Text style={s.achDesc}>{ach.description}</Text>
              </View>
            ))}
          </View>

          {/* Rodapé */}
          <View style={s.footer}>
            <Text style={s.footerText}>paulovieira.gpv-tech.com.br</Text>
          </View>

        </View>

      </Page>
    </Document>
  );
}
