import React from 'react';
import { Link } from 'react-router-dom';

const Colleges = ({ details }) => {
    const { Name, Image, AdmissionDate, sportsCategory, id } = details
    return (
        <div>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                <figure><img className='h-64 w-auto' src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name :{Name}</h2>
                    <p>Admission Date: {AdmissionDate}</p>
                    <p>Sports: {sportsCategory}</p>
                    <div className="card-actions justify-end">
                        <Link to={`${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Colleges;