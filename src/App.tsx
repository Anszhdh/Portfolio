import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FloatingSocialLinks from './components/FloatingSocialLinks'

function App() {
  return (
    <div className='min-h-screen bg-slate-100'>
      <FloatingSocialLinks />
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
