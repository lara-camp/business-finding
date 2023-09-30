import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({ users }) => {
  const columns = ['id', 'name', 'email', 'created_at', 'action']
  const routeName = 'user'
  const title = 'user'
  return (
    <div>
      <Table data={users} columns={columns} routeName={routeName} title={title} />
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
