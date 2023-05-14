import logo from '../../assets/images/more/logo1.png'
import footer from '../../assets/images/more/13.jpg'
import img from '../../assets/images/more/8.png'
import "../../assets/css/fonts.css"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin,FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
        <div style={{backgroundImage:`url(${footer})`}} className="bg-cover bg-no-repeat bg-center lg:flex p-20">
            <div className='container py-20 lg:px-36'>
            <img src={logo} alt="" className='h-16 w-16'/>
            <h3 className='primary-font text-3xl py-4'>Espresso Emporium</h3>
            <p className='font-secondary text-sm sm:break-normal '>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className='flex py-4 '>
                <Link to={'www.facebook.com'}><FaFacebook className='h-8 w-8 mr-2'></FaFacebook></Link>
                <Link to={'www.twitter.com'}><FaTwitter className='h-8 w-8 mr-2'></FaTwitter></Link>
                <Link to={'www.instagram.com'}><FaInstagram className='h-8 w-8 mr-2'></FaInstagram></Link>
                <a  href={'https://www.linkedin.com/'}><FaLinkedin className='h-8 w-8 mr-2'></FaLinkedin></a>
            </div>
            <div>
                <h3 className='primary-font text-3xl py-2'>Get in Touch</h3>
            </div>
            <div>
                <div className='flex items-center'>
                    <FaPhoneAlt></FaPhoneAlt><p className='px-4'>+88 01533 333 333</p>
                </div>
                <div className='flex items-center'>
                    <FaEnvelope></FaEnvelope> <p className='px-6 py-2'>info@gmail.com</p>
                </div>
                <div className='flex items-center'>
                    <FaMapMarkerAlt></FaMapMarkerAlt> <p className='px-4'>+88 01533 333 333</p>
                </div>
            </div>
            </div>
            <div className='my-28'>
            <h3 className='primary-font text-3xl py-2'>Connect with Us</h3>
            <form>
                <input type="name" name="name" id="" placeholder='Name'className='my-2 h-8 lg:px-10'/>
                <input type="email" name="email" id="" placeholder='Email ' className='my-2 h-8 lg:px-10' />
                <input type="text" placeholder='Message' className=' my-2 lg:p-10 sm:p-8 ' />
            </form>
            <button className="rounded-full border-black border-2 px-4 py-1 mt-2 primary-font">Send Message</button>
            </div>
        </div>
         <div style={{backgroundImage:`url(${img})`,backgroundColor:"rgba(0,0,0,0.7)",backgroundBlendMode:"darken"}} className="bg-cover bg-no-repeat bg-center">
         <h5 className='primary-font text-xl text-center text-white t py-2'>Copyright Espresso Emporium ! All Rights Reserved</h5>
     </div>
     </>
    );
};

export default Footer;