import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Edit = ({ city }) => {
  return (
    <div>
      <h3> this is City edit </h3>
      <p> {city.id} </p>
      <p> {city.name} </p>
      <p> {city.region_id} </p>
    </div>
  )
}

Edit.layout = page => <BackendLayout children={page} title="City Edit" />
export default Edit
