import FrontendLayout from "@/Layouts/FrontendLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import {IoIosReturnRight} from 'react-icons/io'
import ImageOne from '../../../../public/image/pricing/care.png'
import ImageTwo from '../../../../public/image/pricing/counting.png'
import ImageThree from '../../../../public/image/pricing/peace-symbol (1).png'
import ImageFour from '../../../../public/image/pricing/peace-symbol.png'

const pricing = [
    {
        id: 1,
        name: "Plus",
        duration: "3 months",
        og_price: "$150",
        dis_price: "$99",
        description: [
            "Comprehensive business listing with description and images",
            "Exposure to our extensive network of potential buyers",
            "Email Support",
        ],
    },
    {
        id: 2,
        name: "Pro",
        duration: "6 months",
        og_price: "$250",
        dis_price: "$199",
        description: [
            "Enhanced business listing with priority placement",
            "Increased visibility with featured status",
            "Dedicated account manager",
            "Email and phone support ",
        ],
    },
    {
        id: 3,
        name: "Advanced",
        duration: "12 months",
        og_price: "$350",
        dis_price: "$299",
        description: [
            "Premium positioning with top placement on search results",
            "Maximum exposure through targeted marketing campaigns",
            "Dedicated account manager for personalized assistance  ",
            "Email, phone, and live chat support",
        ],
    },
];

const Pricing = () => {
    return (
        <React.Fragment>
        <div className="relative">
            <img
                src="https://media.istockphoto.com/id/669887538/photo/colleagues-using-tablet-pc-in-textile-factory.jpg?s=1024x1024&w=is&k=20&c=mRZAAgUS0pv9YMrhnS5QalvndyGU1PxE7CH6vMLw2-k="
                alt=""
                className="h-[400px] w-full object-cover object-center"
            />
            <div className="absolute top-5 start-1/2 translate-x-[-50%] w-4/5 text-center">
                <h1 className="text-4xl font-bold text-white">
                    
                    Unlock the value of your business
                </h1>
                <p className="text-white">
                    
                    Discover our tailored packages designed to help you sell
                    your business successfully.
                </p>
                <div className="my-10">
                    <div className="flex justify-center item-center p-5 bg-white">
                        {pricing.map((item) => (
                            <div
                                className="w-1/3 me-3 p-3 border border-slate-800 rounded-md"
                                key={item.id}
                            >
                                <div className="text-center my-5">
                                    <h1 className="text-4xl text-yellow-500 font-bold   ">
                                        {item.name}
                                    </h1>
                                    <p className="text-black text-2xl my-2"> {item.duration} </p>
                                    <h1 className="text-4xl font-extrabold text-slate-600 my-3"> {item.og_price} </h1>
                                    <h1 className="text-4xl font-extrabold my-3"> {item.dis_price} </h1>
                                    <div className="my-3">
                                    <Link className="text-white p-2 bg-black px-3 py-3"> Start a free trial </Link>
                                    </div>
                                </div>
                                <div className="text-start my-5">
                                    {
                                        item.description.map(item => (
                                            <div className="my-3">
                                                <IoIosReturnRight size={20} className="inline text-green-500"/> {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white h-[300px]">
        </div>
        <div className="flex items-center my-5 mx-20">
            <div className="w-1/2 me-5">
                <div>
                    <h1 className="text-2xl font-bold font-mono"> Selling your business made easy</h1>
                    <p className="leading-loose text-justify">
                    We understand that selling your business can feel like a daunting task. That's why we've developed a streamlined process to make it easy and efficient. Watch our informative video below to learn how our platform can help you navigate the selling journey and maximize the value of your business.
                    </p>
                </div>
                <div className="flex my-3">
                    <div className="w-1/2 me-5">
                        <img src={ImageOne} alt="" />
                        <h1  className="text-2xl font-bold"> Create Your Listing </h1>
                        <p className="leading-loose text-justify">
                        Register an account and provide essential details about your business.
                        Showcase your business with a compelling description, high-quality images, and key selling points.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img src={ImageTwo} alt="" />
                        <h1  className="text-2xl font-bold"> Attract Potential Buyers </h1>
                        <p className="leading-loose text-justify">
                        Gain exposure to a network of interested buyers actively searching for business opportunities.
Our targeted marketing campaigns help connect your listing with the right audience.
                        </p>
                    </div>
                </div>
                <div className="flex my-3">
                    <div className="w-1/2 me-5">
                        <img src={ImageThree} alt="" />
                        <h1  className="text-2xl font-bold"> Engage and Negotiate </h1>
                        <p className="leading-loose text-justify">
                        Respond to inquiries from interested buyers and schedule meetings or virtual consultations.
                        Our platform facilitates communication and provides a secure environment for negotiations.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img src={ImageFour} alt="" />
                        <h1  className="text-2xl font-bold"> Close the deal </h1>
                        <p className="leading-loose text-justify">
                        Once you find the right buyer, finalize the details of the sale, including terms and price.
Our team is here to provide guidance throughout the closing process, ensuring a smooth transition.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais" alt="" />
            </div>
        </div>
        </React.Fragment>
    );
};

Pricing.layout = (page) => <FrontendLayout children={page} title="Pricing" />;
export default Pricing;
