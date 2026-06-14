import { NavLink } from 'react-router'

export function Header() {
  return (
    <nav className='w-full h-14 bg-white flex justify-between items-center shadow-sm'>
      <div className='text-xl font-bold text-blue-500 pl-3'>
        Router App
      </div>
      <ul className='flex gap-6 pr-5 items-center list-none'>
       <li><NavLink className={({isActive}) =>
        isActive ? 'font-semibold text-blue-500 border-b-2 border-blue-500 pb-1':
        'font-medium text-gray-500 hover:text-blue-500'
      } to='/'>Home</NavLink></li>
       <li><NavLink className={({isActive}) => 
        isActive ? 'font-semibold text-blue-500 border-b-2 border-blue-500 pb-1':
        'font-medium text-gray-500 hover:text-blue-500'
      } to='/about'>About</NavLink></li>
      </ul>
    </nav>
  )
}