
import banner from "../../assets/images/more/3.png"
import icon1 from "../../assets/images/icons/1.png"
import icon2 from "../../assets/images/icons/2.png"
import icon3 from "../../assets/images/icons/3.png"
import icon4 from "../../assets/images/icons/4.png"
import '../../assets/css/fonts.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div style={{backgroundImage:`url(${banner})`,height:"800px"}} className="bg-cover bg-no-repeat bg-center">
      <div className="text-white container py-96 pl-96 ">
      <h4 className="text-3xl py-5 pl-52 text-justify primary-font ">Would you like a Cup of Delicious Coffee?</h4>
      <p className="font-secondary text-justify pl-52">It`s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <Link><button className="primary-font text-black p-4 mt-5 ml-52 bg-[#DB995A] btn rounded-none " >Learn More</button></Link>
      </div>
     </div>
     <div className="bg-[#ECEAE3] p-20 lg:flex text-sm">
        <div className="pr-5">
          <img src={icon1} alt="" />
          <h3 className="primary-font text-3xl font-semibold py-3">Awesome Aroma</h3>
          <p className="font-secondary"> You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className="pr-5">
          <img src={icon2} alt="" />
          <h3 className="primary-font text-3xl font-semibold py-3">High Quality</h3>
          <p className="font-secondary"> We served the coffee to you maintaining the best quality</p>
        </div>
        <div className="pr-5">
          <img src={icon3} alt="" />
          <h3 className="primary-font text-3xl font-semibold py-3">Pure Grades</h3>
          <p className="font-secondary"> The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className="pr-5">
          <img src={icon4} alt="" />
          <h3 className="primary-font text-3xl font-semibold py-3">Proper Roasting</h3>
          <p className="font-secondary"> Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
        </>
    );
};

export default Banner;