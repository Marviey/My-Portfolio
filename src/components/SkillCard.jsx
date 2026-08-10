import { motion } from "framer-motion"

function SkillCard({ title, tech, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="
        h-full
        min-h-75
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        rounded-3xl
        p-8
        flex flex-col
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl
        dark:hover:border-gray-700
      "
    >
      {/* Card Title */}
      <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {tech.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              key={index}
              className="
                flex items-center gap-2
                bg-gray-100 dark:bg-gray-800
                text-gray-700 dark:text-gray-300
                px-4 py-2
                rounded-full
                text-sm
                transition
                hover:bg-gray-200
                dark:hover:bg-gray-700
              "
            >
              <Icon className="text-lg" />
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default SkillCard
