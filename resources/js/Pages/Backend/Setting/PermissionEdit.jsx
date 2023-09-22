import BackendLayout from "@/Layouts/BackendLayout";
import SettingLayout from "@/Layouts/SettingLayout";
import React from "react";
import Switch from '@mui/material/Switch';
import { router } from "@inertiajs/react";

const PermissionEdit = ({ permissions, user_permissions, role }) => {
    const handleChange = (id) => {
        router.post(route('admin.permission.update', role.id),{
            'permission_id' : id,
        }, {
            onSuccess : () => {
                alert('success')
            },
            onError : (e) => {
                console.log(e)
            }
        });
    }
    return (
        <div className="my-10">
            <div className="flex flex-wrap">
                {permissions.map((item) => (
                    <div className="w-1/4" key={item.id}>
                        <label htmlFor="permission"> {item.name} </label> <br />
                        <Switch
                            checked={user_permissions.includes(item.name) ? true : false}
                            onChange={() => handleChange(item.id)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

PermissionEdit.layout = (page) => (
    <BackendLayout title="permission edit">
        <SettingLayout
            children={page}
            title="Permission Edit"
            redirect={route("admin.permission")}
        />
    </BackendLayout>
);
export default PermissionEdit;
