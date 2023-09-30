import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({subcategories}) => {
  const columns = ['id', 'name', 'slug', 'category_name', 'created_at', 'action']
    const routeName = 'subcategory'
    const title = 'subcategory'
    console.log(subcategories)
  return (
      <div>
          {<Table
                data={subcategories}
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
