import FrontendLayout from "@/Layouts/FrontendLayout";
import React from "react";
import { formatNumber, formatWord, strLimit } from "@/Helper";
import { ImLocation } from "react-icons/im";
import Pagination from "@/Components/Pagination";
import { Link } from "@inertiajs/react";

const SearchBus = ({ businesses }) => {
    return (
        <div className="mx-20">
            <h1 className="font-bold text-4xl my-3"> {businesses.meta.total} {businesses.meta.total > 1 ? "Results" : "Result"} Found. </h1>
                <div className="flex mt-10 flex-wrap">
                    {businesses.data.data.map((item) => (
                        <div className="w-1/4 mx-10 border-0 py-2 px-4 bg-white shadow-md my-3">
                            <div className="relative">
                                <img
                                    src={
                                        item.image == "null"
                                            ? "https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14814.jpg"
                                            : item.image
                                    }
                                    alt=""
                                    className="w-full mt-3"
                                />
                                <p className="absolute top-2 start-2 p-2 bg-white text-sm font-bold">
                                    {formatWord(item.status)}
                                </p>
                                <p className="absolute bottom-2 end-3 p-2 bg-white text-xl font-bold">
                                    {formatNumber(item.asking_price)} MMK
                                </p>
                            </div>
                            <div className="my-3">
                                <h1 className="text-2xl font-bold">
                                    {item.title}
                                </h1>
                                <p className="my-2">
                                    <ImLocation
                                        size={20}
                                        className="inline me-3"
                                    />
                                    <span className="text-xl">
                                        {item.loc_wth_street}
                                    </span>
                                </p>
                                <p className="py-2"> {strLimit(item.description, 100)} </p>
                                <hr />
                            </div>
                            <div className="my-3">
                              <Link href="" className="p-2 bg-black text-white"> Explore Business </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    <div className="mt-10">
                    <Pagination links={businesses.links} meta={businesses.meta} />
                    </div>
                }
        </div>
    );
};

SearchBus.layout = (page) => (
    <FrontendLayout children={page} title="Search Page" />
);
export default SearchBus;
