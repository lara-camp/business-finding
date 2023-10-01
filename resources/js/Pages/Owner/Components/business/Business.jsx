import React from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import { AiFillUnlock, AiOutlineCloseCircle } from "react-icons/ai";
import ListingDetails from "./ListingDetails";
import BusinessDetails from "./BusinessDetails";
import FinicialDetails from "./FinicialDetails";
import BusinessImages from "./BusinessImages";
import BusinessDocuments from "./BusinessDocuments";
import BusinessSocial from "./BusinessSocial";
import { useContext } from "react";
import BusinessContext from "@/Context/BusinessContext";
import { router, usePage } from "@inertiajs/react";

const Business = ({categories, cities, regions, subcategories}) => {
    const [open, setOpen] = React.useState(true);
    const {data,featureInfo, } = useContext(BusinessContext)
    const { flash } = usePage().props
    console.log(flash.message)
    function handleSubmit(e) {
        e.preventDefault()
        router.post(route('owner.business.store'), {
            data : data,
            feature_info : featureInfo,
        },{   
            preserveScroll : true,
            preserveState : true,
            forceFormData: true,
            onsuccess : () => {
                console.log("success")
            },
            onerror : (e) => {
                console.log(e)
            }
        })
    }
    return (
            <div className="my-5 min-h-screen">
                <form onSubmit={handleSubmit}>
                    <div className="my-4">
                        <p>
                            {" "}
                            Unless marked as required ( * ), all fields are considered
                            optional. We recognize that maintaining anonymity and
                            privacy can be significant concerns when selling a business.
                            Therefore, it is not mandatory to disclose business names
                            and location details.
                        </p>
                        <p className="mt-2">
                            For optimal outcomes, we recommend completing as much
                            information as possible.
                        </p>
                    </div>
                    <div>
                        <Collapse in={open}>
                            <Alert
                                color="secondary"
                                icon={<AiFillUnlock  />}
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <AiOutlineCloseCircle size={20} />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                We take privacy issues seriously. You can be sure that your personal data is securely protected.
                            </Alert>
                        </Collapse>
                    </div>
                    <ListingDetails />
                    <BusinessDetails 
                        categories={categories} 
                        cities = {cities}
                        regions = {regions}
                        subcategories = {subcategories}
                    />
                    <FinicialDetails />
                    <BusinessImages />
                    <BusinessDocuments />
                    <BusinessSocial />
                    <div className="text-end">
                        <button 
                            className="p-2 bg-indigo-700 text-white rounded-md"
                        > 
                            Save for later 
                        </button>
                    </div>
                </form>
            </div>
        );
};

export default Business;
