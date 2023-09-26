import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout';

const Index = ({regions}) => {
    const columns = ['id', 'name','type', 'created_at', 'action'];
    const routeName = "region"
    const title = "region"
  return (
    <div>
      <Table data={regions} columns={columns} routeName={routeName} title={title} edit={true} view={true} />
    </div >
  )
}

Index.layout = page => <BackendLayout children={page} title="Regions" />
export default Index
