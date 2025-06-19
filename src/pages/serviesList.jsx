import { Poster } from "../components/poster";

export const Service = () => {
    const services = [
        "Physiotherapy for Back Pain",
        "Joint Mobilization",
        "Sports Injury Recovery",
        "Post-Surgery Rehab",
        "Home Visit Consultation",
        "Dry Needling Therapy"
    ];

    return (
        <>
        <Poster/>
        <div className="w-[95%] max-w-6xl mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-t-4 border-blue-500"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service}
                        </h3>
                        <p className="text-gray-600">
                            Get personalized, expert care tailored to your needs — all at your doorstep.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
};
