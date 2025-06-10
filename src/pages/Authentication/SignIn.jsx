// import React from 'react'

// const SignIn = () => {
//   return (
//     <div>SignIn</div>
//   )
// }

// export default SignIn

import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import signInAni from "../../assets/signIn.json";
import { AuthContext } from "../../contexts/AuthProvider";

const SignIn = () => {
    const { loginUser, googleSignIn, setLoading } = use(AuthContext);

    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Welcome back!");
                navigate("/");
            })
            .catch((error) => toast.error(error.message))
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success("Signed in successfully!");
                navigate("/");
            })
            .catch((error) => toast.error(error.message))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="py-5 w-11/12 max-w-[1550px] mx-auto sticky top-20">
            <title>Sign In</title>
            <div
                className="bg-white/30 backdrop-blur-sm py-3 px-4 sm:p-5 space-y-3 rounded-2xl shadow-lg pri-font
            flex flex-col-reverse md:flex-row-reverse justify-between gap-3"
            >
                <div className="md:w-1/3">
                    <h1 className="text-center text-secondary sec-font text-xl md:text-2xl font-semibold">
                        Sign In
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-xs dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
                        <div className="relative space-y-1 text-sm">
                            <label htmlFor="password" className="block">
                                Password
                            </label>
                            <input
                                required
                                type={showPass ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-xs dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                            <button
                                type="button"
                                onClick={handleShowPass}
                                className="absolute top-9 right-2"
                            >
                                {showPass ? (
                                    <FaEyeSlash size={24} />
                                ) : (
                                    <FaEye size={24} />
                                )}
                            </button>
                        </div>
                        <button className="btn btn-primary w-full">
                            Sign In
                        </button>
                    </form>
                    <div className="space-y-3">
                        <div className="flex items-center md:pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-white"></div>
                            <p className=" sm:px-3 text-sm">
                                Sign in with social accounts
                            </p>
                            <div className="flex-1 h-px sm:w-16 bg-white"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="btn btn-primary w-full"
                                onClick={handleGoogleSignIn}
                            >
                                Sign In with Google
                            </button>
                        </div>
                        <p className="text-sm text-center sm:px-6">
                            Don’t have an account?
                            <Link to="/sign-up" className="underline ml-1">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="my-auto md:w-3/5">
                    <h1 className="text-center text-secondary sec-font text-xl md:text-2xl lg:text-3xl font-semibold pri-font">
                        Welcome Back to kindleVent
                    </h1>
                    <Lottie
                        className="h-full"
                        animationData={signInAni}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
