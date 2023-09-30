import BusinessContext from '@/Context/BusinessContext'
import { useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'

const BusinessProvider = ({children}) => {
    const {data, setData, errors} = useForm({
        "name" : "",
        "description" : "",
        "status" : "",
        "category_id" : "",
        "subcategory" : "",
        "region_id" : "",
        "city_id" : "",
        "property_status" : "",
        "asking_price" : "",
        "revenue_price" : "",
        "cash_flow" : "",
        "inventory_value" : "",
        "net_income" : "",
        "show_case_images" : [],
        "documents" : [],
        "website_address" : "",
        "embedded_video" : "",
    })

    const [featureInfo, setFeatureInfo] = useState([{
        file : '',
        text : ""
    }])

  return (
    <BusinessContext.Provider value={{data, setData, featureInfo, setFeatureInfo}}>
        {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider
