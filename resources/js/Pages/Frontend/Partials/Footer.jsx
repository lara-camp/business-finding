import React from 'react'
import { usePage } from '@inertiajs/react'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  const {general_setting} = usePage().props;
  return (
    <div className='bg-yellow-50 p-3'>
      <div className="mx-5">

        {/* Top Footer starts */}
        <div className="flex">
          <div className="w-1/2"> Logo </div>
          <div className="w-1/2">
            <ul className='flex justify-between'>
              <li> <a href="">Home</a> </li>
              <li> <a href="">Categories</a> </li>
              <li> <a href="">Locations</a> </li>
              <li> <a href="">Blogs</a> </li>
              <li> <a href="">About Us</a> </li>
              <li> <a href="">Contact Us</a> </li>
            </ul>
          </div>
        </div>
        {/* Top Footer Ends  */}

        {/* Button Footer Starts  */}
        <div className="flex mt-12">
          <div className="w-4/5"> {general_setting.title} @ {new Date().getFullYear()}. <span> All Right Preserved.</span> </div>
          <div className="w-1/5 text-end">
            <ul className='flex justify-between'>
              <li> <a href=""> <BsFacebook /></a> </li>
              <li> <a href=""> <BsInstagram /></a> </li>
              <li> <a href=""> <BsTwitter /> </a> </li>
              <li> <a href=""><BsLinkedin /></a> </li>
              <li> <a href=""><BsYoutube /></a> </li>
            </ul>
          </div>
        </div>
        {/* Button Footer Ends  */}
      </div>
    </div>
  )
}

export default Footer
