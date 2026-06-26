import { profile, stats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { StatCard } from "@/components/ui/StatCard";
import { Download, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="py-12 lg:py-16">
      {/* Tagline */}
      <p className="text-sm text-text-muted mb-6 leading-relaxed max-w-xl">
        {profile.tagline}
      </p>

      {/* Heading */}
      <h2
        id="hero-heading"
        className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight leading-tight mb-6"
      >
        Engenheiro de Software
        <br />
        <span className="text-action">Backend &amp; Cloud</span>
      </h2>

      {/* Summary */}
      <p className="text-base text-text-muted leading-relaxed max-w-2xl mb-8">
        {profile.summary}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        <a href="mailto:linho_017@hotmail.com" aria-label="Enviar e-mail para Paulo Vieira">
          <Button variant="primary" size="lg">
            <Mail size={16} aria-hidden="true" />
            Entrar em contato
          </Button>
        </a>
        <Button variant="secondary" size="lg" disabled aria-label="Baixar currículo em PDF (em breve)">
          <Download size={16} aria-hidden="true" />
          Baixar currículo
        </Button>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 border border-border rounded-2xl divide-x divide-border bg-surface shadow-sm"
        role="list"
        aria-label="Estatísticas profissionais"
      >
        {stats.map((stat) => (
          <div key={stat.label} role="listitem">
            <StatCard stat={stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
