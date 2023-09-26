import React from 'react'
import Table from '../../Test/Table'
import BackendLayout from '@/Layouts/BackendLayout';

const Index = ({ cities }) => {
    console.log(cities)
    const columns = ['id', 'name', 'region_id', 'created_at', 'action'];
    const routeName = "cities"
    return (
        <div>
            <Table data={cities} columns={columns} routeName={routeName} />
        </div >
    )
}

Index.layout = page => <BackendLayout children={page} title="cities" />
export default Index
