// import React from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const CollegeDetails = () => {
//     const { params } = useParams()
//     const College = useLoaderData(params)
//     console.log(College)
//     const { Name } = College;
//     console.log(Name)
//     return (
//         <div>
//             <h1>Name{Name}</h1>

//         </div>
//     );
// };

// export default CollegeDetails;


import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const { id } = useParams()
    const Colleges = useLoaderData(id)
    // console.log(Colleges)

    return (
        <div >
            {
                Colleges.map(details => (

                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img className='w-auto' src={details.Image} alt="Shoes" /></figure>
                        <div className="text-1xl card-body text-center">
                            <p className="text-2xl text-center">Name :{details.Name}</p>
                            <p>Admission Date: {details.AdmissionDate}</p>

                            <p>Admission Process:  {details.AdmissionProcess}</p>
                            <p>History:  {details.researchHistory}</p>
                            <p>events:  {details[0]}</p>
                            <p>Sports Category:  {details.sportsCategory}</p>
                            <p>Rating: {details.rating}</p>

                        </div>
                    </div>

                )









                )
            }

        </div>
    );
};

export default CollegeDetails;