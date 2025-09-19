"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      setIsScrolled(true)
    }
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Servicios" },
    { path: "/contact", label: "Contacto" },
    { path: "/about", label: "Nosotros" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled || !isHomePage ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/eti-logo-circle.png" alt="ETI Logo" className="w-10 h-10 rounded-full" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 transition-colors duration-300 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                location.pathname === item.path
                  ? "text-[#4CAF50] font-semibold"
                  : `hover:text-[#4CAF50] ${isScrolled || !isHomePage ? "text-slate-900" : "text-white"}`
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-[#4CAF50] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#4CAF50]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Solicitar Presupuesto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
              isScrolled || !isHomePage ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 right-0 transition-all duration-300 ${
            isScrolled || !isHomePage ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-slate-900/95 backdrop-blur-md"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  location.pathname === item.path
                    ? `${isScrolled || !isHomePage ? "text-[#4CAF50] bg-slate-100" : "text-[#4CAF50] bg-white/10"}`
                    : `${
                        isScrolled || !isHomePage
                          ? "text-slate-900 hover:bg-slate-100 hover:text-[#4CAF50]"
                          : "text-white hover:bg-white/10 hover:text-[#4CAF50]"
                      }`
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#4CAF50] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#4CAF50]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent block text-center"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
