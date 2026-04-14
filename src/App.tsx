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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-tight">DRA. TICIANE CARVALHO</span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Hematologista</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-medium hover:text-brand-secondary transition-colors">Início</a>
          <a href="#especialidade" className="text-sm font-medium hover:text-brand-secondary transition-colors">Especialidade</a>
          <a href="#contato" className="btn-primary py-2 px-6 text-sm">Agendar Consulta</a>
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
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#fafafa]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Column - All Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-12 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-brand-primary leading-tight">
                Dra. Ticiane <br /> Carvalho
              </h1>
              <div className="w-20 h-1 bg-brand-secondary mx-auto lg:mx-0"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-brand-primary text-xs uppercase tracking-[0.3em] font-black opacity-40">Formação Acadêmica</h4>
                <div className="space-y-4 text-lg opacity-80 leading-relaxed font-light">
                  <p>Graduada em 2004 pela Faculdade de Medicina da Universidade Federal do Ceará (UFC).</p>
                  <p>Residência em Clínica Médica pela Santa Casa de Misericórdia de São Paulo (2006-2008).</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-brand-primary text-xs uppercase tracking-[0.3em] font-black opacity-40">Especialização</h4>
                <div className="space-y-4 text-lg opacity-80 leading-relaxed font-light">
                  <p>Hematologia e Hemoterapia pela UNIFESP (2008-2010), com foco em patologias complexas e oncológicas.</p>
                  <p>Pós-graduação em Medicina do Estilo de Vida pelo Hospital Israelita Albert Einstein (2022-2023).</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <a href="#contato" className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-widest">
                Agendar Consulta <ChevronRight size={16} />
              </a>
              <div className="flex justify-center lg:justify-start gap-6 opacity-40">
                <span className="text-[10px] uppercase tracking-widest font-bold">CRM 9577</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">RQE 5244</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Clean Image Style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 flex justify-center relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] flex items-center justify-center bg-white rounded-[4rem] overflow-hidden p-8">
              <img 
                src="https://picsum.photos/seed/doctor-premium-white/1000/1500" 
                alt="Dra. Ticiane Carvalho" 
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Subtle background glow maintained for depth, but shadow removed from card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-brand-secondary/5 rounded-full -z-10 blur-[100px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Importance = () => {
  const cards = [
    {
      icon: <Stethoscope size={28} strokeWidth={1.5} />,
      title: "Diagnóstico Preciso",
      desc: "Análise detalhada de hemácias, leucócitos e plaquetas para identificar alterações precocemente."
    },
    {
      icon: <Activity size={28} strokeWidth={1.5} />,
      title: "Tratamento Especializado",
      desc: "Acompanhamento de anemias, leucemias, linfomas e mieloma com protocolos atualizados."
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Distúrbios de Coagulação",
      desc: "Manejo de coagulopatias e trombofilias, garantindo segurança em procedimentos e no dia a dia."
    }
  ];

  return (
    <section id="especialidade" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-6"
          >
            A Importância da Hematologia
          </motion.h2>
          <div className="w-20 h-px bg-brand-secondary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto opacity-70 leading-relaxed font-light">
            A Hematologia é a especialidade que cuida do sistema mais vital do corpo: o sangue. Do diagnóstico de anemias simples ao tratamento de patologias oncológicas complexas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-10 border-l border-brand-secondary/40 transition-all hover:border-brand-primary"
            >
              <div className="text-brand-primary mb-8 opacity-80">
                {card.icon}
              </div>
              <h3 className="text-2xl mb-4 font-serif tracking-tight">{card.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed font-light">
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
    <section id="contato" className="py-24 px-6 bg-white border-t border-brand-secondary/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.3em] text-brand-primary/60 font-bold mb-4 block"
          >
            Atendimento e Agendamento
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-brand-primary"
          >
            Onde nos Encontrar
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Unidade 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-4"
          >
            <h3 className="text-2xl font-serif text-brand-primary">Clínica Cury Vascular</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              R. Cubatão, 86 - conj. 1407 - Vila Mariana<br />São Paulo - SP, 04013-000
            </p>
            <a 
              href="https://www.google.com/search?q=Cl%C3%ADnica+Cury+Vascular+-+Dra.+Maysa+Cury+e+Dr.+Marcus+Cury" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Ver no mapa <ChevronRight size={12} />
            </a>
          </motion.div>

          {/* Unidade 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left space-y-4"
          >
            <h3 className="text-2xl font-serif text-brand-primary">Waken Clínica</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Rua Sena Madureira 151, Vila Mariana<br />São Paulo - SP, 04021-050
            </p>
            <a 
              href="https://www.bing.com/maps/directions?rtp=%7Epos.-23.593318939208984_-46.63739776611328__Waken%2520Cl%25C3%25ADnica_&cp=-23.593319%7E-46.637398&lvl=16&style=r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Ver no mapa <ChevronRight size={12} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12 border-t border-brand-secondary/20"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">WhatsApp</span>
            <span className="text-2xl font-serif text-brand-primary group-hover:text-brand-secondary transition-colors">(11) 98814-2019</span>
          </a>

          <div className="hidden md:block w-px h-12 bg-brand-secondary/30"></div>

          <a 
            href="mailto:draticianecarvalho@gmail.com"
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">E-mail</span>
            <span className="text-2xl font-serif text-brand-primary group-hover:text-brand-secondary transition-colors">draticianecarvalho@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-brand-secondary/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-xl font-bold">DRA. TICIANE CARVALHO</span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Hematologista</span>
        </div>

        <p className="text-[10px] uppercase tracking-widest opacity-40">
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
