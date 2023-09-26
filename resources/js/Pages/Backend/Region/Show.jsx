import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Show = ({ region }) => {
    return (
        <div>
            <h3> this is region show </h3>
            <p> {region.name} </p>
        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="Region show" name="test" />
export default Show
