import FrontendLayout from "@/Layouts/FrontendLayout";
import React from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { usePage } from "@inertiajs/react";
import BusinessImage from '../../../../public/image/contact/business.png'
import CEOImage from '../../../../public/image/contact/ceo.png'
import SellerImage from '../../../../public/image/contact/seller.png'
import ShoppingImage from '../../../../public/image/contact/shopping.png'

const Contact = () => {
    const { nav_data } = usePage().props;
    return (
        <div>
            {/* header  */}
            <div
                className="bg-fixed w-full h-[25rem] bg-no-repeat bg-center bg-cover relative"
                style={{
                    backgroundImage:
                        "url('https://s3-alpha-sig.figma.com/img/f91a/ef93/27240f5bc07cd7a0a2e36351a803aa8e?Expires=1698624000&Signature=Ur76SQgfUnbCUF3qSRwrjOdRRgozx24n1e4DRSJFkXaitmVf34u-47G0GPOHTcNzuD2fkcVxuaRpd3-xwCel~af593jbat6k-jvBXgLsCR3CKQpZVJwvIEBr8nw3eDxhA7FJxeX4MaL8d9Epg7DGJLcoi9XsVCJ7~-PoriBuxk-2VNApPexA~2PjrnQG7~1UN4nf9a993~PSz0Y8-3ucps~o6x5utqUDVbz6FMhbSQm9fLBXjICT3MEUVscggpRi-fWUERzyViOJx4PbSV5PuwM4~ZyzR4iAwaqB-iHPOlmtCnV0kQ1qKienxykYG0UoatRocNeU4xKuZ45OLUynJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
                }}
            >
                <div className="absolute start-20 top-10 w-[400px]">
                    <h1 className="text-4xl text-white font-bold">
                        {" "}
                        Have Questions?{" "}
                    </h1>
                    <p className="text-white font-bold text-2xl">
                        {" "}
                        Fill out this form and submit it
                    </p>
                    <p className="text-white text-justify">
                        Whether you have questions, feedback, or you're
                        interested in partnership opportunities, we're here to
                        help. Reach out to us through the provided contact
                        details or connect with us on social media. Your input
                        is essential in helping us improve and better serve our
                        community.
                    </p>
                </div>
            </div>

            {/* middle  */}
            <div className="relative bg-yellow-50 p-5">
                <div className="w-1/3 ms-20">
                    <div className="my-3">
                        <h1 className="text-2xl font-bold">
                            {" "}
                            Contact Information{" "}
                        </h1>
                        <p className="my-3">
                            <ImLocation size={25} className="inline me-3" /> 123
                            Main Street, Cityville, State 12345, USA
                        </p>
                        <p className="my-3">
                            <BsFillTelephoneFill
                                size={25}
                                className="inline me-3"
                            />{" "}
                            (123) 456789
                        </p>
                        <p className="my-3">
                            <AiOutlineMail size={25} className="inline me-3" />{" "}
                            info@gmail.com
                        </p>
                    </div>
                    <div className="my-5">
                        <h1 className="text-2xl font-bold">
                            {" "}
                            Customer Support Hours{" "}
                        </h1>
                        <p className="my-3">
                            {" "}
                            Monday - Friday 9:00 AM - 6:00 PM (EST){" "}
                        </p>
                        <p className="my-3">
                            {" "}
                            Saturday 10:00 AM - 4:00 PM (EST){" "}
                        </p>
                        <p> Sunday Closed </p>
                    </div>
                    <div className="my-5">
                        <h1 className="text-2xl font-bold">
                            {" "}
                            Connect With Us{" "}
                        </h1>
                        <p className="my-3"> Sunday Closed </p>
                    </div>
                </div>
                <div className="absolute end-20 top-[-50%] w-3/5">
                    <div className=" bg-white p-5">
                        <div className="flex">
                            <div className="w-1/2 me-3">
                                <label htmlFor="firstname" className="block">
                                    {" "}
                                    First Name{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="eg.Henery"
                                    className="w-full my-3"
                                />
                            </div>
                            <div className="w-1/2 me-3">
                                <label htmlFor="firstname" className="block">
                                    {" "}
                                    Last Name{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cavill"
                                    className="w-full my-3"
                                />
                            </div>
                        </div>
                        {/* Email and phone number  */}
                        <div className="flex">
                            <div className="w-1/2 me-3">
                                <label htmlFor="firstname" className="block">
                                    {" "}
                                    Email{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="name@gmail.com"
                                    className="w-full my-3"
                                />
                            </div>
                            <div className="w-1/2 me-3">
                                <label htmlFor="firstname" className="block">
                                    {" "}
                                    Phone Number{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="+959 737372882"
                                    className="w-full my-3"
                                />
                            </div>
                        </div>

                        {/* Location and phone number  */}
                        <div className="flex">
                            <div className="w-1/2 me-3">
                                <label htmlFor="firstname" className="block">
                                    {" "}
                                    Email{" "}
                                </label>
                                <select className="w-full my-3">
                                    <option value=""> Select Locations </option>
                                    {nav_data.locations.data.map((item) => (
                                        <option value={item.id}>
                                            {" "}
                                            {item.name}{" "}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-1/2 me-3">
                                <label htmlFor="firstname" className="block">
                                    {" "}
                                    Phone Number{" "}
                                </label>
                                <input
                                    type="text"
                                    placeholder="+959 737372882"
                                    className="w-full my-3"
                                />
                            </div>
                        </div>

                        {/* Description  */}

                        <div>
                            <label htmlFor="firstname" className="block">
                                {" "}
                                What would you like to discuss?{" "}
                            </label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className="w-full"
                                placeholder="Tell us how we can assit you! Share your thoughts , we are here to listen and help"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer  */}
            <div className="bg-yellow-50 p-5">
                <div className="mx-20">
                  <h1 className="text-4xl font-mono font-bold"> Others ways to reach us </h1> 
                  <div className="flex my-4">
                    <div className="flex w-1/2 items-center">
                        <div>
                          <img src={ShoppingImage} alt="" className="me-4"/>
                        </div>
                        <div>
                            <h1 className="font-mono font-bold text-2xl"> Help For Buyers </h1>
                            <p> buyersupport@gmail.com </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 items-center">
                        <div>
                          <img src={BusinessImage} alt="" className="me-4"/>
                        </div>
                        <div>
                            <h1 className="font-mono font-bold text-2xl"> Help For Buyers </h1>
                            <p> buyersupport@gmail.com </p>
                        </div>
                    </div>
                  </div>
                  <div className="flex my-4">
                    <div className="flex w-1/2 items-center">
                        <div>
                          <img src={CEOImage} alt="" className="me-4"/>
                        </div>
                        <div>
                            <h1 className="font-mono font-bold text-2xl"> Help For Buyers </h1>
                            <p> buyersupport@gmail.com </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 items-center">
                        <div>
                          <img src={SellerImage} alt="" className="me-4"/>
                        </div>
                        <div>
                            <h1 className="font-mono font-bold text-2xl"> Help For Buyers </h1>
                            <p> buyersupport@gmail.com </p>
                        </div>
                    </div>
                  </div>
                </div>                       
            </div>
        </div>
    );
};

Contact.layout = (page) => (
    <FrontendLayout children={page} title="Contact Us" />
);
export default Contact;
