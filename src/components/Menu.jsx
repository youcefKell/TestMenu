import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const products = {
  jus: [
    { id: 1, name: 'Milkshake chocolat', price: '700 DA', img: './images/img1.jpg' },
    { id: 2, name: 'Milkshake fraise', price: '700DA', img: './images/img2.jpg' },
  ],
  milkshake: [
    { id: 3, name: 'Piña colada ', price: '800 DA', img: './images/img3.jpg' },
    { id: 4, name: 'Paradise reef', price: '800 DA', img: './images/img4.jpg' },
    { id: 5, name: 'Mojito classique', price: '700 DA', img: './images/img5.jpg' },
  ],
}

const Menu = () => {
  const [category, setCategory] = useState('jus')
  const [prevCategory, setPrevCategory] = useState('jus')
  const [animating, setAnimating] = useState(false)
  const containerRef = useRef(null)

  const handleSwitch = (newCategory) => {
    if (newCategory === category || animating) return
    setAnimating(true)

    const currentItems = containerRef.current.querySelectorAll('.product-item')

    // Animation de sortie des anciens produits
    gsap.to(currentItems, {
      opacity: 0,
      y: -50,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.4,
      ease: 'power1.in',
      onComplete: () => {
        setPrevCategory(category)
        setCategory(newCategory)
        setAnimating(false)
      },
    })
  }

  // Animation entrée des nouveaux produits
  useEffect(() => {
    if (!containerRef.current) return
    const items = containerRef.current.querySelectorAll('.product-item')
    gsap.fromTo(
      items,
      { opacity: 0, x: category === 'jus' ? 100 : -100, scale: 0.7 },
      { opacity: 1, x: 0, scale: 1, stagger: 0.2, duration: 0.6, ease: 'power3.out' }
    )
  }, [category])

  return (
    <div className="w-full py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 mm">
        Nos produits <FontAwesomeIcon icon={faArrowDown} />
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            category === 'jus' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleSwitch('jus')}
        > Les milkshakes
          
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            category === 'milkshake' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleSwitch('milkshake')}
        >
         Les jus
        </button>
      </div>

      {/* Products grid */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {products[category].map((item) => (
          <div
            key={item.id}
            className="product-item flex flex-col items-center bg-white rounded-2xl shadow-md p-4 transition-transform hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 sm:h-48 md:h-48 object-contain rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <h4 className="text-gray-600">{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
