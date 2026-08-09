import { motion } from "framer-motion"

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-9999"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-white"
      >
        Marvel<span className="text-blue-600">.</span>
      </motion.h1>

      <div className="w-52 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>

      <p className="text-gray-400 mt-5 tracking-widest">
        Hmmmm... Trust me you'll like it!
      </p>
    </motion.div>
  )
}

export default Loader
