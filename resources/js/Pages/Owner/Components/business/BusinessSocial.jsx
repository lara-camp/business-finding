import BusinessContext from "@/Context/BusinessContext";
import React from "react";
import { useContext } from "react";


const BusinessSocial = () => {
    const {data, setData} = useContext(BusinessContext)

    return (
        <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
            <div className="my-3">
                <p className="font-bold"> Website Address </p>
                <input
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    placeholder="https://example.com"
                    onChange={e => setData('website', e.target.value)}
                    value={data.website}
                />
                <small className="text-slate-500">
                    Add the website address of your business here.
                </small>
            </div>
            <div className="my-3">
                <p className="font-bold"> Embedded Video </p>
                <textarea
                    type="text"
                    className="border-indigo-700 p-2 my-2 w-full rounded-md"
                    onChange={e => setData('embedded_video', e.target.value)}
                    value={data.embedded_video}
                />
                <small className="text-slate-500">
                    Enter embed HTML code from YouTube, Google Video etc. (e.g. iframe or object...)
                </small>
            </div>
            
        </div>
    );
};

export default BusinessSocial;
