import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({ categories }) => {
  const columns = ['id', 'name', 'slug', 'created_at', 'action']
  const routeName = 'category'
  return (
    <div>
      <Table data={categories} columns={columns} routeName={routeName} />
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
