import BusinessContext from '@/Context/BusinessContext'
import { useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const BusinessProvider = ({children}) => {
   
    const [business, setBusiness] = useState(null)
    var initData;
    if(business !== null) {
      initData = {
        "name" : business.name,
        "description" :business.description,
        "status" : "",
        "category_id" : "",
        "subcategory_id" : "",
        "region_id" : "",
        "city_id" : "",
        "street" : "",
        "property_status" : "",
        "asking_price" : "",
        "revenue_price" : "",
        "cash_flow" : "",
        "inventory_value" : "",
        "net_income" : "",
        "show_case_images" : "",
        "documents" : "",
        "website_address" : "",
        "embedded_video" : "",
    }
    } else {
      initData = {
        "name" : business ? business.name : '',
        "description" :business ? business.description : '',
        "status" : "",
        "category_id" : "",
        "subcategory_id" : "",
        "region_id" : "",
        "city_id" : "",
        "street" : "",
        "property_status" : "",
        "asking_price" : "",
        "revenue_price" : "",
        "cash_flow" : "",
        "inventory_value" : "",
        "net_income" : "",
        "show_case_images" : "",
        "documents" : "",
        "website_address" : "",
        "embedded_video" : "",
    }
    }
       
    const {data, setData, post, errors, transform} = useForm(initData)

    const [featureInfo, setFeatureInfo] = useState([{
        image : '',
        text : "",
        flex_direction : "flex-row"
    }])


  return (
    <BusinessContext.Provider value={{data, setData, featureInfo, setFeatureInfo, setBusiness}}>
        {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider
