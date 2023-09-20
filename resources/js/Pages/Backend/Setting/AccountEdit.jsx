import React, { useState } from "react";
import BackendLayout from "@/Layouts/BackendLayout";
import SettingLayout from "@/Layouts/SettingLayout";
import ProfileImage from "@/Images/default/defaultprofile.png";
import { Link, useForm, router} from "@inertiajs/react";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

const AccountEdit = ({ user }) => {
    const [imageSrc, setImageSrc] = useState(user.image ? user.image : ProfileImage)
    const {data, setData,  processing} = useForm({
        'name' : user.name,
        'email' : user.email,
        'role' : user.role,
        'phone' : user.phone,
        'image' : "",
    })
    
    const fileInputRef = useRef(null);
    function submit(e)  {
        e.preventDefault()
        router.post('/admin/setting/account/edit', data, {
            onSuccess : () => {
                Swal.fire("Profile Updated Successfully");
            }
        })
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0]
        setData('image', e.target.files[0])
        // Read the selected file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
        const dataURL = e.target.result;
        setImageSrc(dataURL);
        };
        reader.readAsDataURL(selectedFile);
    }

    return (
        <React.Fragment>
            <Toaster />
            <form action="" onSubmit={submit} encType="multipart/form-data">
                <div className="info-container my-5">
                    <div className="profile-img my-3 p-2">
                        <img
                            src={imageSrc}
                            alt=""
                            id="previewImg"
                            width={200}
                            height={200}
                            onClick={handleImageClick}
                            style={{ cursor: 'pointer' }}
                        />
                        <input
                            type="file"
                            name="image"
                            id="profileImage"
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className="profile-inputs flex h-80">
                        <div className="w-1/2">
                            <div className="form-control p-2 my-2">
                                <label
                                    htmlFor="name"
                                    className="text-slate-600"
                                >
                                    Name
                                </label>
                                <input
                                value={data.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full rounded-md mt-3 border-indigo-500"
                                    onChange={e => setData('name', e.target.value)}
                                />
                            </div>
                            <div className="form-control p-2 my-2">
                                <label
                                    htmlFor="name"
                                    className="text-slate-600"
                                >
                                    Role
                                </label>
                                <input
                                    value={data.role}
                                    type="text"
                                    name="role"
                                    id="role"
                                    className="w-full rounded-md mt-3 border-indigo-500"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="form-control p-2 my-2">
                                <label
                                    htmlFor="name"
                                    className="text-slate-600"
                                >
                                    Email
                                </label>
                                <input
                                    value={data.email}
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="w-full rounded-md mt-3 border-indigo-500"
                                    onChange={e => setData('email', e.target.value)}
                                />
                            </div>
                            <div className="form-control p-2 my-2">
                                <label
                                    htmlFor="name"
                                    className="text-slate-600"
                                >
                                    Phone
                                </label>
                                <input 
                                    value={data.phone ?? ""}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className="w-full rounded-md mt-3 border-indigo-500"
                                    onChange={e => setData('phone', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <button
                                className="bg-indigo-700 text-white p-2 rounded-md"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

AccountEdit.layout = (page) => (
    <BackendLayout title="Account Setting">
        <SettingLayout
            children={page}
            title="Account/Edit"
            redirect="/admin/setting/account"
        />
    </BackendLayout>
);
export default AccountEdit;
