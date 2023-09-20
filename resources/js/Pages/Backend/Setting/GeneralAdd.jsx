import React from 'react'
import BackendLayout from '@/Layouts/BackendLayout';
import SettingLayout from '@/Layouts/SettingLayout';

const GeneralAdd = () => {
  return (
    <div>
      this is general setting add
    </div>
  )
}

GeneralAdd.layout = (page) => (
    <BackendLayout title="General Setting">
        <SettingLayout children={page} title="General Setting Create" redirect="/admin/setting/general" />
    </BackendLayout>
);
export default GeneralAdd
