import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import "./Enroll.css"
import { useForm } from 'react-hook-form';

const Enrollnow = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/enroll', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    const onSubmite = data => {
        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>

                <div className="add-job-container">

                    <div className="add-job row flex ">
                        <div className="col-md-8 w-9/12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    className="text-input"
                                    value={user?.displayName}
                                    {...register("sellerName")}
                                    placeholder="your name"
                                    defaultValue={user?.displayName}
                                    type="text"
                                />
                                <input
                                    className="text-input"
                                    {...register("District")}
                                    placeholder="District"

                                />
                                <input
                                    className="text-input"
                                    {...register("Subject", { required: true })}
                                    placeholder="Subject"

                                />
                                <input
                                    className="text-input"
                                    {...register("Phone", { required: true })}
                                    placeholder="Phone"
                                    type="number"
                                />



                                <input
                                    className="text-input"
                                    {...register("image")}
                                    placeholder="image link"
                                    type="url"

                                />
                                <input
                                    className="text-input"
                                    {...register("date of Birth")}
                                    placeholder="date of Birth"
                                    type="date"
                                />
                                <input
                                    className="text-input"
                                    value={user?.email}
                                    {...register("postedBy")}
                                    placeholder="your email"
                                    defaultValue={user?.email}
                                    type="email"
                                />



                                <input className="submit-btn" value="Submit" type="submit" />
                            </form>

                        </div>


                    </div>
                </div>
            </div>
            <div>

                <div className="add-job-container">

                    <div className="add-job row flex ">
                        <div className="col-md-8 w-9/12">
                            <form onSubmit={handleSubmit(onSubmite)}>
                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    className="text-input"
                                    value={user?.email}
                                    {...register("name")}
                                    placeholder="your email"
                                    defaultValue={user?.email}
                                    type="email"
                                />
                                <input
                                    className="text-input"
                                    {...register("details")}
                                    placeholder="details"

                                />

                                <input
                                    className="text-input"
                                    {...register("rating", { required: true })}
                                    placeholder="rating"
                                    type="number"
                                />

                                <input className="submit-btn" value="Submit" type="submit" />
                            </form>
                        </div>


                    </div>
                </div>

            </div>




        </div>
    );
};

export default Enrollnow;