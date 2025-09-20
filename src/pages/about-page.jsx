"use client"

import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"

export default function AboutPage() {
  const AwardIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )

  const ShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )

  const UsersIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )

  const ClockIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800">
      <Navbar />

      {/* HERO – alb + titlu cu gradient pe “Sobre” */}
      <section className="relative pt-24 pb-16 bg-white">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
            <span className="inline-block bg-gradient-to-r from-[#4CAF50] to-[#FACC15] bg-clip-text text-transparent">
              Sobre
            </span>{" "}
            <span className="text-slate-900">Nosotros</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Más de una década ofreciendo soluciones eléctricas profesionales, seguras y eficientes en Madrid y
            alrededores.
          </p>
        </div>
      </section>

      {/* Company Story + Mission (white theme + linie gradient sus) */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Energy Tronic (ETI)</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Fundada con la visión de proporcionar soluciones eléctricas de la más alta calidad, Energy Tronic (ETI)
                se ha consolidado como una empresa de referencia en el sector eléctrico de Madrid y sus alrededores.
              </p>
              <p>
                Con más de 10 años de experiencia, nuestro equipo de profesionales altamente cualificados se especializa
                en instalaciones eléctricas residenciales, comerciales e industriales, así como en las últimas
                tecnologías de energía renovable y automatización.
              </p>
              <p>
                Nos enorgullecemos de mantener los más altos estándares de seguridad y calidad en cada proyecto,
                cumpliendo rigurosamente con toda la normativa vigente y ofreciendo garantías completas en todos
                nuestros trabajos.
              </p>
            </div>
          </div>

          {/* Misión – card alb cu linie gradient ca pe Servicios/Contacto */}
          <div className="relative">
            <div
              className="relative rounded-2xl p-8 bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm
                         before:absolute before:inset-x-0 before:top-0 before:h-1
                         before:bg-gradient-to-r before:from-[#4CAF50] before:to-[#FACC15]
                         before:rounded-t-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#FACC15] bg-clip-text text-transparent">
                  Nuestra Misión
                </span>
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Proporcionar soluciones eléctricas innovadoras, seguras y eficientes que superen las expectativas de
                nuestros clientes, contribuyendo a un futuro más sostenible y tecnológicamente avanzado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores – cards albe cu linie gradient sus */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { title: "Excelencia", Icon: AwardIcon, text: "Buscamos la perfección en cada proyecto, utilizando las mejores prácticas y tecnologías más avanzadas del sector." },
              { title: "Seguridad", Icon: ShieldIcon, text: "La seguridad es nuestra prioridad absoluta. Cumplimos estrictamente con todas las normativas y protocolos de seguridad." },
              { title: "Confianza", Icon: UsersIcon, text: "Construimos relaciones duraderas basadas en la transparencia, honestidad y compromiso con nuestros clientes." },
              { title: "Puntualidad", Icon: ClockIcon, text: "Respetamos los plazos acordados y ofrecemos respuestas rápidas a todas las consultas y emergencias." },
            ].map(({ title, Icon, text }, i) => (
              <div
                key={i}
                className="relative text-center p-6 rounded-2xl bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition
                           before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#4CAF50] before:to-[#FACC15] before:rounded-t-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full flex items-center justify-center">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones – white theme */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            Certificaciones y Garantías
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Nuestras Certificaciones</h3>
              <ul className="space-y-4">
                {[
                  "Certificación oficial para emisión de CIE (Certificado de Instalación Eléctrica)",
                  "Instalador autorizado de puntos de recarga PRVE",
                  "Certificación en instalaciones fotovoltaicas",
                  "Habilitación para instalaciones de baja y media tensión",
                  "Certificación en automatización y domótica",
                  "Registro oficial de instaladores eléctricos",
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-[#4CAF50] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Nuestras Garantías</h3>
              <ul className="space-y-4">
                {[
                  "2 años de garantía completa en todos nuestros trabajos de instalación y reparación",
                  "Garantía extendida según fabricante en todos los componentes y equipos instalados",
                  "Servicio de soporte técnico y mantenimiento disponible 24/7 para emergencias",
                  "Revisiones gratuitas durante el primer año post-instalación",
                  "Certificado de garantía oficial con cada proyecto completado",
                  "Cobertura completa de defectos de fabricación y mano de obra",
                ].map((guarantee, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-[#4CAF50] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-600">{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA – alb, în linie cu tema */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Únete a los cientos de clientes que ya confían en Energy Tronic para sus proyectos eléctricos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#4CAF50] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#45a049] transition-all duration-300"
            >
              Solicitar presupuesto
            </Link>
            <Link
              to="/services"
              className="border-2 border-[#4CAF50] text-[#4CAF50] px-8 py-4 rounded-xl font-semibold hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
