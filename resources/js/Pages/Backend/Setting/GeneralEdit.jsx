import BackendLayout from '@/Layouts/BackendLayout'
import SettingLayout from '@/Layouts/SettingLayout'
import { useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'
import { router } from '@inertiajs/react'

const GeneralEdit = ({gs}) => {
  const [previewImg, setPreviewImg] = useState(gs.type == "file" ? gs.value : "")
  const {data, setData} = useForm({
    'name' : gs.name,
    'value' : gs.value,
    'image' : null, 
  })
  const {errors} = usePage().props;
  function submit(e) {
    e.preventDefault();
    router.post(route('admin.general.update', gs.id), data, {
      preserveScroll : true,
      forceFormData: true,
      onSuccess : () => {
        alert('success');
      },
      onError : (e) => {
        console.log(e)
      }
    });
  }

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]
    setData('image', selectedFile)
    // Read the selected file as a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
    const dataURL = e.target.result;
    setPreviewImg(dataURL);
    };
    reader.readAsDataURL(selectedFile);
  }

  return (
    <React.Fragment>
      <div className="my-3">
            <h2 className="text-xl my-10"> Change Password </h2>
            <form action="" onSubmit={submit}>
            <div className="my-3">
                <div className="form-control my-2">
                    <label htmlFor="name" className="text-slate-600">
                        Name
                    </label>
                    <input
                        value={data.name}
                        type="text"
                        name="name"
                        className="w-full rounded-md mt-3 border-indigo-500"
                        onChange={e => setData('name', e.target.value)}
                    />
                    {errors.name && <div className="text-red-700 my-2"> {errors.name} </div>}
                </div>
                {
                  gs.type == "file" 
                  ?
                  <div className="form-control my-2">
                      <img src={previewImg} alt="" width={200} height={200} className='rounded-md my-5'/>

                      <input
                          type="file"
                          className="w-full rounded-md mt-3 border-indigo-500"
                          onChange={handleImageChange}
                      />
                      {errors.image && <div className="text-red-700 my-2"> {errors.image} </div>}
                  </div> 
                  : 
                  <div className="form-control my-2">
                      <label htmlFor="name" className="text-slate-600">
                          Value
                      </label>
                      <input
                          value={data.value}
                          type={gs.type == "string" ? 'text' : 'number'}
                          name="value"
                          className="w-full rounded-md mt-3 border-indigo-500"
                          onChange={e => setData('value', e.target.value)}
                      />
                      {errors.value && <div className="text-red-700 my-2"> {errors.value} </div>}
                  </div>
                }
                
            </div>
            <div className="my-10">
                <button className="p-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-400"> Save </button>
            </div>
            </form>
        </div>
    </React.Fragment>
  )
}

GeneralEdit.layout = page => 
<BackendLayout title="General Setting Edit">
    <SettingLayout children={page} redirect="/admin/setting/general" title="General/Edit"/>
</BackendLayout>
export default GeneralEdit
