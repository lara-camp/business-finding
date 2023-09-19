import { Link } from "@inertiajs/react";
import React from "react";
import {usePage} from "@inertiajs/react";

const SettingLayout = ({ children, title, redirect }) => {
    const {url} = usePage();
    return (
        <div>
            <div className="bg-slate-50 p-5 rounded-md">
                <div className="flex">
                    <div className="w-2/3">
                        <p> Setting/ {title} </p>
                    </div>
                    <div className="w-1/3 text-end">
                        <Link
                        className="bg-red-700 hover:bg-red-500 text-white p-2 rounded-md"
                        href={redirect}
                        > Back </Link>
                    </div>
                </div>
                
            </div>
            <div className="mx-5 my-7 p-5 bg-slate-100 rounded-sm">
                <div className="flex flex-between">
                    <Link  
                        href="/admin/setting/account"
                        className={`me-5 hover:text-slate-400 ${url.startsWith('/admin/setting/account') ? 'text-yellow-500' : ""}`}>
                        Account Setting
                    </Link>
                    <Link 
                        href="/admin/setting/general"
                        className={`me-5 hover:text-slate-400 ${url.startsWith('/admin/setting/general') ? 'text-yellow-500' : ""}`}>
                        General Setting
                    </Link>
                    <Link 
                        href="/admin/setting/permission"
                        className={`me-5 hover:text-slate-400 ${url.startsWith('/admin/setting/permission') ? 'text-yellow-500' : ""}`}>
                        Permission Setting
                    </Link>
                </div>
                <div className="setting-content">
                    {/* setting content goes here  */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SettingLayout;

{/* <div className="form-control p-2">
    <label htmlFor="name" className="text-slate-600">
        {" "}
        Name{" "}
    </label>
    <input
        type="text"
        name="name"
        id="name"
        className="block rounded-md w-full mt-3"
    />
</div>; */}
