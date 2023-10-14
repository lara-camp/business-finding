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
                    checked={ data.property_status === 'real_property' ? true : false}
                    name="property_status"
                    value="real_property"
                    onChange={e => setData('property_status', e.target.value)}
                    
                />
                <label htmlFor="property_status"> Real Property </label>
                <input
                    type="radio"
                    name="property_status"
                    checked={ data.property_status === 'lease' ? true : false}
                    className="ms-4"
                    value="lease"
                    onChange={e => setData('property_status', e.target.value)}
                    
                />
                <label htmlFor="property_status"> Lease </label>
                <input
                    type="radio"
                    name="property_status"
                    className="ms-4"
                    value="both_freehold_and_leasehold"
                    onChange={e => setData('property_status', e.target.value)}
                    checked={ data.property_status === 'both_freehold_and_leasehold' ? true : false}
                    
                />
                <label htmlFor="property_status"> Both Freehold and Leasehold </label>
                <input
                    type="radio"
                    name="property_status"
                    className="ms-4"
                    value="n/a"
                    onChange={e => setData('property_status', e.target.value)}
                    checked={ data.property_status === 'n/a' ? true : false}
                    
                />
                <label htmlFor="property_status"> N/A </label>
            </div>

            {/* Asking Price starts */}
            <div className="my-3">
                <h5 className="font-bold"> Asking Price *</h5>
                <div className="flex items-center my-3">
                    <div className="w-5/12 me-3">
                        <p> Select the price range </p>
                        <select
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('asking_price', e.target.value)}
                            
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="number-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('asking_price', e.target.value)}
                            value={data.asking_price}
                            
                        />
                    </div>
                </div>
                <small className="number-slate-500">
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
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('revenue_price', e.target.value)}
                            
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="number-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('revenue_price', e.target.value)}
                            value={data.revenue_price}
                            
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
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('cash_flow', e.target.value)}
                            
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="number-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('cash_flow', e.target.value)}
                            value={data.cash_flow}
                            
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
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('inventory_value', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="number-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('inventory_value', e.target.value)}
                            value={data.inventory_value}
                            
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
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={e => setData('net_income', e.target.value)}
                        >
                            <option value=""> Select Price Range </option>
                            <option value=""> 50000000 - 10000000 MMK </option>
                        </select>
                    </div>
                    <div className="w-2/12">
                        <p className="number-center"> OR </p>
                    </div>
                    <div className="w-5/12">
                        <p> Type Specific Price </p>
                        <input
                            type="number"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Specific Price"
                            onChange={e => setData('net_income', e.target.value)}
                            value={data.net_income}
                        />
                    </div>
                </div>
            </div>
            {/* Net Income ends  */}
        </div>
    );
};

export default FinicialDetails;
