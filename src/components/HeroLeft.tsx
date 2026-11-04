export function HeroLeft() {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-5 sm:gap-6">

      {/* Badge de identificação */}
      <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-800 px-2.5 py-1 sm:px-3">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9ff00]" />

        <span className="font-mono text-[9px] leading-relaxed tracking-[0.12em] text-zinc-400 sm:text-[10px] sm:tracking-widest">
          CURITIBA - BACKEND - JAVA - SPRING BOOT
        </span>
      </span>

      {/* Título principal */}
      <h1 className="flex flex-col text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.055em]">
        <span>Backend</span>

        <span>Developer.</span>

        <span>
          Java &{" "}
          <span className="inline-block -rotate-2 whitespace-nowrap bg-[#d9ff00] px-2 py-0.5 text-black">
            Spring Boot.
          </span>
        </span>
      </h1>

      {/* Descrição */}
      <p className="mt-3 max-w-[48ch] font-mono text-[13px] leading-7 text-zinc-400 sm:mt-5 sm:text-sm">
        Construo APIs escaláveis, seguras e bem documentadas. Agora expandindo
        para o frontend com{" "}
        <span className="font-bold text-zinc-100">
          React / Next.js
        </span>{" "}
        para fechar o ciclo completo.
      </p>

    </div>
  );
}