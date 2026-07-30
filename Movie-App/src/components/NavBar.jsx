import { NavLink } from "react-router-dom"

const NavBar = () => {

  const navLinkClass = ({isActive}) => isActive ?  'text-red-500': 'text-white' 


  return (
    <nav className="w-full h-[88px] flex sticky top-0 z-50 bg-black justify-between items-center px-16 border-b-[1px] border-b-white shadow-sm">
     <div className="text-[27px] font-bold">
      <span>Movie</span><span className="text-red-500">Scope</span>
     </div>
     <ul className="list-none flex gap-14 text-[17px] font-semibold cursor-pointer">
      <li>
       <NavLink
        className={navLinkClass}
       to="/">
        Home
       </NavLink>
      </li>
      <li>
       <NavLink 
       className={navLinkClass}
       to="/favourites">
        Favourites
       </NavLink>
      </li>
     </ul>

    </nav>
  )
}

export default NavBar