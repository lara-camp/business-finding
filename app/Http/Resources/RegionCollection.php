<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class RegionCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($region) {
                return [
                    'id' => $region->id,
                    'name' => $region->name,
                    'type' => $region->type,
                    'created_at' => $region->created_at->toFormattedDateString(),
                ];
            }),
        ];
    }
}
