import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#4CAF50] mb-4">Energy Tronic – ETI</h3>
            <p className="text-slate-300 leading-relaxed">
              Soluciones eléctricas profesionales con más de 10 años de experiencia en el sector.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Servicios
              </Link>
              <Link
                to="/contact"
                className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Contacto
              </Link>
              <Link
                to="/about"
                className="block hover:text-[#4CAF50] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Nosotros
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
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
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>© 2024 Energy Tronic (ETI). Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
