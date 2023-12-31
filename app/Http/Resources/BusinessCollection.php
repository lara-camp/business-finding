<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;

class BusinessCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function($item) {
                $info = collect(json_encode($item->info));
                return [
                    'id' => $item->id,
                    'title' => $item->name,
                    'description' => $item->description,
                    'status' => $item->status,
                    'stage' => $item->stage,
                    'name' => $item->name,
                    'location' => $item->city->region->name .','. $item->city->name .',' .$item->street,
                    'loc_wth_street' => $item->city->region->name .','. $item->city->name,
                    'asking_price' => $item->asking_price,
                    'revenue_price' => $info->get('revenue_price'),
                    'inventory_price' => $info->get('inventory_price'),
                    'cash_flow' => $info->get('cash_flow'),
                    'likes' => $item->likes,
                    'views' => $item->views,
                    'image' => $item->images->isEmpty() ? "null" : Storage::url($item->images[0]->url),
                    'created_at' => $item->created_at->toFormattedDateString(),
                    'updated_at' => $item->updated_at->toFormattedDateString(),
                ];
            })
        ]; 
    }
}
