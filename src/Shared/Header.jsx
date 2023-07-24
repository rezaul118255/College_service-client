
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import "./Header.css"


const Header = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    console.log(user)
    const auth = getAuth(app);
    console.log(auth)
    const userr = auth.currentUser;

    const handelLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)

            })
            .catch(error => console.log(error))
    }
    const navOptions = (
        <>
            <li >
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/college">College</Link>
            </li>
            <li >
                <Link to="/admission">Admission</Link>
            </li>

            <li >
                <Link to="/myCollege">My College</Link>
            </li>



        </>
    );







    return (
        <>
            <div className="navbar color  bg-opacity-30 container bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">
                        <span className="text-blue-700 font-bold">College </span>{" "}
                        <span className="text-amber-500	">Service</span>{" "}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navOptions}</ul>
                </div>
                <div className="navbar-end gap-4">
                    {user && (
                        <div className="tooltip" data-tip={userr.displayName}>
                            {userr && <img className="photo" src={userr.photoURL} alt="" />}
                        </div>
                    )}
                    {user ? (
                        <button onClick={handelLogOut} variant="primary">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button>
                                <Link className="" to="/login">
                                    login
                                </Link>
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </>

    );
};

export default Header;