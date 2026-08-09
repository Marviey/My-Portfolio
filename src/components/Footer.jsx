import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa"

function Footer() {
  return (
    <footer
      className="
        bg-gray-100 dark:bg-gray-950
        text-gray-900 dark:text-white
        border-t border-gray-200 dark:border-gray-800
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">Marvel.</h3>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Frontend Developer • UI Designer
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/Marviey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Marvel. All rights reserved.
          </p>

          <a
            href="#home"
            className="
              flex items-center gap-2
              bg-black dark:bg-white
              text-white dark:text-black
              hover:bg-gray-800 dark:hover:bg-gray-200
              px-5 py-2
              rounded-full
              transition
            "
          >
            <FaArrowUp />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
