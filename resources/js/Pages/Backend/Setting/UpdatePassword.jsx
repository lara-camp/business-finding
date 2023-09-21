import BackendLayout from "@/Layouts/BackendLayout";
import SettingLayout from "@/Layouts/SettingLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";

const UpdatePassword = () => {
    const {data, setData, reset} = useForm({
        'current_password' : "",
        'new_password' : "",
        'confirm_password' : "",
    }) 
    const {url} =  usePage();
    const { errors } = usePage().props

    function submit (e) {
        e.preventDefault()
        router.post(url, data, {
            preserveScroll : true,
            onSuccess : () => {
                alert('success')
            },
            onError : (e) => {
                console.log(e)
            }
        });
    }

    return (
        <div className="my-3">
            <h2 className="text-xl my-10"> Change Password </h2>
            <form action="" onSubmit={submit}>
            <div className="my-3">
                <div className="form-control my-2">
                    <label htmlFor="name" className="text-slate-600">
                        Current Password
                    </label>
                    <input
                        type="password"
                        name="current_password"
                        className="w-full rounded-md mt-3 border-indigo-500"
                        onChange={e => setData('current_password', e.target.value)}
                    />
                    {errors.current_password && <div className="text-red-700 my-2"> {errors.current_password} </div>}
                </div>
                <div className="form-control my-2">
                    <label htmlFor="name" className="text-slate-600">
                        New Password
                    </label>
                    <input
                        type="password"
                        name="new_password"
                        className="w-full rounded-md mt-3 border-indigo-500"
                        onChange={e => setData('new_password', e.target.value)}
                    />
                    {errors.new_password && <div className="text-red-700 my-2"> {errors.new_password} </div>}
                </div>
                <div className="form-control my-2">
                    <label htmlFor="name" className="text-slate-600">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirm_password"
                        className="w-full rounded-md mt-3 border-indigo-500"
                        onChange={e => setData('confirm_password', e.target.value)}
                    />
                    {errors.confirm_password && <div className="text-red-700 my-2"> {errors.confirm_password} </div>}
                </div>
            </div>
            <div className="my-10">
                <button className="p-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-400"> Save </button>
            </div>
            </form>
        </div>
    );
};

UpdatePassword.layout = (page) => (
    <BackendLayout title="Password Update">
        <SettingLayout
            children={page}
            title="Change Password"
            redirect="/admin/setting/account"
        />
    </BackendLayout>
);
export default UpdatePassword;
