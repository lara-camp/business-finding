import React, { useEffect, useRef, useState } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Create = ({ faq, errors }) => {
    const { data, setData, post, processing } = useForm({
        question: faq.question || '',
        answer: faq.answer || '',
        status: 1,
    });

    const [status, setStatus] = useState(data.status);
    const handleStatusChange = () => {
        const newStatus = status === 1 ? 0 : 1;
        setStatus(newStatus);
        setData('status', newStatus);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('question', data.question);
        formData.append('answer', data.answer);
        formData.append('status', data.status);

        post('/admin/faq/store', formData, {
            onSuccess: () => {
                Swal.fire('Created successfully.');

            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-1 sm:grid-cols-1' style={{marginLeft: "200px", marginRight: "200px"}}>
                    <div className='col-md-12 col-lg-12 col-sm-12'>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            {/* <h2>Parent Category</h2> */}
                            <div className="mt-5 mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="question">
                                    Question
                                </label>
                                <textarea
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.question ? 'border-red-500' : ''
                                    }`}
                                    id="question"
                                    type="text"
                                    name="question"
                                    placeholder="Question"
                                    value={data.question}
                                    onChange={(e) => setData('question', e.target.value)}
                                />
                                {errors.question && (
                                    <p className="text-xs italic text-red-500">
                                        {errors.question}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="answer">
                                    Answer
                                </label>
                                <textarea
                                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                        errors.answer ? 'border-red-500' : ''
                                    }`}
                                    type="text"
                                    id="answer"
                                    value={data.answer}
                                    name="answer"
                                    onChange={(e) => setData('answer', e.target.value)}
                                    placeholder="Answer"
                                />
                                {errors.answer && (
                                    <p className="text-xs italic text-red-500">
                                        {errors.answer}
                                    </p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Status
                                </label>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        name='status'
                                        id='status'
                                        checked={status === 1}
                                        onChange={handleStatusChange}
                                    />
                                    <span className="slider round"></span>
                                </label>
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

Create.layout = (page) => <BackendLayout children={page} title="Category Create" />;
export default Create;
