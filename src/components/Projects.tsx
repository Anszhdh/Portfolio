import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

const Projects = () => {
  const [ref, visible] = useScrollFadeIn()
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      image: '/project1.jpg',
      tags: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Real-time data visualization dashboard for business metrics with interactive charts and reporting features.',
      image: '/project2.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative project management tool with team features, real-time updates, and deadline tracking.',
      image: '/project3.jpg',
      tags: ['Vue.js', 'Laravel', 'PostgreSQL', 'WebSockets'],
      demo: '#',
      github: '#'
    }
  ]

  return (
    <section
      id='projects'
      ref={ref}
      className={`py-20 ${visible ? 'animate-section-fade-in-up' : 'opacity-0 translate-y-12'}`}
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-2 text-gray-900 font-mono tracking-tight'>
          Featured Projects
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='relative border border-slate-200 rounded-xl p-6 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden animate-fade-in-up'
              style={{ animationDelay: `${index * 120 + 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className='mb-4 relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-40 object-cover rounded-md mb-2 group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'></div>
              </div>
              <h3 className='text-xl font-semibold mb-2 text-gray-900 font-mono'>
                {project.title}
              </h3>
              <p className='text-gray-600 text-sm mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-gray-600'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex gap-4'>
                <a
                  href={project.demo}
                  className='flex items-center gap-2 text-primary text-sm font-medium hover:underline group-hover:scale-110 transition-transform'
                >
                  <FaExternalLinkAlt className='text-xs animate-bounce-x' />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className='w-8 h-8 border border-slate-200 rounded flex items-center justify-center hover:bg-slate-100 transition group-hover:scale-110'
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full mx-auto my-12 opacity-70'></div>
      </div>
    </section>
  )
}

export default Projects
