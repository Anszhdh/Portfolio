import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

const Contact = () => {
  const [ref, visible] = useScrollFadeIn()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
  }

  return (
    <section
      id='contact'
      ref={ref}
      className={`relative py-20 ${visible ? 'animate-section-fade-in-up' : 'opacity-0 translate-y-12'}`}
    >
      {/* More obvious developer SVG background: envelope, chat, and @ symbol */}
      <svg
        className='absolute left-0 bottom-0 w-[32rem] h-[32rem] pointer-events-none z-0 opacity-60'
        aria-hidden='true'
      >
        <g>
          <rect x='40' y='160' width='90' height='60' rx='12' fill='#2563eb' opacity='0.18' />
          <polygon points='40,160 85,200 130,160' fill='#facc15' opacity='0.18' />
          <ellipse cx='200' cy='240' rx='28' ry='28' fill='#facc15' opacity='0.15' />
          <text x='185' y='250' fontSize='40' fill='#2563eb' fontFamily='monospace' opacity='0.22'>
            {'@'}
          </text>
          <rect x='170' y='80' width='100' height='40' rx='16' fill='#2563eb' opacity='0.13' />
          <text x='180' y='110' fontSize='28' fill='#facc15' fontFamily='monospace' opacity='0.22'>
            {'// chat'}
          </text>
        </g>
      </svg>
      <div className='container mx-auto px-6 relative z-10'>
        <h2 className='text-4xl font-bold text-center mb-2 text-gray-900 font-mono tracking-tight'>
          Let's Connect
        </h2>
        <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-6 text-primary font-mono'>Get in Touch</h3>
            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-4'>
                <FaEnvelope className='text-xl text-primary' />
                <div>
                  <p className='text-sm text-gray-500'>Email</p>
                  <p className='text-gray-800'>anischassan@gmail.com</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <FaPhone className='text-xl text-primary' />
                <div>
                  <p className='text-sm text-gray-500'>Phone</p>
                  <p className='text-gray-800'>+1 (234) 567-890</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <FaMapMarkerAlt className='text-xl text-primary' />
                <div>
                  <p className='text-sm text-gray-500'>Location</p>
                  <p className='text-gray-800'>San Francisco, CA</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-700 mb-4 font-mono'>Follow me on:</p>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition'
                >
                  <FaGithub className='text-xl text-gray-700' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition'
                >
                  <FaLinkedin className='text-xl text-blue-700' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 transition'
                >
                  <FaEnvelope className='text-xl text-pink-700' />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className='space-y-4 border-2 border-blue-50 rounded-lg p-6 bg-white animate-fade-in-up font-mono'
              style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
            >
              <div>
                <label className='block text-sm text-gray-700 mb-2'>Name</label>
                <input
                  type='text'
                  placeholder='Your name'
                  className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary text-gray-800'
                  required
                />
              </div>
              <div>
                <label className='block text-sm text-gray-700 mb-2'>Email</label>
                <input
                  type='email'
                  placeholder='your.email@example.com'
                  className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary text-gray-800'
                  required
                />
              </div>
              <div>
                <label className='block text-sm text-gray-700 mb-2'>Message</label>
                <textarea
                  rows='5'
                  placeholder='Tell me about your project...'
                  className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary text-gray-800 resize-none'
                  required
                />
              </div>
              <button
                type='submit'
                className='px-6 py-2 rounded bg-primary text-white font-medium hover:bg-primary/90 transition w-full'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
