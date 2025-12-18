import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Title = () => {
  const titleRef = useRef(null)
  const pRef = useRef(null)
  const smallPRef = useRef(null)

  useEffect(() => {
    // animation letters
    gsap.fromTo(
      titleRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 2,
        ease: 'power3.out',
      }
    )

    // paragraph animation
    gsap.fromTo(
      pRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
      }
    )

    // small paragraph animation
    gsap.fromTo(
      smallPRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 2.2,
        ease: 'power3.out',
      }
    )
  }, [])

  const text = 'SPECIFIQUE'

  return (<>
    <div className="w-full flex flex-col items-center justify-center text-center py-12 px-4 Title">

      {/* Title */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold flex "
        ref={titleRef}
      >
          <img src="./assets/Logo.png" alt="Logo" />
      </h1>

      {/* Main paragraph */}
      <p
        ref={pRef}
        className="
          mt-5
          text-lg
          sm:text-xl
          md:text-2xl
          font-light
          tracking-wide
          text-black
          opacity-0
          BP
        "
      >
        Boulangerie & Pâtisserie
      </p>

      {/* Small paragraph */}

    </div>
     <div className="w-full flex justify-center">
  <p
    ref={smallPRef}
    className="
      mt-3
      text-sm
      sm:text-base
      md:text-lg
      text-gray-700
      max-w-xl
      opacity-0
      text-center
    "
  >
    Bienvenue chez nous ! <br />
    Découvrez nos délicieux cakes, milkshakes et pâtisseries fraîches. <br />
    Venez nous rendre visite pour goûter nos créations savoureuses et uniques.
  </p>
</div>


   

  </>
  
)
}

export default Title
