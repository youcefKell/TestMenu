import React, { useEffect, useRef } from 'react'

const Show = () => {
  const imagesRef = useRef([])

  useEffect(() => {
    const loadGsap = async () => {
      const gsap = (await import('https://cdn.skypack.dev/gsap@3.12.2')).default
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 2.2,
          ease: 'power3.out'
        }
      )
    }
    loadGsap()
  }, [])

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el)
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Images */}
      <div
        className="imagesFather"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '1rem',
          padding: '2rem 1rem',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {[1, 2, 3, 4].map((num, index) => {
          const totalImages = 4
          const centerIndex = (totalImages - 1) / 2
          const distanceFromCenter = Math.abs(index - centerIndex)
          const maxOffset = 60
          const yOffset = (distanceFromCenter / centerIndex) * maxOffset

          return (
            <div
              key={num}
              ref={addToRefs}
              className="image-wrapper"
              style={{ transform: `translateY(${yOffset}px)`, flex: 1, maxWidth: '280px', minWidth: 0 }}
            >
              <img
                src={`/images/img${num}.jpg`}
                alt={`Gallery image ${num}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          )
        })}
      </div>

       <div className="separator h-9 bg-white">

       </div>
      {/* Wave SVG */}
      <svg
        className="editorial "
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '60px',
          maxHeight: '60px',
          margin: 0,
          zIndex: 5,
          bottom: 0,
          position: 'absolute',
          left: 0,
        }}
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
               58-18 88-18s
               58 18 88 18 
               58-18 88-18 
               58 18 88 18
               v44h-352z"
          />
        </defs>
        <g className="parallax1">
          <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f461c1" />
        </g>
        <g className="parallax2">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill="#4579e2" />
        </g>
        <g className="parallax3">
          <use xlinkHref="#gentle-wave" x="50" y="9" fill="#3461c1" />
        </g>
        <g className="parallax4">
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" />
        </g>
      </svg>
    </div>
  )
}

export default Show
