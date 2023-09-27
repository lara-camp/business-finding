import React, { useEffect, useRef, useState } from 'react';
// import 'summernote/dist/summernote-bs4.css';
// import 'summernote/dist/summernote-bs4';
// import 'summernote/dist/lang/summernote-en-US';
import BackendLayout from '@/Layouts/BackendLayout';
// import { useHistory } from 'react-router-dom';

const Show = () => {
    const [file, setFile] = useState(null);
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const history = useHistory();

  /* const handleChange = (event) => {
    setFile(event.target.files[0]);
  }; */

  const handleSubmit = (event) => {
      event.preventDefault();
    window.location.href = '/admin/blog/edit/1';
      /* try{
          const response =  URL('/admin/blog/edit/1', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ title, content, tag, description }),
          });
            if (response.ok)
            {
              console.log("success");
            }
      }
      catch(error) {
         console.error('Error:', error);
      } */
  };

  const summernoteRef = useRef(null);

  /* useEffect(() => {
    // Initialize Summernote when the component mounts
    $(summernoteRef.current).summernote({
      height: 300,
      callbacks: {
        onChange: (contents) => {
          // Handle the Summernote content change here
          console.log(contents);
        },
      },
    });

    return () => {
      // Destroy Summernote when the component unmounts
      $(summernoteRef.current).summernote('destroy');
    };
  }, []); */
  return (
    <div>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
                <div className='col-md-6 col-lg-6 col-sm-6'>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <h2>General Information</h2>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Title
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Title"
                                onChange={ (e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Description
                            </label>
                            <textarea
                            class="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="description"
                                  id="description"
                                onChange={(e)=> setDescription(e.target.value)}
                                placeholder="Description"></textarea>

                        </div>
                            <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Tags
                            </label>
                            <input
                            class="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                id='tags'
                                name="tags"
                                onChange= {(e)=> setTag(e.target.value)}
                                placeholder="Tags" />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <div class="bg-white rounded-lg shadow-lg p-6 ml-4">

                        <h1>File Attachments</h1>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                                Cover Image
                            </label>
                                <input type="file"
                                    name="coverImage"
                                    class="w-75 h-10 border rounded-md" />
                        </div>

                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                            Image Attachment
                        </label>
                            <input type="file" name="imageAttachment" class="w-full h-10 border rounded-md mt-5" />
                        </div>

                    </div>
                    {/* <div class="bg-white rounded-lg shadow-lg rounded-sm shadow-sm p-6">

                            <h2 class="">File Attachment</h2>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
                                    Select a File
                                </label>
                                <input
                                    class="hidden"
                                    type="file"
                                    id="file"
                                    name="file"
                                    accept=".jpg, .jpeg, .png, .pdf"
                                />
                                <label
                                    for="file"
                                    class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                                >
                                    Browse
                                </label>
                            </div>


                            <div class="border-dashed border-2 border-gray-300 p-4 text-center">
                                <p class="text-gray-600">Drag and drop your files here or</p>
                                <p class="text-blue-500">Browse</p>
                            </div>

                    </div> */}

                </div>
            </div>

            <div className='grid grid-cols-1 gap-1 mt-2'>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2>Contact</h2>
                    <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="contact"
                        id="contact"
                          placeholder="contact"
                          onChange={(e) => setContent(e.target.value)}
                      >

                      </textarea>

                </div>
            </div>
            <div className='text-center mt-2 bg-white rounded-lg shadow-lg p-6'>
                  <button type="submit" class="bg-blue-500 w-75 txt-center
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>

            </div>
        </form>
    </div>
  )
}

Show.layout = page => <BackendLayout children={page} title="Blog Create" />
export default Show
