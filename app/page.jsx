import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import TeamDes from '@/components/TeamDes'
import React from 'react'

const page = () => {
  return (
    <div className='h-[100%] w-[100%]'>
      <div>
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <TeamDes />
      </div>
      <div>
        <Services />
      </div>
      <div className='mt-16'>
        <div className='flex items-center justify-center'>
          <Projects projectImage="/project1.png" />
        </div>
      </div>
      <div className='mt-12 flex flex-col items-center justify-center w-[100%] '>
        <div className='mb-4 mt-3'>
      <h1
        className="text-center font-Montserrat md:text-2xl text-1xl font-bold uppercase tracking-wide leading-10 z-20 "
        style={{
          background: "linear-gradient(90deg, #FFD700, #FFB300)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Transforming Ideas into Reality - Let's Collaborate
      </h1>
      </div>
        <CTA />
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  )
}

export default page