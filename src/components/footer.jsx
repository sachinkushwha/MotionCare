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
                        <li className="hover:text-green-500 transition">Cupping Therapy</li>
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
                    <div className="flex">

                        <a href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                            <radialGradient id="IG1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#fd5" />
                                <stop offset=".328" stop-color="#ff543f" />
                                <stop offset=".348" stop-color="#fc5245" />
                                <stop offset=".504" stop-color="#e64771" />
                                <stop offset=".643" stop-color="#d53e91" />
                                <stop offset=".761" stop-color="#cc39a4" />
                                <stop offset=".841" stop-color="#c837ab" />
                            </radialGradient>
                            <path fill="url(#IG1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z" />
                            <radialGradient id="IG2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#4168c9" />
                                <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
                            </radialGradient>
                            <path fill="url(#IG2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z" />
                            <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5
    s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/>
                            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                            <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12
    C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
                        </svg>
                        </a>



                    </div>
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
            <div className="w-full flex-col text-center text-sm text-white h-10 flex justify-center items-center">
               <p> © {new Date().getFullYear()} drkalimphysio Clinic. All rights reserved.</p>
                <p>Developed by sachin kushwaha</p>
            </div>
        </div>
    );
};
