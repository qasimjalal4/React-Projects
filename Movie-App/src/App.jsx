import NavBar from "./components/NavBar" 
import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"
import { BrowserRouter, Route, Routes } from "react-router"

function App() {
   

  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
      <Route index element={ <HomePage /> } />
      <Route path="/favourites" element={ <FavouritesPage /> } />
     </Routes>

    </BrowserRouter>
  )
}

export default App
