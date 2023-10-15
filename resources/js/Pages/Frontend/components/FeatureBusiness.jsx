import { formatNumber, formatWord } from "@/Helper";
import { Link } from "@inertiajs/react";
import React from "react";
import { ImLocation } from "react-icons/im";

const FeatureBusiness = ({ businesses }) => {
    return (
        <div className="bg-slate-50">
            <div className="my-10 py-20 mx-20">
                <h1 className="text-4xl ms-10 font-bold">
                    {" "}
                    Featured Business{" "}
                </h1>
                <div className="flex justify-between mt-10">
                    {businesses.data.map((item) => (
                        <div className="w-1/3 mx-10 border-0 py-2 px-4 bg-white shadow-md relative bus-card">
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
                                    {" "}
                                    {formatWord(item.status)}{" "}
                                </p>
                                <p className="absolute bottom-2 end-3 p-2 bg-white text-xl font-bold">
                                    {" "}
                                    {formatNumber(item.asking_price)} MMK{" "}
                                </p>
                            </div>
                            <div className="my-3">
                                <h1 className="text-2xl font-bold">
                                    {" "}
                                    {item.title}{" "}
                                </h1>
                                <p className="my-2">
                                    <ImLocation
                                        size={20}
                                        className="inline me-3"
                                    />
                                    <span className="text-xl">
                                        {item.loc_wth_street}{" "}
                                    </span>
                                </p>
                                <p className="py-2"> {item.description} </p>
                                <hr />
                            </div>
                            <HoverBusSec item={item} />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

const HoverBusSec  = ({item}) => {
    return (
        <div className="absolute top-0 w-full bg-yellow-600 start-0 h-full p-2 bus-hover-card">
            <h1 className="text-2xl font-bold"> {item.title} </h1>
            <div className="flex items-center my-3 border-b-2 border-b-slate-950 pb-3">
                <ImLocation
                    size={20}
                    className="inline me-3"
                />
                <h1 className="text-xl font-bold"> {item.loc_wth_street} </h1>
            </div>
            {/* Price Section  */}
            <div className="flex">
                <div className="w-1/2">
                    <table className="bus-hover">
                        <tbody>
                            <tr>
                                <td> Grosss Revenue:  </td>
                                <td> {item.revenue_price ?? ' -'} </td>
                            </tr>
                            <tr>
                                <td> Inventory:  </td>
                                <td> {item.inventory_price ?? ' -'} </td>
                            </tr>
                            <tr>
                                <td> Cashflow:  </td>
                                <td> {item.cash_flow ?? ' -'} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-1/2">
                    <table className="bus-hover">
                        <tbody>
                            <tr>
                                <td> EBITBA:  </td>
                                <td> {item.revenue_price ?? ' -'} </td>
                            </tr>
                            <tr>
                                <td> Employee:  </td>
                                <td> {item.inventory_price ?? ' -'} </td>
                            </tr>
                            <tr>
                                <td> Established:  </td>
                                <td> {item.cash_flow ?? ' -'} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Features Section */}
            <div className="my-3">
                <h1 className="text-3xl font-bold"> Features </h1>
            </div>

            <Link href={route('business.detail', item.id)} className="p-2 bg-black text-white w-full block text-center"> Contact the seller </Link>
        </div>
    )
}
export default FeatureBusiness;
