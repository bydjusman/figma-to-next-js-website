import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="py-16 px-4 bg-red-100">
      <ul className="text-black font-semibold flex justify-end space-x-10 px-10">
        <li className="text-[18px] cursor-pointer">Work</li>
        <li className="text-[18px] cursor-pointer">Blog</li>
        <li className="text-[18px] cursor-pointer">Contact</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
