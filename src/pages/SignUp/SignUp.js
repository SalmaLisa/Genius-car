import React, { useContext, useState } from "react";
import login from "../../assets/images/login/login.svg";
import facebook from "../../assets/images/login/Facebook.png";
import linkedin from "../../assets/images/login/linkedin.png";
import google from "../../assets/images/login/Google.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({});
  const {createUser, facebookSignIn, googleSignIn } = useContext(AuthContext);

  const handleBlur = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    userInfo[field] = value;
    setUserInfo(userInfo);
  };
  const handleSignUp = () => {
    const email = userInfo.email;
    const password = userInfo.password;
    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      toast.success("User created successfully");
    })
    .catch((err) => {
      toast.error(err.message);
      console.error(err);
    });
  };

  //handle Google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
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
        toast.success("Signed in successfully");
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  return (
    <div className="hero w-full">
      <div className="hero-content w-full flex-col lg:flex-row">
        <img src={login} alt="" />
        <div className="card w-full border ml-36 py-16">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center mb-5">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                onBlur={handleBlur}
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                onBlur={handleBlur}
                name="email"
                type="email"
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
                name="password"
                type="password"
                placeholder="Your Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleSignUp}
                style={{ backgroundColor: "#ff3811" }}
                className="py-3 text-white font-bold text-xl rounded"
              >
                Sign Up
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
                Already have an account ?{" "}
                <Link
                  to="/login"
                  style={{ color: "#ff3811" }}
                  className="font-semibold mt-8 inline-block"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
