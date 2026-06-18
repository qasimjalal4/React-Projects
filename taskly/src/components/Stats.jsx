

export function  Stats({total,completed,remaining}) {

  return (
    <div className="w-full mt-7 flex justify-center items-center gap-14">
      <div  className="flex flex-col bg-white py-3 px-7 rounded-lg shadow-md font-semibold">
        <span className="text-lg">{total}</span>
        <span className="text-gray-600">TOTAL</span>
      </div>
      <div className="flex flex-col bg-white py-[10px] px-6 rounded-lg shadow-md font-semibold">
        <span className="text-lg">{remaining}</span>
        <span className="text-gray-600">REMAINING</span>
      </div>
      <div className="flex flex-col bg-white py-3 px-7 rounded-lg shadow-md font-semibold">
        <span className="text-lg">{completed}</span>
        <span className="text-gray-600">COMPLETED</span>
      </div>
    </div>
  )
}