import React, { useEffect, useRef } from 'react'

const MilkShakes = () => {
  const titleRef = useRef(null)
  const imagesRef = useRef(null)
  const itemsRef = useRef([])

  const mocktails = [
    { name: 'Milkshake vanille',  price: '900 DA' },
    { name: 'Milkshake farise',  price: '850 DA' },
    { name: 'Milkshake pistache', price: '900 DA' },
    { name: 'Milkshake chocolat',  price: '900 DA' },
    { name: 'Milkshake speculos',  price: '900DA' },
     { name: 'Milkshake nutella-banane',  price: '....900 DA' },
  ]

  useEffect(() => {
    const loadGsap = async () => {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
      script.async = true
      
      script.onload = () => {
        const gsap = window.gsap
        const tl = gsap.timeline()

        // Animation des lignes décoratives
        tl.from('.decorative-line', {
          duration: 0.8,
          scaleX: 0,
          opacity: 0,
          stagger: 0.15,
          ease: 'power2.out'
        })

        // Animation du titre
        tl.from(titleRef.current, {
          duration: 1,
          scale: 0.5,
          rotation: -5,
          opacity: 0,
          ease: 'back.out(1.7)'
        }, '-=0.4')

        // Animation des images
        tl.from(imagesRef.current.children, {
          duration: 0.8,
          scale: 0,
          rotation: 180,
          opacity: 0,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }, '-=0.3')

        // Animation des items
        tl.from(itemsRef.current, {
          duration: 0.6,
          x: -50,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4')

        // Flottement des images
        gsap.to(imagesRef.current.children, {
          y: -10,
          duration: 2,
          stagger: 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }
      
      document.body.appendChild(script)
    }

    loadGsap()
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      
      {/* Title Section */}
      <div className="text-center mb-8">
        {/* Decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="decorative-line flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgb(94 139 138))' }}></span>
          <span className="text-[2xl]" style={{ color: 'rgb(94 139 138)' }}>✦</span>
          <span className="decorative-line flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgb(94 139 138))' }}></span>
        </div>

        {/* Title */}
        <h2 
          ref={titleRef}
          className="uppercase font-bold tracking-widest text-3xl mb-6"
          style={{ color: 'rgb(94 139 138)' }}
        >
          Milkshakes
        </h2>

        {/* Images */}
        <div ref={imagesRef} className="flex justify-center gap-4 mb-4">
          <img 
            src="./public/assets/img1.jpg" 
            alt="Mocktail decoration" 
            className="w-24 h-24 rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />
          <img 
            src="./public/assets/img2.jpg" 
            alt="Mocktail decoration" 
            className="w-24 h-24 rounded-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-6">
        {mocktails.map((item, index) => (
          <div 
            key={index}
            ref={el => itemsRef.current[index] = el}
            className="hover:bg-white hover:scale-105 transition-all duration-300 p-4 rounded-lg cursor-pointer"
          >
            <div className="flex items-baseline">
              <h3 className="font-bold text-gray-800 whitespace-nowrap text-lg">{item.name}</h3>
              <span className="flex-1 border-b-2 border-dotted" style={{ borderColor: 'rgb(94 139 138)' }}></span>
              <span className="font-bold whitespace-nowrap text-lg" style={{ color: 'rgb(94 139 138)' }}>{item.price}</span>
            </div>
            <p className="text-sm italic text-gray-600 mt-2 ml-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-3">
          <span className="w-12 h-px" style={{ backgroundColor: 'rgb(94 139 138)' }}></span>
          <span className="text-[3xl]" style={{ color: 'rgb(94 139 138)' }}>🍹</span>
          <span className="w-12 h-px" style={{ backgroundColor: 'rgb(94 139 138)' }}></span>
        </div>
      </div>
    </div>
  )
}

export default  MilkShakes 

