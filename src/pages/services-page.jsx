// src/pages/services-page.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp-button";
import ChipsNav from "../components/chips-nav";

/* ===== date pentru cele 6 servicii ===== */
const services = [
  {
    id: "fotovoltaica",
    title: "Instalaciones placas fotovoltaicas",
    highlight: "fotovoltaicas",
    lead: [
      "Sistemas fotovoltaicos diseñados para maximizar tu ahorro energético y reducir la huella de carbono.",
      "Utilizamos paneles solares de última generación con inversores inteligentes que optimizan la producción.",
      "Cada instalación incluye monitorización en tiempo real desde cualquier dispositivo.",
      "Nos encargamos de toda la tramitación legal y las subvenciones disponibles.",
      "Ofrecemos garantías extendidas y mantenimiento preventivo para máximo rendimiento.",
    ],
    meta: { duration: "24–48h", warranty: "2 años", location: "Madrid y alrededores" },
    images: [
      { src: "/images/3.jpeg", alt: "Paneles solares en tejado con vegetación" },
      { src: "/images/4.jpeg", alt: "Instalación de paneles solares en tejado" },
    ],
    chip: "Instalaciones placas",
  },
  {
    id: "ev",
    title: "PRVE puntos de recarga vehículo eléctrico",
    highlight: "PRVE",
    lead: [
      "Sistemas fotovoltaicos diseñados para maximizar tu ahorro energético y reducir la huella de carbono.",
      "Utilizamos paneles solares de última generación con inversores inteligentes que optimizan la producción.",
      "Ofrecemos garantías extendidas y mantenimiento preventivo para máximo rendimiento.",
      "Realizamos un estudio personalizado para dimensionar la instalación según tus hábitos de consumo.",
      "Nuestros técnicos especializados aseguran una ejecución rápida y segura, minimizando molestias.",
    ],
    meta: { duration: "4–6h", warranty: "2 años", location: "Madrid y alrededores" },
    images: [
      { src: "/images/7.jpeg", alt: "Wallbox cargador de vehículo eléctrico" },
      { src: "/images/6.jpeg", alt: "Inversor y cuadro eléctrico en garaje" },
      { src: "/images/8.jpeg", alt: "Cuadro pequeño en instalación EV" },
    ],
    chip: "PRVE puntos",
  },
  {
    id: "cuadros",
    title: "Cuadros eléctricos y automatización",
    highlight: "automatización",
    lead: [
      "Fabricamos cuadros eléctricos a medida con componentes de primeras marcas como Schneider y ABB.",
      "Documentación técnica completa con planos as-built y etiquetado profesional de todos los circuitos.",
      "Realizamos pruebas exhaustivas de seguridad y funcionamiento antes de la entrega.",
      "Soluciones de automatización que mejoran la eficiencia energética y facilitan el mantenimiento.",
    ],
    meta: { duration: "4–6h", warranty: "2 años", location: "Madrid y alrededores" },
    images: [
      { src: "/images/11.jpeg", alt: "Cuadro eléctrico con protecciones" },
      { src: "/images/12.jpeg", alt: "Tablero con barras de cobre y cableado" },
      { src: "/images/15.jpeg", alt: "Cuadro industrial completo" },
    ],
    chip: "Cuadros eléctricos",
  },
  {
    id: "viviendas",
    title: "Instalaciones eléctricas de viviendas",
    highlight: "viviendas",
    lead: [
      "Reformamos y adaptamos instalaciones eléctricas cumpliendo la normativa vigente.",
      "Nuevos circuitos pentru electrodomésticos modernos, climatización e iluminación eficiente.",
      "Cuadros eléctricos con protecciones diferenciales y magnetotérmicas de última generación.",
      "Entrega con Certificado de Instalación Eléctrica (CIE) cuando sea requerido.",
    ],
    meta: { duration: "2–5 días", warranty: "2 años", location: "Madrid y alrededores" },
    images: [
      { src: "/images/5.jpeg", alt: "Instalación eléctrica en garaje vivienda" },
      { src: "/images/6.jpeg", alt: "Inversor y pequeño cuadro eléctrico en pared" },
    ],
    chip: "Instalaciones eléctricas",
  },
  {
    id: "cie",
    title: "CIE. Certificado instalación eléctrica",
    highlight: "CIE",
    lead: [
      "Inspecciones técnicas exhaustivas siguiendo protocolos establecidos en el REBT",
      "Técnicos certificados efectúan mediciones reglamentarias de aislamiento y continuidad.",
      "Informes detallados con correcciones necesarias y plazos de ejecución.",
      "Gestión completa del proceso de registro ante el organismo competente.",
      "Asesoría técnica continua para resolver cualquier duda normativa posterior.",
    ],
    meta: { duration: "24–48h", warranty: "Certificado oficial", location: "Madrid y alrededores" },
    images: [
      { src: "/images/18.jpeg", alt: "Cuadro eléctrico con protecciones certificadas" },
      { src: "/images/19.jpeg", alt: "Detalle de instalación ordenada y etiquetada" },
    ],
    chip: "CIE. Certificado",
  },
  {
    id: "locales",
    title: "Instalaciones eléctricas locales de pública concurrencia",
    highlight: "pública concurrencia",
    lead: [
      "Sistemas de alumbrado de emergencia y señalización normativa.",
      "Equipos con detección automática de fallos și autotest programable.",
      "Certificación oficial y mantenimiento anual requerido por normativa.",
    ],
    meta: { duration: "3–7 días", warranty: "2 años", location: "Madrid y alrededores" },
    images: [
      { src: "/images/1.jpeg", alt: "Sala técnica con inversores y cuadros" },
      { src: "/images/2.jpeg", alt: "Instalación eléctrica industrial con invertores" },
    ],
    chip: "Instalaciones eléctricas",
  },
];

/* ===== inline icons ===== */
const IconClock = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);
const IconShield = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <path d="M12 2l8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconPin = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconChevronLeft = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
const IconChevronRight = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);
const IconX = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/* ===== Carousel ===== */
function ImageCarousel({ images, title, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handle = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion || images.length <= 1) return;
    const t = setInterval(() => setCurrentIndex((p) => (p + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length, isAutoPlaying, prefersReducedMotion]);

  const next = () => {
    setCurrentIndex((p) => (p + 1) % images.length);
    setIsAutoPlaying(false);
  };
  const prev = () => {
    setCurrentIndex((p) => (p - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div
      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-slate-100"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-label={title}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={i === 0 ? img.alt : ""}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
          loading={i === 0 ? "eager" : "lazy"}
          onClick={() => onImageClick(i)}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105"
            aria-label="Previous image"
          >
            <IconChevronLeft />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105"
            aria-label="Next image"
          >
            <IconChevronRight />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); setIsAutoPlaying(false); }}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="md:hidden absolute bottom-2 right-2 text-white/70 text-xs bg-black/20 px-2 py-1 rounded">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

/* ===== Lightbox ===== */
function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <button onClick={onClose} className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2" aria-label="Close lightbox">
        <IconX />
      </button>

      <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2" aria-label="Prev">
        <IconChevronLeft />
      </button>

      <img src={images[currentIndex]?.src} alt={images[currentIndex]?.alt || ""} className="max-w-5xl max-h-[80vh] object-contain" />

      <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2" aria-label="Next">
        <IconChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

/* ===== secțiune serviciu ===== */
function ServiceBlock({ service, index, servicesData }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const isReversed = index % 2 === 1;

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % service.images.length : 0));
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + service.images.length) % service.images.length : 0));

  const parts = service.title.split(service.highlight);
  const titleJSX =
    parts.length === 1 ? (
      service.title
    ) : (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#FACC15]">{service.highlight}</span>
        {parts[1]}
      </>
    );

  return (
    <>
      {/* white section (înlocuit orice #FACC15/5) */}
      <section id={service.id} className="scroll-mt-28 py-20 lg:py-28 bg-white">
        <div className="max-w-7xl xl:max-w-8xl mx-auto px-4 md:px-6">
          <div className={`grid lg:grid-cols-12 gap-10 xl:gap-16 items-start ${isReversed ? "lg:grid-flow-col-dense" : ""}`}>
            {/* Media */}
            <div className={`lg:col-span-7 xl:col-span-8 ${isReversed ? "lg:col-start-6 xl:col-start-5" : ""}`}>
              <ImageCarousel images={service.images} title={service.title} onImageClick={openLightbox} />
            </div>

            {/* Content */}
            <div className={`lg:col-span-5 xl:col-span-4 space-y-8 max-w-[560px] xl:max-w-[640px] ${isReversed ? "lg:col-start-1" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6 text-balance">{titleJSX}</h2>

              <div className="space-y-3">
                {service.lead.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mt-8 pt-6 border-t border-slate-200">
                <span className="flex items-center gap-1.5"><IconClock className="text-[#4CAF50]" />{service.meta.duration}</span>
                <span className="flex items-center gap-1.5"><IconShield className="text-[#4CAF50]" />{service.meta.warranty}</span>
                <span className="flex items-center gap-1.5"><IconPin className="text-[#4CAF50]" />{service.meta.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* separator */}
      {index < servicesData.length - 1 && <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />}
    </>
  );
}

/* ====== PAGINA ====== */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800">
      <Navbar />

      {/* Hero – 100% alb (înlocuiește orice #FACC15/5) */}
      <section className="pt-24 pb-12 relative bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#FACC15]">Servicios</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto">
            Soluciones eléctricas completas con legalización oficial incluida
          </p>
        </div>
      </section>

      {/* Tabs / Chips */}
      <ChipsNav services={services} />

      {/* Conținut servicii */}
      <div className="space-y-0">
        {services.map((s, i) => (
          <ServiceBlock key={s.id} service={s} index={i} servicesData={services} />
        ))}
      </div>

      {/* CTA – alb */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-3xl md:4xl font-bold text-slate-900 mb-6">
            ¿Listo para una instalación{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#FACC15]">segura y legalizada</span>
            ?
          </h3>
          <p className="text-lg md:text-xl text-slate-700 mb-8">
            Contacta con nosotros pentru o consulta personalizată și ofertă fără compromis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#4CAF50] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#45a049] transition-all"
            >
              Solicitar presupuesto
            </Link>
            <a
              href="https://wa.me/34601274018"
              className="border-2 border-[#4CAF50] text-[#4CAF50] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#4CAF50] hover:text-white transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
