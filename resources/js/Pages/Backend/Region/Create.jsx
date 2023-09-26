import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout';

const Create = ({ region }) => {
    console.log(region)
    return (
        <div>
            This is create page
        </div>
    )
}

Create.layout = page => <BackendLayout children={page} title="Region" />
export default Create
