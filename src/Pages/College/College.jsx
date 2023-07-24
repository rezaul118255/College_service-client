import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const College = ({ details }) => {

    const [college, setCollege] = useState([])
    useEffect(() => {
        fetch("https://college-service-server-theta.vercel.app/menu")

            .then(res => res.json())
            .then(data => setCollege(data))

    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-yellow-500 text-3xl'> All College </p>
                <div className='border-y-4 border-gray-600 w-4/12 mx-auto m-4 text-2xl'>
                    <h5>Enroll Your favarite  College</h5>

                </div>


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    college.map(details => (

                        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img className='h-64 w-auto' src={details.Image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name :{details.Name}</h2>
                                <p>Admission Date: {details.AdmissionDate}</p>
                                <p>Sports: {details.sportsCategory}</p>
                                <p>Sports: {details.rating}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`${college.id}`}><button className="btn btn-primary">View Details</button></Link>
                                </div>
                            </div>
                        </div>

                    )









                    )
                }

            </div>


        </div>
    );
};

export default College;