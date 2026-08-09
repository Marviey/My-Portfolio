import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa"

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    setStatus("sending")

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setStatus("success")
          e.target.reset()
        },
        () => {
          setStatus("error")
        },
      )
  }

  return (
    <section
      id="contact"
      className="
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-white
        py-24 px-6
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's work
            <br />
            <span className="text-gray-400 dark:text-gray-500">together.</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-xl leading-8">
            Have an idea, project or collaboration in mind? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Email */}
            <div className="flex items-start gap-5">
              <div
                className="
                  w-12 h-12 rounded-full
                  bg-gray-100 dark:bg-gray-900
                  flex items-center justify-center
                  transition-colors duration-300
                "
              >
                <FaEnvelope className="text-blue-600" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Email
                </h4>

                <p className="text-gray-600 dark:text-gray-400">
                  mavokoro@mail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div
                className="
                  w-12 h-12 rounded-full
                  bg-gray-100 dark:bg-gray-900
                  flex items-center justify-center
                  transition-colors duration-300
                "
              >
                <FaPhoneAlt className="text-blue-600" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Phone
                </h4>

                <p className="text-gray-600 dark:text-gray-400">
                  +234 9155 826 532
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-5">
              <div
                className="
                  w-12 h-12 rounded-full
                  bg-gray-100 dark:bg-gray-900
                  flex items-center justify-center
                  transition-colors duration-300
                "
              >
                <FaMapMarkerAlt className="text-blue-600" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Location
                </h4>

                <p className="text-gray-600 dark:text-gray-400">Nigeria</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  border-b border-gray-300 dark:border-gray-700
                  py-4
                  bg-transparent
                  text-gray-900 dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-600
                  outline-none
                  focus:border-black dark:focus:border-white
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="
                  w-full
                  border-b border-gray-300 dark:border-gray-700
                  py-4
                  bg-transparent
                  text-gray-900 dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-600
                  outline-none
                  focus:border-black dark:focus:border-white
                  transition
                "
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Subject
              </label>

              <input
                type="text"
                name="title"
                placeholder="What is this about?"
                required
                className="
                  w-full
                  border-b border-gray-300 dark:border-gray-700
                  py-4
                  bg-transparent
                  text-gray-900 dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-600
                  outline-none
                  focus:border-black dark:focus:border-white
                  transition
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Message
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="
                  w-full
                  border-b border-gray-300 dark:border-gray-700
                  py-4
                  bg-transparent
                  text-gray-900 dark:text-white
                  placeholder-gray-400 dark:placeholder-gray-600
                  outline-none
                  focus:border-black dark:focus:border-white
                  transition
                  resize-none
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="
                group
                inline-flex items-center gap-3
                bg-black dark:bg-white
                text-white dark:text-black
                px-7 py-4
                rounded-full
                hover:bg-gray-800 dark:hover:bg-gray-200
                transition
                disabled:opacity-50
              "
            >
              {status === "sending" ? "Sending..." : "Send Message"}

              {status !== "sending" && (
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              )}
            </button>

            {/* Status */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 dark:text-green-400 font-medium"
              >
                Message sent successfully! 🎉
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 dark:text-red-400 font-medium"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
