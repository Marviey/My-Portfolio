import profileImage from "../assets/my-profile.jpeg"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden
      bg-white dark:bg-gray-950
      text-gray-900 dark:text-white
      transition-colors duration-500"
    >
      {/* Mobile + Tablet Background Image */}
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center grayscale opacity-20 dark:opacity-25"
        style={{ backgroundImage: `url(${profileImage})` }}
      />

      {/* Mobile + Tablet Overlay */}
      <div className="absolute inset-0 lg:hidden bg-white/60 dark:bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 gap-12 items-center px-6 py-24 lg:py-0">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="text-blue-600 dark:text-blue-500 font-medium mb-4">
            Frontend Developer • UI Designer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Marvellous <br />
            <span className="text-gray-500 dark:text-gray-400">
              Frontend Developer &
              <br />
              UI Designer
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-lg mb-8 leading-7">
            I build modern, responsive and user-friendly web experiences using
            React, Tailwind CSS and modern frontend technologies.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            className="flex flex-wrap gap-4"
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white transition px-6 py-3 rounded-full font-medium"
            >
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              hover:border-gray-500 dark:hover:border-gray-400
              transition px-6 py-3 rounded-full font-medium"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side — Desktop Only */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="hidden lg:flex justify-center"
        >
          <div>
            <img
              src={profileImage}
              alt="Marvel"
              className="w-80 h-125 xl:w-112.5 xl:h-150 object-cover rounded-3xl grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
