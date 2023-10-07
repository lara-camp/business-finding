<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class BusinessResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {   
        $info = collect(json_decode($this->info));
        $documents = collect(json_decode($this->documents));
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'city_id' => $this->city_id,
            'region_id' => $this->city->region_id,
            'category_id' => $this->sub_category->category_id,
            'subcategory_id' => $this->sub_category_id,
            'street' => $this->street,
            "property_status" => $this->property_status,
            'status' => $this->status,
            "asking_price" =>  $this->asking_price,
            "revenue_price" => $info->get('revenue_price'),
            "cash_flow" =>  $info->get('cash_flow'),
            "inventory_value" => $info->get("inventory_value"),
            "net_income" => $info->get("net_income") ,
            "show_case_images" => !$this->images->isEmpty() ?  ShowCaseImageResource::collection($this->images) : '' ,
            "documents" => $documents->map(function($item) {
                return [
                    'url' => Storage::url($item),
                ];
            }),
            "business_features" => $this->business_features ? BusinessFeatureResource::collection($this->business_features) : '',
            "website" =>  $info->get("website") ,
            "embedded_video" => $info->get("embedded_video") ,
        ];
    }
}
