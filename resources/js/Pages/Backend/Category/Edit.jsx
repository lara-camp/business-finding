import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Edit = ({category}) => {
  return (
    <div>
      <h3> this is category edit </h3>
      <p> {category.id} </p>
      <p> {category.name} </p>
      <p> {category.slug} </p>
    </div>
  )
}

Edit.layout = page => <BackendLayout children={page} title="Category Edit" />
export default Edit
