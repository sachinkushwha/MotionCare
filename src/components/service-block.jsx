export const Service = ({ imag }) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-gray-50 pb-[50px]">
      {imag.map((arr, index) => (
        <div
          key={index}
          className="w-full sm:w-[300px] rounded-xl overflow-hidden shadow-lg bg-white text-center p-4"
        >
          <img
            src={arr.imgs}
            alt=""
            className="w-full h-60 object-cover rounded-md"
          />
          <h1 className="text-2xl font-semibold mt-4 font-roboto">{imag[index].title}</h1>
          <p className="mt-2 text-gray-700 text-sm">
           {imag[index].dis}
          </p>
        </div>
      ))}
    </div>
    )
}