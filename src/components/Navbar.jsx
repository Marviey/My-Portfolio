import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa"

import resume from "../assets/Marvellous-Okoro-CV.pdf"

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Active section
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const handleScroll = () => {
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120
        const sectionHeight = section.offsetHeight

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id")
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        darkMode
          ? scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
          : scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-bold transition ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Marvel.
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden lg:flex items-center gap-8 font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition ${
                  activeSection === link.id
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Marviey"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              className={`text-xl transition ${
                darkMode
                  ? "text-white hover:text-blue-500"
                  : "text-gray-900 hover:text-blue-500"
              }`}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              className={`text-xl transition ${
                darkMode
                  ? "text-white hover:text-blue-500"
                  : "text-gray-900 hover:text-blue-500"
              }`}
            />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
              darkMode
                ? "text-white hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-200"
            }`}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>

          {/* Resume */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile + Tablet Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              />
            ) : (
              <HiOutlineMenuAlt3
                className={`text-3xl ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden backdrop-blur-lg border-t ${
            darkMode
              ? "bg-black/90 border-white/10 text-white"
              : "bg-white/95 border-gray-200 text-gray-900"
          }`}
        >
          <ul className="flex flex-col items-center py-8 gap-6 text-lg">
            {/* Links */}
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition ${
                    activeSection === link.id
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Theme Toggle */}
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition ${
                  darkMode ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <>
                    <FaSun className="text-yellow-400" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <FaMoon />
                    Dark Mode
                  </>
                )}
              </button>
            </li>

            {/* Resume */}
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
