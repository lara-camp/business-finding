import BackendLayout from '@/Layouts/BackendLayout'
import React, { useState, useRef } from 'react'
import { Link, router } from '@inertiajs/react'
import { usePage, useForm } from '@inertiajs/react'
import Swal from "sweetalert2";


const Create = ({users}) => {
    const [imageSrc, setImageSrc] = useState()
    const { data, setData } = useForm({
        'user_id': "",
        'address': "",
        'company': "",
        'frontend_img': "",
        "backend_img": "",
    })
    console.log(data)

    const { errors } = usePage().props;

    function submit(e) {
        e.preventDefault()
        console.log(data)
        router.post(route("admin.owner.store"), data, {
            forceFormData: true,
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                console.log("success")
            },
            onError: (err) => {
                console.log(err)
            }
        })
    }

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0]
        // Read the selected file as a data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            const dataURL = e.target.result;
            setImageSrc(dataURL);
        };
        reader.readAsDataURL(selectedFile);
    }

    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h3> Owner Create </h3>
                    <div className='text-end mx-5'>
                        <Link href="/admin/owner" className='bg-indigo-700 text-white p-2 rounded-md' > Back </Link>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <form onSubmit={submit} encType="multipart/form-data">
                <div className="p-2 bg-light shadow-lg my-3">
                    <h5 className='text-center my-3'> Create User </h5>
                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="name"> User name </label>
                        </div>
                        <div className="col-md-9">
                            <select
                                name="user_id"
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                onChange={(e) => setData('user_id', e.target.value)}
                            >
                                <option value="">Select a User</option>
                                {users.data.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.user_id}
                        </p>
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="email"> Address </label>
                        </div>address
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='address'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Address'
                                onChange={(e) => setData("address", e.target.value)}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.address}
                        </p>
                        {/* {errors.address && <div className="text-danger text-center my-2"> {errors.address} </div>} */}
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="phone"> Company </label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                name='company'
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter Phone Number'
                                onChange={(e) => setData("company", e.target.value)}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.company}
                        </p>
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="image"> Front Image </label>
                        </div>
                        <div className="col-md-9">
                            <img
                                src={imageSrc}
                                alt=""
                                id="previewImg"
                                width={200}
                                height={200}
                                onClick={handleImageChange}
                                style={{ cursor: 'pointer' }}
                            />
                            <input
                                type="file"
                                name="frontend_img"
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                onChange={(e) => setData("frontend_img", e.target.files[0])}
                            // style={{ display: "none" }}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.frontend_img}
                        </p>
                    </div>

                    <div className="row my-3 mx-3">
                        <div className="col-md-3">
                            <label htmlFor="image"> Back Image </label>
                        </div>
                        <div className="col-md-9">
                            {/* <img
                                src={imageSrc}
                                alt=""
                                id="previewImg"
                                width={200}
                                height={200}
                                onClick={handleImageClick}
                                style={{ cursor: 'pointer' }}
                            /> */}
                            <input
                                type="file"
                                name="backend_img"
                                className='form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                onChange={(e) => setData('backend_img', e.target.files[0])}
                            // style={{ display: "none" }}
                            />
                        </div>
                        <p className="text-red-500 text-xs italic">
                            {errors.backend_img}
                        </p>
                    </div>
                    <div className="row mx-3">
                        <div className="col-md-12">
                            <div className="text-end m-5">
                                <button
                                    type='submit'
                                    className='bg-indigo-700 text-white p-2 rounded-md'> Submit </button>
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


