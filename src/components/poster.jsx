export const Poster = () => {
    return (
        <>
            <div className="relative w-full h-[70vh] bg-[url('/image.png')] bg-no-repeat bg-cover bg-center flex items-center">
             <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-5">
                    <h4 className="text-2xl md:text-3xl font-bold ">
                        Welcome to Our Physiotherapy Centre
                    </h4>
                    <p className="text-lg md:text-xl  mt-2">
                        Your Recovery, Our Priority
                    </p>
                </div>
            </div>

        </>
    )
}