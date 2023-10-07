import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout'

const Index = ({ industries }) => {
    console.log(industries)
    const columns = ['id', 'name', 'image',  'created_at', 'action']
    const routeName = 'industry'
    const title = 'industry'
    return (
        <div>
            <Table
                data={industries}
                columns={columns}
                routeName={routeName}
                title={title}
                add={true}
                edit={true}
                view={true}
                destroy={true} />
        </div>
    )
}

Index.layout = page => <BackendLayout children={page} title="Welcome" />
export default Index
