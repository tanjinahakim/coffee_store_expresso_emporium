import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import bg from "../../assets/images/more/11.png";
import Swal from 'sweetalert2';
import '../../assets/css/fonts.css'
import { FaArrowLeft } from "react-icons/fa";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id,name,chef,supplier,taste,category,details,photo} = coffee;
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(updatedCoffee);
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire(
                    'Good job!',
                    'Coffee updated successfully!',
                    'success'
                  )
            }
            
        })
    }
    return (
        <>
            <Navbar></Navbar>
            <Link to={'/'}>
                <div className="primary-font mt-20 mx-20 flex items-center">
                <FaArrowLeft></FaArrowLeft>
                <h3 className=" text-3xl"> Back to home</h3>
                </div>
            </Link>
           <div style={{backgroundImage:`url(${bg})`}} className="text-center p-32">
            <div className="bg-[#F4F3F0] p-24">
                <h3 className="primary-font text-3xl">Update Coffee</h3>
                <h4 className="font-secondary">Coffee Name: {name}</h4>
                <form onSubmit={handleUpdateCoffee} >
                    {/* form row */}
                <div className="md:flex">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered   w-full " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4 ">
                    <label className="label">
                        <span className="label-text">Chef</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee Chef" className="input input-bordered  w-full" />
                    </label>
                </div>
                </div>
                 {/* form row */}
                 <div className="md:flex">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered   w-full " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4 ">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <div className="md:flex">
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered   w-full " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4 ">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee details" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div>
                <input type="submit" className="btn btn-sm primary-font w-full mt-6 bg-[#D2B48C] text-[#331A15] border-[#331A15] border-2" value="Add Coffee"/>
                </div>
                </form>

            </div>
           </div>
           <Footer></Footer>
        </>
    );
};

export default UpdateCoffee;