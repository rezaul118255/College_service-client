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
    const College = useLoaderData(id)
    console.log(College)
    // const { Name } = College;
    // console.log(Name)
    return (
        <div>
            <h1>College</h1>

        </div>
    );
};

export default CollegeDetails;