import { Outlet } from "react-router-dom"
import Navbar from "./shared/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Footer from "./shared/Footer/Footer"
function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Outlet></Outlet>
     <Footer></Footer>
     
    </>
  )
}

export default App