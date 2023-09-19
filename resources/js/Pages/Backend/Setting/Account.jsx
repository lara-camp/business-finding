import BackendLayout from "@/Layouts/BackendLayout";
import SettingLayout from "@/Layouts/SettingLayout";
import { Link, usePage } from "@inertiajs/react";
import ProfileImage from '../../../Images/default/profile.png'
import React from "react";

const Account = ({ user }) => {
    alert(user.image)
    return (
        <>
            <div className="info-container my-5">
                <div className="profile-img my-3 p-2">
                    <img src={ProfileImage} alt="" id="previewImg" width={200} height={200}/>
                    <input
                        type="file"
                        name="image"
                        id="profileImage"
                        style={{ display: "none" }}
                    />
                </div>
                <div className="profile-inputs flex h-80">
                    <div className="w-1/2">
                        <div className="form-control p-2 my-2">
                            <label htmlFor="name" className="text-slate-600">
                                Name
                            </label>
                            <p className="mt-3 font-bold"> {user.name.toUpperCase()} </p>
                        </div>
                        <div className="form-control p-2 my-2">
                            <label htmlFor="name" className="text-slate-600">
                                Role
                            </label>
                            <p className="mt-3">
                              {user.role.map(item => (
                                <span className="mt-3 font-bold bg-indigo-700 text-white me-2 p-2 rounded-md"> {item}  </span>
                              ))} 
                            </p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="form-control p-2 my-2">
                            <label htmlFor="name" className="text-slate-600">
                                Email
                            </label>
                            <p className="mt-3 font-bold"> {user.email} </p>
                        </div>
                        <div className="form-control p-2 my-2">
                            <label htmlFor="name" className="text-slate-600">
                                Phone
                            </label>
                            <p className="mt-3 font-bold"> {user.phone ?? "-"} </p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                      <Link href="/admin/setting/account/edit" className="bg-indigo-700 text-white p-2 rounded-md"> Edit Profile </Link>
                    </div>
                    <div className="w-1/2">
                      <Link className="bg-indigo-700 text-white p-2 rounded-md"> Edit Password </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Account.layout = (page) => (
    <BackendLayout title="Account Setting">
        <SettingLayout children={page} title="Account" href="/admin/setting/account"/>
    </BackendLayout>
);
export default Account;
