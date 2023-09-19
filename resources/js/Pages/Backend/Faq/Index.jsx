import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({faqs}) => {
  const columns = ['id', 'question', 'answer', 'status', 'created_at', 'action']
  const routeName = 'faq'
  return (
    <div>
      <Table data={faqs} columns={columns} routeName={routeName} />
    </div>
  )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
