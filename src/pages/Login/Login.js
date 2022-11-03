import React, { useContext, useState } from "react";
import loginImg from "../../assets/images/login/login.svg";
import facebook from "../../assets/images/login/Facebook.png";
import linkedin from "../../assets/images/login/linkedin.png";
import google from "../../assets/images/login/Google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const { login, facebookSignIn, googleSignIn,resetPassword } = useContext(AuthContext);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    userInfo[field] = value;
    setUserInfo(userInfo)
  };

  const handleLogin = () => {
    const email = userInfo.email;
    const password = userInfo.password;
    login(email, password)
    .then((result) => {
      console.log(result.user);
      navigate(from , {replace:true})
      toast.success("Signed in successfully");
    })
    .catch((err) => {
      toast.error(err.message);
      console.error(err);
    });
  }
  //handle Google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from,{replace:true})
        toast.success("Signed in successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };
  //handle Google sign in
  const handleFacebookLogin = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from,{replace:true})
        toast.success("Signed in successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  //handle reset
  const handlePasswordReset = () => {
    const email = userInfo.email;
    resetPassword(email)
      .then(() => {
      toast.success("Reset password link has been sent to your email")
      })
      .catch(err => {
      toast.error(err.message)
    })
  }
  return (
    <div className="hero w-full">
      <div className="hero-content w-full flex-col lg:flex-row">
        <img src={loginImg} alt="" />

        <div className="card w-full border ml-36 py-16">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                onBlur={handleBlur}
                type="text"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                onBlur={handleBlur}
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
              <label className="label">
                <Link onClick={handlePasswordReset} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleLogin}
                style={{ backgroundColor: "#ff3811" }}
                className="py-3 text-white font-bold text-xl rounded"
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="my-4 text-xl">or Sign In With</p>
              <div className="flex justify-center">
                <Link onClick={handleFacebookLogin}>
                  <img src={facebook} className="mr-3" alt="" />
                </Link>
                <Link>
                  <img src={linkedin} className="mr-3" alt="" />
                </Link>
                <Link onClick={handleGoogleSignIn}>
                  <img src={google} className="mr-3" alt="" />
                </Link>
              </div>
              <p>
                New to Genius Car ?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#ff3811" }}
                  className="font-semibold mt-8 inline-block"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
