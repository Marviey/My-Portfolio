import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

function Projects() {
  return (
    <section
      id="projects"
      className="
        bg-white dark:bg-gray-950
        text-gray-900 dark:text-white
        py-24 px-6
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p
          className="
          text-sm uppercase tracking-widest
          text-gray-500 dark:text-gray-400
          mb-4
        "
        >
          Projects
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Work</h2>

        {/* Auto Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={projects.length > 3}
          speed={800}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Projects
