<?php
namespace App\Services;
use App\Models\Business;
use App\Models\BusinessFeature;
use Illuminate\Support\Facades\Storage;

class BusinessService {

    public $data;

    public function __construct($data) {
        $this->data = $data;
    }

    public function createBusiness($doc_arr) {
        $revenue_price = $this->data['revenue_price'];
        $cash_flow = $this->data['cash_flow'];
        $inventory_value = $this->data['inventory_value'];
        $net_income = $this->data['net_income'];
        $website_address = $this->data['website_address'];
        $embedded_video = $this->data['embedded_video'];
        $name = $this->data['name'];
        $street = $this->data['street'];
        $description = $this->data['description'];
        $subcategory_id = $this->data['subcategory_id'];
        $city_id = $this->data['city_id'];
        $status = $this->data['status'];
        $property_status = $this->data['property_status'];
        $asking_price = $this->data['asking_price'];


        $info = array(
            'revenue_price' => $revenue_price,
            'cash_flow' => $cash_flow,
            'inventory_value' => $inventory_value,
            'net_income' => $net_income,
            'website_address' => $website_address,
            'embedded_video' => $embedded_video,
        );

        $business = Business::create([
            'user_id' => auth()->id(),
            'sub_category_id' => $subcategory_id,
            'city_id' => $city_id,
            'street' => $street,
            'name' => $name,
            'description' => $description,
            'status' => $status,
            'property_status' => $property_status,
            'asking_price' => $asking_price,
            'info' => json_encode($info),
            'documents' => json_encode($doc_arr),
            'views' => 0,
            'likes' => 0,
        ]);

        return $business;
    }

    public function createShowCaseImages($business, $showcase_images) {
        foreach($showcase_images as $file) {
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = Storage::putFileAs('uploads/showcase-images', $file, $filename);
            $business->images()->create([
                'url' => $path,
            ]);
        }
    }

    public function createBusinessFeature($feature_info, $business) {
        foreach($feature_info as $item) {
            $text = $item['text'];
            $position =  $item['flex_direction'];
            $image_path = "";
            if(!empty($item['image'])) {
                // Store Business Feature Image 

                $file = $item['image'];
                $filename = time() . '_' . $file->getClientOriginalName();
                $path = Storage::putFileAs('uploads/business-features', $file, $filename); 
                $image_path = $path;
            } 

            if($text || $position) {
                BusinessFeature::create([
                    'business_id' => $business->id,
                    'subject' => $text ?? "",
                    'position' => $position ?? "",
                    'image' => $image_path,
                ]);
            }
        }
    }
}