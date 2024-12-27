import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Main() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const tl = gsap.timeline({ 
      scrollTrigger:{
        trigger: '.section',
        start: 'top top',
        end: 'bottom center',
        
        // pin: true,
        scrub: 1,
      } 
    })

    gsap.utils.toArray(".img").forEach((target) => {
      tl.to(target, {
        x: random(-3000, 3000),
        y: random(-2000, 2000),
        stagger: 0.1,
        rotation: random(-700, 700),
      }, 0);
    });

    gsap.utils.toArray(".img").forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.5, duration: 0.5 });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.5 });
      });
    });
  }, []);

  return (
    <>
      <section className='section flex justify-center content-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden'> 
        <div className='flex flex-col justify-center content-center absolute'>
          <p className='flex text-7xl font-bold pb-10 pt-80 content-center text-center'>
            Event Orchestrator
          </p>
        </div>
        <div className='container grid grid-cols-3 place-items-center gap-32 w-100% '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7qur8NkX1xw_6CQ3bSAK5Q1k5SKWvJoAoA&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-100" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-_3B8DqJrmjgffiIE_dZvMMJ-GtKRriLSw&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-100" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs5zAgO3iUyNxUAVLXyE2ZUikDICKurm-Lg&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-100" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJG2aXyX3KK2dA_Sqrq9unw-au9w4oPjEIw&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-100" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPVit7tNaxjgv9CRG8moRhJvzBIX9XVxmLg&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-100" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiEXx1C9x4XiqiF96upi24LrUE7NFP2gHPg&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-100" />
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZv65DV-ozP1hLRN_ed5M6NUmnR44x45JvhA&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-500" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubcWL0EnxRU-k6dy73U0ZNk0EFiqEY3tq7Q&s" alt="" className="img h-52 w-52 object-cover transition-transform duration-500" /> */}
        </div>
      </section>
      <section className='section2 w-100vh h-screen'>
      </section>
    </>
  )
}

export default Main;