import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout';

const Index = ({ cities }) => {
    console.log(cities)
    const columns = ['id', 'name', 'region_id', 'created_at', 'action'];
    const routeName = "cities"
    const title = "city"
    return (
        <div>
            <Table data={cities} columns={columns} routeName={routeName} title={title} edit={true} />
        </div >
    )
}

Index.layout = page => <BackendLayout children={page} title="cities" />
export default Index
