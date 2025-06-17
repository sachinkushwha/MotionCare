import { useState } from 'react';
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
                            <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">Service List</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}