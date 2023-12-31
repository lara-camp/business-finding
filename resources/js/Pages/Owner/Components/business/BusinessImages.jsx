import React from "react";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {GoArrowSwitch} from 'react-icons/go'
import FeatureImage from '../../../../Images/default/default-featured-image.jpg'
import '../../../../Css/index.css'
import { useContext } from "react";
import BusinessContext from "@/Context/BusinessContext";
import { usePage } from "@inertiajs/react";

let initPreviewData = [];


const BusinessImages = () => {
    const [featureImgCount, setFeatureImgCount] = useState(0);
    const [featurePreviews, setFeaturePreviews] = useState(initPreviewData)
    const [selectedImages, setSelectedImages] = useState([])
    const {data, setData, featureInfo, setFeatureInfo} = useContext(BusinessContext)
    const {business} = usePage().props;

    if(data.business_features.length > 0) {
        initPreviewData = data.business_features;
    } else {
        initPreviewData = [
            {
                image : FeatureImage,
                text   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati iure deleniti sequi atque cupiditate nulla, natus id deserunt ad.",
                flex_direction : "flex-row",
            }
        ]
    }

    const addNewInputs = () => {
        if(featureImgCount >= 5) {
            alert("you can not add more")
            return false;
        }
        let newCount = parseInt(featureImgCount) + 1
        setFeatureImgCount(newCount)
        setFeaturePreviews([
            ...featurePreviews,
            {
            image : FeatureImage,
            text   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati iure deleniti sequi atque cupiditate nulla, natus id deserunt ad.",
            flex_direction : "flex-row",
            },
          ]);

        // Add New Form Data 

        setFeatureInfo([...featureInfo, {
            image : "",
            text : "",
            flex_direction : 'flex-row',
        }])
    }

    const handleFeatureImageChange = (index, e) => {
        const {files } = e.target;
        const reader = new FileReader();
        reader.onload = () => {
            const imgUrl = reader.result; 
            const updatePreviews = [...featurePreviews]
            updatePreviews[index] = {image : imgUrl, text : featurePreviews[index].text}
            setFeaturePreviews(updatePreviews)
        };
        reader.readAsDataURL(files[0]); // Start reading the selected file as a data URL

        // Add to form Data 

        const formData = [...featureInfo];
        formData[index] = {
            image : e.target.files[0], 
            text : featureInfo[index].text,
            flex_direction : featureInfo[index].flex_direction
        }
        setFeatureInfo(formData)
    }

    const handleFeatureTextChange = (index, e) => {
        const {value} = e.target;
        const updatePreviews = [...featurePreviews];
        updatePreviews[index] = {image : featurePreviews[index].image , text : value}
        setFeaturePreviews(updatePreviews)

        // Add data to form 

        const formData = [...featureInfo];
        formData[index] = {
            image : formData[index].image,
            text : value,
            flex_direction : featureInfo[index].flex_direction
        }
        setFeatureInfo(formData)
    }

    const toggleFlexDirection = (index) => {
        const updatePreviews = [...featurePreviews];
        updatePreviews[index] = {
            image : featurePreviews[index].image,
            text   : featurePreviews[index].text,
            flex_direction : 
                featurePreviews[index].flex_direction === "flex-row"
                ? "flex-row-reverse"
                : "flex-row"
        }
        setFeaturePreviews(updatePreviews)

        // Add direction to form 

        const formData = [...featureInfo]
        formData[index] = {
            image : featureInfo[index].image,
            text : featureInfo[index].text,
            flex_direction : 
                    featureInfo[index].flex_direction === "flex-row"
                    ? "flex-row-reverse"
                    : "flex-row"
        }
        setFeatureInfo(formData)
    }

    const handleImagesChange = (e) => {
        const files = Array.from(e.target.files)
        setData('show_case_images', files)
        setSelectedImages(files)
    }

    return (
        <div className="listening-details border border-indigo-700 p-3 rounded-md my-5">
            <h5 className="font-bold"> Add Photos and Description *</h5>
            <div className="my-3">
                {
                    data.show_case_images_current.length > 0 &&
                    <>
                        <p className="font-bold"> Current Images </p>
                        <div className="flex">
                        {
                            data.show_case_images_current.map(item => (
                                <div className="w-1/5 mx-2 my-3">
                                        <img 
                                        key={item.id}
                                        src={item.path}
                                        alt={`Preview ${item.id}`}
                                    />
                                </div>
                            ))
                        }
                        </div>
                    </>
                }
                <p className="mb-3 font-bold"> Show Case Photos *</p>
                <div className="flex">
                    {
                        selectedImages.map((file, index)  => (
                            <div className="w-1/5 mx-2 my-3">
                                <img 
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index}`}
                                className="img-fluid"
                            />
                            </div>
                        ))
                    }
                </div>
                <input
                    type="file"
                    name="images[]"
                    multiple
                    className=" border border-indigo-700 p-2 my-2 w-full rounded-md"
                    onChange={handleImagesChange}
                    required={!business ? true : false}
                />

                {/* Descrition list  */}
                <ul className="list-disc ms-5 text-slate-500">
                    <li>
                        <span className="font-bold"> Vital Note: </span>
                        Please refrain from uploading images without proper
                        permission or those that violate someone else's
                        copyright.
                    </li>
                    <li>
                        You have the option to upload a maximum of 15 images.
                        Listings with images and photographs tend to attract
                        more responses.
                    </li>
                    <li>
                        Please be aware that photographs revealing your
                        business's name and location will not be visible until
                        you purchase an advertising package.
                    </li>
                    <li>
                        Ensure that the picture format is in jpg, gif, png,
                        tiff, or bmp.
                    </li>
                    <li>
                        Avoid using excessively large images, as those exceeding
                        10MB may not be accepted.
                    </li>
                </ul>
            </div>
            <div className="my-3">
                
                <p> More Special Featured Photos</p>
                {
                    featureInfo.map((item, index) => (
                        <div className="" key={index}>
                            <div className="w-full preview-img-feature my-4 p-2 border border-indigo-700 rounded-md">
                                <div className={`flex ${featurePreviews[index].flex_direction} items-start`}>
                                    <div className="w-5/12">
                                        <img src={featurePreviews[index].image} alt="" className="img-fluid w-1/2"/>
                                    </div>
                                    <div className="text-center w-2/12">
                                    <button 
                                        type="button"
                                        className="p-2 bg-indigo-500 hover:bg-indigo-700 my-2 text-white rounded-md"
                                        onClick={() => toggleFlexDirection(index)}
                                    > 
                                        <GoArrowSwitch size={20} />  
                                    </button>
                                    </div>
                                    <div className="w-5/12">
                                        <p> {featurePreviews[index].text} </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex">
                                <div className="w-1/2">
                                    <input
                                        type="file"
                                        name={item.filename}
                                        multiple
                                        className="border border-indigo-700 p-2 my-2 w-full rounded-md"
                                        onChange={(event) => handleFeatureImageChange(index,event)}
                                        required={!business ? true : false}
                                    />
                                </div>
                                <div className="w-1/2 ms-2">
                                    <textarea
                                        name={item.textarea}
                                        className="border border-indigo-700 p-2 my-2 w-full rounded-md"
                                        placeholder="Enter Feature Text"
                                        onChange={(event) => handleFeatureTextChange(index, event)}
                                        required={!business ? true : false}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="text-end">
                    <button 
                        type="button"
                        onClick={addNewInputs}>
                        <BsFillPlusCircleFill size={30}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BusinessImages;
