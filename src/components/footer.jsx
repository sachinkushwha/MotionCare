export const Footer = () => {
    return (
        <div className="gap-8 bg-gray-800 text-white  px-4 sm:px-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-800 text-white py-8 px-4 sm:px-8">

                {/* Therapies */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Therapies
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        <li className="hover:text-green-500 transition">Massage Therapy</li>
                        <li className="hover:text-green-500 transition">Physiotherapy</li>
                        <li className="hover:text-green-500 transition">Geriatric</li>
                        <li className="hover:text-green-500 transition">Rehabilitation</li>
                        <li className="hover:text-green-500 transition">Diagnostics</li>
                        <li className="hover:text-green-500 transition">Acupuncture</li>
                    </ul>
                </div>

                {/* Social Feed */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Social Feed
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        <li className="hover:text-green-500 transition">Facebook</li>
                        <li className="hover:text-green-500 transition">Twitter</li>
                        <li className="hover:text-green-500 transition">LinkedIn</li>
                        <li className="hover:text-green-500 transition">YouTube</li>
                    </ul>
                </div>

                {/* Clinic Address */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Clinic Address
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        <li className="hover:text-green-500 transition">4958 Norman Street, Los Angeles, CA 90042</li>
                        <li className="hover:text-green-500 transition"><a href="tel:+917546921395">📞+91 7546921395</a></li>
                        {/* <li className="hover:text-green-500 transition">yaha ke liye bhi ek number bata de bhai</li> */}
                        <li className="hover:text-green-500 transition"><a href="mailto:Kalimullahsiddique5@gmail.com">Kalimullahsiddique5@gmail.com</a></li>
                    </ul>
                </div>

                {/* Extra Column (if needed) */}
                <div>
                    <h1 className="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">
                        Contact Info
                    </h1>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                        <li className="hover:text-green-500 transition">Mon - Sat: 9AM - 8PM</li>
                        <li className="hover:text-green-500 transition">Sunday: Closed</li>
                        <li className="hover:text-green-500 transition">Emergency: 24x7</li>
                    </ul>
                </div>

            </div>
            <div className="border-b border-gray-600 w-full">
            </div>
            <div className="w-full bg-gray-800 text-center text-sm text-gray-400 h-10 flex justify-center items-center">
                    © {new Date().getFullYear()} MotionCare Clinic. All rights reserved.
                </div>
        </div>
    );
};
