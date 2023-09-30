import React from 'react'

const BusinessDetails = ({categories}) => {
  return (
    <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
      <h5 className="font-bold">Business Detail *</h5>
      <div className='my-3'>
        <p> Select Your Category </p>
        <div className="flex my-3">
            <div className="w-1/2 me-3">
                <select
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="Enter Your Title"
                >
                    <option value=""> Select Category </option>
                    {
                        categories.data.map(item => (
                            <option key={item.id} value={item.id}> {item.name} </option>
                        ))
                    }
                </select>
            </div>
            <div className="w-1/2">
                <select
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="Enter Your Title"
                >
                    <option value=""> Select Subcategory </option>
                </select>
            </div>
        </div>
        <small className="text-slate-500">Please select the category and sub-category relevent to your business</small>
      </div>
      <div className='my-3'>
        <p> Select Your Location </p>
        <div className="flex my-3">
            <div className="w-1/2 me-3">
                <select
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="Enter Your Title"
                >
                    <option value=""> Select City </option>
                </select>
            </div>
            <div className="w-1/2">
                <select
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="Enter Your Title"
                >
                    <option value=""> Select Township </option>
                </select>
            </div>
        </div>
        <small className="text-slate-500">Please select the location of your business</small>
      </div>
    </div>
  )
}

export default BusinessDetails
