import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Edit = ({blog}) => {
  return (
    <div>
      <h3> this is blog edit </h3>
      <p> {blog.id} </p>
      <p> {blog.image.url} </p>
      <p> {blog.title} </p>
      <p> {blog.body} </p>
      <p> {blog.tag} </p>
      <p> {blog.user_id} </p>
      <p> {blog.status} </p>
    </div>
  )
}

Edit.layout = page => <BackendLayout children={page} title="blog Edit" />
export default Edit
