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
        $business_data = $this->prepareBusiness($doc_arr);
        $business = Business::create($business_data);
        return $business;
    }

    public function editBusiness($id, $doc_arr) {
        $business_data = $this->prepareBusiness($doc_arr);
        $business = Business::findOrFail($id);
        $business->update($business_data);
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

    private function prepareBusiness($doc_arr) {
        $infoFields = ['revenue_price', 'cash_flow', 'inventory_value', 'net_income', 'website_address', 'embedded_video'];

        $info = array_intersect_key($this->data, array_flip($infoFields));

        return [
            'user_id' => auth()->id(),
            'sub_category_id' => $this->data['subcategory_id'],
            'city_id' => $this->data['city_id'],
            'street' => $this->data['street'],
            'name' => $this->data['name'],
            'description' => $this->data['description'],
            'status' => $this->data['status'],
            'property_status' => $this->data['property_status'],
            'asking_price' => $this->data['asking_price'],
            'info' => json_encode($info),
            'documents' => json_encode($doc_arr),
            'stage' => 'draft',
            'views' => 0,
            'likes' => 0,
        ];
    }
}