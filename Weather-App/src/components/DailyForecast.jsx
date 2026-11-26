 function DailyForecast({ days = [] }) {


   
  return (
    <div>
       <p className="mt-6 text-gray-300 mb-3">Daily Forecast: </p>
       <div className="grid grid-cols-3 gap-3">
        {days.map((day) => {

         const name = new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', {
            weekday: 'short',
         })

         console.log(days)

          return (
            <div className="flex flex-col bg-[#1a1f3a] border border-white/10 rounded-xl p-3 items-center"
             key={day.date}>
             <p className="text-sm text-gray-300">{name}</p>
             <img src={`https:${day.day.condition.icon}`}
             alt={day.day.condition.text}
             />
             <div className="flex gap-2">
             <span className="text-white font-semibold">
              {Math.round(day.day.maxtemp_c)}°
             </span>
             <span className="text-gray-300">
              {Math.round(day.day.mintemp_c)}°
             </span>
             </div>
            </div>
          )
        })}
       </div>
    </div>
  )
}

export default DailyForecast