import BackendLayout from '@/Layouts/BackendLayout'
import React from 'react'

const Create = () => {

  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <section>
            <h2>General Information</h2>
            <input type="text" name="title" placeholder="Title" />
            <textarea name="description" placeholder="Description"></textarea>
            <input type="text" name="tags" placeholder="Tags" />
          </section>

          <section>
            <h2>File Attachments</h2>
            <input type="file" name="coverImage" onChange={handleChange} />
            <input type="file" name="imageAttachment" onChange={handleChange} />
          </section>

          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

Create.layout = page => <BackendLayout children={page} title="Blog Create" />
export default Create
