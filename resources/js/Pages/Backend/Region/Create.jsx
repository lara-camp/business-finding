// import React from 'react'
// import Table from '../../Test/Table'
// import BackendLayout from '@/Layouts/BackendLayout';

// const Create = ({ region }) => {
//     console.log(region)
//     return (
//         <div>
//             This is create page
//         </div>
//     )
// }

// Create.layout = page => <BackendLayout children={page} title="Region" />
// export default Create

//
import BackendLayout from '@/Layouts/BackendLayout'
import React, { useState } from 'react'
import { Link, router } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import Swal from "sweetalert2";

const Create = () => {
    const [values, setValues] = useState({
        'name': "",
        'type': "",
        'name_mm': ""
    })

    const { errors } = usePage().props;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/region/create', values, {
            onSuccess: () => {
                Swal.fire("Region Created Successfully");
            }
        });
    }
    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> Region Create </h3>
                    <div>
                        <Link href="/admin/regions" className='btn btn-sm btn-secondary' > Back </Link>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Create Region </h5>
                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> Name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='name'
                                className='form-control'
                                placeholder='Enter Name'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.name && <div className="text-danger text-center my-2"> {errors.name} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="type"> Type </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='type'
                                className='form-control'
                                placeholder='Enter Type Region or State'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.email && <div className="text-danger text-center my-2"> {errors.type} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name_mm"> MM-Name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='name_mm'
                                className='form-control'
                                placeholder='Enter Type Myanmar Name'
                                onChange={handleOnChange}
                            />
                        </div>
                        {errors.email && <div className="text-danger text-center my-2"> {errors.name_mm} </div>}
                    </div>
                    <div className="row mx-3">
                        <div className="col-md-12">
                            <div className="text-end">
                                <button
                                    type='submit'
                                    className='btn btn-sm btn-secondary text-dark'> Submit </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Create.layout = page => <BackendLayout children={page} title="User Create" />
export default Create



