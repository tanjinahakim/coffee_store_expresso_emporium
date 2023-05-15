import { Link } from 'react-router-dom';
import '../../assets/css/fonts.css'
import bg from '../../assets/images/more/1.png'
const PopularProducts = () => {
    return (
        <>
            <div style={{backgroundImage:`url(${bg})`}} className='p-36 text-center'>
                <p className='font-secondary'>--- Sip & Savor ---</p>
                <h3 className='primary-font text-4xl font-semibold'>Our Popular Products </h3>
                <Link to={'/addCoffee'}><button className='primary-font border-black border-2 rounded-sm text-white px-4 bg-[#E3B577] my-4'>Add Coffee</button></Link>
            </div>
        </>
    );
};

export default PopularProducts;