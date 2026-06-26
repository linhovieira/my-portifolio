"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center p-8">
          <h2 className="text-xl font-semibold">Algo deu errado</h2>
          <button
            onClick={reset}
            className="rounded-xl bg-action px-5 py-2.5 text-sm font-medium text-white"
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
