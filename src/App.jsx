import { Outlet, useLoaderData } from "react-router-dom"
import Navbar from "./shared/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Footer from "./shared/Footer/Footer"
import PopularProducts from "./components/PopularProucts/PopularProducts"
import FollowUs from "./components/FollowUs/FollowUs"
function App() {
  const loadedcoffees = useLoaderData();

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <>
      {
        <PopularProducts
        key={loadedcoffees._id} loadedcoffees={loadedcoffees}
        ></PopularProducts>
      }
     </>
     <FollowUs></FollowUs>
     <Outlet></Outlet>
     <Footer></Footer>
     
    </>
  )
}

export default App