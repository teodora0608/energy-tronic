"use client"

import { useState, useEffect } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2h12a2 2 0 0 1-2-2v-8" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  )

  const StorefrontIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    </svg>
  )

  const MetersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="m12 7.5 0 9.5" />
    </svg>
  )

  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  )

  const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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

  const SunIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="4" />
      <path d="m12 2 0 2" />
      <path d="m12 20 0 2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="m2 12 2 0" />
      <path d="m20 12 2 0" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )

  const MoonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )

  const ChevronDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 flex-col">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/eti-logo-circle.png" alt="ETI Logo" className="w-10 h-10" />
          </div>

          <div className="hidden md:flex items-center space-x-8 transition-colors duration-300 font-medium">
            <button
              onClick={() => scrollToSection("top")}
              className={`hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Home
            </button>
            <a
              href="#services-page"
              className={`hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Servicios
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Contacto
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#4CAF50] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#4CAF50]/90 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </nav>
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/photo3.png)" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/40 opacity-55"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-24">
          <div className="max-w-2xl pl-2 md:pl-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 drop-shadow-lg">
              <span
                className="text-[#4CAF50] drop-shadow-lg"
                style={{
                  background: "linear-gradient(to right, #4CAF50, #FACC15)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Soluciones Eléctricas
              </span>{" "}
              <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">Seguras y Eficientes</span>
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6 md:mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              Instalaciones profesionales, fotovoltaica y automatización para viviendas y negocios con más de 10 años de
              experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#4CAF50] text-white rounded-xl px-6 py-3 font-semibold hover:bg-[#45a049] transition-all duration-300"
              >
                Solicitar presupuesto
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="rounded-xl border border-white/50 bg-slate-800/80 backdrop-blur px-6 py-3 text-white hover:bg-slate-700/80 transition-all duration-300"
              >
                Ver servicios
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 z-20 w-full max-w-6xl px-4">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-between px-0 py-2.5">
            {["Certificados oficiales (CIE)", "Normativa vigente", "Garantía y soporte", "Respuesta 24–48h"].map(
              (badge, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full backdrop-blur-sm border text-sm font-medium shadow-[0_6px_24px_rgba(0,0,0,.12)] hover:bg-slate-700/80 transition-all duration-300 bg-[rgba(29,41,61,1)] text-slate-300 border-slate-400"
                >
                  {badge}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "CIE. Certificado instalación eléctrica (Boletín)", icon: <ClipboardBoltIcon /> },
            { title: "PRVE puntos de recarga vehículo eléctrico", icon: <EVChargerIcon /> },
            { title: "Instalaciones placas fotovoltaicas", icon: <SolarPanelIcon /> },
            {
              title: "Cuadros eléctricos y automatización (incluye centralización de contadores)",
              icon: <PanelGearIcon />,
            },
            { title: "Instalaciones eléctricas de viviendas", icon: <HouseIcon /> },
            { title: "Instalaciones eléctricas locales de pública concurrencia", icon: <StorefrontIcon /> },
          ].map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm hover:shadow-xl motion-safe:hover:-translate-y-1 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#4CAF50] before:to-[#FACC15] before:rounded-t-2xl"
            >
              <div className="size-10 rounded-xl bg-[#4CAF50]/10 text-[#4CAF50] flex items-center justify-center mb-4 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <div className="space-y-2">
                <a
                  href="#services-page"
                  className="block text-slate-600 text-sm hover:underline underline-offset-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Más detalles →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="relative py-16 bg-gradient-to-b from-[#4CAF50]/5 to-transparent">
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
                className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden hover:shadow-xl motion-safe:hover:-translate-y-1 transition-all duration-300 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-[#4CAF50] before:to-[#FACC15]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shadow"
                >
                  <span className="font-semibold text-slate-900 text-base md:text-lg">{faq.q}</span>
                  <ChevronDownIcon
                    className={`transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-slate-700 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Contacto</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-xl motion-safe:hover:-translate-y-1 transition-all duration-300">
            <PhoneIcon className="mx-auto mb-4 text-[#4CAF50]" />
            <h3 className="font-semibold mb-2">Teléfono</h3>
            <p className="text-slate-600">+34 601 274 018</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-xl motion-safe:hover:-translate-y-1 transition-all duration-300">
            <MailIcon className="mx-auto mb-4 text-[#4CAF50]" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-slate-600 break-words">energyinstalacion@gmail.com</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white border border-slate-200/60 hover:shadow-xl motion-safe:hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <BoltIcon className="mx-auto mb-4 text-[#4CAF50]" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/34601274018"
              className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#4CAF50]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] text-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-[#4CAF50] mb-3">Energy Tronic – ETI</h3>
              <p className="text-slate-300">
                Soluciones eléctricas profesionales con más de 10 años de experiencia en el sector.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Enlaces rápidos</h4>
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection("top")}
                  className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Home
                </button>
                <a
                  href="#services-page"
                  className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Servicios
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Contacto
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Legal</h4>
              <div className="space-y-1">
                <a
                  href="#"
                  className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Aviso Legal
                </a>
                <a
                  href="#"
                  className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Privacidad
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center text-slate-400">
            <p>© 2024 Energy Tronic (ETI). Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/34601274018"
        aria-label="Contact via WhatsApp"
        className="fixed bottom-5 md:bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#25D366]/90 transition-all duration-300 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 6.988 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </div>
  )
}
