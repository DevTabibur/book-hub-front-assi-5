
import './banner.css'
import { Link } from "react-router-dom"
import icon1 from '../assets/icons/icon1.png'
import icon2 from '../assets/icons/icon2.png'
import icon3 from '../assets/icons/icon3.png'


const Banner = () => {
    return (
        <>


            <div className="banner-main-part">
                <div className="banner-content">
                    <div className='container mx-auto px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                            <div className='sub-content p-4'>
                                <h1>Book Hub Category</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                <button className='text-white bg-primary px-6 py-4 font-medium rounded shadow-lg hover:bg-white hover:text-primary hover:shadow transition'>GET STARTED</button>
                            </div>
                            <div></div>
                            <div></div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 relative'>

                            <div className='single-banner-boxes'>
                                <div className="icon">
                                    <img src={icon1} alt="icon-1" />
                                </div>
                                <div className="content">
                                    <h1>Analyze your Reading</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit perferendis iure totam! Magni, qui?</p>
                                </div>
                            </div>

                            <div className='single-banner-boxes'>
                                <div className="icon">
                                    <img src={icon2} alt="icon-2" />
                                </div>
                                <div className="content">
                                    <h1>Find your dream</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit perferendis iure totam! Magni, qui?</p>
                                </div>
                            </div>
                            <div className='single-banner-boxes'>
                                <div className="icon">
                                    <img src={icon3} alt="icon-3" />
                                </div>
                                <div className="content">
                                    <h1>Boost your energy</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit perferendis iure totam! Magni, qui?</p>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>





            </div>

        </>
    )
}

export default Banner