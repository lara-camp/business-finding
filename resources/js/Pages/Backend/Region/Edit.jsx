import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Edit = ({ region }) => {
    return (
        <div>
            <h3> this is region edit </h3>
            <p> {region.id} </p>
            <p> {region.name} </p>
            <p> {region.type} </p>
        </div>
    )
}

Edit.layout = page => <BackendLayout children={page} title="Region Edit" name="test" />
export default Edit
