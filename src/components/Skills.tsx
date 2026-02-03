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
  { name: 'Vue.js', icon: <FaVuejs className='text-green-500 text-3xl' /> },
  { name: 'React.js', icon: <FaReact className='text-cyan-500 text-3xl' /> },
  { name: 'Next.js', icon: <FaReact className='text-black text-3xl' /> }, // Added Next.js
  { name: 'HTML/CSS', icon: <FaHtml5 className='text-orange-500 text-3xl' /> },
  { name: 'MySQL', icon: <FaDatabase className='text-blue-400 text-3xl' /> },
  { name: 'SQL', icon: <FaDatabase className='text-indigo-500 text-3xl' /> }
]

const additionalSkills = ['Git', 'REST APIs', 'GraphQL', 'TypeScript', 'Tailwind CSS', 'Node.js']

const timelineIcons = [
  <FaLaptopCode className='text-xl' />,
  <FaCode className='text-xl' />,
  <FaServer className='text-xl' />,
  <FaLayerGroup className='text-xl' />,
  <FaLayerGroup className='text-xl' />
]

const experiences = [
  {
    title: 'WRO International — Developer Intern',
    period: 'Mar 2023 – Aug 2023',
    description: (
      <>
        Worked on and maintained multiple web systems across various industries including eCommerce,
        health, beauty, food, and supplements. Built and enhanced features using Laravel and Vue.js,
        and managed code using Git-based version control. Assisted in developing new modules,
        improving existing functionalities, and performing debugging and issue resolution across
        frontend and system components. Contributed to UI/UX improvements to ensure better
        usability, consistency, and overall user experience.
      </>
    )
  },
  {
    title: 'GR Business Solutions Sdn Bhd — Developer',
    period: 'September 2024 – April 2025',
    description: (
      <>
        Involved in end-to-end project development including system design, feature implementation,
        and integration. Developed a web-based game using Next.js that integrates with a client
        mobile application, where user gameplay generates reward points inside the client’s app.
      </>
    )
  },
  {
    title: 'Unijaya Resource Sdn Bhd — Junior Developer',
    period: 'April 2025 – Present',
    description: (
      <>
        Worked on web application projects for government agencies such as Kementerian Kesihatan
        Malaysia, Jabatan Perdana Menteri, and FINAS, as well as corporate clients. Built responsive
        public portals, dashboards, and admin interfaces with a strong focus on usability and clean
        UI. Implemented Google Analytics 4 (GA4) and Google Tag Manager (GTM) for user behavior
        tracking and reporting. Designed web prototypes for tender submissions, showcasing proposed
        system features and UI flows.
      </>
    )
  }
]

const Skills = () => {
  const [sectionRef, visible] = useScrollFadeIn() as [React.RefObject<HTMLElement>, boolean]
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  // Helper to truncate description
  const getShortDescription = (desc: string | { props: { children: React.ReactNode } }) => {
    // Just show first sentence for preview
    if (typeof desc === 'string') {
      return desc.split('.').slice(0, 1).join('.') + '.'
    }
    // For JSX, render only first 1-2 sentences (naive approach)
    let text: string = ''
    if (desc.props.children) {
      if (Array.isArray(desc.props.children)) {
        text = desc.props.children.filter((x: React.ReactNode) => typeof x === 'string').join(' ')
      } else if (typeof desc.props.children === 'string') {
        text = desc.props.children
      }
    }
    return text ? text.split('.').slice(0, 1).join('.') + '.' : ''
  }

  return (
    <section
      id='skills'
      ref={sectionRef as React.RefObject<HTMLElement>}
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
                    {timelineIcons[idx] || timelineIcons[0]}
                  </span>
                  {/* Timeline Content */}
                  <div className='ml-10'>
                    <h3 className='text-lg font-bold text-gray-900 mb-1 font-mono'>
                      {exp.title}
                      {exp.period && (
                        <span className='block text-xs text-gray-500 font-normal font-sans'>
                          {exp.period}
                        </span>
                      )}
                    </h3>
                    <div className='text-gray-700 text-sm leading-relaxed'>
                      {expandedIdx === idx ?
                        <>
                          {exp.description}
                          <span
                            className='ml-2 cursor-pointer select-none inline-flex items-center gap-1 text-xs font-mono text-blue-500 bg-white/80 rounded shadow-sm px-2 py-1 transition hover:bg-blue-50 hover:text-blue-600'
                            onClick={() => setExpandedIdx(null)}
                            title='Collapse details'
                          >
                            <svg
                              className='w-3 h-3 transition-transform duration-200 rotate-90 text-blue-400'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth={2}
                              viewBox='0 0 24 24'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                            </svg>
                            <span className='opacity-90'>// collapse details</span>
                          </span>
                        </>
                      : <>
                          {getShortDescription(exp.description)}
                          <span
                            className='ml-2 cursor-pointer select-none inline-flex items-center gap-1 text-xs font-mono text-blue-400 bg-white/70 rounded shadow-sm px-2 py-1 transition hover:bg-blue-50 hover:text-blue-600'
                            onClick={() => setExpandedIdx(idx)}
                            title='Expand details'
                          >
                            <svg
                              className='w-3 h-3 transition-transform duration-200 text-blue-400'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth={2}
                              viewBox='0 0 24 24'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                            </svg>
                            <span className='opacity-90'>// expand details</span>
                          </span>
                        </>
                      }
                    </div>
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
