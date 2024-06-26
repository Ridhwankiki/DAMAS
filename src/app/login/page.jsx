"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import HeaderLogin from "@/components/HeaderLogin";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8081/api/login",
                form
            );
            console.log(response);
            document.cookie = `token=${response.data.data.token}; expires=; path=/`;
            router.push("/main");
        } catch (error) {
            console.log(error.response.data.error);
            alert(error.response.data.error);
        }
    };

    return (
        <div className="min-h-screen bg-[#00A6B4] bg-opacity-20">
            <HeaderLogin title="Damas" />
            <Footer />
            <div className="mt-32 flex flex-col justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-[450px]">
                    <form>
                        <div className="mb-4">
                            <h1 className="font-roboto font-bold text-2xl flex justify-center">
                                Login Page
                            </h1>
                            <div className="w-full h-[0.5px] bg-black mt-3"></div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800 mt-4"
                            >
                                Username
                            </label>
                            <input
                                type="username"
                                id="username"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        username: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <Link href="/main">
                            <div className="mt-2">
                                <button
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#0066AE] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                    onClick={() => handleLogin()}
                                >
                                    Login
                                </button>
                            </div>
                        </Link>

                        <div className="w-full h-[0.5px] bg-black mt-3"></div>
                        <div className="mb-2">
                            <a className="text-xs text-blue-600 hover:underline flex justify-center mt-2">
                                Forget Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Page;
