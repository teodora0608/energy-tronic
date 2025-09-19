"use client"

import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    gdprAccepted: false,
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }))
    if (formErrors[name]) setFormErrors((p) => ({ ...p, [name]: "" }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "El nombre es obligatorio"
    if (!formData.phone.trim()) errors.phone = "El teléfono es obligatorio"
    if (!formData.email.trim()) errors.email = "El email es obligatorio"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "El email no es válido"
    if (!formData.service) errors.service = "Selecciona un servicio"
    if (!formData.gdprAccepted) errors.gdprAccepted = "Debes aceptar la política de privacidad"
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length) {
      setFormErrors(errors)
      return
    }
    const message = `Hola! Me gustaría solicitar información sobre:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio: ${formData.service}
Mensaje: ${formData.message}`
    const whatsappUrl = `https://wa.me/34601274018?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "", gdprAccepted: false })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
  const MapPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
  const ClockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO – alb, cu “Contacta” în gradient verde→galben */}
      <section className="relative pt-24 pb-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-slate-900">
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#FACC15] bg-clip-text text-transparent">
              Contacta
            </span>{" "}
            <span className="text-slate-900">con Nosotros</span>
          </h1>
          <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte con tu proyecto eléctrico. Contáctanos y recibe una respuesta en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* CARDS + FORM */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        {/* CARDS – albe cu linie sus în gradient (verde→galben) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Teléfono", body: "+34 601 274 018", actionLabel: "Llamar ahora", href: "tel:+34601274018", Icon: PhoneIcon },
            { title: "Email", body: "energyinstalacion@gmail.com", actionLabel: "Enviar email", href: "mailto:energyinstalacion@gmail.com", Icon: MailIcon },
            { title: "Zona de servicio", body: "Madrid y alrededores", actionLabel: "Consulta otras zonas", href: "#", Icon: MapPinIcon },
            { title: "Horario", body: "Lun - Vie: 8:00 - 18:00", pill: "Urgencias 24h", Icon: ClockIcon },
          ].map(({ title, body, actionLabel, href, Icon, pill }, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow
                         before:absolute before:inset-x-0 before:top-0 before:h-1
                         before:bg-gradient-to-r before:from-[#4CAF50] before:to-[#FACC15]
                         before:rounded-t-2xl"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-[#4CAF50] text-white rounded-full flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="font-semibold text-center mb-1">{title}</h3>
              <p className="text-slate-600 text-center break-words">{body}</p>

              {pill ? (
                <span className="mt-3 block w-fit mx-auto px-3 py-1 rounded-full bg-[#4CAF50] text-white text-xs font-semibold">
                  {pill}
                </span>
              ) : null}

              {href && actionLabel ? (
                <a href={href} className="block text-center mt-3 text-[#4CAF50] hover:text-[#16A34A] transition-colors">
                  {actionLabel}
                </a>
              ) : null}
            </div>
          ))}
        </div>

        {/* FORM + SIDEBAR */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* form */}
          <div className="lg:col-span-3 rounded-2xl p-8 bg-white ring-1 ring-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Solicitar Presupuesto</h2>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#22c55e]/10 text-[#166534] ring-1 ring-[#22c55e]/30">
                ✓ Gracias, te respondemos en menos de 24h
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-slate-700">Nombre completo *</label>
                <input
                  id="name" name="name" value={formData.name} onChange={handleInputChange} required
                  placeholder="Tu nombre completo"
                  className={`w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400
                              border transition focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent
                              ${formErrors.name ? "border-red-300 bg-red-50" : "border-slate-300"}`}
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-slate-700">Teléfono *</label>
                  <input
                    id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required
                    placeholder="+34 600 000 000"
                    className={`w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400
                                border transition focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent
                                ${formErrors.phone ? "border-red-300 bg-red-50" : "border-slate-300"}`}
                  />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-700">Email *</label>
                  <input
                    id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required
                    placeholder="tu@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400
                                border transition focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent
                                ${formErrors.email ? "border-red-300 bg-red-50" : "border-slate-300"}`}
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2 text-slate-700">Servicio de interés *</label>
                <select
                  id="service" name="service" value={formData.service} onChange={handleInputChange} required
                  className={`w-full px-4 py-3 rounded-2xl bg-white text-slate-900 border
                              focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent
                              ${formErrors.service ? "border-red-300 bg-red-50" : "border-slate-300"}`}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Instalaciones placas">Instalaciones placas</option>
                  <option value="PRVE puntos">PRVE puntos</option>
                  <option value="Cuadros eléctricos">Cuadros eléctricos</option>
                  <option value="Instalaciones eléctricas">Instalaciones eléctricas</option>
                  <option value="CIE. Certificado">CIE. Certificado</option>
                </select>
                {formErrors.service && <p className="mt-1 text-sm text-red-600">{formErrors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-slate-700">Mensaje</label>
                <textarea
                  id="message" name="message" rows={5} value={formData.message} onChange={handleInputChange}
                  placeholder="Cuéntanos más detalles sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="gdprAccepted" name="gdprAccepted" type="checkbox"
                  checked={formData.gdprAccepted} onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#4CAF50] rounded border-slate-300 focus:ring-[#4CAF50]"
                />
                <label htmlFor="gdprAccepted" className="text-sm text-slate-700">
                  Acepto la{" "}
                  <a href="#" className="text-[#4CAF50] hover:underline">Política de Privacidad</a>
                  *
                </label>
              </div>
              {formErrors.gdprAccepted && <p className="text-sm text-red-600">{formErrors.gdprAccepted}</p>}

              <button
                type="submit" disabled={isSubmitted}
                className="w-full bg-[#4CAF50] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#4CAF50]/90 disabled:opacity-50 transition"
              >
                {isSubmitted ? "Enviado ✓" : "Solicitar presupuesto"}
              </button>
            </form>
          </div>

          {/* right column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl p-8 bg-white ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                {[
                  "Más de 10 años de experiencia",
                  "Respuesta en menos de 24 horas",
                  "Certificaciones oficiales",
                  "Garantía en todos los trabajos",
                  "Presupuestos sin compromiso",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-[#4CAF50] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* mobile sticky – păstrat întunecat pentru contrast */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F172A]/95 backdrop-blur-md border-t border-white/10 p-4 z-50">
        <a
          href="tel:+34601274018"
          className="w-full bg-[#22C55E] text-white py-3 px-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 hover:bg-[#16A34A] transition"
        >
          <PhoneIcon />
          Llamar
        </a>
      </div>
    </div>
  )
}
