import dayjs from 'dayjs'

export const Header = () => {
  return (
    <div className="pt-10 w-full">
      <div className="flex flex-1 justify-between items-center">
        <h1 className='text-black text-[38px] font-semibold'>
          Task<em className="text-[#4f7c6b]">ly</em></h1>
        <span
         className="bg-white border border-[#e0ded9] text-gray-500
        py-[3px] px-[6px] rounded-md
        "
        >{dayjs().format('dddd, MMMM D')}</span>
      </div>
      <p className="mt-2 text-[17px] text-gray-500">
        Stay Focused.Keep working hard. 
      </p>
    </div>
  )
}

export default Header
 