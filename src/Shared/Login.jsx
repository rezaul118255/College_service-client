import React, { useContext, useState } from 'react';
import img from '../assets/undraw_Login_re_4vu2.png'
// import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
    const { login } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch(error => {
                setError(error.message)

            });
    }
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const GoogleUser = result.user;
                setUser(GoogleUser)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='text-amber-600'>
                                {
                                    <p>{error}</p>
                                }

                            </div>
                            <div>
                                {
                                    user && toast('user is found ')


                                }
                                <ToastContainer></ToastContainer>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-success" type="submit" value="Login" />
                            </div>
                            <div className="form-control mt-6">
                                {/* <button onClick={handelGoogleSignIn} className="btn btn-outline btn-warning" value="continue with google" placeholder='continue with google' /> */}
                                <button onClick={handelGoogleSignIn} className="btn btn-outline btn-warning">continue with google</button>

                            </div>

                        </form>
                        <p className='my-4 text-center'>New to Educational toys <Link className='text-orange-200 font-bold' to="/register">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;






// import React from 'react';
// import img from '../assets/photo-1607237138185-eedd9c632b0b.jpg'
// import { Link } from 'react-router-dom';

// const Login = () => {
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row">
//                     <div className="w-1/2 mr-12">
//                         <img src={img} alt="" />
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <h1 className="text-3xl text-center font-bold">Login</h1>
//                             <form >
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Password</span>
//                                     </label>
//                                     <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                                     <label className="label">
//                                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                     </label>
//                                 </div>

//                                 <div className="form-control mt-6">
//                                     <input className="btn btn-outline btn-success" type="submit" value="Login" />
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     {/* <button onClick={handelGoogleSignIn} className="btn btn-outline btn-warning" value="continue with google" placeholder='continue with google' /> */}
//                                     <button className="btn btn-outline btn-warning">continue with google</button>

//                                 </div>

//                             </form>
//                             <p className='my-4 text-center'>New to Educational toys <Link className='text-orange-200 font-bold' to="/register">Register</Link> </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Login;