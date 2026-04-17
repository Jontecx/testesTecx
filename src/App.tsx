import { motion } from "motion/react";
import { 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CalendarCheck,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5511988142019?text=Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Ticiane";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Quando ir", href: "#quando-ir" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex flex-col group overflow-hidden">
          <span className={`font-serif text-base min-[375px]:text-lg sm:text-xl lg:text-2xl font-bold tracking-tighter transition-colors text-brand-primary whitespace-nowrap`}>DRA. TICIANE CARVALHO</span>
          <span className={`text-[8px] min-[375px]:text-[10px] uppercase tracking-[0.44em] font-medium transition-colors text-brand-primary/60`}>Hematologista</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-widest font-semibold transition-colors text-brand-primary/80 hover:text-brand-primary`}
            >
              {link.name}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary py-3 px-8 text-[10px]">
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

const ScrollNav = () => {
  const sections = ["inicio", "sobre", "quando-ir", "contato", "contato-agendar"];
  
  const scrollToSection = (direction: 'up' | 'down') => {
    const sectionsElements = sections.map(id => document.getElementById(id));
    
    if (direction === 'down') {
      const nextSection = sectionsElements.find(el => {
        if (!el) return false;
        return el.getBoundingClientRect().top > 100;
      });
      
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const prevSection = [...sectionsElements].reverse().find(el => {
        if (!el) return false;
        return el.getBoundingClientRect().top < -100;
      });
      
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-4 lg:hidden">
      <button 
        onClick={() => scrollToSection('up')}
        className="w-12 h-12 bg-transparent flex items-center justify-center text-brand-primary active:scale-90 transition-transform"
        aria-label="Subir uma dobra"
      >
        <ChevronUp size={32} />
      </button>
      <button 
        onClick={() => scrollToSection('down')}
        className="w-12 h-12 bg-transparent flex items-center justify-center text-brand-primary active:scale-90 transition-transform"
        aria-label="Descer uma dobra"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden bg-white">
      {/* Background Logo Container (Subtle Background Logo) */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-center opacity-[0.08] md:opacity-[0.15] select-none pointer-events-none px-6 md:px-24 lg:px-32">
        <div className="w-full max-w-[300px] md:max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
           <img 
             src="/logo.png" 
             alt="Logo Dra. Ticiane Carvalho" 
             className="w-full h-auto object-contain grayscale brightness-0"
             referrerPolicy="no-referrer"
             onError={(e) => {
               // Fallback if logo.png is missing
               e.currentTarget.style.display = 'none';
             }}
           />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl space-y-8 mx-auto md:mx-0"
        >
          <div className="space-y-4">
            <span className="prestige-tagline text-[10px] min-[375px]:text-xs block">Hematologia Especializada</span>
            <h1 className="text-4xl min-[375px]:text-5xl md:text-8xl font-black tracking-tighter text-brand-primary leading-tight md:leading-none">
              A Essência da <span className="prestige-title-ghost">Vida no Sangue</span>
            </h1>
          </div>
          <p className="text-lg min-[375px]:text-xl md:text-2xl text-brand-text/70 leading-relaxed font-light max-w-2xl">
            O sangue é o rio da vida. Nossa missão é cuidar deste sistema vital para garantir a saúde do seu organismo como um todo.
          </p>
          <div className="pt-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium text-sm px-10 md:px-14 py-5">
              Agendar Avaliação Especializada
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-brand-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full h-full min-h-[500px] lg:min-h-0 overflow-hidden">
              {/* Mobile Overlay Title */}
              <div className="absolute top-0 left-0 w-full pt-12 pb-20 px-6 z-10 lg:hidden text-center bg-gradient-to-b from-brand-accent/60 via-brand-accent/30 to-transparent">
                <h4 className="text-brand-primary text-[10px] uppercase tracking-[0.5em] font-black mb-2">Sobre a Médica</h4>
                <h2 className="text-4xl min-[375px]:text-5xl font-serif text-brand-primary leading-tight">
                  Dra. Ticiane <span className="text-brand-primary/40">Carvalho</span>
                </h2>
                <div className="w-20 h-px bg-brand-primary mx-auto mt-6"></div>
              </div>

              <img 
                src="/image.png" 
                alt="Dra. Ticiane Carvalho" 
                className="w-full h-full object-cover object-center lg:object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 min-[375px]:space-y-12"
          >
            {/* Desktop Title - Hidden on Mobile */}
            <div className="hidden lg:block space-y-4 text-left">
              <h4 className="text-brand-primary text-[10px] uppercase tracking-[0.5em] font-black">Sobre a Médica</h4>
              <h2 className="text-4xl min-[375px]:text-5xl md:text-7xl">Dra. Ticiane <span className="text-brand-primary/40">Carvalho</span></h2>
              <div className="w-20 h-px bg-brand-primary mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 min-[375px]:space-y-8 text-base min-[375px]:text-lg text-brand-text/80 leading-relaxed font-light">
              <p>Graduada em 2004 pela Faculdade de Medicina da Universidade Federal do Ceará (UFC).</p>
              <p>Residência em Clínica Médica pela Santa Casa de Misericórdia de São Paulo (2006-2008).</p>
              <p>Hematologia e Hemoterapia pela UNIFESP (2008-2010), com foco em patologias complexas e oncológicas.</p>
              <p>Pós-graduação em Medicina do Estilo de Vida pelo Hospital Israelita Albert Einstein (2022-2023).</p>
            </div>

            <div className="flex gap-8 border-t border-brand-primary/10 pt-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-primary/40 font-bold mb-1">CRM</span>
                <span className="text-xl font-serif text-brand-primary font-bold">9577</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-primary/40 font-bold mb-1">RQE</span>
                <span className="text-xl font-serif text-brand-primary font-bold">5244</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhenToGo = () => {
  const symptoms = [
    "Cansaço excessivo, fraqueza e palidez (sintomas de anemia)",
    "Manchas roxas pelo corpo (equimoses) ou pontinhos vermelhos (petéquias)",
    "Sangramentos frequentes em gengiva ou nariz",
    "Ínguas ou nódulos (linfonodos) aumentados e persistentes",
    "Suores noturnos excessivos e febre de origem indeterminada",
    "Perda de peso inexplicada"
  ];

  return (
    <section id="quando-ir" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h4 className="text-brand-primary text-[10px] uppercase tracking-[0.5em] font-black mb-6">Atenção aos Sinais</h4>
            <h2 className="text-4xl min-[375px]:text-5xl md:text-6xl mb-8 leading-tight">Quando ir ao <span className="text-brand-primary/40">Hematologista?</span></h2>
            <p className="text-base min-[375px]:text-lg text-brand-text/70 font-light mb-10">O diagnóstico precoce de distúrbios sanguíneos é fundamental para o sucesso do tratamento e qualidade de vida do paciente.</p>
            <div className="hidden lg:block">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary lg:w-auto">
                Sinto esses sintomas
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {symptoms.map((symptom, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="prestige-card flex gap-4 card-hover"
                >
                  <div className="text-brand-primary pt-1">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-medium leading-snug">{symptom}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 lg:hidden">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Sinto esses sintomas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-brand-bg border-t border-brand-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h4 className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-black">Agende sua Consulta</h4>
              <h2 className="text-3xl min-[320px]:text-4xl min-[375px]:text-5xl md:text-7xl tracking-tighter leading-tight break-words">Onde nos <span className="text-brand-primary/30">Encontrar</span></h2>
            </div>
            
            <div className="space-y-8 min-[375px]:space-y-10">
              <a 
                href="COLOQUE_AQUI_LINK_GOOGLE_MAPS_CLINICA_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 min-[375px]:gap-6 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="p-2 min-[375px]:p-3 bg-brand-accent/30 rounded-lg text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                  <ExternalLink size={20} className="min-[375px]:w-6 min-[375px]:h-6" />
                </div>
                <div>
                  <h3 className="text-xl min-[375px]:text-2xl font-serif mb-2 group-hover:text-brand-primary transition-colors">Clínica Cury Vascular</h3>
                  <p className="text-sm min-[375px]:text-base text-brand-text/60 font-light leading-relaxed">
                    R. Cubatão, 86 - conj. 1407 - Vila Mariana<br />São Paulo - SP, 04013-000
                  </p>
                </div>
              </a>

              <a 
                href="COLOQUE_AQUI_LINK_GOOGLE_MAPS_CLINICA_2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 min-[375px]:gap-6 group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="p-2 min-[375px]:p-3 bg-brand-accent/30 rounded-lg text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                  <ExternalLink size={20} className="min-[375px]:w-6 min-[375px]:h-6" />
                </div>
                <div>
                  <h3 className="text-xl min-[375px]:text-2xl font-serif mb-2 group-hover:text-brand-primary transition-colors">Waken Clínica</h3>
                  <p className="text-sm min-[375px]:text-base text-brand-text/60 font-light leading-relaxed">
                    Rua Sena Madureira 151, Vila Mariana<br />São Paulo - SP, 04021-050
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div id="contato-agendar" className="bg-brand-accent/30 p-8 min-[375px]:p-12 rounded-[2rem] min-[375px]:rounded-[3rem] border border-brand-secondary/50 space-y-8 min-[375px]:space-y-10 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 min-[375px]:w-16 min-[375px]:h-16 bg-brand-primary rounded-full flex items-center justify-center text-brand-accent mx-auto shadow-xl shadow-brand-primary/20">
                <CalendarCheck size={24} className="min-[375px]:w-8 min-[375px]:h-8" />
              </div>
              <h3 className="text-2xl min-[375px]:text-3xl font-serif">Atendimento Humanizado</h3>
              <p className="text-sm min-[375px]:text-base text-brand-text/60 font-light leading-relaxed">Estamos prontos para ouvir você e oferecer o melhor cuidado hemotológico.</p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] min-[375px]:tracking-[0.3em] text-brand-primary/40 leading-relaxed">Agendamento via WhatsApp</p>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl min-[375px]:text-3xl min-[414px]:text-4xl font-serif text-brand-primary block hover:scale-105 transition-transform truncate"
              >
                (11) 98814-2019
              </a>
            </div>

            <div className="space-y-4 pt-4 min-[375px]:pt-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] min-[375px]:tracking-[0.3em] text-brand-primary/40 leading-relaxed">E-mail para pacientes</p>
              <a href="mailto:draticianecarvalho@gmail.com" className="text-sm min-[375px]:text-base md:text-lg font-medium text-brand-text/80 hover:text-brand-primary break-words">
                draticianecarvalho@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-brand-primary tracking-tighter">DRA. TICIANE CARVALHO</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-primary/50 font-medium">Hematologista e Hemoterapeuta</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-primary/40 font-bold">
          © 2026 Dra. Ticiane Carvalho • Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="selection:bg-brand-primary selection:text-brand-accent">
      <Navbar />
      <ScrollNav />
      <main>
        <Hero />
        <AboutSection />
        <WhenToGo />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-8 h-8 sm:w-10 sm:h-10 group-hover:rotate-12 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </a>
    </div>
  );
}
