import React from "react";
import Table from "../../Test/Table";
import BackendLayout from "@/Layouts/BackendLayout";

const Index = ({ ownerdetails }) => {
<<<<<<< Updated upstream
    const columns = [
        "id",
        "user_id",
        "address",
        "company",
        "frontend_img",
        "backend_img",
        "action",
    ];
    const routeName = "owner";
    const title = "owner";
=======
    const columns = ['id', 'user_id', 'address', 'company', 'frontend_img', 'backend_img', 'action'];
    const routeName = "owner"
    const title = "ownerdetail"
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
Index.layout = (page) => <BackendLayout children={page} title="owner" />;
export default Index;
=======
Index.layout = page => <BackendLayout children={page} title="ownerdetail" />
export default Index
>>>>>>> Stashed changes
