"use client";

import { QRCodeSVG } from "qrcode.react";

const PORTFOLIO_URL = "https://paulovieira.gpv-tech.com.br";

interface QRCodeBlockProps {
  size?: number;
}

export function QRCodeBlock({ size = 80 }: QRCodeBlockProps) {
  return (
    <div
      className="flex flex-col items-center gap-1"
      title={`QR Code — ${PORTFOLIO_URL}`}
    >
      <div className="p-1.5 bg-white rounded-lg shadow-sm border border-border">
        <QRCodeSVG
          value={PORTFOLIO_URL}
          size={size}
          level="M"
          bgColor="#ffffff"
          fgColor="#0f172a"
        />
      </div>
      <span className="text-[9px] text-text-muted font-mono leading-none">
        paulovieira.gpv-tech.com.br
      </span>
    </div>
  );
}
