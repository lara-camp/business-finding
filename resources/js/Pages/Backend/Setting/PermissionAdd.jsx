import BackendLayout from '@/Layouts/BackendLayout'
import SettingLayout from '@/Layouts/SettingLayout'
import React from 'react'

const PermissionAdd = () => {
  return (
    <div>
      this is permission add 
    </div>
  )
}

PermissionAdd.layout = page => 
<BackendLayout title="Permission Edit">
    <SettingLayout children={page} title="Permission/Edit" redirect={route('admin.permission')} />
</BackendLayout>
export default PermissionAdd
