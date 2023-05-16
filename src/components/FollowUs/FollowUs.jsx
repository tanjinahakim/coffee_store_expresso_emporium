import img1 from '../../assets/images/cups/Rectangle 9.png'
import img2 from '../../assets/images/cups/Rectangle 10.png'
import img3 from '../../assets/images/cups/Rectangle 11.png'
import img4 from '../../assets/images/cups/Rectangle 12.png'
import img5 from '../../assets/images/cups/Rectangle 13.png'
import img6 from '../../assets/images/cups/Rectangle 14.png'
import img7 from '../../assets/images/cups/Rectangle 15.png'
import img8 from '../../assets/images/cups/Rectangle 16.png'
const FollowUs = () => {
    return (
        <div className='p-36 text-center'>
            <p className='font-secondary'>Find Us Now</p>
                <h3 className='primary-font text-4xl font-semibold'>Follow on Instagram</h3>
            <div className='grid md:grid-cols-4 gap-2 mt-4'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            </div>
        </div>
    );
};

export default FollowUs;