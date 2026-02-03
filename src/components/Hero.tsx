import React, { useEffect, useState, useRef } from 'react'

const subtitleText = 'Full Stack Developer'

const Hero = () => {
  // Typewriter effect for subtitle
  const [subtitle, setSubtitle] = useState('')
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setSubtitle(subtitleText.slice(0, i + 1))
      i++
      if (i === subtitleText.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  // Parallax effect for SVG grid
  const gridRef = useRef<SVGSVGElement>(null)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      gridRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id='about'
      className='relative min-h-screen flex items-center justify-center pt-24 overflow-hidden'
    >
      {/* Parallax SVG grid background */}
      <svg
        ref={gridRef}
        className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 transition-transform duration-300'
        aria-hidden='true'
      >
        <defs>
          <pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'>
            <path d='M 40 0 L 0 0 0 40' fill='none' stroke='#e5e7eb' strokeWidth='1' />
          </pattern>
          <radialGradient id='hero-glow' cx='60%' cy='40%' r='80%'>
            <stop offset='0%' stopColor='#c7d2fe' stopOpacity='0.10' />
            <stop offset='60%' stopColor='#bae6fd' stopOpacity='0.08' />
            <stop offset='100%' stopColor='#fff' stopOpacity='0' />
          </radialGradient>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)' />
        <rect width='100%' height='100%' fill='url(#hero-glow)' />
      </svg>
      <div className='container mx-auto px-6 relative z-10 animate-hero-fade-in-up'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-12'>
          {/* Left: Hero Content */}
          <div className='flex flex-col items-center md:items-start text-left w-full md:w-1/2'>
            <div className='mx-auto md:mx-0 mb-6 w-44 h-44 rounded-full p-[3px] bg-gradient-to-tr from-blue-400 via-primary to-yellow-200 animate-border-spin'>
              <img
                src='/images/anis.jpeg'
                alt='Anis Zahidah'
                className='w-full h-full rounded-full object-cover border-4 border-white shadow-lg shadow-blue-100/40'
              />
            </div>
            <h2 className='text-5xl md:text-7xl font-mono font-extrabold mb-4 text-gray-900 tracking-tight uppercase animate-hero-fade-in-up delay-200 hero-glow text-left'>
              ANIS ZAHIDAH
            </h2>
            <p className='text-lg md:text-2xl text-gray-700 mb-6 font-mono min-h-[2.5rem] animate-hero-fade-in-up delay-300 text-left'>
              {subtitle}
              <span className='inline-block w-2 h-6 bg-gray-400 align-bottom animate-blink ml-1' />
            </p>
            <p className='text-gray-600 max-w-xl mb-8 font-mono animate-hero-fade-in-up delay-400 text-left'>
              Building modern web applications and solving real-world problems.
            </p>
            <div className='flex gap-4 animate-hero-fade-in-up delay-500'>
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className='px-7 py-3 rounded-lg bg-white border border-blue-600 text-blue-700 font-semibold font-mono shadow-sm tracking-wide cursor-pointer transition hover:bg-blue-50 hover:border-blue-700 hover:shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-200'
                aria-label='View Projects'
              >
                <svg
                  className='w-5 h-5 text-blue-600'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
                View Projects
              </button>
              <a
                href='/images/cv.pdf'
                download
                className='px-7 py-3 rounded-lg bg-blue-600 text-white font-semibold font-mono shadow-sm tracking-wide cursor-pointer transition hover:bg-blue-700 hover:shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-200'
                aria-label='Download CV'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4v12m0 0l-4-4m4 4l4-4m-4 4V4'
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
          {/* Right: About Content */}
          <div className='w-full md:w-1/2 mt-12 md:mt-0'>
            <h2 className='text-4xl font-bold mb-2 text-gray-900 font-mono tracking-tight text-left'>
              About Me
            </h2>
            <div className='grid md:grid-cols-1 gap-12 max-w-2xl mt-12'>
              <div
                className='relative overflow-hidden rounded-2xl shadow-2xl border border-blue-300 px-10 py-8 animate-fade-in-up bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]'
                style={{
                  minWidth: 'min(100%, 700px)',
                  fontSize: '1.15rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.01em',
                  boxShadow: '0 12px 40px 0 #0ea5e977',
                  borderLeftWidth: 0,
                  color: '#e0e7ef',
                  fontWeight: 600,
                  borderTop: '2px solid #38bdf8',
                  borderRight: '2px solid #818cf8',
                  borderBottom: '2px solid #38bdf8',
                  borderLeft: '2px solid #818cf8'
                }}
              >
                {/* Futuristic grid overlay */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-0 z-0'
                  style={{
                    background:
                      'repeating-linear-gradient(135deg,rgba(59,130,246,0.08),rgba(59,130,246,0.08) 1px,transparent 1px,transparent 32px),repeating-linear-gradient(45deg,rgba(139,92,246,0.06),rgba(139,92,246,0.06) 1px,transparent 1px,transparent 32px)'
                  }}
                />
                <ul className='flex flex-col gap-6 w-full relative z-10'>
                  <li className='flex items-center gap-3'>
                    <span className='inline-block w-3 h-3 rounded-full bg-cyan-400 shadow-cyan-300 shadow-[0_0_8px_2px] animate-pulse'></span>
                    <span className='bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)]'>
                      End-to-end web development
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <span className='inline-block w-3 h-3 rounded-full bg-fuchsia-400 shadow-fuchsia-400 shadow-[0_0_8px_2px] animate-pulse'></span>
                    <span className='bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(232,121,249,0.3)]'>
                      Strong in debugging & problem-solving
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <span className='inline-block w-3 h-3 rounded-full bg-lime-400 shadow-lime-300 shadow-[0_0_8px_2px] animate-pulse'></span>
                    <span className='bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(163,230,53,0.3)]'>
                      Clean, maintainable coding
                    </span>
                  </li>
                </ul>
                {/* Futuristic border glow */}
                <div className='pointer-events-none absolute inset-0 rounded-2xl z-10 ring-2 ring-cyan-400/30 ring-inset blur-[2px]' />
              </div>
              <div className='space-y-8 mt-8'>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-6 text-xl'>Education</h4>
                  <div className='flex flex-col gap-6'>
                    {/* Education Item 1 */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <img
                          src='/images/UNIMAS-logo.png'
                          alt='Unimas Logo'
                          className='w-10 h-10 rounded-full bg-white object-contain p-1 shadow-md'
                          style={{ objectFit: 'contain', background: '#fff' }}
                        />
                        <div>
                          <div className='font-bold text-gray-900 text-lg'>
                            Universiti Malaysia Sarawak
                          </div>
                          <div className='text-gray-700 text-sm'>
                            Bachelor of Computer Science Software Engineering (Hons.)
                          </div>
                        </div>
                      </div>
                      <div className='text-gray-500 text-right text-base min-w-[110px]'>
                        2020-2024
                      </div>
                    </div>
                    {/* Education Item 2 */}
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <img
                          src='/images/kmpk.png'
                          alt='KMPK Logo'
                          className='w-10 h-10 rounded-full bg-white object-contain p-1 shadow-md'
                          style={{ objectFit: 'contain', background: '#fff' }}
                        />
                        <div>
                          <div className='font-bold text-gray-900 text-lg'>
                            Perak Matriculation College
                          </div>
                        </div>
                      </div>
                      <div className='text-gray-500 text-right text-base min-w-[110px]'>
                        2019-2020
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 mb-4 text-xl'>
                    Experience Highlights
                  </h4>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 w-2 h-2 rounded-full bg-black shadow'></span>
                      <span className='text-gray-800 font-medium'>
                        1+ year experience in web application development
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 w-2 h-2 rounded-full bg-black shadow'></span>
                      <span className='text-gray-800 font-medium'>
                        Built and maintained{' '}
                        <span className='font-semibold text-blue-700'>government</span>,{' '}
                        <span className='font-semibold text-sky-700'>ecommerce</span> &{' '}
                        <span className='font-semibold text-indigo-700'>corporate</span> web systems
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 w-2 h-2 rounded-full bg-black shadow'></span>
                      <span className='text-gray-800 font-medium'>
                        Strong in <span className='font-semibold text-indigo-700'>Laravel</span>,{' '}
                        <span className='font-semibold text-green-700'>Vue.js</span>, and{' '}
                        <span className='font-semibold text-blue-700'>React</span> development
                      </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <span className='mt-1 w-2 h-2 rounded-full bg-black shadow'></span>
                      <span className='text-gray-800 font-medium'>
                        Developed dashboards & data-driven interfaces
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full my-12 opacity-70'></div>
          </div>
        </div>
      </div>
      {/* Custom animations and effects */}
      <style>{`
        @keyframes hero-fade-in-up {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-hero-fade-in-up {
          animation: hero-fade-in-up 1s cubic-bezier(.39,.575,.565,1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        @keyframes hero-scale-in {
          from { opacity: 0; transform: scale(0.8);}
          to { opacity: 1; transform: scale(1);}
        }
        .animate-hero-scale-in {
          animation: hero-scale-in 1s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes border-spin {
          0% { background-position: 0% 50%;}
          100% { background-position: 100% 50%;}
        }
        .animate-border-spin {
          background-size: 200% 200%;
          animation: border-spin 4s linear infinite;
        }
        .hero-glow {
          text-shadow: 0 2px 16px #60a5fa33, 0 1px 0 #fff;
        }
      `}</style>
    </section>
  )
}

export default Hero
