import React from 'react'

const Footer = ({title}) => {
  return (
    <div className='bg-slate-300 p-3'>
        <div className='flex flex-between mx-10'>
            <div className="w-1/2"> Copy Right {title} 2023 </div>
            <div className="w-1/2 text-end"> Developed by Team CodeArtisan</div>
        </div>
    </div>
  )
}

export default Footer
