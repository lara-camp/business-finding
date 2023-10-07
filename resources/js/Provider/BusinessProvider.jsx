import BusinessContext from '@/Context/BusinessContext'
import { useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import {usePage} from '@inertiajs/react'

const BusinessProvider = ({children}) => {
    const [business, setBusiness] = useState(usePage().props.business)
    console.log(business)
    const initData = {
      "name": business?.name || '',
      "description": business?.description || '',
      "status": business?.status || '',
      "category_id": business?.category_id || '',
      "subcategory_id": business?.subcategory_id || '',
      "region_id": business?.region_id || '',
      "city_id": business?.city_id || '',
      "street": business?.street || '',
      "property_status": business?.property_status || '',
      "asking_price": business?.asking_price || '',
      "revenue_price": '',
      "cash_flow": '',
      "inventory_value": '',
      "net_income": '',
      "show_case_images": '',
      "documents": '',
      "website_address": '',
      "embedded_video": '',
    };
    
       
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
