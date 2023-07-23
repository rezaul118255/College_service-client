
import img1 from '../assets/photo-1607237138185-eedd9c632b0b.jpg';
import img2 from '../assets/photo-1607237138185-eedd9c632b0b.jpg';
import img3 from '../assets/photo-1607237138185-eedd9c632b0b.jpg';
const Carucel = () => {

    return (
        <div>
            <div className='text-center'>
                <p className='text-yellow-500 text-3xl'> Research </p>
                <div className='border-y-4 border-gray-600 w-4/12 mx-auto m-4 text-2xl'>
                    <h5>Our college research story</h5>

                </div>


            </div>

            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className=" absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-5xl font-bold'>Here many Category of Math learning toy are available</h2>
                            <p>From here you can easily buy all the maths learning material you want. So dont delay and buy now or visit</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Here many Category of science learning toy are available</h2>
                            <p>From here you can easily buy all the science learning material you want. So dont delay and buy now or visit</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Here many Category of Enginearing learning toy are available</h2>
                            <p>From here you can easily buy all the enginearing learning material you want. So dont delay and buy now or visit</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>





    );
};

export default Carucel;