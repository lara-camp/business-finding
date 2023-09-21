import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Edit = ({faq}) => {
  return (
    <div>
      <h3> this is faq edit </h3>
      <p> {faq.id} </p>
      <p> {faq.question} </p>
      <p> {faq.answer} </p>
      <p> {faq.status} </p>
    </div>
  )
}

Edit.layout = page => <BackendLayout children={page} title="Faq Edit" />
export default Edit
