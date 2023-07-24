import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyCollege = () => {
    const { user } = useContext(AuthContext)
    const [MyColleges, setMyCollege] = useState([])

    useEffect(() => {
        fetch(`https://college-service-server-theta.vercel.app/enrolled/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyCollege(data))
    }, [user])
    return (
        <div>
            <div className='text-center'>
                <p className='text-yellow-500 text-3xl'> My College </p>
                <div className='border-y-4 border-gray-600 w-4/12 mx-auto m-4 text-2xl'>
                    <h5>My College are Available </h5>

                </div>


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className="table w-full">
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>District</th>
                            <th>subject</th>
                            <th>Phone</th>
                            <th>Delete</th>







                        </tr>
                    </thead>
                    <tbody className="table w-full">
                        {
                            MyColleges.map((MyCollege) => (

                                <div>



                                    <tr className="table w-full">
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center h-16 w-16 ">


                                                <img src={MyCollege.image} />

                                            </div>
                                        </td>

                                        <td>{MyCollege.sellerName}</td>
                                        <td>{MyCollege.District}</td>
                                        <td><span className="badge badge-ghost badge-sm">{MyCollege.Subject}</span></td>


                                        <td>{MyCollege.Phone}

                                        </td>

                                        <th><button className="btn btn-ghost btn-xs">delete</button></th>


                                    </tr>






                                </div>
                            ))
                        }
                    </tbody>

                </table>



            </div>



        </div>
    );
};

export default MyCollege;