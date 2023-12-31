import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({blogs}) => {
  const columns = ['id', 'image', 'title', 'tag', 'user_name', 'status', 'created_at']
    const routeName = 'blog'
    const title = 'blog'
    console.log(blogs);
  return (
      <div>
          {<Table
                data={blogs}
                columns={columns}
                routeName={routeName}
                title={title}
                add={true}
                edit={true}
                view={true}
                destroy={true}
          />}
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
