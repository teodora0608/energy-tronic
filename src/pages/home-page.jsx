"use client"

import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const ClipboardBoltIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )

  const EVChargerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4-4 9.5-9.5z" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )

  const SolarPanelIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v11" />
      <path d="M15 3v11" />
    </svg>
  )

  const PanelGearIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6" />
      <path d="m15.14 7.14-4.28 4.28m0 5.66 4.28-4.28" />
    </svg>
  )

  const HouseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )

  const StorefrontIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    </svg>
  )

  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 6.988 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  )

  const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  )

  const BoltIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m13 2-3 7h4l-3 9" />
    </svg>
  )

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )

  // the 4 hero badges (reused for desktop & mobile)
  const heroBadges = [
    "Certificados oficiales (CIE)",
    "Normativa vigente",
    "Garantía y soporte",
    "Respuesta 24–48h",
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 flex-col">
      <Navbar />

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/solar-roof.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 opacity-55" />

        {/* Content */}
        <div
          className="
            relative z-20 max-w-6xl mx-auto px-4 md:px-8
            py-20 md:py-24 lg:py-28
            pb-48 md:pb-24
          "
        >
<div className="max-w-2xl pl-2 md:pl-4 text-center md:text-left pt-10 md:pt-0">
  <h1
    className="
      relative -top-16 md:top-0
      text-3xl md:text-4xl lg:text-6xl
      font-bold leading-tight md:leading-[1.15]
      mb-5 md:mb-8 drop-shadow-lg
    "
  >
    <span
      className="text-green-500 drop-shadow-lg"
      style={{
        background: "linear-gradient(to right, #4CAF50, #FACC15)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Soluciones Eléctricas
    </span>{" "}
    <span className="text-white drop-shadow-lg">Seguras y Eficientes</span>
  </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed mb-6 md:mb-8 drop-shadow-lg">
          Instalaciones profesionales para viviendas y empresas
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-green-500 text-white rounded-xl px-6 py-3 font-semibold hover:bg-green-600 transition-all duration-300"
              >
                Solicitar presupuesto
              </button>
              <a
                href="/services"
                className="rounded-xl border border-white/50 bg-slate-800/80 backdrop-blur px-6 py-3 text-white hover:bg-slate-700/80 transition-all duration-300 text-center"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>

        {/* Desktop badges (unchanged) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-8 z-20 w-full max-w-6xl px-4">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {heroBadges.map((badge, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full backdrop-blur-sm border text-sm font-medium shadow-lg
                           bg-slate-800/90 text-slate-200 border-white/10"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet badges pinned low (well below the buttons) */}
        <div
          className="
            md:hidden absolute inset-x-0
            bottom-[calc(96px+env(safe-area-inset-bottom))]  /* ~64px FAB + ~32px safe gap */
            px-4 z-30
          "
        >
          <div className="grid grid-cols-2 gap-2 pointer-events-auto">
            {heroBadges.map((badge, i) => (
              <div
                key={i}
                className="text-[12px] px-3 py-2 rounded-full text-center
                           bg-slate-900/70 text-slate-100 ring-1 ring-white/10 backdrop-blur-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed old mobile badges list (white cards) to avoid duplicates */}

      <section className="bg-white py-8 border-b border-slate-100"></section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "CIE. Certificado instalación eléctrica (Boletín)",
              description: "Emisión y tramitación del CIE en 24-48h tras verificación técnica.",
              icon: <ClipboardBoltIcon />,
            },
            {
              title: "PRVE puntos de recarga vehículo eléctrico",
              description: "Wallbox para viviendas y comunidades, con legalización y puesta en marcha.",
              icon: <EVChargerIcon />,
            },
            {
              title: "Instalaciones placas fotovoltaicas",
              description: "Diseño, instalación y monitorización. Subvenciones y compensación excedentes.",
              icon: <SolarPanelIcon />,
            },
            {
              title: "Cuadros eléctricos y automatización",
              description: "Diseño, montaje y centralización de contadores. Etiquetado y planos as-built.",
              icon: <PanelGearIcon />,
            },
            {
              title: "Instalaciones eléctricas de viviendas",
              description: "Reformas parciales/completas, ampliaciones de potencia y soluciones de seguridad.",
              icon: <HouseIcon />,
            },
            {
              title: "Instalaciones eléctricas locales públicos",
              description: "Cumplimiento normativo, aforo, salidas de emergencia y revisiones periódicas.",
              icon: <StorefrontIcon />,
            },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-green-500 before:to-yellow-400 before:rounded-t-2xl"
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-4 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-green-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                <a
                  href="/services"
                  className="block text-slate-600 text-sm hover:text-green-500 hover:underline underline-offset-4 transition-all duration-300"
                >
                  Más detalles →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* FAQ */}
<section id="faq" className="relative py-16 bg-gradient-to-b from-green-500/5 to-transparent">
  <div className="max-w-6xl mx-auto px-4 md:px-6">
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>

    <div className="max-w-4xl mx-auto space-y-4">
      {[
        {
          q: "¿Cuánto tiempo tarda en emitirse el boletín CIE?",
          a: "El boletín se emite en 24-48h tras completar la instalación y las verificaciones técnicas.",
        },
        {
          q: "¿Qué garantía ofrecen en las instalaciones?",
          a: "Ofrecemos 2 años de garantía en mano de obra y hasta 25 años en paneles fotovoltaicos según fabricante.",
        },
        {
          q: "¿Realizan instalaciones de puntos de recarga PRVE?",
          a: "Sí, somos instaladores certificados para puntos de recarga de vehículo eléctrico con todas las homologaciones.",
        },
        {
          q: "¿Trabajan con energía fotovoltaica?",
          a: "Especialistas en instalaciones solares residenciales y comerciales con tramitación de subvenciones.",
        },
        {
          q: "¿Qué zona de servicio cubren?",
          a: "Trabajamos principalmente en Madrid y alrededores. Consulta disponibilidad para otras zonas.",
        },
      ].map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-green-500 before:to-yellow-400"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-all duration-300"
            aria-expanded={openFaq === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span className="font-semibold text-slate-900 text-base md:text-lg">{faq.q}</span>
            <ChevronDownIcon
              className={`transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                openFaq === i ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            id={`faq-panel-${i}`}
            className={`${openFaq === i ? "block" : "hidden"} px-6 pt-4 md:pt-5 pb-6 mt-1 text-slate-700 leading-relaxed border-t border-slate-100`}
          >
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Contacto</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500 text-white rounded-full flex items-center justify-center">
              <PhoneIcon />
            </div>
            <h3 className="font-semibold mb-2">Teléfono</h3>
            <p className="text-slate-600">+34 601 274 018</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500 text-white rounded-full flex items-center justify-center">
              <MailIcon />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-slate-600 break-words">energyinstalacion@gmail.com</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 mx-auto mb-4 bg-green-500 text-white rounded-full flex items-center justify-center">
              <BoltIcon />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/34601274018"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-600 transition-all duration-300"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
