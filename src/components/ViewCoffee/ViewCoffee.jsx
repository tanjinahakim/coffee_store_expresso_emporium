import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";

const ViewCoffee = () => {
    const coffee = useLoaderData();
    const {name,chef,supplier,taste,category,details,photo} = coffee;

    return (
        <div>
            <Navbar></Navbar>
            <Link to={'/'}>
                <div className="primary-font mt-20 mx-20 flex items-center">
                <FaArrowLeft></FaArrowLeft>
                <h3 className=" text-3xl"> Back to home</h3>
                </div>
            </Link>
            <div className="card md:card-side bg-[#F5F4F1] shadow-xl w-1/2 lg:mx-48 mx-20 my-20 p-5 ">
                <figure><img src={photo} alt="Album"/></figure>
                <div className="card-body">
                    <h4>Name: {name}</h4>
                    <h4>Chef: {chef}</h4>
                    <h4>Supplier: {supplier}</h4>
                    <h4>Taste: {taste}</h4>
                    <h4>Category: {category}</h4>
                    <h4>details: {details}</h4>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewCoffee;