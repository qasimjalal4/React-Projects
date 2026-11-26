
const WeatherCard = ({ weather }) => {

  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', date: 'numeric', year: 'numeric'
  })

  return (
    <div className="bg-gradient-to-br from-[#3b3f8c] to-[#1a1f5e] flex flex-col md:flex-row
      rounded-2xl gap-8 items-center md:justify-between p-5 sm:p-6 lg:px-20 md:py-16 md:gap-16">
     <div className="">
      <span className="text-white text-xl font-bold lg:text-2xl lg:mb-3">
        {weather.location.name}, {weather.location.country}
      </span>
      <p className="text-white/70 mt-1 text-xs sm:text-sm">
        {date}
      </p>
     </div>
     <div className="flex items-center gap-3 sm:gap-4">
      <img src={`https:${weather.current.condition.icon}`}
       alt={weather.current.condition.text}
       className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
      />
      <p className="text-white text-5xl sm:text-6xl lg:text-8xl font-bold">
        {Math.round(weather.current.temp_c)}°
      </p>
     </div>
    </div>
  )
}

export default WeatherCard