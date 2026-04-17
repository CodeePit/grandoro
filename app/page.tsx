"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const VP = { once: true, amount: 0.2 } as const;

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
            alt="Grand'Oro Vila Barth — Torre única na Vila Barth"
            fill
            className="object-cover object-center max-sm:hidden"
            priority
            sizes="100vw"
            quality={85}
          />
          <Image
            src="/images/background-mobile.png"
            alt="Grand'Oro Vila Barth — Torre única na Vila Barth"
            fill
            className="object-cover object-center sm:hidden"
            priority
            sizes="100vw"
            quality={85}
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
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image src="/images/logo-header.png" alt="GO" fill className="object-contain" />
          </motion.div>

          {/* Principal logo — vertically centered, left */}
          <div className="absolute inset-y-0 left-6 md:left-16 lg:left-32 flex items-center">
            <motion.div
              className="w-[180px] sm:w-[260px] md:w-[340px] lg:w-[412px]"
              initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/logo-banner.png"
                alt="Grand'Oro Vila Barth"
                width={412}
                height={264}
                className="object-contain w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* LANÇAMENTO stripe */}
        <div className="bg-[#c9b89a] py-3 md:py-4 text-center">
          <span className="text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] text-[#030e1d] uppercase font-medium">
            L A N Ç A M E N T O
          </span>
        </div>

        {/* Stats bar */}
        <div className="bg-[#030e1d] py-7 md:py-10">
          <motion.div
            className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-0"
            variants={stagger} initial="hidden" whileInView="show" viewport={VP}
          >
            <motion.div variants={fadeIn} className="flex-1 h-px bg-[#b7a47a]/50 hidden sm:block" />
            <div className="flex items-center gap-0">
              <motion.div variants={fadeUp} className="px-4 sm:px-8 md:px-12 text-center">
                <div className="flex items-end gap-1 justify-center">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-light text-[#b7a47a]" style={{ fontFamily: "var(--font-heading)" }}>127</span>
                  <span className="text-sm md:text-base text-[#b7a47a] mb-2 font-light">M²</span>
                </div>
              </motion.div>
              <div className="w-px h-12 bg-[#b7a47a]/50" />
              <motion.div variants={fadeUp} className="px-4 sm:px-8 md:px-12 text-center">
                <div className="text-4xl sm:text-5xl font-light text-[#b7a47a]" style={{ fontFamily: "var(--font-heading)" }}>3</div>
                <span className="text-[9px] tracking-[0.25em] text-[#b7a47a]/80 uppercase">Suítes</span>
              </motion.div>
              <div className="w-px h-12 bg-[#b7a47a]/50" />
              <motion.div variants={fadeUp} className="px-4 sm:px-8 md:px-12 text-center">
                <div className="text-4xl sm:text-5xl font-light text-[#b7a47a]" style={{ fontFamily: "var(--font-heading)" }}>2</div>
                <span className="text-[9px] tracking-[0.25em] text-[#b7a47a]/80 uppercase">Vagas</span>
              </motion.div>
            </div>
            <motion.div variants={fadeIn} className="flex-1 h-px bg-[#b7a47a]/50 hidden sm:block" />
          </motion.div>
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
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-px bg-[#030e1d] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-[#030e1d] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#030e1d] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white border-t border-[#e8e2d9] px-6 py-4 flex flex-col gap-4" role="navigation" aria-label="Menu mobile">
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
      <motion.section
        className="bg-white pt-16 pb-10 md:pt-24 md:pb-14 px-6 text-center"
        variants={stagger} initial="hidden" whileInView="show" viewport={VP}
      >
        <motion.p variants={fadeUp} className="uppercase text-black"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(13px, 3.5vw, 21px)", lineHeight: 1.2, letterSpacing: "0.38em" }}
        >
          Do ponto mais alto da Vila Barth,
        </motion.p>
        <motion.h1 variants={fadeUp} className="uppercase text-black mt-2"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(22px, 5vw, 36px)", lineHeight: 1.2, letterSpacing: "0.38em" }}
        >
          Um novo ícone começa
        </motion.h1>
        <motion.h1 variants={fadeUp} className="uppercase text-black mt-1"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontSize: "clamp(40px, 9vw, 64px)", lineHeight: 1.2, letterSpacing: "0.38em" }}
        >
          Nascer
        </motion.h1>
      </motion.section>

      {/* ── EMPREENDIMENTO ── */}
      <section id="empreendimento" className="bg-white pb-16 md:pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[35fr_25fr_40fr] gap-6 lg:gap-8 items-start">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VP} className="relative w-full aspect-[3/5] max-h-[60vh] lg:max-h-none">
            <Image src="/images/building-facade1.jpg" alt="Grand'Oro Fachada" fill className="object-cover" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VP} className="flex flex-col gap-8">
            <div className="relative w-full aspect-[4/5]">
              <Image src="/images/imagem-nascer.jpg" alt="Grand'Oro Detalhe" fill className="object-cover" />
            </div>
            <h2 className="font-light leading-tight uppercase text-[#b7a47a]" style={{ fontFamily: "var(--font-heading)", fontSize: "36px" }}>
              O VALOR<br />DE VIVER<br />O QUE É RARO
            </h2>
            <div className="w-12 h-px bg-[#b7a47a]/50" />
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={VP} className="flex flex-col justify-start pt-2">
            <p className="text-sm leading-7 text-[#888] mb-4">Grand&apos;Oro é mais do que um breve lançamento.</p>
            <p className="text-sm leading-7 text-[#888] mb-4">
              É um gesto.<br />Um marco.<br />
              Um símbolo de como a arquitetura pode elevar a vida das pessoas quando nasce de propósito e precisão.
            </p>
            <p className="text-sm leading-7 text-[#888] mb-8">
              Em um dos endereços mais tradicionais da cidade, Grand&apos;Oro surge como um farol:
            </p>
            <p className="text-[11px] tracking-[0.28em] text-[#030e1d] uppercase leading-6 mb-1">ELEGANTE, IMPONENTE</p>
            <p className="text-[11px] tracking-[0.28em] text-[#030e1d] uppercase leading-6 mb-5">&amp; ATEMPORAL.</p>
            <div className="w-full h-px bg-[#e0d8ce] mb-8" />
            <a href="#contato" className="inline-block border border-[#030e1d] text-[#030e1d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-[#030e1d] hover:text-white transition-all w-fit">
              Falar com Especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative py-24 md:py-36 px-6 text-center overflow-hidden">
        <Image src="/images/banner-video.png" alt="Video thumbnail" fill className="object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(5, 25, 44, 0.80)" }} />
        <motion.div className="relative z-10" variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.45em] text-[#b7a47a] mb-4 uppercase">
            Conheça o Grand&apos;Oro mais de perto
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-10 md:mb-14 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Assista o Vídeo
          </motion.h2>
          <motion.div variants={fadeUp}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#b7a47a] flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer"
          >
            <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-[#b7a47a] ml-1" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── LOCALIZAÇÃO ── */}
      <section id="localizacao" className="relative">
        {/* Background layer: beige left 52%, navy right */}
        <div className="absolute inset-0 flex pointer-events-none" aria-hidden>
          <div className="w-[52%]" style={{ backgroundColor: "#c4b5a7" }} />
          <div className="flex-1 bg-[#030e1d]" />
        </div>

        {/* Content layer: grid over the backgrounds */}
        <div className="relative grid lg:grid-cols-[58fr_42fr] min-h-[75vh]">
          {/* Image column */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VP}
            className="p-8 lg:py-12 lg:pl-12 lg:pr-0 min-h-[45vh] lg:min-h-0" style={{ backgroundColor: "transparent" }}
          >
            <div className="relative h-full min-h-[300px]">
              <Image src="/images/vila-barth-banner.jpeg" alt="Vista aérea Vila Barth" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={VP}
            className="flex flex-col justify-center px-10 md:px-14 py-16 md:py-20 bg-[#030e1d] lg:bg-transparent"
          >
            <div className="mb-6">
              <Image src="/images/logo-header.png" alt="Grand'Oro" width={48} height={48} className="object-contain" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 uppercase text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Vila Barth:
            </h2>
            <p className="text-[10px] tracking-[0.28em] text-[#b7a47a] mb-8 uppercase leading-6">
              Tradição, Tranquilidade<br />e Prestígio
            </p>
            <p className="text-sm leading-6 text-[#ccc] mb-4">
              Grand&apos;Oro está estrategicamente posicionado em uma das regiões mais desejadas da cidade, cercado por conveniência, mobilidade e serviços de alto padrão.
            </p>
            <p className="text-sm leading-6 text-[#ccc] mb-4">
              Próximo às principais vias, aos polos gastronômicos, escolas, comércio e serviços essenciais, o empreendimento oferece a praticidade do cotidiano sem abrir mão da tranquilidade de um bairro tradicional e valorizado.
            </p>
            <p className="text-sm leading-6 text-[#ccc]">
              Aqui, tudo o que você precisa está ao seu redor e tudo o que você deseja está à altura do seu estilo de vida.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section id="diferenciais" className="bg-white py-16 md:py-28 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VP}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase leading-none text-[#030e1d]" style={{ fontFamily: "var(--font-heading)" }}>
              DIFERENCIAIS<br /><span className="text-[#b7a47a]">EXCLUSIVOS</span>
            </h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
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
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-[#666] leading-6">
                  <span className="text-[#b7a47a] mt-1 shrink-0">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.a variants={fadeUp} href="#contato" className="inline-block border border-[#030e1d] text-[#030e1d] px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-[#030e1d] hover:text-white transition-all">
              Falar com Especialista
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── APARTAMENTOS ── */}
      <section id="apartamentos" className="grid lg:grid-cols-[30fr_70fr]">
        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VP} className="bg-[#030e1d] flex flex-col justify-center px-10 md:px-12 py-16 md:py-20">
          <div className="mb-8">
            <Image src="/images/logo-header.png" alt="Grand'Oro" width={48} height={48} className="object-contain" />
          </div>
          <h2
            className="text-lg md:text-xl font-light uppercase tracking-[0.22em] text-[#b7a47a] mb-5 leading-relaxed"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            OS APARTAMENTOS
          </h2>
          <div className="w-8 h-px bg-[#b7a47a]/50 mb-8" />
          <p className="text-sm leading-7 text-[#b8ada0] mb-5">
            O Grand&apos;Oro apresenta uma tipologia única de 127m² cuidadosamente planejada para oferecer amplitude e integração.
          </p>
          <p className="text-sm leading-7 text-[#b8ada0]">
            A fusão entre funcionalidade e acabamento sofisticado cria um ambiente que acolhe, impressiona e inspira.
          </p>
        </motion.div>

        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={VP} className="relative min-h-[55vh] lg:min-h-0">
          <Image src="/images/apartamentos-banner.jpeg" alt="Sala integrada" fill className="object-cover object-center" />
        </motion.div>
      </section>

      {/* ── PLANTA ── */}
      <section id="plantas" className="bg-white pt-16 md:pt-24 pb-14 md:pb-20 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">

          {/* Top: info + planta image */}
          <div className="grid lg:grid-cols-[35fr_65fr] gap-10 lg:gap-16 items-center mb-14 md:mb-20">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VP}>
              <p className="tracking-[0.4em] text-[#b7a47a] uppercase mb-2" style={{ fontSize: "clamp(14px, 2.5vw, 24px)" }}>
                Planta
              </p>
              <div className="flex items-start leading-none">
                <span
                  className="font-light text-[#b7a47a]"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(64px, 13vw, 128px)", lineHeight: 1 }}
                >
                  127
                </span>
                <span
                  className="font-light text-[#b7a47a] mt-2 ml-1"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(22px, 4vw, 40px)", lineHeight: 1 }}
                >
                  M²
                </span>
              </div>
              <p
                className="tracking-[0.25em] text-[#b7a47a] uppercase mt-2"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(18px, 3.5vw, 32px)" }}
              >
                3 Suítes
              </p>
            </motion.div>

            {/* Right: floor plan image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={VP} className="relative w-full aspect-[4/3]">
              <Image src="/images/planta.png" alt="Planta 127m²" fill className="object-contain" />
            </motion.div>
          </div>

          {/* Bottom: features grid 3×3 */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {APARTMENT_FEATURES.map((f) => (
              <motion.div key={f} variants={fadeUp} className="border border-[#e0d8ce] px-4 py-3 flex items-center gap-3 text-xs text-[#030e1d] leading-5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                  <circle cx="9" cy="9" r="8" stroke="#b7a47a" strokeWidth="1" />
                  <circle cx="9" cy="9" r="3.5" stroke="#b7a47a" strokeWidth="1" />
                </svg>
                {f}
              </motion.div>
            ))}
          </motion.div>

          <p className="text-[9px] text-[#b8ada0]/50 text-center mt-6 tracking-widest uppercase">
            Imagem meramente ilustrativa
          </p>
        </div>
      </section>

      {/* ── LAZER ── */}
      <section id="lazer" className="relative min-h-[100vh] lg:min-h-[110vh]">
        {/* Full-section background image */}
        <Image src="/images/lazer-banner.jpeg" alt="Lazer" fill className="object-cover object-center" />

        <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={VP}
          className="relative z-10 mx-[4%] my-[15%] lg:absolute lg:top-[15%] lg:bottom-[15%] lg:right-[4%] lg:left-[52%] lg:mx-0 lg:my-0 flex flex-col justify-center px-6 py-6 lg:px-10 lg:py-8"
          style={{ backgroundColor: "rgba(18, 52, 78, 0.88)" }}
        >
          <h2
            className="text-4xl sm:text-5xl font-light uppercase text-[#c9b98a] mb-1 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O LAZER
          </h2>
          <h3 className="text-sm font-light uppercase text-white/80 tracking-[0.3em] mb-6">
            Um Clube Elevado
          </h3>

          <p className="text-sm leading-6 text-white/90 mb-3">
            O Grand&apos;Oro conta com <strong className="text-white">2.000m²</strong> dedicado ao lazer e ao bem-estar.
          </p>
          <p className="text-sm leading-6 text-white/80 mb-8">
            Um espaço criado para proporcionar experiências únicas, com ambientes sofisticados que equilibram convivência, tranquilidade e saúde.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#c9b98a] mb-3 uppercase font-medium">Áreas Internas</p>
              <ul className="space-y-1">
                {["Academia", "Pilates", "Massagem", "Sauna seca e úmida", "Coworking", "Sala de reunião", "Brinquedoteca", "Espaço gourmet", "Salão de festas", "Salão de jogos", "Espaço beleza"].map((i) => (
                  <li key={i} className="text-xs text-white/80 flex gap-2">
                    <span className="text-white/60">•</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] text-[#c9b98a] mb-3 uppercase font-medium">Áreas Externas</p>
              <ul className="space-y-1">
                {["Piscina", "Spa", "Quadra de beach tennis", "Quadra poliesportiva", "Playground", "Pet place", "Casa de campo", "Pergolados e áreas de descanso"].map((i) => (
                  <li key={i} className="text-xs text-white/80 flex gap-2">
                    <span className="text-white/60">•</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── GALERIA LAZER ── */}
      <section style={{ backgroundColor: "#e8e0d4" }} className="py-14 md:py-20">
        {/* Títulos */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="text-center mb-10 md:mb-14">
          <motion.h2 variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-[0.25em] text-[#030e1d]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lazer de Clube
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] text-[#030e1d]/70 mt-2 uppercase">
            com cara de Condomínio Premium
          </motion.p>
        </motion.div>

        {/* Carrossel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full px-8 md:px-14">
          <CarouselContent className="-ml-4">
            {([
              "APARTAMENTO - SALA INTEGRADA - 01.jpg",
              "APARTAMENTO - SALA INTEGRADA - 02.jpg",
              "APARTAMENTO - SALA INTEGRADA - 03.jpg",
              "APARTAMENTO - SUÍTE 01 - 01.jpg",
              "APARTAMENTO - SUÍTE 01 - 02.jpg",
              "APARTAMENTO - SUÍTE MASTER - 01.jpg",
              "APARTAMENTO - SUÍTE MASTER - 02.jpg",
              "APARTAMENTO - SUÍTE MASTER - 03.jpg",
              "ÁREA COMUM - ACADEMIA - 01.jpg",
              "ÁREA COMUM - ACADEMIA - 02.jpg",
              "ÁREA COMUM - AÉREO - 01.jpg",
              "ÁREA COMUM - AÉREO - 02.jpg",
              "ÁREA COMUM - AÉREO - 03.jpg",
              "ÁREA COMUM - ÁREA DE DESCANSO - FIRE PLACE - SALÃO DE FESTAS.jpg",
              "ÁREA COMUM - BRINQUEDOTECA - 01.jpg",
              "ÁREA COMUM - BRINQUEDOTECA - 02.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - EXTERNO - 01.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - EXTERNO - 02.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - EXTERNO - 03.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - INTERNO - 01.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - INTERNO - 02.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - INTERNO - 03.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - INTERNO - 04.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - INTERNO - 05.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - INTERNO - 06.jpg",
              "ÁREA COMUM - CASA DE CAMPO - POOL HOUSE - PISCINA - 01.jpg",
              "ÁREA COMUM - COWORKING - 01.jpg",
              "ÁREA COMUM - COWORKING - 02.jpg",
              "ÁREA COMUM - COWORKING - 03.jpg",
              "ÁREA COMUM - ESPAÇO DE BELEZA.jpg",
              "ÁREA COMUM - HALL SOCIAL - 01.jpg",
              "ÁREA COMUM - HALL SOCIAL - 02.jpg",
              "ÁREA COMUM - HALL SOCIAL - 03.jpg",
              "ÁREA COMUM - HALL SOCIAL - 04.jpg",
              "ÁREA COMUM - LAVANDERIA.jpg",
              "ÁREA COMUM - PET PLACE - PET WASH.jpg",
              "ÁREA COMUM - PISCINA - 01.jpg",
              "ÁREA COMUM - PISCINA - 02.jpg",
              "ÁREA COMUM - PLAYGROUND - SALÃO DE FESTAS.jpg",
              "ÁREA COMUM - PLAYGROUND GERAL.jpg",
              "ÁREA COMUM - PORTARIA - 01.jpg",
              "ÁREA COMUM - PORTARIA - 02.jpg",
              "ÁREA COMUM - QUADRA ESPORTIVA.jpg",
              "ÁREA COMUM - QUADRA TENNIS.jpg",
              "ÁREA COMUM - QUIOSQUE - CHURRASQUEIRA - 01.jpg",
              "ÁREA COMUM - QUIOSQUE - CHURRASQUEIRA - 02.jpg",
              "ÁREA COMUM - SALA DE DESCANSO.jpg",
              "ÁREA COMUM - SALA DE JOGOS - 01.jpg",
              "ÁREA COMUM - SALA DE JOGOS - 02.jpg",
              "ÁREA COMUM - SALA DE MASSAGEM.jpg",
              "ÁREA COMUM - SALA DE PILATES - 01.jpg",
              "ÁREA COMUM - SALA DE PILATES - 02.jpg",
              "ÁREA COMUM - SALA DE REUNIÃO - 01.jpg",
              "ÁREA COMUM - SALA DE REUNIÃO - 02.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 01.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 02.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 03.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 04.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 05.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 06.jpg",
              "ÁREA COMUM - SALÃO DE FESTAS - ESPAÇO GOURMET - 07.jpg",
              "ÁREA COMUM - SAUNA SECA - 01.jpg",
              "ÁREA COMUM - SAUNA SECA - 02.jpg",
              "ÁREA COMUM - SAUNA UMIDA.jpg",
              "FACHADA - 01.jpg",
              "FACHADA - 02 - A.jpg",
              "FACHADA - 02 - B.jpg",
              "FACHADA - 03.jpg",
              "FACHADA - 04 - A.jpg",
              "FACHADA - 04 - B.jpg",
              "FACHADA - FOTO INSERÇÃO - 01.jpg",
              "FACHADA - FOTO INSERÇÃO - 02.jpg",
            ] as string[]).map((filename) => {
              const label = filename
                .replace(/\.jpg$/i, "")
                .replace(/\s-\s\d+(\s-\s[A-Z])?$/, "");
              return (
                <CarouselItem key={filename} className="pl-4 basis-[85%] sm:basis-[65%] md:basis-[55%]">
                  <div>
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={`/carrosel/${encodeURIComponent(filename)}`}
                        alt={label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 65vw, 55vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                      <p className="absolute bottom-4 left-4 text-[10px] tracking-[0.28em] text-white uppercase">
                        {label}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-1 bg-transparent border-[#030e1d]/30 text-[#030e1d] hover:bg-[#030e1d] hover:text-white" />
          <CarouselNext className="right-1 bg-transparent border-[#030e1d]/30 text-[#030e1d] hover:bg-[#030e1d] hover:text-white" />
        </Carousel>

        <p className="text-[9px] text-[#b8ada0]/60 text-center mt-8 tracking-widest uppercase">
          Imagem meramente ilustrativa
        </p>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-[#030e1d]">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          {/* Form side */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VP} className="flex flex-col justify-center px-8 md:px-20 py-16 md:py-24">
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
          </motion.div>

          {/* Image side */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={VP} className="relative min-h-[50vh] lg:min-h-full order-first lg:order-last">
            <Image src="/images/contact-portrait.jpg" alt="Contato" fill className="object-cover object-top" />
            <a
              href="https://coreag.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 z-10"
            >
              <Image src="/logo-core.svg" alt="Core AG" width={56} height={16} className="h-4 w-auto brightness-0 invert" />
            </a>
          </motion.div>
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
