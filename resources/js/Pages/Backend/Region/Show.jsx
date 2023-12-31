import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { Link } from '@inertiajs/react'

const Show = ({ region }) => {
    return (
        <div>
            <div className='m-4'>
                <Link href="/admin/regions" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
            </div>
            <h3> this is region show </h3>
            <p> {region.name} </p>
            <p> {region.name_mm} </p>
            <p> {region.type} </p>
        </div>
    )
}

Show.layout = page => <BackendLayout children={page} title="Region show" name="test" />
export default Show
