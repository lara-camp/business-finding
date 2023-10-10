import BusinessContext from '@/Context/BusinessContext'
import { useForm } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import {usePage} from '@inertiajs/react'

const BusinessProvider = ({children}) => {

    const [featureInfo, setFeatureInfo] = useState([{
        image : '',
        text : "",
        flex_direction : "flex-row"
    }])
    const [business, setBusiness] = useState(usePage().props.business)

    if(business && business.business_features && business.business_features.length > 0) {
      // update feature image

      const updatedFeatureInfo = business.business_features.map(item => ({
        image: item.image,
        text: item.subject,
        flex_direction: item.position
      }));
    
      // Update the featureInfo state once with the entire array
      setFeatureInfo(updatedFeatureInfo);
    }
    
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
      "asking_price": business?.asking_price || '',
      "revenue_price": business?.revenue_price || '',
      "cash_flow": business?.cash_flow || '',
      "inventory_value": business?.inventory_value || '',
      "net_income": business?.net_income || '',
      "show_case_images": business?.show_case_images || [],
      "documents": business?.documents || [],
      "website": business?.website || '',
      "embedded_video": business?.embedded_video || '',
    };
    
       
    const {data, setData, post, errors, transform} = useForm(initData)



  return (
    <BusinessContext.Provider value={{data, setData, featureInfo, setFeatureInfo, setBusiness}}>
        {children}
    </BusinessContext.Provider>
  )
}

export default BusinessProvider
