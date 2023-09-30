import React from 'react'
import BackendLayout from "@/Layouts/BackendLayout";
import SettingLayout from "@/Layouts/SettingLayout";
import Table from '../../Test/Table'

const Permission = ({roles}) => {
  console.log(roles)
  const columns = ['id', 'name', 'action'];
  const routeName = "setting/permission"
  return (
    <div>
      <Table 
        data={roles} 
        columns={columns} 
        title="permission" 
        routeName={routeName}
        edit={true}
      />
    </div>
  )
}

Permission.layout = (page) => (
    <BackendLayout title="Account Setting">
        <SettingLayout children={page} title="Permission"/>
    </BackendLayout>
);
export default Permission
