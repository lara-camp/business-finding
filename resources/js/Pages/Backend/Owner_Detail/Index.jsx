import React from "react";
import Table from "../../Test/Table";
import BackendLayout from "@/Layouts/BackendLayout";

const Index = ({ ownerdetails }) => {
    const columns = [
        "id",
        "user_name",
        // "address",
        "company",
        "action",
    ];
    const routeName = "owner";
    const title = "ownerdetail";
    return (
        <div>
            <Table
                data={ownerdetails}
                columns={columns}
                routeName={routeName}
                title={title}
                add={true}
                edit={true}
                view={true}
                destroy={true}
            />
        </div>
    );
};

Index.layout = (page) => <BackendLayout children={page} title="owner" />;
export default Index;
