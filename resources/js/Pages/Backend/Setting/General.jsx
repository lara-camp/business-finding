import React from 'react'
import BackendLayout from '@/Layouts/BackendLayout'
import SettingLayout from '@/Layouts/SettingLayout'
import Table from '../../Test/Table'

const General = ({gs}) => {

  const columns = ['id', 'name', 'created_at', 'action'];
  const routeName = "setting/general"
  const title = "general"
  return (
    <div className='my-4'>
      <Table 
        data={gs} 
        columns={columns} 
        routeName={routeName}
        title={title}
        view={false}
        destroy={false}
        />
    </div>
  )
}

General.layout = (page) => (
    <BackendLayout title="Account Setting">
        <SettingLayout children={page} title="General" />
    </BackendLayout>
);
export default General
