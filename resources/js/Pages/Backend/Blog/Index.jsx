import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({blogs}) => {
  const columns = ['id', 'image', 'title', 'body', 'tag', 'user_id', 'status', 'created_at', 'action']
  const routeName = 'blog'
    console.log(blogs);
  return (
      <div>
      {<Table data={blogs} columns={columns} routeName={routeName} />}
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
