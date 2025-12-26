import React from 'react'

const Thanks = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1
        className="text-3xl font-bold mb-6"
        style={{ color: 'rgb(94 139 138)' }}
      >
        Merci pour votre visite !
      </h1>

      <button
        onClick={scrollToTop}
        className="px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: 'rgb(94 139 138)',
          color: 'white'
        }}
      >
        ↑ Up
      </button>
    </div>
  )
}

export default Thanks
