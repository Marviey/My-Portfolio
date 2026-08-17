import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      viewport={{ once: true }}
      className="
        group
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        rounded-3xl
        overflow-hidden
        h-full
        flex flex-col
        hover:shadow-2xl
        dark:hover:shadow-black/30
        transition-all duration-500
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-64
            object-cover
            group-hover:scale-105
            transition-transform duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="
                px-3 py-1
                rounded-full
                bg-gray-100 dark:bg-gray-800
                text-gray-700 dark:text-gray-300
                text-sm
                transition-colors
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 mt-auto">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-gray-900 dark:text-gray-200
              hover:text-blue-600
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              text-blue-600
              hover:text-blue-700
              transition
            "
          >
            Live Demo
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
