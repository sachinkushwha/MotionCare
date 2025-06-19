import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="w-[97%] mx-auto flex flex-wrap items-center justify-between py-4">

                {/* Logo */}
                <Link to="/" className="font-bold text-1xl text-gray-800">MotionCare</Link>

                {/* Mobile Hamburger */}
                {
                    !isOpen && (
                        <a href="tel:+917546921395" className="text-gray-700 hover:text-blue-600 ">📞+91 7546921395</a>
                    )
                }

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-4 text-lg">
                    <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                    <li><Link to="/service" className="text-gray-700 hover:text-blue-600">Service List</Link></li>
                    <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
                    <li><a href="tel:+917546921395" className="text-gray-700 hover:text-blue-600">📞+91 7546921395</a></li>
                </ul>

                {/* Mobile Links */}
                {isOpen && (
                    <ul className="w-full mt-4 flex flex-col gap-3 text-lg md:hidden">
                        <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                        <li><Link to="/service" className="text-gray-700 hover:text-blue-600">Service List</Link></li>
                        <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
                        <li><a href="tel:+917546921395" className="text-gray-700 hover:text-blue-600">📞+91 7546921395</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};
