import { FaPen, FaRegEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'



const CoffeeCard = ({coffee,coffees,setCoffees}) => {
    const handleDelete =(_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id)
           
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                       Swal.fire(
                'Deleted!',
                'Your coffee has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof=>cof._id !== _id)
              setCoffees(remaining);
                }
            })
            }
          })
    }
    const {_id,name,chef,photo}=coffee;
    return (
        <div className="card card-side bg-[#F5F4F1]  mb-4 mr-4">
            <figure><img src={photo} alt="Movie"/></figure>
            <div className="flex p-10 justify-between w-full">
                <div className="my-4 space-y-2">
                    <h4>Name: {name}</h4>
                    <h4>Chef: {chef}</h4>
                    <h4>Price: 890 TAKA</h4>
                </div>
                <div className="card-actions justify-end grid">
                    <Link to={`/viewCoffee/${_id}`}>
                    <button className="btn btn-xs bg-[#D2B48C] border-none rounded-none"><FaRegEye></FaRegEye></button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn btn-xs bg-[#3C393B] border-none rounded-none"><FaPen></FaPen></button>
                    </Link>
                    <button 
                    onClick={()=>handleDelete(_id)}
                    className="btn btn-xs bg-[#EA4744] border-none rounded-none"><FaTrashAlt></FaTrashAlt></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;