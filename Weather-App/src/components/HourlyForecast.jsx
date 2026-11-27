
const HourlyForecast = ({ days }) => {

  const hours = days[0].hour;

  return (
    <div className="bg-[#1a1f3a] border border-white/10 rounded-2xl p-4">
     <p className="text-white font-semibold mb-4">Hourly Forecast: </p>
      <div className="custom-scroll overflow-y-auto max-h-96  lg:max-h-[490px]">
         <div className="mr-3  space-y-2">
      {hours.map((hour) => {

        const time = new Date(hour.time.replace(" ", "T")).toLocaleDateString('en-US', {
          hour: "numeric"
        })

        return (
          <div
           key={hour.time}
           className="bg-[#252a4a] rounded-lg px-3 py-2 flex items-center"     
          >
           <img src={`https:${hour.condition.icon}`}
            alt={hour.condition.text}
            className="w-8 h-8" 
            />
            <span className="text-sm text-white flex-1 ml-2">
              {time}
            </span> 
            <span className="text-sm text-white">
              {Math.round(hour.temp_c)}°
            </span>
          </div>
        )
      })}
     </div>
      </div>
    </div>
  )
}

export default HourlyForecast