
import logo from "../../assets/images/more/logo1.png";
import navImg from "../../assets/images/more/15.jpg";
const Navbar = () => {
    return (
        <div className="flex justify-center items-center primary-font" style={{backgroundImage:`url(${navImg})`,width:'auto'}}>
        <img src={logo} alt="" className="h-14 w-14" />
        <h3 className="text-5xl text-center text-white py-5 ">Espresso Emporium</h3>
     </div>
    );
};

export default Navbar;