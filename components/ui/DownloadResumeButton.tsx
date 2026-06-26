"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function DownloadResumeButton() {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const [{ pdf }, { ResumePDF }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/pdf/ResumePDF"),
      ]);

      const imageUrl = `${window.location.origin}/images/profile.png`;
      const blob = await pdf(<ResumePDF imageUrl={imageUrl} />).toBlob();

      const url  = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href     = url;
      link.download = "Paulo-Vieira-Software-Engineer.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="secondary"
      size="md"
      onClick={handleDownload}
      disabled={loading}
      aria-label="Baixar currículo em PDF"
    >
      {loading ? (
        <Loader2 size={14} className="animate-spin" aria-hidden="true" />
      ) : (
        <Download size={14} aria-hidden="true" />
      )}
      {loading ? "Gerando PDF..." : "Baixar currículo"}
    </Button>
  );
}
