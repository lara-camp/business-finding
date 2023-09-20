import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout';

const Index = ({regions}) => {
    const columns = ['id', 'name','type', 'created_at', 'action'];
    const routeName = "region"
  return (
    <div>
      <Table data={regions} columns={columns} routeName={routeName} />
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Regions" />
export default Index
