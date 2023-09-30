import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Create = () => {
    return (
        <div>
            <p> this is create page </p>
        </div>
    )
}

Create.layout = page => <BackendLayout children={page} title="City Create" />
export default Create
