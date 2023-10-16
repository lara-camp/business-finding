import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({ faqs }) => {
  const columns = ['id', 'question', 'status', 'created_at', 'action']
  const routeName = 'faq'
  const title = 'faq'
  return (
    <div>
      <Table data={faqs}
            columns={columns}
            routeName={routeName}
            title = {title}
            add={true}
            edit={true}
            view={true}
            destroy={true}
      />
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
