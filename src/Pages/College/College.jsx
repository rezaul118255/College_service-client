import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const College = ({ details }) => {
    const [college, setCollege] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/menu")

            .then(res => res.json())
            .then(data => setCollege(data))

    }, [])

    return (
        <div>
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
                                    <Link to={`${details.id}`}><button className="btn btn-primary">View Details</button></Link>
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