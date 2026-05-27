import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle, Phone, Mail, ChevronDown, MapPin, Clock, Smartphone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { motion } from 'framer-motion';
import Header from "@/components/Header.jsx";

const heroData = {
  subtitle: "TUS ALIADOS EN LOGÍSTICA",
  background: {
    image: 'https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/5d2d8aae4176d8edc304581a613e930d.jpg',
    overlayOpacity: 0.85
  }
};

const heroStats = [
  { value: '300+', label: 'Clientes' },
  { value: '20+', label: 'Años' },
  { value: '7.000.000', label: 'Km recorridos' },
  { value: '24/7', label: 'Disponibles' },
  { value: '100%', label: 'Cobertura nacional' }
];

const servicesData = [
  {
    title: 'Transporte de Carga General',
    description: 'Coordinación y gestión de fletes para mercadería general con cobertura en todo el territorio nacional.',
    image: 'https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/5d2d8aae4176d8edc304581a613e930d.jpg'
  },
  {
    title: 'Transporte de Carga Peligrosa',
    description: 'Gestión de transporte de materiales peligrosos conforme a la normativa vigente en materia de seguridad y transporte especial.',
    image: 'https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/88f9166a077d06ce3afda34abf527a3a.png'
  },
  {
    title: 'Logística de Importación',
    description: 'Organización del traslado de mercadería desde el punto de ingreso al país hasta el destino final.',
    image: 'https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/8f8cbb13b49cfa096765437aa4bcdd92.jpg'
  },
  {
    title: 'Logística de Exportación',
    description: 'Coordinación del movimiento de carga desde origen hasta el punto de salida del territorio nacional.',
    image: 'https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/db6d3eddc4158a6f290230acb1ac808c.jpg'
  }
];

const faqsData = [
  {
    question: '¿En qué zonas del país operan?',
    answer: 'Mendopuerto S.A. gestiona fletes en todo el territorio argentino. Nuestra base de operaciones se encuentra en Mendoza, con cobertura nacional a través de nuestra red de transportistas.'
  },
  {
    question: '¿Cómo se solicita una cotización?',
    answer: 'Puede contactarnos por WhatsApp, teléfono o correo electrónico con los datos de su carga: tipo de mercadería, origen, destino y fecha estimada. Le respondemos a la brevedad.'
  },
  {
    question: '¿Transportan cargas peligrosas?',
    answer: 'Sí. Gestionamos el transporte de materiales clasificados como peligrosos cumpliendo con toda la normativa vigente.'
  },
  {
    question: '¿Cuánto tiempo lleva coordinar un flete?',
    answer: 'En la mayoría de los casos gestionamos una respuesta inicial en menos de 24 horas hábiles.'
  }
];

const contactInfo = {
  address: "Francisco de la Reta 761, San José, Guaymallén, Mendoza, Argentina",
  phone: "4450174",
  mobile: "2614543357",
  email: "info@mendopuerto.com.ar",
  hours: "Lunes a viernes 9-18 hs, sábados 9-13 hs",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2987179040333!2d-68.82390892345091!3d-32.89025547361661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0ed3eb03a58b%3A0xc3c577003ab7e2c9!2sFrancisco%20de%20la%20Reta%20761%2C%20San%20Jos%C3%A9%2C%20Mendoza!5e0!3m2!1sen!2sar!4v1700000000000!5m2!1sen!2sar"
};

const HomePage = () => {
  const [formData, setFormData] = useState({ nombre: '', empresa: '', consulta: '' });

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.nombre || !formData.consulta) {
      toast.error("Por favor complete los campos requeridos");
      return;
    }
    toast.success("Mensaje enviado", { description: "Nos pondremos en contacto a la brevedad" });
    setFormData({ nombre: '', empresa: '', consulta: '' });
  };

  return (
    <>
      <Helmet>
        <title>Mendopuerto S.A. - Servicios de Transporte y Logística en Argentina</title>
        <meta name="description" content="Empresa mendocina de transporte de carga con más de 20 años de experiencia. Cobertura en todo el territorio argentino." />
      </Helmet>

      <Header />

      {/* WhatsApp Flotante */}
      <a 
        href={`https://wa.me/549${contactInfo.mobile}?text=Hola%2C%20me%20contacto%20desde%20la%20web.%20Quisiera%20hacer%20una%20consulta.`} 
        target="_blank" rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-200 z-50" 
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section id="inicio" className="scroll-mt-24 relative min-h-[95vh] bg-[#1a1c23] text-white flex items-center overflow-hidden border-b-8 border-primary">
          <div className="absolute inset-0 z-0">
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroData.background.image})` }}
              animate={{ scale: [1, 1.05, 1], x: [0, -10, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11131a] via-[#11131a]/80 to-transparent" style={{ opacity: heroData.background.overlayOpacity }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col justify-between min-h-[80vh]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mt-10">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-full font-bold tracking-widest text-sm mb-6 uppercase">
                {heroData.subtitle}
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Porque tu tranquilidad también viaja.
              </h1>
              <p className="text-base md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium">
                Desde hace más de 20 años, transportamos tu mercadería desde Mendoza a todo el país.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <a href="#contacto" className="bg-primary text-white px-6 py-4 md:px-10 md:py-5 rounded font-bold text-base md:text-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-lg text-center flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  Solicitar cotización
                </a>
                <a href="#servicios" className="bg-black/40 backdrop-blur-md border-2 border-white/60 text-white px-6 py-4 md:px-10 md:py-5 rounded font-bold text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-200 active:scale-[0.98] text-center">
                  Nuestros servicios
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
              {heroStats.map((stat, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="flex flex-col bg-black/60 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 text-center justify-center shadow-xl"
                >
                  <span className="text-2xl lg:text-4xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</span>
                  <span className="text-xs md:text-sm text-gray-300 uppercase tracking-widest font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section id="nosotros" className="scroll-mt-24 py-12 md:py-24 bg-white text-foreground relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-muted-foreground/30"></div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Quiénes somos</h2>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Experiencia e infraestructura a su servicio</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Mendopuerto S.A. es una empresa mendocina de servicios de transporte y coordinación logística fundada en 2005. Con más de dos décadas de actividad ininterrumpida, brindamos soluciones de flete a empresas de distintos sectores en todo el territorio argentino.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Nuestra operación se sustenta en relaciones comerciales consolidadas, cumplimiento de plazos y gestión responsable de cada carga que coordinamos.
                </p>
                <a href="#servicios" className="inline-flex items-center text-foreground font-bold text-lg hover:text-foreground/80 transition-colors group">
                  Conocer nuestros servicios
                  <ChevronDown className="ml-2 w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-muted rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                <img src="https://images.unsplash.com/photo-1696583545337-05099b905626" alt="Camión de carga" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-24 py-12 md:py-24 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12 md:mb-20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Áreas de especialización</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">Nuestros Servicios</h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Soluciones logísticas eficientes y adaptadas a las necesidades específicas de cada operación comercial.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {servicesData.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-card text-card-foreground rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="h-56 md:h-72 w-full relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 md:p-10 flex-1 flex flex-col bg-white">
                    <h4 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg flex-1">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 py-12 md:py-24 bg-white text-foreground border-y border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground">Resolvemos sus dudas sobre nuestras operaciones logísticas.</p>
            </motion.div>
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-border p-6">
              {faqsData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0 border-border/60">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-foreground/80 py-6">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Mapa */}
        <section id="ubicacion" className="scroll-mt-24 py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Dónde encontrarnos</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4">Nuestra Ubicación</h3>
              <p className="text-lg text-muted-foreground">Francisco de la Reta 761, San José, Guaymallén, Mendoza</p>
            </div>
            <div className="h-[300px] md:h-[400px] w-full relative rounded-2xl overflow-hidden shadow-lg">
              <iframe src={contactInfo.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de Mendopuerto S.A." className="absolute inset-0"></iframe>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-24 py-12 md:py-24 bg-[hsl(var(--navy))] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex flex-col">
                <div className="mb-8 md:mb-12">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Iniciemos su operación</h2>
                  <p className="text-lg md:text-xl opacity-90 leading-relaxed text-blue-100">
                    Comuníquese con nosotros para consultas comerciales o solicitud de cotización.
                  </p>
                </div>
                <div className="space-y-6 bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10">
                  <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-5 hover:opacity-80 transition-opacity">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 text-blue-200"><Mail className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200/80 mb-1">Correo Electrónico</h4>
                      <p className="text-base md:text-lg font-medium">{contactInfo.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${contactInfo.phone}`} className="flex items-start gap-5 hover:opacity-80 transition-opacity">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 text-blue-200"><Phone className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200/80 mb-1">Teléfono Fijo</h4>
                      <p className="text-base md:text-lg font-medium">{contactInfo.phone}</p>
                    </div>
                  </a>
                  <a href={`https://wa.me/549${contactInfo.mobile}?text=Hola%2C%20me%20contacto%20desde%20la%20web.%20Quisiera%20hacer%20una%20consulta.`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 hover:opacity-80 transition-opacity">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 text-blue-200"><Smartphone className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200/80 mb-1">WhatsApp / Móvil</h4>
                      <p className="text-base md:text-lg font-medium">{contactInfo.mobile}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 text-blue-200"><Clock className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200/80 mb-1">Horario de Atención</h4>
                      <p className="text-base md:text-lg font-medium">{contactInfo.hours}</p>
                    </div>
                  </div>
                  <a href="https://maps.google.com/?q=Francisco+de+la+Reta+761+San+Jose+Mendoza" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 hover:opacity-80 transition-opacity">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0 text-blue-200"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200/80 mb-1">Sede Central</h4>
                      <p className="text-base md:text-lg font-medium">{contactInfo.address}</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                <div className="bg-white text-gray-900 p-6 md:p-10 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8 text-foreground">Envíenos su consulta</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="nombre" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-700">Nombre Completo</label>
                      <input type="text" id="nombre" className="w-full px-5 py-4 rounded-xl bg-gray-50 text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] focus:border-transparent transition-all duration-200" placeholder="Ej. Juan Pérez" value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="empresa" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-700">Empresa (Opcional)</label>
                      <input type="text" id="empresa" className="w-full px-5 py-4 rounded-xl bg-gray-50 text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] focus:border-transparent transition-all duration-200" placeholder="Nombre de la empresa" value={formData.empresa} onChange={e => setFormData({ ...formData, empresa: e.target.value })} />
                    </div>
                    <div className="mb-8">
                      <label htmlFor="consulta" className="block text-sm font-bold uppercase tracking-wide mb-2 text-gray-700">Mensaje o Requerimiento</label>
                      <textarea id="consulta" rows="4" className="w-full px-5 py-4 rounded-xl bg-gray-50 text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--navy))] focus:border-transparent transition-all duration-200 resize-none" placeholder="Describa tipo de carga, origen, destino..." value={formData.consulta} onChange={e => setFormData({ ...formData, consulta: e.target.value })} required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-md flex justify-center items-center gap-2">
                      Enviar Mensaje
                      <Mail className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1423] text-gray-400 py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2">
              <img src="https://horizons-cdn.hostinger.com/dd275a68-1ddd-4705-843f-2ebbf61bfaed/8f3e9f28e7dfd14165d97b94947672ad.png" alt="Mendopuerto S.A." className="h-16 mb-6 opacity-90" />
              <p className="text-lg font-medium mb-4 max-w-md text-gray-300">Porque tu tranquilidad también viaja.</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-white uppercase tracking-wider mb-2 text-sm">Enlaces Rápidos</span>
              <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              <a href="#nosotros" className="hover:text-white transition-colors">Quiénes Somos</a>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-white uppercase tracking-wider mb-2 text-sm">Contacto</span>
              <a href="https://maps.google.com/?q=Francisco+de+la+Reta+761+San+Jose+Mendoza" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-gray-500" /><span className="text-sm">San José, Mendoza</span>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-gray-500" /><span className="text-sm">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-gray-500" /><span className="text-sm">{contactInfo.email}</span>
              </a>
              <a href={`https://wa.me/549${contactInfo.mobile}?text=Hola%2C%20me%20contacto%20desde%20la%20web.%20Quisiera%20hacer%20una%20consulta.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-500" /><span className="text-sm">{contactInfo.mobile}</span>
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2005–{new Date().getFullYear()} Mendopuerto S.A. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
