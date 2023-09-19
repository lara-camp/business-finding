import React from 'react'
import BackendLayout from "@/Layouts/BackendLayout";
import SettingLayout from "@/Layouts/SettingLayout";

const Permission = () => {
  return (
    <div>
      this is permission page
    </div>
  )
}

Permission.layout = (page) => (
    <BackendLayout title="Account Setting">
        <SettingLayout children={page} title="Permission"/>
    </BackendLayout>
);
export default Permission
