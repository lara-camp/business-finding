import BackendLayout from '@/Layouts/BackendLayout'
import SettingLayout from '@/Layouts/SettingLayout'
import React from 'react'

const GeneralEdit = () => {
  return (
    <div className='my-3'>
        
    </div>
  )
}

GeneralEdit.layout = page => 
<BackendLayout title="General Setting Edit">
    <SettingLayout children={page} redirect="/admin/setting/general" title="General/Edit"/>
</BackendLayout>
export default GeneralEdit
