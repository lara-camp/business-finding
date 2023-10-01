import BusinessContext from "@/Context/BusinessContext";
import React from "react";
import { useState } from "react";
import { useContext } from "react";

const BusinessDetails = ({ categories,regions, cities, subcategories }) => {
    const { data, setData } = useContext(BusinessContext);
    const [filteredCities, setFilteredCities ] = useState([])
    const [filteredSubcategory, setFilteredSubcategory] = useState([]);

    const hanleRegionChange = (e) => {
        const region_id = e.target.value;
        const relavantCities = cities.data.filter(item => item.region_id == region_id)
        setFilteredCities(relavantCities)
    }

    const handleCategoryChange = (e) => {
        const category_id = e.target.value;
        const relavantSubcategories = subcategories.data.filter(item => item.category_id == category_id)
        setFilteredSubcategory(relavantSubcategories);
    }

    return (
        <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
            <h5 className="font-bold">Business Detail *</h5>
            <div className="my-3">
                <p> Select Your Category </p>
                <div className="flex my-3">
                    <div className="w-1/2 me-3">
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={handleCategoryChange}
                        >
                            <option value=""> Select Category </option>
                            {categories.data.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2">
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={(e) =>
                                setData("subcategory_id", e.target.value)
                            }
                        >
                            <option value=""> Select Subcategory </option>
                            {   
                                filteredSubcategory.length > 0 
                                ? filteredSubcategory.map(item => (
                                    <option value={item.id}> {item.name}  </option>
                                ))
                                : subcategories.data.map(item => (
                                    <option value={item.id}> {item.name} </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <small className="text-slate-500">
                    Please select the category and sub-category relevent to your
                    business
                </small>
            </div>
            <div className="my-3">
                <p> Select Your Location </p>
                <div className="flex my-3">
                    <div className="w-1/2 me-3">
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={hanleRegionChange}
                        >
                            <option value=""> Select Region </option>
                            {
                                regions.data.map(item => (
                                    <option value={item.id}> {item.name} </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="w-1/2">
                        <select
                            type="text"
                            className="border-indigo-700 p-2 my-2 w-full rounded-md"
                            placeholder="Enter Your Title"
                            onChange={(e) => setData("city_id", e.target.value)}
                        >
                            <option value=""> Select City </option>
                            {
                                filteredCities.length >  0 
                                ? filteredCities.map(item => (
                                    <option value={item.id}> {item.name} </option>
                                ))
                                : cities.data.map(item => (
                                    <option value={item.id}> {item.name} </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Street"
                    className="w-full p-2 border border-indigo-700 rounded-md"
                    onChange={e => setData('street', e.target.value)}
                />
                <small className="text-slate-500">
                    Please select the location of your business
                </small>
            </div>
        </div>
    );
};

export default BusinessDetails;
