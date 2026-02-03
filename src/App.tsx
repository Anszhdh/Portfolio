import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-slate-100'>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
