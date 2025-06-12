import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthProvider";
import signUpAni from "../../assets/signUp.json";

const SignUp = () => {
    const { createUser, updateUser, setLoading, googleSignIn } =
        use(AuthContext);

    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const passCheck = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Welcome!");
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
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!passCheck.test(password))
            return toast.error(
                <span>
                    Password must be at least 6 characters long and include at
                    least one uppercase and one lowercase letter.
                </span>
            );
        const photo = form.photo.value;

        createUser(email, password)
            .then(() => updateUser(name, photo))
            .then(() => navigate("/"))
            .then(() => toast.success("Greetings!"))
            .catch((error) => toast.error(error.message))
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className="w-11/12 max-w-[1550px] mx-auto shadow-lg bg-secondary/20 backdrop-blur-xl rounded-2xl">
            <title>SignUp</title>
            <div className="rounded-lg p-2 md:py-3 md:px-4 sm:p-5 pri-font flex flex-col-reverse md:flex-row gap-5 md:gap-20">
                <div className="md:w-1/2 space-y-3">
                    <h1 className="text-center text-xl md:text-2xl font-semibold sec-font">
                        Sign Up
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 md:space-y-6"
                    >
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block">
                                Name
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
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
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block">
                                Photo URL
                            </label>
                            <input
                                required
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
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
                                className="w-full px-4 py-3 rounded-xs border border-gray-500 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                            />
                            {showPass || (
                                <button
                                    onClick={handleShowPass}
                                    className="absolute top-9 right-2"
                                >
                                    <FaEye size={24}></FaEye>
                                </button>
                            )}

                            {showPass && (
                                <button
                                    onClick={handleShowPass}
                                    className="absolute top-9 right-2"
                                >
                                    <FaEyeSlash size={24}></FaEyeSlash>
                                </button>
                            )}
                        </div>
                        <button className="w-full btn btn-primary btn-sm md:btn-md scale-100 hover:bg-accent hover:border-none hover:scale-105 transition-all duration-300">
                            Sign Up
                        </button>
                    </form>
                    <div className="flex items-center space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-white"></div>
                        <p className=" sm:px-3 text-sm">
                            Sign Up with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 bg-white"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="w-full btn btn-primary btn-sm md:btn-md scale-100 hover:bg-accent hover:border-none hover:scale-105 transition-all duration-300"
                        >
                            <FaGoogle></FaGoogle>
                            Sign Up with Google
                        </button>
                    </div>
                    <p className="text-sm text-center sm:px-6">
                        Already have an account?
                        <Link to="/sign-in" className="underline ml-1 transition-all duration-300 hover:text-accent">
                            Sign In
                        </Link>
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-center text-xl md:text-2xl font-semibold sec-font pri-font p-1 mx-auto">
                        Welcome to kindleVent
                    </h1>
                    <Lottie
                        className="w-3/4 md:full mx-auto"
                        animationData={signUpAni}
                        loop={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
