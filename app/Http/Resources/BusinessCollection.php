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
                return [
                    'id' => $item->id,
                    'status' => $item->status,
                    'stage' => $item->stage,
                    'name' => $item->name,
                    'location' => $item->city->region->name .','. $item->city->name .',' .$item->street,
                    'asking_price' => $item->asking_price,
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
