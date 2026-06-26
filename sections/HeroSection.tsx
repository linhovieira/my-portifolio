"use client";

import type { ContactLink } from "@/types";
import { profile, stats, contact } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { QRCodeBlock } from "@/components/ui/QRCodeBlock";
import {
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  FolderOpen,
  Code2,
  Target,
  type LucideProps,
} from "lucide-react";
import { siGithub } from "simple-icons";
import React from 'react'
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";

// path do ícone LinkedIn "in" — removido do simple-icons v16 por política de marca
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

// ─── Contact icon system ──────────────────────────────────────────────────────

type LucideEntry = { kind: "lucide"; Component: React.FC<LucideProps> };
type SvgEntry   = { kind: "svg";    path: string; color: string };
type ContactIconEntry = LucideEntry | SvgEntry;

const CONTACT_ICON_MAP: Record<string, ContactIconEntry> = {
  Phone:    { kind: "lucide", Component: Phone },
  Mail:     { kind: "lucide", Component: Mail },
  MapPin:   { kind: "lucide", Component: MapPin },
  Github:   { kind: "svg", path: siGithub.path, color: "#24292f" },
  Linkedin: { kind: "svg", path: LINKEDIN_PATH,  color: "#0A66C2" },
};

function ContactIcon({ iconKey, size = 13 }: { iconKey: string; size?: number }) {
  const entry = CONTACT_ICON_MAP[iconKey];
  if (!entry) return null;
  if (entry.kind === "lucide") {
    const C = entry.Component;
    return <C size={size} aria-hidden="true" className="shrink-0 text-text-muted" />;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={entry.color}
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={entry.path} />
    </svg>
  );
}

function ContactItem({ item }: { item: ContactLink }) {
  const content = (
    <span className="flex items-center gap-1.5 text-text-muted hover:text-action transition-colors duration-150">
      <ContactIcon iconKey={item.icon} size={32} />
      <div className="flex flex-col">
        <span className="text-xs font-semibold">{item.title}</span>
        <span className="text-sm">{item.label}</span>
      </div>
    </span>
  );
  if (item.href === "#") return <span>{content}</span>;
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={item.label}
    >
      {content}
    </a>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

const STAT_ICON_MAP: Record<string, React.FC<LucideProps>> = {
  CalendarDays,
  FolderOpen,
  Code2,
  Target,
};

const STAT_COLORS = [
  { bg: "#EFF6FF", iconBg: "#3B82F6", text: "#3B82F6" },
  { bg: "#F0FDF4", iconBg: "#22C55E", text: "#16A34A" },
  { bg: "#FAF5FF", iconBg: "#A855F7", text: "#9333EA" },
  { bg: "#FFF7ED", iconBg: "#F97316", text: "#EA580C" },
];

// Contatos básicos (telefone, e-mail, localização) ficam na linha 1;
// redes sociais (GitHub, LinkedIn) ficam na linha 2, com ícones de marca.
const SOCIAL_KEYS = new Set(["Github", "Linkedin"]);

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection() {
  const basicContacts  = contact.filter((c) => !SOCIAL_KEYS.has(c.icon));
  const socialContacts = contact.filter((c) =>  SOCIAL_KEYS.has(c.icon));

  return (
    <header className="pb-8 pt-10 lg:pt-12 flex flex-col gap-3">

      {/* Nome + QR */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <h1 className="font-display font-black leading-none tracking-tight">
            <span className="block text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem] text-primary">
              {profile.nameFirstLine}
            </span>
            <span className="block text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem] text-action">
              {profile.nameSecondLine}
            </span>
          </h1>

          {/* Badge de cargo */}
          <div className="mt-3 inline-flex items-center px-3 py-1.5 rounded-full bg-action text-white text-sm font-semibold tracking-wide leading-none">
            {profile.title}
          </div>
        </div>

        {/* QR Code */}
        <div className="shrink-0 hidden sm:block">
          <QRCodeBlock size={80} />
        </div>
      </div>

      {/* Contatos — linha 1: telefone / e-mail / endereço | linha 2: GitHub / LinkedIn */}
      <nav aria-label="Contatos" className="mb-8 flex flex-col gap-6">
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-1">
          {basicContacts.map((item) => (
            <li key={item.icon}>
              <ContactItem item={item} />
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-1">
          {socialContacts.map((item) => (
            <li key={item.icon}>
              <ContactItem item={item} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Tagline */}
      <p className="w-full text-sm text-text-muted leading-relaxed mb-6 border-l-2 border-action pl-3 italic">
        {profile.tagline}
      </p>

      {/* Botões CTA */}
      <div className="flex flex-wrap gap-3 mb-8">
        <a href="mailto:linho_017@hotmail.com" aria-label="Enviar e-mail para Paulo Vieira">
          <Button variant="primary" size="md">
            <Mail size={14} aria-hidden="true" />
            Entrar em contato
          </Button>
        </a>
        <DownloadResumeButton />
      </div>

      {/* Estatísticas */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        role="list"
        aria-label="Estatísticas profissionais"
      >
        {stats.map((stat, index) => {
          const Icon   = STAT_ICON_MAP[stat.icon] ?? CalendarDays;
          const colors = STAT_COLORS[index % STAT_COLORS.length];
          return (
            <div
              key={stat.label}
              role="listitem"
              className="flex items-center gap-3 p-3 rounded-xl border border-border"
              style={{ backgroundColor: colors.bg }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                style={{ backgroundColor: colors.iconBg }}
              >
                <Icon size={16} color="#ffffff" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xl font-display font-black leading-none"
                  style={{ color: colors.text }}
                >
                  {stat.value}
                </p>
                <p className="text-[10px] text-text-muted leading-tight mt-0.5">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}
