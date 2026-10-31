function WeatherCard({ weather }) {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-[#3b3f8c] to-[#1a1f5e] rounded-2xl px-6 py-10 md:px-20 md:py-16">
      
      <div>
        <h2 className="text-xl font-bold text-white mb-2">
          {weather.location.name}, {weather.location.country}
        </h2>
        <p className="text-sm text-white/70 mt-1">{date}</p>
      </div>


      <div className="flex items-center gap-8">
        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="w-20 h-20"
        />
        <p className="text-8xl font-semibold text-white">
          {Math.round(weather.current.temp_c)}°
        </p>
      </div>

    </div>
  )
}

export default WeatherCard