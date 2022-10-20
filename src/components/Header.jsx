import React from 'react'

const Header = () => {
  return (
    <div className = "fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* {desktop & tablet} */}
      <div className = "hidden md:flex w-full">

      </div>

      {/* mobile */}
      <div className="block md:hidden w-full h-full"></div>
    </div>
  )
}

export default Header