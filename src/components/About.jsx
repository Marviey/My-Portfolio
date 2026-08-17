import { motion } from "framer-motion"
import profileImg from "../assets/my-profile2.jpeg"

function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-white
        py-24 px-6
        transition-colors duration-500
      "
    >
      {/* Mobile + Tablet Background Image */}
      <div
        className="
          absolute inset-0 lg:hidden
          bg-cover bg-center
          grayscale
          opacity-20 dark:opacity-25
        "
        style={{ backgroundImage: `url(${profileImg})` }}
      />

      {/* Mobile + Tablet Overlay */}
      <div
        className="
          absolute inset-0 lg:hidden
          bg-white/70 dark:bg-black/55
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-sm uppercase tracking-widest
            text-gray-500 dark:text-gray-400
            mb-12
          "
        >
          About Me
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
                text-4xl sm:text-5xl lg:text-6xl
                font-bold leading-tight mb-8
                text-gray-900 dark:text-white
              "
            >
              Building modern
              <br />
              <span className="text-gray-500 dark:text-gray-400">
                digital experiences.
              </span>
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
                text-gray-700 dark:text-gray-300
                text-base sm:text-lg
                leading-8 mb-6
                max-w-xl
              "
            >
              I'm Marvellous, a Frontend Developer passionate about creating
              responsive, accessible and visually appealing websites using
              React, JavaScript and Tailwind CSS.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
                text-gray-700 dark:text-gray-300
                text-base sm:text-lg
                leading-8 mb-8
                max-w-xl
              "
            >
              I enjoy turning ideas into interactive user experiences and I'm
              constantly learning new technologies to improve my craft.
            </motion.p>

            {/* Let's Talk */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                inline-flex items-center gap-3
                bg-black dark:bg-white
                text-white dark:text-black
                px-6 py-3
                rounded-full
                hover:bg-gray-800
                dark:hover:bg-gray-200
                transition
              "
            >
              Let's Talk
              <span>↗</span>
            </motion.a>
          </div>

          {/* RIGHT SIDE — DESKTOP ONLY */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={profileImg}
                alt="Marvellous"
                className="
                  w-full
                  h-125 xl:h-150
                  object-cover
                  grayscale
                  hover:grayscale-0
                  transition duration-700
                "
              />
            </div>

            {/* Desktop Floating Text */}
            <div
              className="
                absolute bottom-6 left-6
                bg-white/90 dark:bg-gray-900/90
                backdrop-blur-sm
                px-5 py-3
                rounded-full
                shadow-sm
              "
            >
              <p className="text-sm font-medium">Frontend Developer</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile + Tablet Floating Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="
          lg:hidden
          absolute
          bottom-8
          right-6
          sm:right-10
          bg-white/90 dark:bg-gray-900/90
          backdrop-blur-sm
          px-5 py-3
          rounded-full
          shadow-lg
          z-20
        "
      >
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Frontend Developer
        </p>
      </motion.div>
    </section>
  )
}

export default About
