<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CityCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($city) {
                return [
                    'id' => $city->id,
                    'name' => $city->name,
                    'business_count' => $city->businesses ? $city->businesses->count() : 0,
                    'region_id' => $city->region_id,
                    'created_at' => $city->created_at,
                ];
            }),
        ];
    }
}
