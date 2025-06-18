import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Nav = () => {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <>
            <nav className="bg-white">
                <div className="w-[97%] mx-auto flex flex-wrap items-center justify-between py-3 px-2 ">
                    {/* Logo */}
                    <a href="#" className="font-bold text-xl">MotionCare</a>

                    {/* Mobile Toggle Button */}
                    <button className="block md:hidden" onClick={()=>setIsOpen(!isOpen)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="block w-6 h-0.5 bg-black mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black mb-1"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </button>

                    {/* Navigation Links */}
                    <div className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:flex gap-3 text-lg mt-3 md:mt-0`} id='navbarNav'>
                        <ul className="flex gap-3">
                            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                            <li><Link to="/service" className="text-gray-700 hover:text-blue-600">Service List</Link></li>
                            <li><Link to="#" className="text-gray-700 hover:text-blue-600">About</Link></li>
                            <li><Link to="tel:+917546921395" className="text-gray-700 hover:text-blue-600">📞+91 7546921395</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}