import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Flame, 
  Cpu, 
  ArrowUpRight, 
  Eye, 
  Layers, 
  Activity,
  Code2
} from 'lucide-react';

const ARCHETYPES = [
  {
    id: 'kinetic',
    title: 'Kinetic Scroll-driven',
    tag: 'DYNAMIC TENSION',
    accent: '#d4ff00',
    desc: 'Interpolaciones no lineales basadas en inercia de scroll, tipografía líquida y transformaciones 3D de alta respuesta.',
  },
  {
    id: 'brutalism',
    title: 'Brutalismo Editorial',
    tag: 'RAW ARCHITECTURE',
    accent: '#ff4d00',
    desc: 'Líneas divisorias monócromas de 1px, matrices asimétricas sin padding defensivo, jerarquía tipográfica sin concesiones.',
  },
  {
    id: 'swiss',
    title: 'Minimalismo Suizo',
    tag: 'PRECISION GRID',
    accent: '#ffffff',
    desc: 'Orden radical, contrastes puros en escala de grises, microespaciado geométrico riguroso y legibilidad implacable.',
  },
  {
    id: 'cyberpunk',
    title: 'Dark Cyberpunk',
    tag: 'HIGH-FREQUENCY VOID',
    accent: '#00f5ff',
    desc: 'Paleta base #08080a, fósforos ácidos hipercontrastantes, HUD telemetría en tiempo real y estética terminal de grado militar.',
  },
];

export const VanguardHero: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeArchetype, setActiveArchetype] = useState(ARCHETYPES[0].id);

  const installCmds = {
    unix: 'curl -fsSL https://raw.githubusercontent.com/vanguard-frontend/vanguard-engine/main/install.sh | bash',
    ps: 'irm https://raw.githubusercontent.com/vanguard-frontend/vanguard-engine/main/install.ps1 | iex',
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2400);
  };

  const activeArchData = ARCHETYPES.find((a) => a.id === activeArchetype) || ARCHETYPES[0];

  return (
    <div className="relative min-h-screen bg-void text-zinc-100 selection:bg-acid-lime selection:text-black font-sans pb-24 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-40" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-acid-lime/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-acid-flame/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Telemetry / Status Bar */}
      <header className="border-b border-surface-700/60 bg-void/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-acid-lime animate-pulse" />
            <span className="font-bold tracking-widest text-zinc-300 uppercase">VANGUARD::SYS_CORE_V1.0</span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
            <span className="hidden sm:inline-block text-zinc-500">ENGINE_STATE: ACTIVE</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-zinc-400">
              <Activity className="w-3.5 h-3.5 text-acid-cyan" />
              <span>FPS: 120</span>
              <span className="text-zinc-600">/</span>
              <span>LATENCY: 0.8ms</span>
            </div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded border border-surface-700 bg-surface-900/80 hover:border-acid-lime text-zinc-300 hover:text-acid-lime transition-all duration-200"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Core */}
      <main className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
        {/* Anti-Generic Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs">
          <span className="px-2.5 py-1 bg-acid-flame/15 border border-acid-flame/30 text-acid-flame font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5" />
            ANTI-GENERIC UI MANIFESTO
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400 uppercase tracking-widest">
            ELITE AGENT SKILL FOR GOOGLE ANTIGRAVITY
          </span>
        </div>

        {/* Hero Asymmetric Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-white"
            >
              Break the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid-lime via-white to-zinc-500">
                Predictable
              </span> <br />
              Frontend.
            </motion.h1>

            <p className="mt-8 text-lg sm:text-xl text-zinc-400 font-normal max-w-2xl leading-relaxed">
              El fin de las interfaces corporativas idénticas, los degradados púrpura-azul cliché y los layouts defensivos. 
              Un motor creativo que orquesta interfaces con carácter brutalista, micro-telemetría cinética y dirección de arte despiadada.
            </p>
          </div>

          {/* Side Telemetry Console Box */}
          <div className="lg:col-span-4 bg-surface-900/90 border border-surface-700 p-6 relative font-mono text-xs backdrop-blur-md">
            <div className="absolute -top-3 left-4 bg-void px-2 text-[10px] text-acid-lime font-bold tracking-widest uppercase border border-surface-700">
              TELEMETRY & PROTOCOL
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-surface-800 pb-2">
                <span className="text-zinc-500">TARGET AGENT:</span>
                <span className="text-acid-lime font-semibold">GOOGLE ANTIGRAVITY</span>
              </div>
              <div className="flex justify-between items-center border-b border-surface-800 pb-2">
                <span className="text-zinc-500">DIAGNOSTIC QUESTIONNAIRE:</span>
                <span className="text-zinc-200">3-TIER CALIBRATION</span>
              </div>
              <div className="flex justify-between items-center border-b border-surface-800 pb-2">
                <span className="text-zinc-500">COLOR BAN RULE:</span>
                <span className="text-acid-flame font-bold">#6366F1 / #3B82F6 [BANNED]</span>
              </div>
              <div className="flex justify-between items-center border-b border-surface-800 pb-2">
                <span className="text-zinc-500">BASE VOID CANVAS:</span>
                <span className="text-zinc-200">#08080A (True Void)</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-zinc-500">FRAMEWORK COMPAT:</span>
                <span className="text-zinc-200">Astro / React / Next / Tailwind</span>
              </div>
            </div>

            <div className="mt-6 p-3 bg-void/90 border border-surface-800 text-[11px] text-zinc-400">
              <p className="leading-snug">
                <span className="text-acid-lime font-bold">» READY:</span> La skill inyecta directivas estilísticas intransigentes en cada respuesta generativa de Antigravity.
              </p>
            </div>
          </div>
        </div>

        {/* 1-Command Installation Section */}
        <section className="mb-20">
          <div className="border border-surface-700 bg-surface-900/60 p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-acid-lime font-mono text-xs font-bold tracking-widest uppercase mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>ONE-COMMAND GLOBAL INSTALLATION</span>
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                  Instala la Skill en Google Antigravity
                </h2>
              </div>
              <span className="font-mono text-xs text-zinc-500">TARGET: ~/.gemini/antigravity/skills/</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              {/* Unix / macOS */}
              <div className="bg-void p-4 border border-surface-700/80 hover:border-zinc-500 transition-colors">
                <div className="flex justify-between items-center mb-2 text-zinc-500">
                  <span className="uppercase text-[10px] tracking-wider font-semibold text-zinc-400">Linux / macOS (Bash / Zsh)</span>
                  <button 
                    onClick={() => copyToClipboard(installCmds.unix, 'unix')}
                    className="flex items-center gap-1.5 px-2 py-1 bg-surface-800 hover:bg-surface-700 text-zinc-200 rounded transition-all"
                  >
                    {copied === 'unix' ? <Check className="w-3.5 h-3.5 text-acid-lime" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'unix' ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="text-zinc-300 break-all bg-surface-900/50 p-3 border border-surface-800 select-all">
                  <span className="text-acid-lime">$ </span>{installCmds.unix}
                </div>
              </div>

              {/* Windows PowerShell */}
              <div className="bg-void p-4 border border-surface-700/80 hover:border-zinc-500 transition-colors">
                <div className="flex justify-between items-center mb-2 text-zinc-500">
                  <span className="uppercase text-[10px] tracking-wider font-semibold text-zinc-400">Windows (PowerShell)</span>
                  <button 
                    onClick={() => copyToClipboard(installCmds.ps, 'ps')}
                    className="flex items-center gap-1.5 px-2 py-1 bg-surface-800 hover:bg-surface-700 text-zinc-200 rounded transition-all"
                  >
                    {copied === 'ps' ? <Check className="w-3.5 h-3.5 text-acid-lime" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'ps' ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="text-zinc-300 break-all bg-surface-900/50 p-3 border border-surface-800 select-all">
                  <span className="text-acid-lime">&gt; </span>{installCmds.ps}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Archetypes Interactive Matrix */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs text-acid-lime uppercase tracking-widest block mb-1">DESIGN ARTIFACTS</span>
              <h2 className="text-3xl font-black uppercase tracking-tight">4 Arquetipos de Vanguardia</h2>
            </div>
            <div className="hidden sm:block font-mono text-xs text-zinc-500">
              SELECT_PRESET: <span className="text-white uppercase font-bold">{activeArchetype}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {ARCHETYPES.map((arch) => {
              const isSelected = arch.id === activeArchetype;
              return (
                <button
                  key={arch.id}
                  onClick={() => setActiveArchetype(arch.id)}
                  className={`p-5 text-left border transition-all duration-300 relative ${
                    isSelected 
                      ? 'bg-surface-800/90 border-acid-lime shadow-[0_0_25px_rgba(212,255,0,0.12)]' 
                      : 'bg-surface-900/40 border-surface-700 hover:border-surface-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-zinc-400">
                      {arch.tag}
                    </span>
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: arch.accent }}
                    />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2">
                    {arch.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {arch.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Archetype Real-time Spec Preview Box */}
          <div className="border border-surface-700 bg-surface-900/80 p-6 font-mono text-xs">
            <div className="flex items-center justify-between pb-4 border-b border-surface-800 mb-4">
              <span className="text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-acid-lime" />
                ACTIVE_SPEC_OUTPUT: <strong className="text-white">{activeArchData.title.toUpperCase()}</strong>
              </span>
              <span className="text-[10px] bg-void px-2 py-0.5 border border-surface-700 text-acid-lime">
                CONFIG AUTO-APPLIED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <span className="text-zinc-500 block mb-1">COLOR PALETTE DIRECTIVE:</span>
                <p className="text-zinc-300">
                  Canvas: <span className="text-white">#08080a</span> | Primary Accent: <span style={{ color: activeArchData.accent }} className="font-bold">{activeArchData.accent}</span>
                </p>
              </div>
              <div>
                <span className="text-zinc-500 block mb-1">TYPOGRAPHY RATIO:</span>
                <p className="text-zinc-300">
                  Display 84px / -0.06em tracking | Mono 11px micro-telemetry
                </p>
              </div>
              <div>
                <span className="text-zinc-500 block mb-1">MOTION INTENSITY:</span>
                <p className="text-zinc-300">
                  Spring physics: damping 28, stiffness 220, zero bouncy-cliché.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Diagnostic Protocol Demonstration */}
        <section className="border border-surface-700 bg-surface-900/40 p-8">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs text-acid-lime uppercase tracking-widest block mb-1">INTERACTIVE INTAKE</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
              Protocolo de Diagnóstico Obligatorio (3 Preguntas)
            </h2>
            <p className="text-zinc-400 text-sm">
              Cada vez que la skill es invocada en Antigravity, ejecuta de forma no negociable esta calibración antes de escribir código frontend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-void p-5 border border-surface-700 relative">
              <span className="absolute -top-3 left-4 bg-acid-lime text-black font-bold px-1.5 py-0.5 text-[10px]">
                STEP 01
              </span>
              <h4 className="text-white font-bold text-sm mb-2 mt-1">ESTILO VISUAL</h4>
              <p className="text-zinc-400 mb-3 text-[11px] leading-relaxed">
                ¿Qué lenguaje estético dominará la experiencia?
              </p>
              <ul className="text-zinc-500 space-y-1.5 border-t border-surface-800 pt-3">
                <li className="text-zinc-300">› Kinetic Scroll-driven</li>
                <li className="text-zinc-300">› Brutalismo Editorial</li>
                <li className="text-zinc-300">› Minimalismo Suizo</li>
                <li className="text-zinc-300">› Dark Cyberpunk</li>
              </ul>
            </div>

            <div className="bg-void p-5 border border-surface-700 relative">
              <span className="absolute -top-3 left-4 bg-acid-cyan text-black font-bold px-1.5 py-0.5 text-[10px]">
                STEP 02
              </span>
              <h4 className="text-white font-bold text-sm mb-2 mt-1">STACK FRONTEND</h4>
              <p className="text-zinc-400 mb-3 text-[11px] leading-relaxed">
                ¿Bajo qué entorno se ejecutará la arquitectura?
              </p>
              <ul className="text-zinc-500 space-y-1.5 border-t border-surface-800 pt-3">
                <li className="text-zinc-300">› Astro + React + Tailwind</li>
                <li className="text-zinc-300">› Next.js (App Router) + Tailwind</li>
                <li className="text-zinc-300">› Vite + React / Svelte</li>
                <li className="text-zinc-300">› Vanilla HTML + Modern CSS</li>
              </ul>
            </div>

            <div className="bg-void p-5 border border-surface-700 relative">
              <span className="absolute -top-3 left-4 bg-acid-flame text-black font-bold px-1.5 py-0.5 text-[10px]">
                STEP 03
              </span>
              <h4 className="text-white font-bold text-sm mb-2 mt-1">NIVEL DE ANIMACIÓN</h4>
              <p className="text-zinc-400 mb-3 text-[11px] leading-relaxed">
                ¿Qué carga cinética y de micro-interacciones requiere?
              </p>
              <ul className="text-zinc-500 space-y-1.5 border-t border-surface-800 pt-3">
                <li className="text-zinc-300">› Brutal Minimal (0-10% motion)</li>
                <li className="text-zinc-300">› Controlled Friction (30-50%)</li>
                <li className="text-zinc-300">› Kinetic Overload (80-100%)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Manifesto Notice */}
      <footer className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
        <div>
          <span>VANGUARD FRONTEND ENGINE — OPEN SOURCE CREATIVE ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span>NO PURPLE GRADIENTS</span>
          <span>•</span>
          <span>NO LAZY TEMPLATES</span>
          <span>•</span>
          <span>HIGH AGENCY UI</span>
        </div>
      </footer>
    </div>
  );
};
