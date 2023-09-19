import React from 'react'
import BackendLayout from '@/Layouts/BackendLayout'
import SettingLayout from '@/Layouts/SettingLayout'

const General = () => {
  return (
    <div>
      this is general setting page 
    </div>
  )
}

General.layout = (page) => (
    <BackendLayout title="Account Setting">
        <SettingLayout children={page} title="General" />
    </BackendLayout>
);
export default General
