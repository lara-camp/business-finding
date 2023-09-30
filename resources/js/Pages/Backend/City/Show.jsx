import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Show = ({ city }) => {
    return (
        <div>
            <h3> this is city show </h3>
            <p> {city.name} </p>
        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="city show" name="test" />
export default Show
