import BusinessContext from '@/Context/BusinessContext'
import { useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const BusinessProvider = ({children}) => {
   
    
    const {data, setData, post, errors, transform} = useForm({
        "name" : "",
        "description" : "",
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
    })

    const [featureInfo, setFeatureInfo] = useState([{
        image : '',
        text : "",
        flex_direction : "flex-row"
    }])


  return (
    <BusinessContext.Provider value={{data, setData, featureInfo, setFeatureInfo, post, transform}}>
        {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider
