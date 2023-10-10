import React from "react";
import { useContext } from "react";
import BusinessContext from "@/Context/BusinessContext";

const ListingDetails = () => {
    const { data, setData} = useContext(BusinessContext);
    return (
        <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
            <h5 className="font-bold"> Listing Details </h5>
            <div className="my-3">
                <label htmlFor="" className="block">
                    Listing Headline *
                </label>
                <input
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="Enter Your Title"
                    onChange={(e) => setData("name", e.target.value)}
                    value={data.name}
                    required={true}
                />
                <small className="text-slate-500">
                    This serves as your listing title, with an 8-word limit. For
                    instance: "Profitable and Established Coffee Shop in Devon."
                    We'll automatically append 'For Sale' to the end, not
                    counting it in the word limit.
                </small>
            </div>
            <div className="my-3">
                <label htmlFor="" className="block">
                    General Summary *
                </label>
                <textarea
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="Summary"
                    onChange={(e) => setData("description", e.target.value)}
                    value={data.description}
                    required={true}
                />
                <small className="text-slate-500">
                    Emphasize the strengths and advantages of the business
                    you're selling. You have the freedom to provide as much or
                    as little detail as you prefer. However, please refrain from
                    including phone numbers or email addresses in the
                    description, as we will remove them to maintain privacy and
                    security.
                </small>
            </div>
            <div className="my-3">
                <p className="mb-3"> Status *</p>
                <input
                    type="radio"
                    name="status"
                    value="for_sale"
                    onChange={(e) => setData("status", e.target.value)}
                    checked={data.status === 'for_sale' ? true : false}
                    required={true}
                />
                <label htmlFor="status"> For Sale </label>
                <input
                    type="radio"
                    name="status"
                    value="under_offer"
                    className="ms-4"
                    onChange={(e) => setData("status", e.target.value)}
                    checked={data.status === 'under_offer' ? true : false}
                    required={true}
                />
                <label htmlFor="status"> Under Offer </label>
                <input
                    type="radio"
                    name="status"
                    value="sold"
                    className="ms-4"
                    onChange={(e) => setData("status", e.target.value)}
                    checked={data.status === 'sold' ? true : false}
                    required={true}
                />
                <label htmlFor="status"> Sold </label>
            </div>
        </div>
    );
};

export default ListingDetails;
