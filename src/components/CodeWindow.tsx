export function CodeWindow() {
  return (
    <div className="w-full min-w-0 flex-1 overflow-hidden rounded-xl border border-zinc-800 bg-[#151515] p-4 sm:p-6">

      {/* Área de arquitetura */}
      <div className="min-w-0 py-4 sm:py-6">

        {/* Título da seção */}
        <div className="mb-6 flex min-w-0 items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
              SYSTEM OVERVIEW
            </p>

            <h2 className="mt-1 text-base font-semibold text-zinc-100 sm:text-lg">
              Backend Architecture
            </h2>
          </div>

          <span className="shrink-0 rounded-md border border-[#d9ff00]/20 bg-[#d9ff00]/5 px-2 py-1 font-mono text-[9px] text-[#d9ff00]">
            LIVE SYSTEM
          </span>
        </div>

        {/* Fluxo da aplicação */}
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">

          {/* Client */}
          <div className="flex min-w-0 items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-zinc-300">
              <span className="text-lg">⌘</span>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-200">
                Client
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                HTTP Request
              </p>
            </div>
          </div>

          {/* API */}
          <div className="flex min-w-0 items-center gap-3 rounded-lg border border-[#d9ff00]/40 bg-[#d9ff00]/[0.06] p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#d9ff00] text-black">
              <span className="text-lg font-bold">S</span>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-100">
                REST API
              </p>
              <p className="font-mono text-[10px] text-[#d9ff00]">
                Spring Boot
              </p>
            </div>
          </div>

          {/* Service */}
          <div className="flex min-w-0 items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-zinc-300">
              <span className="text-lg">⚙</span>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-200">
                Service
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                Business Logic
              </p>
            </div>
          </div>

          {/* Database */}
          <div className="flex min-w-0 items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-zinc-800 text-zinc-300">
              <span className="text-lg">▤</span>
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-200">
                Database
              </p>
              <p className="font-mono text-[10px] text-zinc-500">
                PostgreSQL
              </p>
            </div>
          </div>

        </div>

        {/* Informações inferiores */}
        <div className="mt-6 grid min-w-0 grid-cols-2 gap-3">

          <div className="min-w-0 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-3">
            <p className="font-mono text-[9px] tracking-widest text-zinc-500">
              RESPONSE
            </p>
            <p className="mt-1 font-mono text-sm font-semibold text-[#d9ff00]">
              200 OK
            </p>
          </div>

          <div className="min-w-0 rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-3">
            <p className="font-mono text-[9px] tracking-widest text-zinc-500">
              ARCHITECTURE
            </p>
            <p className="mt-1 font-mono text-sm font-semibold text-zinc-200">
              REST · MVC
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}