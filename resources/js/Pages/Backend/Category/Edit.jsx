import React, { useEffect, useRef } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Edit = ({ category, errors }) => {
    console.log(category);
    const { data, setData, post, processing } = useForm({
        id : category.id,
        category_name: category.name ,
        slug: category.slug ,
        image: category.image,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('category_name', data.category_name);
        formData.append('slug', data.slug);
        formData.append('image', data.image);

        post('/admin/category/update/'+data.id, formData, {
            onSuccess: () => {
                Swal.fire('Updated successfully.');

            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='col-md-12 col-lg-12 col-sm-12'>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2>Parent Category</h2>
                            <div className="mb-4 mt-5">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">
                                    Category Name
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.category_name ? 'border-red-500' : ''
                                    }`}
                                    id="category_name"
                                    type="text"
                                    name="category_name"
                                    placeholder="Category"
                                    value={data.category_name}
                                    onChange={(e) => setData('category_name', e.target.value)}
                                />
                                {errors.category_name && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.category_name}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                                    Slug
                                </label>
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.slug ? 'border-red-500' : ''
                                    }`}
                                    type="text"
                                    id="slug"
                                    value={data.slug}
                                    name="slug"
                                    onChange={(e) => setData('slug', e.target.value)}
                                    placeholder="Slug"
                                />
                                {errors.slug && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.slug}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                    Image Attachment
                                </label>
                                <img src={ data.image } />
                                <input
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.image ? 'border-red-500' : ''
                                    }`}
                                    type="file"
                                    id="image"
                                    name="image"
                                    // value={data.image}
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />
                                {errors.image && (
                                    <p className="text-red-500 text-xs italic">
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

Edit.layout = (page) => <BackendLayout children={page} title="Category Edit" />;
export default Edit;
