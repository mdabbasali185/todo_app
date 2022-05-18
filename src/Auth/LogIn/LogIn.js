import axios from "axios";
import { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail, useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import "./LogIn.css";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);



  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const forgetPassword = () => {
    sendPasswordResetEmail(email);
    toast.info("send email", { theme: 'colored' });
  };

  useEffect(() => {
    if (googleError) {
      const err = googleError.message
      toast.warning(err.slice(22, err.length - 2), { theme: 'colored' });
    }
  }, [googleError]);

  useEffect(() => {
    if (googleUser) {
      const { email } = googleUser.user
      axios.post('/jwt-generator', { email })
        .then(res => {
          localStorage.setItem('token', res.data)
          navigate(from);
        })
    }
  }, [googleUser]);


  useEffect(() => {
    if (hookError) {
      const err = hookError.message
      toast.error(err.slice(22, err.length - 2), { theme: 'colored' });
    }
  }, [hookError]);

  useEffect(() => {
    if (user) {
      axios.post('/jwt-generator', { email })
        .then(res => {
          localStorage.setItem('token', res.data)
          navigate(from);
        })
    }
  }, [user, email])



  // login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(email, password);

  };

  return (
    <div className=" loginBg">
      <div className="container">
        <div className="text-center">
          <div className="login-title my-4 text-secondary fw-bold fs-1 bg-dark  p-2 d-inline-block mx-auto ">LOGIN</div>
        </div>
        <form className="login-form mx-auto w-50 addForm p-4 mt-2 addNew" onSubmit={handleLogin}>
          <input
            className="form-control input-field"
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="form-control mt-3 input-field"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="animated-button d-block mx-auto m-2"> <span className="py-2">Login</span> </button>

          <p className="fw-bold ">
            Don't have an account?
            <Link className="sign-up px-2 text-decoration-none" to="/signup">
              <span className="text-white">Sign up first</span>
            </Link>
          </p>
        </form>
        <div className="text-center">
          <button className='animated-button mt-3 d-inline-block' type="submit" onClick={() => signInWithGoogle()}>
            <span className="py-2">google </span>
          </button>
        </div>
        <div className="text-center mt-3">
          <button
            className="animated-button  mb-5 d-inline-block btn"
            onClick={forgetPassword}
            disabled={!email.length}
          >
            <span className="py-2">Forget password </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
