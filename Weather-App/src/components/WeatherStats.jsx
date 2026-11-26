function WeatherStats({ current }) {
  const stats = [
    { label: 'Feels Like',    value: `${Math.round(current.feelslike_c)}°` },
    { label: 'Humidity',      value: `${current.humidity}%` },
    { label: 'Wind',          value: `${Math.round(current.wind_kph)} km/h` },
    { label: 'Precipitation', value: `${current.precip_mm} mm` },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4 mt-10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#1a1f3a] border border-white/10 rounded-xl p-4 lg:p-5"
        >
          <p className="text-sm text-gray-400">{stat.label}</p>
          <p className="mt-2 text-xl lg:text-2xl font-semibold text-white">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}

export default WeatherStats