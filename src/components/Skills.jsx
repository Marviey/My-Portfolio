import skills from "../data/skills"
import SkillCard from "./SkillCard"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

function Skills() {
  return (
    <section
      id="skills"
      className="
        bg-gray-50 dark:bg-black
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
          Skills
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          What I Work With
        </h2>

        {/* Skills Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
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
          className="pb-4"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className="h-auto">
              <SkillCard title={skill.title} tech={skill.tech} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Skills
