import BusinessContext from "@/Context/BusinessContext";
import React from "react";
import { useContext } from "react";

const FinicialDetails = () => {
    const { data, setData } = useContext(BusinessContext);
    return (
        <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
            <h5 className="font-bold">Finicial Detail *</h5>
            <div className="my-3">
                <p className="mb-3"> Property Status *</p>
                <input
                    type="radio"
                    checked
                    name="status"
                    value="real_property"
                    onChange={e => setData('property_status', e.target.value)}
                />
                <label htmlFor="status"> Real Property </label>
                <input
                    type="radio"
                    name="status"
                    className="ms-4"
                    value="lease"
                    onChange={e => setData('property_status', e.target.value)}
                />
                <label htmlFor="status"> Lease </label>
                <input
                    type="radio"
                    name="status"
                    className="ms-4"
                    value="both_freehold_and_leasehold"
                    onChange={e => setData('property_status', e.target.value)}
                />
                <label htmlFor="status"> Both Freehold and Leasehold </label>
                <input
                    type="radio"
                    name="status"
                    className="ms-4"
                    value="n/a"
                    onChange={e => setData('property_status', e.target.value)}
                />
                <label htmlFor="status"> N/A </label>
            </div>

            {/* Asking Price starts */}
            <div className="my-3">
                <h5 className="font-bold"> Asking Price *</h5>
                <div className="flex items-center my-3">
                    <div className="w-5/12 me-3">
                        <p> Select the price range </p>
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('asking_price', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="text-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('asking_price', e.target.value)}
                        />
                    </div>
                </div>
                <small className="text-slate-500">
                    Many prospective buyers utilize our business database to
                    filter listings based on their asking price. Opting for the
                    "Undisclosed" option could potentially result in some buyers
                    not discovering your listing.
                </small>
            </div>
            {/* Asking Price ends  */}

            {/* Revenue Price starts  */}
            <div className="my-3">
                <h5 className="font-bold"> Sale Revenue *</h5>
                <div className="flex items-center my-3">
                    <div className="w-5/12 me-3">
                        <p> Select the price range </p>
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('asking_price', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="text-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('asking_price', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* Revenue Price ends  */}

            {/* Cash Flow starts */}
            <div className="my-3">
                <h5 className="font-bold"> Cash Flow *</h5>
                <div className="flex items-center my-3">
                    <div className="w-5/12 me-3">
                        <p> Select the price range </p>
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('cash_flow', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="text-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('cash_flow', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* Cash Flow ends  */}

            {/* Inventory value starts */}
            <div className="my-3">
                <h5 className="font-bold"> Inventory Value *</h5>
                <div className="flex items-center my-3">
                    <div className="w-5/12 me-3">
                        <p> Select the price range </p>
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('inventory_value', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="text-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('inventory_value', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* Inventory Value ends  */}

            {/* Net Income starts */}
            <div className="my-3">
                <h5 className="font-bold"> Net Income *</h5>
                <div className="flex items-center my-3">
                    <div className="w-5/12 me-3">
                        <p> Select the price range </p>
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('net_income', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="text-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('net_income', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* Net Income ends  */}
        </div>
    );
};

export default FinicialDetails;
