import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Create = () => {
    return (
        <div>
            <p> this is Owner create page </p>
        </div>
    )
}

Create.layout = page => <BackendLayout children={page} title="Owner Create" />
export default Create
