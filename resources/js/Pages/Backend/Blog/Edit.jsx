import React, { useEffect, useRef, useState } from 'react';
import BackendLayout from '@/Layouts/BackendLayout';
import { router, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles


const Edit = ({ blog, errors, industries, images }) => {
    console.log(blog, images);
    const { data, setData } = useForm(
        {
            'id' : blog.id,
            'tag' : blog.tag ,
            'title' : blog.title ,
            'content' : blog.content ,
            'description': blog.body,
            'cover_image': blog.url,
            'industry_id': blog.industry_id,
            'image_attachment' : "",
        }
    );

     /* const [editorHtml, setEditorHtml] = useState(data.content);

      const handleChange = (html) => {
        setEditorHtml(html);
        setData('content', html);
      }; */
    const handleQuillChange = (html) => {
        setData('content', html);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        router.post('/admin/blog/update/'+data.id, data, {
          onSuccess: () => {
              Swal.fire("updated successfully.");
          }
      });
  };


  return (
    <div>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <h2>General Information</h2>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Title
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                name="title"
                                  placeholder="Title"
                                  value={data.title}
                                onChange={ (e) => setData('title', e.target.value)}
                              />
                            {errors.title && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Description
                            </label>
                            <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="description"
                                  id="description"
                                onChange={(e)=> setData('description', e.target.value)}
                                  placeholder="Description">{data.description}</textarea>

                            {errors.description && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.description}
                                </p>
                            )}

                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Tags
                            </label>
                            <select
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tag"
                                type="text"
                                name="tag"
                                placeholder="category"
                                onChange={ (e) => setData('tag', e.target.value)}
                              >
                                  <option key={0} value={0}>Choose Tags</option>
                                  <option key={1} value={'News'} selected={data.tag == 'News'}>News</option>
                                  <option key={2} value={'Guide'} selected={data.tag == 'Guide'}>Guide</option>
                                  <option key={3} value={'Advice for buyers'} selected={data.tag == 'Advice for buyers'}>Advice for buyers</option>
                                  <option key={4} value={'Advice for sellers'} selected={data.tag == 'Advice for sellers'}>Advice for sellers</option>
                            </select>
                            {errors.tag && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.tag}
                                </p>
                            )}
                          </div>
                        <div class="mb-4 mt-5">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                                Industry Name
                            </label>
                            <select
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="industry_id"
                                type="text"
                                name="industry_id"
                                placeholder="category"
                                onChange={ (e) => setData('industry_id', e.target.value)}
                              >
                                  <option key={0} value={0}>Choose Industry</option>
                            {industries.map((item) => (
                                <option key={item.id} value={item.id} selected={item.id == data.industry_id}>
                                {item.name}
                                </option>
                            ))}
                              </select>
                            {errors.industry_id && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.industry_id}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div class="bg-white rounded-lg shadow-lg p-6 ml-4">

                        <h1>File Attachments</h1>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Cover Image
                              </label>
                              <img src={data.cover_image} className='w-30 h-30-auto mb-3'/>
                                <input type="file"
                                    name="coverImage"
                                    id="coverImage"
                                    onChange={ (e) => setData('cover_image', e.target.files[0])}
                                  class="w-75 h-10 border rounded-md" />
                            {errors.cover_image && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.cover_image}
                                </p>
                            )}
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Image Attachment
                              </label>
                                 <div className="flex">
                                  {images.map((item, index) => (
                                    <img key={index} src={item} alt={`Image ${index}`} className="w-50 h-10 ms-2" />
                                  ))}
                                </div>
                                <input
                                    type="file"
                                    name="imageAttachment"
                                    id="imageAttachment"
                                    onChange={(e) => {
                                      // Use e.target.files to access an array of selected files
                                      const selectedFiles = e.target.files;
                                      const imageAttachments = [];

                                      // Loop through the selected files and add them to the imageAttachments array
                                      for (let i = 0; i < selectedFiles.length; i++) {
                                        imageAttachments.push(selectedFiles[i]);
                                      }
                                      setData('image_attachments', imageAttachments);
                                    }}
                                    multiple
                                  class="w-full h-10 border rounded-md mt-5" />
                            {errors.image_attachment && (
                                <p className="text-red-500 text-xs italic">
                                    {errors.image_attachment}
                                </p>
                            )}
                        </div>

                    </div>

                </div>
            </div>

            <div className='grid grid-cols-1 gap-1 mt-2' style={{ height: '200px' }}>
              <div className="bg-white rounded-lg shadow-lg p-6" style={{ height: '200px' }}>
                <h2>Content</h2>
                <ReactQuill
                  theme="snow" // Use the 'snow' theme for a standard Quill Editor
                  value={data.content || ''} // Set the initial value from data.content
                  onChange={handleQuillChange} // Handle changes
                />
                {errors.content && (
                  <p className="text-red-500 text-xs italic">
                    {errors.content}
                  </p>
                )}
              </div>
            </div>
            <div className='p-6 mt-2 text-center bg-white rounded-lg shadow-lg'>
                  <button type="submit" class="bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>

            </div>
        </form>
    </div>
  )
}

Edit.layout = page => <BackendLayout children={page} title="Blog Edit" />
export default Edit
