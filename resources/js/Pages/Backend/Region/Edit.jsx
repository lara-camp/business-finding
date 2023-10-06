// import BackendLayout from '@/Layouts/BackendLayout'
// import React from 'react'

// const Edit = ({ region }) => {
//     return (
//         <div>
//             <h3> this is region edit </h3>
//             <p> {region.id} </p>
//             <p> {region.name} </p>
//             <p> {region.type} </p>
//         </div>
//     )
// }

// Edit.layout = page => <BackendLayout children={page} title="Region Edit" name="test" />
// export default Edit

import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'
import { useForm, usePage } from '@inertiajs/react'
import { Link, router } from '@inertiajs/react'
import Swal from "sweetalert2";

const Edit = ({ region }) => {
    console.log(region)
    const { data, setData, put } = useForm({
        'name': region.name,
        'type': region.type,
        'name_mm': region.name_mm
    })
    const { errors } = usePage().props

    const submit = (e) => {
        e.preventDefault();
        router.put(`/admin/region/edit/${region.id}`, data, {
            onSuccess: () => {
                Swal.fire("Region Updated Successfully");
            }
        });
    }

    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> Region Edit </h3>
                    <div className='m-5 text-end'>
                        <Link href="/admin/regions" className='bg-indigo-700 text-white p-2 rounded-md ' > Back </Link>
                    </div>
                </div>
            </div>
            {/* Search Component */}
            <form onSubmit={submit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Update Region </h5>
                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> Name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Name'
                                value={data.name}
                                onChange={e => setData("name", e.target.value)}
                            />
                        </div>
                        {errors.name && <div className='text-danger text-center my-2'>{errors.name}</div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="email"> Type </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                value={data.type}
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Email Address'
                                onChange={e => setData('type', e.target.value)}
                            />
                        </div>
                        {errors.type && <div className='text-danger text-center my-2'> {errors.type} </div>}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name_mm"> MM-Name </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                value={data.name_mm}
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter name_mm '
                                onChange={e => setData('name_mm', e.target.value)}
                            />
                        </div>
                        {errors.name_mm && <div className='text-danger text-center my-2'> {errors.name_mm} </div>}
                    </div>

                    <div className="row mx-3">
                        <div className="col-md-12">
                            <div className="text-end m-5">
                                <button
                                    type='submit'
                                    className='bg-indigo-700 text-white p-2 rounded-md'> Update </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

Edit.layout = page => <BackendLayout children={page} title="Region Edit" />
export default Edit

