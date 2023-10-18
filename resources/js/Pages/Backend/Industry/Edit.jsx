import React, { useEffect, useRef } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Edit = ({ industry, errors }) => {
    const { data, setData, post, processing } = useForm({
        id : industry.id,
        name: industry.name ,
        image: industry.url,
    });
    console.log(industry.url)
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', data.image);

        post('/admin/industry/update/' + data.id, formData, {
            onSuccess: () => {
                Swal.fire('update successfully.');

            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1' style={{marginLeft: "200px", marginRight: "200px"}}>
                    <div className='col-md-12 col-lg-12 col-sm-12'>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2>Industry</h2>
                            <div className="mt-5 mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="category_name">
                                    Industry Name
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.name ? 'border-red-500' : ''
                                    }`}
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Industry Name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && (
                                    <p className="text-xs italic text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="image">
                                    Image Attachment
                                </label>
                                <img src={data.image} className='w-50 h-20-auto' />
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.image ? 'border-red-500' : ''
                                    }`}
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                {errors.image && (
                                    <p className="text-xs italic text-red-500">
                                        {errors.image}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-6 mt-2 text-center bg-white rounded-lg shadow-lg'>
                    <button
                        type="submit"
                        className={`bg-blue-500 w-75 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                            processing ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={processing}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

Edit.layout = (page) => <BackendLayout children={page} title="Industry Edit" />;
export default Edit;
