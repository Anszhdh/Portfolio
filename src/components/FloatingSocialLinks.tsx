import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const FloatingSocialLinks = () => {
  return (
    <div className='fixed top-1/2 left-0 -translate-y-1/2 z-50 flex flex-col items-center group'>
      <div className='flex flex-col gap-4 bg-white/95 rounded-full shadow-2xl p-3 border border-slate-200 items-center'>
        <a
          href='https://github.com/anszhdh'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 hover:text-blue-600 transition p-2 rounded-full hover:bg-blue-50'
          title='GitHub'
        >
          <FaGithub size={28} />
        </a>
        <a
          href='https://linkedin.com/in/anis-zahidah-66172423a/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 hover:text-blue-600 transition p-2 rounded-full hover:bg-blue-50'
          title='LinkedIn'
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href='mailto:anischassan@gmail.com'
          className='text-gray-700 hover:text-blue-600 transition p-2 rounded-full hover:bg-blue-50'
          title='Email'
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </div>
  )
}

export default FloatingSocialLinks
