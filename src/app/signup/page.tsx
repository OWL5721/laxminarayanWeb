
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up | Laxminarayan",
    description: "Apply for access to exclusive jewelry collections.",
};

const SignupPage = () => {
    return (
        <>
            <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px] bg-white dark:bg-dark">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 shadow-three dark:bg-bg-color-dark sm:p-[60px] border border-luxury-gold/20">
                                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl font-serif">
                                    Join the Legacy
                                </h3>
                                <p className="mb-11 text-center text-base font-medium text-body-color">
                                    Create an account to access exclusive collections
                                </p>

                                <form>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="password"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Create a password"
                                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label
                                            htmlFor="password"
                                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Confirm your password"
                                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden transition-all duration-300 focus:border-luxury-gold dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-luxury-gold dark:focus:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-8 flex">
                                        <label
                                            htmlFor="checkboxLabel"
                                            className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                                        >
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    id="checkboxLabel"
                                                    className="sr-only"
                                                />
                                                <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded-sm border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                                                    <span className="opacity-0">
                                                        <svg
                                                            width="11"
                                                            height="8"
                                                            viewBox="0 0 11 8"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                                fill="#D4AF37"
                                                                stroke="#D4AF37"
                                                                strokeWidth="0.4"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <span>
                                                By creating an account you agree to the
                                                <a href="#0" className="text-luxury-gold hover:underline">
                                                    {" "}
                                                    Terms and Conditions{" "}
                                                </a>
                                                , and our
                                                <a href="#0" className="text-luxury-gold hover:underline">
                                                    {" "}
                                                    Privacy Policy{" "}
                                                </a>
                                            </span>
                                        </label>
                                    </div>
                                    <div className="mb-6">
                                        <button className="flex w-full items-center justify-center rounded-sm bg-luxury-gold px-9 py-4 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 dark:shadow-submit-dark">
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center text-base font-medium text-body-color">
                                    Already a member?{" "}
                                    <Link href="/login" className="text-luxury-gold hover:underline">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupPage;
