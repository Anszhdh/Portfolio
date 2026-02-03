import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = ['About', 'Skills', 'Projects']
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (item) => {
    const element = document.getElementById(item.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = menuItems.map((item) => {
        const el = document.getElementById(item.toLowerCase())
        if (!el) return { item, offset: Infinity }
        const rect = el.getBoundingClientRect()
        return { item, offset: Math.abs(rect.top - 80) } // 80px for header height
      })
      const closest = offsets.reduce((a, b) => (a.offset < b.offset ? a : b))
      setActiveSection(closest.item)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 shadow-lg animate-fade-in'>
      <nav className='container mx-auto px-6 py-4 flex items-center justify-between'>
        <span className='font-serif text-2xl font-bold tracking-tight text-gray-900'>
          Anis Zahidah
        </span>
        <ul className='hidden md:flex space-x-8 items-center'>
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`text-gray-700 hover:text-primary transition-colors px-2 py-1 font-mono ${
                  activeSection === item ?
                    'text-primary font-bold underline underline-offset-4'
                  : ''
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <button className='md:hidden text-gray-700' onClick={() => setIsOpen(!isOpen)}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <ul className='md:hidden mt-2 space-y-2 bg-white border-t border-slate-100 px-6 py-4'>
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className='block text-gray-700 hover:text-primary w-full text-left py-2'
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('Contact')}
              className='w-full text-left px-4 py-2 rounded bg-primary text-white font-medium mt-2'
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
