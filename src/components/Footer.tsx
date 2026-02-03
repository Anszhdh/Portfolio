import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-slate-200 py-8'>
      <div className='container mx-auto px-6 text-center'>
        <p className='text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} Anis Zahidah. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
