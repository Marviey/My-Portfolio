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
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600 transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
