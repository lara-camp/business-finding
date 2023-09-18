import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Edit = ({user}) => {
  return (
    <div>
      <h3> this is user edit </h3>
      <p> {user.id} </p>
      <p> {user.name} </p>
      <p> {user.email} </p>
    </div>
  )
}

Edit.layout = page => <BackendLayout children={page} title="User Edit" />
export default Edit
