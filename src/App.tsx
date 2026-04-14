import { motion } from "motion/react";
import { 
  Stethoscope, 
  ShieldCheck, 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-brand-accent/50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tighter text-brand-primary">DRA. TICIANE CARVALHO</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-primary/60 font-medium">Hematologista</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#inicio" className="text-xs uppercase tracking-widest font-semibold text-brand-primary/70 hover:text-brand-primary transition-all duration-300">Início</a>
          <a href="#especialidade" className="text-xs uppercase tracking-widest font-semibold text-brand-primary/70 hover:text-brand-primary transition-all duration-300">Especialidade</a>
          <a href="#contato" className="btn-primary">Agendar Consulta</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-brand-secondary p-6 flex flex-col gap-4"
        >
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg font-serif">Início</a>
          <a href="#especialidade" onClick={() => setIsOpen(false)} className="text-lg font-serif">Especialidade</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="btn-primary text-center">Agendar Consulta</a>
        </motion.div>
      )}
    </nav>
  );
};

const NewHero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-brand-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32">
          
          {/* Left Column - All Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 space-y-12 lg:space-y-16 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-brand-primary leading-[1.1] lg:leading-[0.9]">
                Dra. Ticiane <br /> <span className="text-brand-secondary">Carvalho</span>
              </h1>
              <div className="w-20 lg:w-24 h-px bg-brand-secondary mx-auto lg:mx-0"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-black opacity-60">Formação Acadêmica</h4>
                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-brand-text/80 leading-relaxed font-light">
                  <p>Graduada em 2004 pela Faculdade de Medicina da Universidade Federal do Ceará (UFC).</p>
                  <p>Residência em Clínica Médica pela Santa Casa de Misericórdia de São Paulo (2006-2008).</p>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <h4 className="text-brand-primary text-[10px] uppercase tracking-[0.4em] font-black opacity-60">Especialização</h4>
                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-brand-text/80 leading-relaxed font-light">
                  <p>Hematologia e Hemoterapia pela UNIFESP (2008-2010), com foco em patologias complexas e oncológicas.</p>
                  <p>Pós-graduação em Medicina do Estilo de Vida pelo Hospital Israelita Albert Einstein (2022-2023).</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <a href="#contato" className="btn-primary inline-flex items-center gap-4">
                Agendar Consulta <ChevronRight size={14} />
              </a>
              <div className="flex justify-center lg:justify-start gap-6 lg:gap-8 text-brand-primary/40">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-l border-brand-secondary pl-4">CRM 9577</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-l border-brand-secondary pl-4">RQE 5244</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Clean Image Style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-1/2 flex justify-center relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[300px] lg:max-w-[550px] aspect-[4/5] flex items-center justify-center bg-brand-accent/20 border border-brand-secondary/30 rounded-[3rem] lg:rounded-[4rem] overflow-hidden p-4 lg:p-10">
              <img 
                src="/image.png" 
                alt="Dra. Ticiane Carvalho" 
                className="w-full h-full object-cover object-top rounded-[2.5rem] shadow-2xl shadow-brand-primary/5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-secondary/20 rounded-full -z-10 blur-[120px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Importance = () => {
  const cards = [
    {
      icon: <Stethoscope size={32} strokeWidth={1} />,
      title: "Diagnóstico Preciso",
      desc: "Análise detalhada de hemácias, leucócitos e plaquetas para identificar alterações precocemente."
    },
    {
      icon: <Activity size={32} strokeWidth={1} />,
      title: "Tratamento Especializado",
      desc: "Acompanhamento de anemias, leucemias, linfomas e mieloma com protocolos atualizados."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1} />,
      title: "Distúrbios de Coagulação",
      desc: "Manejo de coagulopatias e trombofilias, garantindo segurança em procedimentos e no dia a dia."
    }
  ];

  return (
    <section id="especialidade" className="py-40 px-6 md:px-12 lg:px-24 bg-brand-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl mb-8 text-brand-primary tracking-tighter"
          >
            A Importância da <span className="text-brand-secondary">Hematologia</span>
          </motion.h2>
          <div className="w-24 h-px bg-brand-secondary mx-auto mb-10"></div>
          <p className="max-w-3xl mx-auto text-brand-text/70 text-lg leading-relaxed font-light">
            A Hematologia é a especialidade que cuida do sistema mais vital do corpo: o sangue. Do diagnóstico de anemias simples ao tratamento de patologias oncológicas complexas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-12 bg-white border-l border-brand-secondary hover:border-brand-primary transition-all duration-700 rounded-r-2xl shadow-sm hover:shadow-xl"
            >
              <div className="text-brand-primary mb-10 group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-3xl mb-6 font-serif tracking-tight text-brand-primary">{card.title}</h3>
              <p className="text-brand-text/60 leading-relaxed font-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const whatsappLink = "https://wa.me/5511988142019?text=Gostaria%20de%20agendar%20uma%20consulta";

  return (
    <section id="contato" className="py-40 px-6 bg-brand-bg border-t border-brand-accent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-brand-primary font-bold mb-6 block"
          >
            Atendimento e Agendamento
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-brand-primary tracking-tighter"
          >
            Onde nos <span className="text-brand-secondary">Encontrar</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-32">
          {/* Unidade 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-6"
          >
            <h3 className="text-3xl font-serif text-brand-primary">Clínica Cury Vascular</h3>
            <p className="text-brand-text/70 leading-relaxed font-light">
              R. Cubatão, 86 - conj. 1407 - Vila Mariana<br />São Paulo - SP, 04013-000
            </p>
            <a 
              href="https://www.google.com/search?q=Cl%C3%ADnica+Cury+Vascular+-+Dra.+Maysa+Cury+e+Dr.+Marcus+Cury" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-brand-primary hover:text-brand-secondary transition-all duration-300"
            >
              Ver no mapa <ChevronRight size={14} />
            </a>
          </motion.div>

          {/* Unidade 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left space-y-6"
          >
            <h3 className="text-3xl font-serif text-brand-primary">Waken Clínica</h3>
            <p className="text-brand-text/70 leading-relaxed font-light">
              Rua Sena Madureira 151, Vila Mariana<br />São Paulo - SP, 04021-050
            </p>
            <a 
              href="https://www.bing.com/maps/directions?rtp=%7Epos.-23.593318939208984_-46.63739776611328__Waken%2520Cl%25C3%25ADnica_&cp=-23.593319%7E-46.637398&lvl=16&style=r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-brand-primary hover:text-brand-secondary transition-all duration-300"
            >
              Ver no mapa <ChevronRight size={14} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 pt-20 border-t border-brand-accent"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-primary/40 font-bold">WhatsApp</span>
            <span className="text-3xl font-serif text-brand-primary group-hover:text-brand-secondary transition-all duration-500 tracking-tight">(11) 98814-2019</span>
          </a>

          <div className="hidden md:block w-px h-16 bg-brand-accent"></div>

          <a 
            href="mailto:draticianecarvalho@gmail.com"
            className="group flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-primary/40 font-bold">E-mail</span>
            <span className="text-3xl font-serif text-brand-primary group-hover:text-brand-secondary transition-all duration-500 tracking-tight">draticianecarvalho@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-brand-accent/20 border-t border-brand-accent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-2xl font-bold text-brand-primary tracking-tighter">DRA. TICIANE CARVALHO</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-primary/60 font-medium">Hematologista</span>
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-primary/40 font-bold">
          © 2026 Dra. Ticiane Carvalho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="selection:bg-brand-secondary/30 selection:text-brand-primary">
      <Navbar />
      <main>
        <NewHero />
        <Importance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
