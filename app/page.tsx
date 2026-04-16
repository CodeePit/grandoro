"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const NAV_LINKS = [
  { label: "O EMPREENDIMENTO", href: "#empreendimento" },
  { label: "LOCALIZAÇÃO", href: "#localizacao" },
  { label: "DIFERENCIAIS", href: "#diferenciais" },
  { label: "APARTAMENTOS", href: "#apartamentos" },
  { label: "PLANTA", href: "#plantas" },
  { label: "LAZER", href: "#lazer" },
];

const APARTMENT_FEATURES = [
  "Sala de estar e jantar integradas",
  "Lavabo",
  "Integração total entre ambientes",
  "Cozinha e lavanderia conectadas",
  "Varanda com vista privilegiada",
  "Circulação inteligente",
  "Despensa",
  "Suíte master com closet (pavimentos tipo)",
  "Excelente iluminação natural",
];

export default function Home() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-[#030e1d]" style={{ fontFamily: "var(--font-sans)", overflowX: "clip" }}>

      {/* ── HERO ── */}
      <section className="relative w-full">
        <div className="relative h-screen w-full">
          <Image
            src="/images/background.jpg"
            alt="Grand'Oro"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#030e1d]/20" />
          {/* Left gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(270deg, rgba(17, 83, 146, 0) 0%, #05192C 100%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* GO badge — top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24">
            <Image src="/images/logo-header.png" alt="GO" fill className="object-contain" />
          </div>

          {/* Principal logo — vertically centered, left */}
          <div className="absolute inset-y-0 left-6 md:left-16 lg:left-32 flex items-center">
            <div className="w-[180px] sm:w-[260px] md:w-[340px] lg:w-[412px]">
              <Image
                src="/images/logo-banner.png"
                alt="Grand'Oro Vila Barth"
                width={412}
                height={264}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* LANÇAMENTO stripe */}
        <div className="bg-[#c9b89a] py-3 md:py-4 text-center">
          <span className="text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] text-[#030e1d] uppercase font-medium">
            L A N Ç A M E N T O
          </span>
        </div>

        {/* Stats bar */}
        <div className="bg-white py-5 md:py-7 border-b border-[#e8e2d9]">
          <div className="max-w-3xl mx-auto px-4 flex items-center justify-center gap-6 sm:gap-12 md:gap-20">
            <div className="text-center">
              <div className="flex items-end gap-1 justify-center">
                <span
                  className="text-4xl sm:text-5xl md:text-6xl font-light text-[#030e1d]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  127
                </span>
                <span className="text-xs sm:text-sm text-[#b8ada0] mb-1.5">M²</span>
              </div>
            </div>
            <div className="w-px h-10 bg-[#b7a47a]/40" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-[#030e1d]" style={{ fontFamily: "var(--font-heading)" }}>3</div>
              <span className="text-[9px] tracking-[0.2em] text-[#b8ada0] uppercase">Suítes</span>
            </div>
            <div className="w-px h-10 bg-[#b7a47a]/40" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-[#030e1d]" style={{ fontFamily: "var(--font-heading)" }}>2</div>
              <span className="text-[9px] tracking-[0.2em] text-[#b8ada0] uppercase">Vagas</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── NAVBAR STICKY ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#e8e2d9]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Image src="/images/logo-principal.png" alt="Grand'Oro" width={90} height={54} className="object-contain" />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-[10px] tracking-[0.15em] text-[#030e1d] hover:text-[#b7a47a] transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
            <a href="#contato" className="text-[10px] tracking-[0.15em] text-[#b7a47a] border border-[#b7a47a] px-4 py-1.5 hover:bg-[#b7a47a] hover:text-white transition-all whitespace-nowrap">
              CONTATO
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-[#030e1d] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-[#030e1d] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#030e1d] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e8e2d9] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-[11px] tracking-[0.2em] text-[#030e1d] hover:text-[#b7a47a] transition-colors uppercase">
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setMenuOpen(false)} className="text-[11px] tracking-[0.2em] text-[#b7a47a] border border-[#b7a47a] px-4 py-2 text-center hover:bg-[#b7a47a] hover:text-white transition-all uppercase">
              CONTATO
            </a>
          </div>
        )}
      </nav>

      {/* ── TAGLINE ── */}
      <section className="bg-white py-16 md:py-28 px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] text-[#b8ada0] mb-6 md:mb-8 uppercase">
          Do ponto mais alto da Vila Barth,
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-snug uppercase tracking-wider text-[#030e1d]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Um novo ícone começa
        </h1>
        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-light leading-none uppercase tracking-widest text-[#030e1d]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Nascer
        </h1>
      </section>

      {/* ── EMPREENDIMENTO ── */}
      <section id="empreendimento" className="bg-white pb-16 md:pb-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: two building images + tagline */}
          <div>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="relative aspect-[3/4]">
                <Image src="/images/building-facade1.jpg" alt="Grand'Oro Fachada" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4]">
                <Image src="/images/building-facade2.jpg" alt="Grand'Oro Detalhe" fill className="object-cover" />
              </div>
            </div>
            <div className="mt-5 md:mt-6">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight uppercase text-[#030e1d]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                O VALOR<br />DE VIVER<br />
                <span className="text-[#b7a47a]">O QUE É RARO</span>
              </h2>
            </div>
          </div>

          {/* Right: description */}
          <div className="flex flex-col justify-center pt-4">
            <p className="text-sm leading-7 text-[#888] mb-5">
              Grand&apos;Oro é mais do que um breve lançamento. É um gesto. Um marco.
            </p>
            <p className="text-sm leading-7 text-[#888] mb-5">
              Um símbolo de como a arquitetura pode elevar a vida das pessoas quando nasce de propósito e precisão.
            </p>
            <p className="text-sm leading-7 text-[#888] mb-8 md:mb-10">
              Em um dos endereços mais tradicionais da cidade, Grand&apos;Oro surge como um farol.
            </p>
            <p className="text-[11px] tracking-[0.22em] text-[#030e1d] uppercase mb-1">ELEGANTE, IMPONENTE</p>
            <p className="text-[11px] tracking-[0.22em] text-[#030e1d] uppercase mb-8 md:mb-10">&amp; ATEMPORAL.</p>
            <a
              href="#contato"
              className="inline-block border border-[#030e1d] text-[#030e1d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-[#030e1d] hover:text-white transition-all w-fit"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative py-24 md:py-36 px-6 text-center overflow-hidden">
        <Image src="/images/banner-facade.jpg" alt="Video thumbnail" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#030e1d]/65" />
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.45em] text-[#b7a47a] mb-4 uppercase">
            Conheça o Grand&apos;Oro mais de perto
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-10 md:mb-14 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Assista o Vídeo
          </h2>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#b7a47a] flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer">
            <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-[#b7a47a] ml-1" />
          </div>
        </div>
      </section>

      {/* ── LOCALIZAÇÃO ── */}
      <section id="localizacao">
        <div className="grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[80vh]">
          {/* Left: aerial image */}
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image src="/images/location-aerial.jpg" alt="Vista aérea Vila Barth" fill className="object-cover" />
          </div>

          {/* Right: text on warm beige */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24" style={{ backgroundColor: "#ede5d8" }}>
            <div className="mb-5">
              <Image src="/images/logo-header.png" alt="Grand'Oro" width={52} height={52} className="object-contain" />
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 uppercase text-[#030e1d]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Vila Barth:
            </h2>
            <h3
              className="text-sm md:text-base font-light text-[#b7a47a] mb-6 md:mb-8 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tradição, Tranquilidade<br />e Prestígio
            </h3>
            <p className="text-sm leading-7 text-[#666] mb-4">
              Grand&apos;Oro está estrategicamente posicionado em uma das regiões mais desejadas da cidade, cercado por conveniência, mobilidade e serviços de alto padrão.
            </p>
            <p className="text-sm leading-7 text-[#666] mb-4">
              Próximo às principais vias, aos polos gastronômicos, escolas, comércio e serviços essenciais, o empreendimento oferece a praticidade do cotidiano sem abrir mão da tranquilidade de um bairro tradicional e valorizado.
            </p>
            <p className="text-sm leading-7 text-[#666]">
              Aqui, tudo o que você precisa está ao seu redor e tudo o que você deseja está à altura do seu estilo de vida.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section id="diferenciais" className="bg-white py-16 md:py-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase leading-none text-[#030e1d]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              DIFERENCIAIS<br />
              <span className="text-[#b7a47a]">EXCLUSIVOS</span>
            </h2>
          </div>
          <div>
            <ul className="space-y-3 mb-8 md:mb-10">
              {[
                "Torre única de 19 pavimentos",
                "Fachada contemporânea",
                "Apenas 60 unidades",
                "4 apartamentos por andar",
                "Pavimento de lazer completo",
                "120 vagas",
                "Dois pavimentos técnicos para garantir desempenho acústico, hidráulico e manutenção adequada",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#666] leading-6">
                  <span className="text-[#b7a47a] mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="inline-block border border-[#030e1d] text-[#030e1d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-[#030e1d] hover:text-white transition-all"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* ── APARTAMENTOS ── */}
      <section id="apartamentos" className="py-16 md:py-28" style={{ backgroundColor: "#f5f0e8" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="mb-5">
                <Image src="/images/logo-header.png" alt="Grand'Oro" width={48} height={48} className="object-contain" />
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light uppercase mb-6 md:mb-8 leading-tight text-[#030e1d]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OS APARTAMENTOS
              </h2>
              <p className="text-sm leading-7 text-[#666] mb-4">
                O Grand&apos;Oro apresenta uma tipologia única de 127m² cuidadosamente planejada para oferecer amplitude e integração.
              </p>
              <p className="text-sm leading-7 text-[#666]">
                A fusão entre funcionalidade e acabamento sofisticado cria um ambiente que acolhe, impressiona e inspira.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/images/apartment-sala.jpg" alt="Sala integrada" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANTA ── */}
      <section id="plantas" className="bg-white py-16 md:py-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-[9px] tracking-[0.35em] text-[#b7a47a] mb-3 uppercase">Planta</p>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-light uppercase text-[#030e1d] leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              127 M²
            </h2>
            <p className="text-xl sm:text-2xl font-light text-[#030e1d] mt-3" style={{ fontFamily: "var(--font-heading)" }}>
              3 Suítes
            </p>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image src="/images/floor-plan.jpg" alt="Planta 127m²" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="bg-white pb-16 md:pb-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {APARTMENT_FEATURES.map((f) => (
              <div key={f} className="border border-[#e8e2d9] p-4 flex items-start gap-2 text-xs text-[#030e1d] leading-5">
                <span className="text-[#b7a47a] shrink-0 mt-0.5">—</span>
                {f}
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[#b8ada0]/50 text-center mt-5 tracking-widest">
            imagem meramente ilustrativa
          </p>
        </div>
      </section>

      {/* ── LAZER ── */}
      <section id="lazer" className="relative flex flex-col lg:flex-row min-h-[90vh]">
        {/* Background image — covers full section on desktop, partial on mobile */}
        <div className="relative min-h-[50vh] lg:flex-1">
          <Image src="/images/leisure-woman.jpg" alt="Lazer" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#030e1d]/25" />
        </div>

        {/* Text panel */}
        <div className="bg-[#030e1d]/95 lg:bg-[#030e1d]/90 w-full lg:w-[420px] xl:w-[480px] shrink-0 flex flex-col justify-center p-8 md:p-12 lg:p-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light uppercase text-white mb-1 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O LAZER
          </h2>
          <h3
            className="text-lg font-light uppercase text-[#b7a47a] mb-5 tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Um Clube Elevado
          </h3>
          <p className="text-sm leading-6 text-[#b8ada0] mb-3">
            O Grand&apos;Oro conta com 2.000m² dedicado ao lazer e ao bem-estar.
          </p>
          <p className="text-sm leading-6 text-[#b8ada0] mb-7">
            Um espaço criado para proporcionar experiências únicas, com ambientes sofisticados que equilibram convivência, tranquilidade e saúde.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-[#b7a47a] mb-3 uppercase">Áreas Internas</p>
              <ul className="space-y-1.5">
                {["Academia", "Pilates", "Massagem", "Sauna seca e úmida", "Coworking", "Sala de reunião", "Brinquedoteca", "Espaço gourmet", "Salão de festas", "Salão de jogos", "Espaço beleza"].map((i) => (
                  <li key={i} className="text-xs text-[#b8ada0] flex gap-2">
                    <span className="text-[#b7a47a]">•</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] text-[#b7a47a] mb-3 uppercase">Áreas Externas</p>
              <ul className="space-y-1.5">
                {["Piscina", "Spa", "Quadra de beach tennis", "Quadra poliesportiva", "Playground", "Pet place", "Casa de campo", "Pergolados e áreas de descanso"].map((i) => (
                  <li key={i} className="text-xs text-[#b8ada0] flex gap-2">
                    <span className="text-[#b7a47a]">•</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERIA LAZER ── */}
      <section style={{ backgroundColor: "#e8e0d4" }} className="pt-12 md:pt-16 pb-0">
        <div className="px-6 md:px-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light uppercase mb-2 text-center text-[#030e1d]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lazer de Clube
          </h2>
          <p className="text-[10px] tracking-[0.4em] text-[#030e1d] text-center mb-8 md:mb-12 uppercase">
            com cara de Condomínio Premium
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-[4/3]">
            <Image src="/images/leisure-pool1.jpg" alt="Piscina" fill className="object-cover" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.3em] text-white/80 uppercase">Piscina</span>
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/leisure-pool2.jpg" alt="Academia" fill className="object-cover" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] tracking-[0.3em] text-white/80 uppercase">Academia</span>
            </div>
          </div>
        </div>
        <p className="text-[9px] text-[#b8ada0]/50 text-center py-4 tracking-widest">
          imagem meramente ilustrativa
        </p>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-[#030e1d]">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Form side */}
          <div className="flex flex-col justify-center px-8 md:px-20 py-16 md:py-24">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light uppercase mb-8 md:mb-12 leading-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Entre<br />em contato<br />para mais<br />informações
            </h2>

            <form className="space-y-6 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <Input
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="bg-transparent border-[#b8ada0]/30 border-0 border-b rounded-none text-white placeholder:text-[#b8ada0]/50 focus-visible:ring-0 focus-visible:border-[#b7a47a] px-0"
                placeholder="Nome"
              />
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent border-[#b8ada0]/30 border-0 border-b rounded-none text-white placeholder:text-[#b8ada0]/50 focus-visible:ring-0 focus-visible:border-[#b7a47a] px-0"
                placeholder="E-mail"
              />
              <Input
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                className="bg-transparent border-[#b8ada0]/30 border-0 border-b rounded-none text-white placeholder:text-[#b8ada0]/50 focus-visible:ring-0 focus-visible:border-[#b7a47a] px-0"
                placeholder="Telefone com DDD"
              />
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-transparent border border-[#b7a47a] text-[#b7a47a] px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#b7a47a] hover:text-[#030e1d] transition-all w-full cursor-pointer"
                >
                  Falar com um especialista
                </button>
              </div>
            </form>
          </div>

          {/* Image side */}
          <div className="relative min-h-[50vh] lg:min-h-full order-first lg:order-last">
            <Image src="/images/contact-portrait.jpg" alt="Contato" fill className="object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#030e1d] border-t border-[#b7a47a]/10 py-5 px-6 text-center">
        <p className="text-[9px] tracking-[0.2em] text-[#b8ada0]/30 uppercase">
          Grand&apos;Oro © 2026 · Vila Barth · Imagens meramente ilustrativas
        </p>
      </footer>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
