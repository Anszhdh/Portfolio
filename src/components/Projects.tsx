import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

const Projects = () => {
  const [ref, visible] = useScrollFadeIn() as [React.RefObject<HTMLElement>, boolean]
  // Placeholder cards for deployment
  const projects = [1, 2, 3]

  return (
    <section
      id='projects'
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 ${visible ? 'animate-section-fade-in-up' : 'opacity-0 translate-y-12'}`}
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-2 text-gray-900 font-mono tracking-tight'>
          Featured Projects
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12'>
          {projects.map((_, index) => (
            <div
              key={index}
              className='relative border border-slate-200 rounded-xl p-6 bg-white shadow-md flex items-center justify-center min-h-[180px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden animate-fade-in-up'
              style={{ animationDelay: `${index * 120 + 200}ms`, animationFillMode: 'forwards' }}
            >
              <FaGithub size={48} className='text-blue-600' />
            </div>
          ))}
        </div>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full mx-auto my-12 opacity-70'></div>
      </div>
    </section>
  )
}

export default Projects
