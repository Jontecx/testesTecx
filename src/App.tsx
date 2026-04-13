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
          <a href="#sobre" className="text-sm font-medium hover:text-brand-secondary transition-colors">Sobre</a>
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
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg font-serif">Sobre</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="btn-primary text-center">Agendar Consulta</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="absolute top-20 right-0 w-1/2 h-1/2 text-brand-secondary" viewBox="0 0 200 200" fill="currentColor">
          <path d="M45,-76.3C58.1,-69.1,68.4,-55.6,75.4,-41.1C82.4,-26.6,86,-11.1,84.1,3.8C82.2,18.7,74.8,33,64.6,45.1C54.4,57.2,41.4,67.1,27.1,72.4C12.8,77.7,-2.8,78.4,-18.2,74.8C-33.6,71.2,-48.8,63.3,-60.6,51.6C-72.4,39.9,-80.8,24.4,-82.7,8.3C-84.6,-7.8,-80,-24.5,-70.9,-38.5C-61.8,-52.5,-48.2,-63.8,-34.1,-70.6C-20,-77.4,-10,-79.7,3.1,-85.1C16.2,-90.5,31.9,-83.5,45,-76.3Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-1/3 h-1/3 text-brand-secondary" viewBox="0 0 200 200" fill="currentColor">
          <path d="M42.7,-73.1C55.9,-66.4,67.6,-55.6,75.4,-42.5C83.2,-29.4,87.1,-14.1,86.6,1.1C86.1,16.3,81.2,31.4,72.6,44.1C64,56.8,51.7,67.1,37.8,73.4C23.9,79.7,8.4,82, -6.6,80.8C-21.6,79.6,-36.1,74.9,-48.6,66.6C-61.1,58.3,-71.6,46.4,-77.6,32.7C-83.6,19,-85.1,3.5,-82.4,-11.2C-79.7,-25.9,-72.8,-39.8,-62.3,-48.9C-51.8,-58,-37.7,-62.3,-25.1,-69.3C-12.5,-76.3,-1.4,-86,11.2,-84.3C23.8,-82.6,35.9,-79.8,42.7,-73.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full border border-brand-secondary text-xs uppercase tracking-widest mb-6">
            Médica Hematologista
          </span>
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
            Cuidado especializado para a saúde do seu <span className="italic text-brand-secondary">sangue</span>.
          </h1>
          <p className="text-lg opacity-80 mb-8 max-w-lg leading-relaxed">
            Diagnóstico preciso e tratamento humanizado para doenças hematológicas benignas e oncológicas, com foco na excelência clínica e bem-estar do paciente.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#contato" className="btn-primary flex items-center gap-2">
              Agendar Consulta <ChevronRight size={18} />
            </a>
            <div className="text-[10px] uppercase tracking-widest opacity-60">
              CRM 9577 / RQE 5244
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/doctor-portrait/800/1000" 
              alt="Dra. Ticiane Carvalho" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-secondary/20 z-20 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-primary">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider opacity-60">Confiança</p>
                <p className="font-serif font-bold">Atendimento Premium</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Importance = () => {
  const cards = [
    {
      icon: <Stethoscope size={32} />,
      title: "Diagnóstico Preciso",
      desc: "Análise detalhada de hemácias, leucócitos e plaquetas para identificar alterações precocemente."
    },
    {
      icon: <Activity size={32} />,
      title: "Tratamento Especializado",
      desc: "Acompanhamento de anemias, leucemias, linfomas e mieloma com protocolos atualizados."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Distúrbios de Coagulação",
      desc: "Manejo de coagulopatias e trombofilias, garantindo segurança em procedimentos e no dia a dia."
    }
  ];

  return (
    <section id="especialidade" className="section-padding bg-brand-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            A Importância da Hematologia
          </motion.h2>
          <p className="max-w-2xl mx-auto opacity-70 leading-relaxed">
            A Hematologia é a especialidade que cuida do sistema mais vital do corpo: o sangue. Do diagnóstico de anemias simples ao tratamento de patologias oncológicas complexas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl mb-4">{card.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden border border-brand-secondary/30 relative">
            <img 
              src="https://picsum.photos/seed/medical-office/800/800" 
              alt="Consultório Dra. Ticiane" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-4xl md:text-5xl mb-8">Dra. Ticiane Carvalho</h2>
          <div className="space-y-6 text-sm md:text-base opacity-80 leading-relaxed">
            <p>
              Médica formada em 2004 pela Faculdade de Medicina da Universidade Federal do Ceará (UFC), com uma trajetória dedicada à excelência no cuidado hematológico.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 text-brand-secondary"><ChevronRight size={16} /></div>
                <span>Residência em Clínica Médica pela Santa Casa de Misericórdia de São Paulo (2006-2008).</span>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-brand-secondary"><ChevronRight size={16} /></div>
                <span>Residência em Hematologia e Hemoterapia pela UNIFESP (2008-2010).</span>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-brand-secondary"><ChevronRight size={16} /></div>
                <span>Pós-graduação em Medicina do Estilo de Vida pelo Hospital Israelita Albert Einstein (2022-2023).</span>
              </li>
            </ul>
            <p className="pt-6 border-t border-brand-secondary/30 font-serif italic text-2xl text-brand-primary leading-snug">
              "Minha missão é unir o rigor técnico da hematologia a um cuidado profundamente humanizado, focado na saúde integral e no bem-estar de cada paciente."
            </p>
          </div>
        </motion.div>
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
        <Hero />
        <Importance />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
