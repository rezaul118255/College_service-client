
import React, { useContext } from 'react';
import img from '../assets/undraw_Login_re_4vu2.png'

import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handlerRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo_url.value;
        const password = form.password.value;
        console.log(name, email, password, photoUrl)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handlerRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo_url</span>
                                </label>
                                <input type="url" name='photo_url' placeholder="photo url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;







// import React from 'react';
// import img from '../assets/photo-1607237138185-eedd9c632b0b.jpg'
// import { Link } from 'react-router-dom';
// const Register = () => {
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row">
//                     <div className="w-1/2 mr-12">
//                         <img src={img} alt="" />
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                             <form >
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Name</span>
//                                     </label>
//                                     <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">photo_url</span>
//                                     </label>
//                                     <input type="url" name='photo_url' placeholder="photo url" className="input input-bordered" />
//                                 </div>

//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Confirm Password</span>
//                                     </label>
//                                     <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                                     <label className="label">
//                                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                     </label>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <input className="btn btn-primary" type="submit" value="Sign Up" />
//                                 </div>
//                             </form>
//                             <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Register;