import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

const Projects = () => {
  const [ref, visible] = useScrollFadeIn() as [React.RefObject<HTMLElement>, boolean]
  // Placeholder cards for deployment
  const projects = [1, 2, 3]

  // Featured Projects section is commented out for now
  // ...existing code...

  // Dashboard UI Attachment section is commented out for now
  // return (
  //   <section id='dashboard-ui' className='py-20 bg-slate-50'>
  //     <div className='container mx-auto px-6'>
  //       <h2 className='text-3xl font-bold text-center mb-2 text-gray-900 font-mono tracking-tight'>
  //         Dashboard UI Attachment
  //       </h2>
  //       <div className='flex flex-col items-center justify-center mt-12'>
  //         {/* Responsive image gallery for dashboard UI */}
  //         <div className='w-full max-w-4xl border-2 border-dashed border-blue-300 rounded-xl bg-white p-6'>
  //           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
  //             {/* Replace these src values with your actual dashboard images */}
  //             <img
  //               src='/images/anis.jpeg'
  //               alt='Dashboard 1'
  //               className='rounded-lg shadow object-cover w-full h-56'
  //             />
  //             <img
  //               src='/images/UNIMAS-logo.png'
  //               alt='Dashboard 2'
  //               className='rounded-lg shadow object-cover w-full h-56'
  //             />
  //             <img
  //               src='/images/kmpk.png'
  //               alt='Dashboard 3'
  //               className='rounded-lg shadow object-cover w-full h-56'
  //             />
  //             {/* Add more <img> tags as needed */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
  return null
}

export default Projects
