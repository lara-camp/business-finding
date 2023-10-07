<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
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
            "show_case_images" => '' ,
            "documents" => '' ,
            "website_address" =>  $info->get("website_address") ,
            "embedded_video" => $info->get("embedded_video") ,
        ];
    }
}
