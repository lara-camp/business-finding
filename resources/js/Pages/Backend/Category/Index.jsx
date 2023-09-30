import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({categories}) => {
  const columns = ['id', 'name', 'slug', 'created_at', 'action']
  const routeName = 'category'
  const title = 'category'
  return (
    <div>
          <Table
            data={categories}
            columns={columns}
            routeName={routeName}
            title={title}
            add={true}
            edit={true}
            view={true}
            destroy={true} />
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
