import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Show = () => {
    return (
        <div>
            <h3> this is Owner show </h3>
        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="Owner show" name="test" />
export default Show
