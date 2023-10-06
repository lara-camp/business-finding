import OwnerLayout from "@/Layouts/OwnerLayout";
import BusinessStep from "./BusinessStep";
import React from "react";

const Create = ({ categories, regions, cities, subcategories}) => {
    return (
        <BusinessStep 
            categories={categories}
            regions={regions}
            cities ={cities}
            subcategories={subcategories}
        />
    )
};

Create.layout = (page) => <OwnerLayout title="Business" children={page} />;
export default Create;
