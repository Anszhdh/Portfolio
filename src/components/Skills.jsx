import React, { useEffect, useRef, useState } from 'react'
import useScrollFadeIn from '../hooks/useScrollFadeIn'
import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaVuejs,
  FaReact,
  FaHtml5,
  FaDatabase,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaLayerGroup
} from 'react-icons/fa'

const skills = [
  { name: 'PHP', icon: <FaPhp className='text-blue-700 text-3xl' /> },
  { name: 'Laravel', icon: <FaLaravel className='text-red-500 text-3xl' /> },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-400 text-3xl' /> },
  { name: 'Vue.js', icon: <FaVuejs className='text-green-500 text-3xl' /> },
  { name: 'React.js', icon: <FaReact className='text-cyan-500 text-3xl' /> },
  { name: 'HTML/CSS', icon: <FaHtml5 className='text-orange-500 text-3xl' /> },
  { name: 'MySQL', icon: <FaDatabase className='text-blue-400 text-3xl' /> }
]

const additionalSkills = [
  'Git',
  'Docker',
  'REST APIs',
  'GraphQL',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL'
]

const timelineIcons = [
  <FaLaptopCode className='text-xl' />,
  <FaCode className='text-xl' />,
  <FaServer className='text-xl' />,
  <FaLayerGroup className='text-xl' />,
  <FaLayerGroup className='text-xl' />
]

const experiences = [
  {
    title: 'Completed a Frontend Development Course',
    description: (
      <>
        Started the journey into web development by enrolling in a frontend course focused on HTML,
        CSS, and JavaScript fundamentals.
        <br />
        Successfully completed the course and received a{' '}
        <span className='text-blue-400 underline'>certification</span> upon graduation.
      </>
    )
  },
  {
    title: 'Frontend Developer – [Company Name]',
    description: (
      <>
        Worked as a frontend developer building dynamic web interfaces using React and CSS
        frameworks. Collaborated closely with designers to turn mockups into pixel-perfect user
        experiences.
      </>
    )
  },
  {
    title: 'Backend Development Bootcamp',
    description: (
      <>
        After gaining experience in frontend, enrolled in a backend-focused program covering
        Node.js, Express, MongoDB, and API design. Built several full-featured server-side
        applications and worked with databases, authentication, and RESTful services.{' '}
        <span className='text-blue-400'>certification</span>
      </>
    )
  },
  {
    title: 'Became a Full-Stack Developer',
    description: (
      <>
        After months of learning and hands-on experience, made the leap from frontend to full-stack
        development. This transition allowed for deeper technical involvement and broader
        problem-solving.
      </>
    )
  },
  {
    title: 'Full-Stack Developer – [Company Name]',
    description: (
      <>
        After transitioning into full-stack development, took on end-to-end ownership of
        projects—from designing the frontend to implementing backend logic and deploying
        applications. Worked in an agile team, contributing to scalable and maintainable codebases.
      </>
    )
  }
]

const Skills = () => {
  const [sectionRef, visible] = useScrollFadeIn()

  return (
    <section
      id='skills'
      ref={sectionRef}
      className={`relative py-20 ${visible ? 'animate-section-fade-in-up' : 'opacity-0 translate-y-12'}`}
    >
      {/* SVG background stays the same */}
      <svg
        className='absolute right-0 top-0 w-[32rem] h-[32rem] pointer-events-none z-0 opacity-60'
        aria-hidden='true'
      >
        <g>
          <text x='40' y='100' fontSize='90' fill='#2563eb' fontFamily='monospace' opacity='0.25'>
            {'{'}
          </text>
          <text x='120' y='220' fontSize='90' fill='#facc15' fontFamily='monospace' opacity='0.22'>
            {'</>'}
          </text>
          <text x='220' y='80' fontSize='90' fill='#2563eb' fontFamily='monospace' opacity='0.18'>
            {'();'}
          </text>
          <text x='180' y='300' fontSize='90' fill='#facc15' fontFamily='monospace' opacity='0.18'>
            {'}'}
          </text>
        </g>
      </svg>
      <div className='container mx-auto px-6 relative z-10'>
        <h2 className='text-4xl font-bold text-center mb-2 text-gray-900 font-mono tracking-tight'>
          Experiences
          <span className='block h-1 w-16 bg-blue-100 mx-auto mt-2 rounded-full' />
        </h2>
        <div className='flex flex-col md:flex-row gap-12 mt-12 max-w-5xl mx-auto'>
          {/* Left: Technical Skills */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-2xl font-semibold mb-6 text-primary font-mono text-left'>
              Technical Skills
            </h3>
            <div className='grid grid-cols-2 gap-6'>
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className='flex items-center gap-3 bg-white/70 rounded-lg shadow p-3'
                >
                  {skill.icon}
                  <span className='font-mono text-gray-800 font-semibold'>{skill.name}</span>
                </div>
              ))}
            </div>
            <div className='mt-8'>
              <h4 className='font-semibold text-gray-900 mb-2 text-left'>Also experienced with:</h4>
              <div className='flex flex-wrap gap-2'>
                {additionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-white/70 border border-slate-200 rounded-full text-gray-700 text-xs font-mono'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Experience Timeline */}
          <div className='w-full md:w-2/3'>
            <div className='relative border-l-2 border-gray-700/30 ml-6'>
              {experiences.map((exp, idx) => (
                <div key={idx} className='mb-12 flex items-start group'>
                  {/* Timeline Icon */}
                  <span
                    className={`absolute -left-7 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg border-4 border-gray-900/80 z-10
                    ${idx === 0 ? 'ring-2 ring-blue-400' : ''}
                  `}
                  >
                    {timelineIcons[idx]}
                  </span>
                  {/* Timeline Content */}
                  <div className='ml-10'>
                    <h3 className='text-lg font-bold text-white mb-1 font-mono'>{exp.title}</h3>
                    <div className='text-gray-300 text-sm leading-relaxed'>{exp.description}</div>
                  </div>
                </div>
              ))}
              {/* Vertical line extension */}
              <span className='absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400/60 via-gray-700/30 to-transparent z-0' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
