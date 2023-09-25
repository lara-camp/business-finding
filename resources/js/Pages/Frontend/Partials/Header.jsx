import { Link } from "@inertiajs/react";
import React from "react";
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'

const Header = () => {
    return (
        <div className="bg-yellow-200">
            {/* top header starts  */}
            <div className="flex mx-10 p-3 items-center">
                <div className="w-2/3">
                    <BsGlobe size={20} className="inline" />
                    <select
                        name="lang"
                        id=""
                        className="rounded border-none bg-yellow-200"
                    >
                        <option value="en"> English </option>
                    </select>
                </div>
                <div className="w-1/3 text-end">
                    <div className="flex">
                        <div className="w-1/2">
                            <Link href={route("login")}> <AiOutlineUser size={20} className="inline me-2"/> Sign In </Link>
                        </div>
                        <div className="w-1/2">
                            <Link
                                href={route("register")}
                                className="p-2 border-spacing-1 border border-gray-950"
                            >
                                {" "}
                                Register Now{" "}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* top header ends  */}
            {/* low header starts */}
            <div className="flex mx-10 p-3 items-center">
                <div className="w-1/5">Logo</div>
                <div className="w-2/5">
                    <input
                        type="text"
                        placeholder="Search a business"
                        className="w-full border-none"
                    />
                </div>
                <div className="w-1/5">
                    <select 
                        name="category" 
                        id=""
                        className="border-none"
                    >
                        <option value=""> All Categories </option>
                    </select>
                </div>
                <div className="w-1/5 ms-5 text-end">
                    <Link 
                        href=""
                        className="py-2 px-3 border bg-gray-900 text-white border-none"
                    >
                        Sell Your Business
                    </Link>
                </div>
            </div>
            {/* low header ends  */}
        </div>
    );
};

export default Header;
