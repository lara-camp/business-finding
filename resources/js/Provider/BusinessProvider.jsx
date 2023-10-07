import BusinessContext from '@/Context/BusinessContext'
import { useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import {usePage} from '@inertiajs/react'

const BusinessProvider = ({children}) => {

    const [business, setBusiness] = useState(usePage().props.business)
    const [featureInfo, setFeatureInfo] = useState(business ? business.business_features : [{
        image : '',
        text : "",
        flex_direction : "flex-row"
    }]);
    
    const initData = {
      "name": business?.name || '',
      "description": business?.description || '',
      "status": business?.status || '',
      "property_status" : business?.property_status || '',
      "category_id": business?.category_id || '',
      "subcategory_id": business?.subcategory_id || '',
      "region_id": business?.region_id || '',
      "city_id": business?.city_id || '',
      "street": business?.street || '',
      "property_status": business?.property_status || '',
      "asking_price": business?.asking_price || '',
      "revenue_price": business?.revenue_price || '',
      "cash_flow": business?.cash_flow || '',
      "inventory_value": business?.inventory_value || '',
      "net_income": business?.net_income || '',
      "show_case_images": business?.show_case_images || [],
      "documents": business?.documents || [],
      "website": business?.website || '',
      "embedded_video": business?.embedded_video || '',
      "business_features" : business?.business_features || [],
    };
    
       
    const {data, setData} = useForm(initData)

  return (
    <BusinessContext.Provider value={{data, setData, featureInfo, setFeatureInfo}}>
        {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider
