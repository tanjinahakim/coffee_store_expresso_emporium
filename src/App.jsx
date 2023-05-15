import { Outlet } from "react-router-dom"
import Navbar from "./shared/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Footer from "./shared/Footer/Footer"
import PopularProducts from "./components/PopularProucts/PopularProducts"
function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <PopularProducts></PopularProducts>
     <Outlet></Outlet>
     <Footer></Footer>
     
    </>
  )
}

export default App