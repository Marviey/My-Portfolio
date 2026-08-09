import movieImage from "../assets/project-movie.png"
import portfolioImage from "../assets/project-portfolio.png"
import schoolImage from "../assets/project-school.png"

const projects = [
  {
    id: 1,
    title: "Movie App",
    description:
      "A responsive movie application built with React that allows users to search and explore movies.",
    image: movieImage,
    tech: ["React", "Tailwind CSS", "API"],
    github: "https://github.com/yourusername/movie-app",
    live: "https://your-movie-app.vercel.app",
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React and Tailwind CSS.",
    image: portfolioImage,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
  },

  {
    id: 3,
    title: "School Management Website",
    description:
      "A responsive school management interface designed for students, teachers and administrators.",
    image: schoolImage,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/yourusername/school-management",
    live: "https://your-school-app.vercel.app",
  },
]

export default projects
