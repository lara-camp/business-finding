import React from "react";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {GoArrowSwitch} from 'react-icons/go'
import FeatureImage from '../../../../Images/default/default-featured-image.jpg'
import '../../../../Css/index.css'
import { useContext } from "react";
import BusinessContext from "@/Context/BusinessContext";

const BusinessImages = () => {
    const [featureImgCount, setFeatureImgCount] = useState(0);
    const [featurePreviews, setFeaturePreviews] = useState([
        {
            source : FeatureImage,
            text   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati iure deleniti sequi atque cupiditate nulla, natus id deserunt ad.",
            flexDirection : "flex-row",
        }
    ])
    const [inputs, setInputs] = useState([
        {
            filename : `feature_image[${featureImgCount}]`,
            textarea : `feature_text[${featureImgCount}]`,
        }
    ])
    const [selectedImages, setSelectedImages] = useState([])
    const {data, setData, featureInfo, setFeatureInfo} = useContext(BusinessContext)

    const addNewInputs = () => {
        if(inputs.length >= 5) {
            alert("you can not add more")
            return false;
        }
        let newCount = parseInt(featureImgCount) + 1
        setFeatureImgCount(newCount)
        setInputs([...inputs, {
            filename : `feature_image[${featureImgCount}]`, 
            textarea : `feature_text[${featureImgCount}]`
        }])
        setFeaturePreviews([
            ...featurePreviews,
            {
            source : FeatureImage,
            text   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati iure deleniti sequi atque cupiditate nulla, natus id deserunt ad.",
              flexDirection : "flex-row",
            },
          ]);

        // Add New Form Data 

        setFeatureInfo([...featureInfo, {
            image : "",
            text : "",
        }])
    }

    const handleFeatureImageChange = (index, e) => {
        const { name, files } = e.target;
        const reader = new FileReader();
        reader.onload = () => {
            const imgUrl = reader.result; 
            const updatePreviews = [...featurePreviews]
            updatePreviews[index] = {source : imgUrl, text : featurePreviews[index].text,}
            setFeaturePreviews(updatePreviews)
        };
        reader.readAsDataURL(files[0]); // Start reading the selected file as a data URL

        // Add to form Data 

        const formData = [...featureInfo];
        formData[index] = {image : e.target.files[0], text : featureInfo[index].text}
        setFeatureInfo(formData)
    }

    const handleFeatureTextChange = (index, e) => {
        const {name, value} = e.target;
        const updatePreviews = [...featurePreviews];
        updatePreviews[index] = {source : featurePreviews[index].source , text : value,}
        setFeaturePreviews(updatePreviews)

        // Add data to form 

        const formData = [...featureInfo];
        formData[index] = {image : formData[index].image, text : value}
        setFeatureInfo(formData)
    }

    const toggleFlexDirection = (index) => {
        const updatePreviews = [...featurePreviews];
        updatePreviews[index] = {
            source : featurePreviews[index].source,
            text   : featurePreviews[index].text,
            flexDirection : 
                featurePreviews[index].flexDirection === "flex-row"
                ? "flex-row-reverse"
                : "flex-row"
        }
        setFeaturePreviews(updatePreviews)
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
                <p className="mb-3"> Show Case Photos *</p>
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
                    inputs.map((item, index) => (
                        <div className="" key={index}>
                            <div className="w-full preview-img-feature my-4 p-2 border border-indigo-700 rounded-md">
                                <div className={`flex ${featurePreviews[index].flexDirection} items-start`}>
                                    <div className="w-5/12">
                                        <img src={featurePreviews[index].source} alt="" className="img-fluid w-1/2"/>
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
                                    />
                                </div>
                                <div className="w-1/2 ms-2">
                                    <textarea
                                        name={item.textarea}
                                        className="border border-indigo-700 p-2 my-2 w-full rounded-md"
                                        placeholder="Enter Feature Text"
                                        onChange={(event) => handleFeatureTextChange(index, event)}
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
