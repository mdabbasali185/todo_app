import { useEffect, useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const SignUp = () => {
    // state set 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleLogin = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("password does not match", { theme: 'colored' });
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (hookError) {

            const err = hookError.message
            toast.error(err.slice(22, err.length - 2), { theme: 'colored' });
        }
    }, [hookError]);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}> <FontAwesomeIcon icon={faSpinner} className='fa-pulse fa-10x'></FontAwesomeIcon> </div>;
    }
    return (
        <div className="loginBg ">
            <div className="login-container my-5">
                <div className="container">
                    <div className="text-center">
                        <div className="login-title my-1 text-secondary fw-bold fs-1 bg-dark  p-2 d-inline-block ">SignUp</div>
                    </div>
                    <form className="login-form mx-auto w-50 addForm p-4 mt-2 addNew" onSubmit={handleLogin}>
                        <input
                            className="w-100 input-field"
                            type="text"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="relative">
                            <input
                                className="w-100 mt-3 input-field"
                                type="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <input
                            className="w-100 mt-3 input-field"
                            type="password"
                            placeholder="confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <button className='animated-button mt-3' type="submit"> <span className="py-2"> Sign Up</span> </button>

                        <ToastContainer />
                        <p className="fw-bold ">
                            Already have an account?
                            <Link className="login px-2 text-decoration-none" to="/login">
                                <span className="text-white">Log in</span>
                            </Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
