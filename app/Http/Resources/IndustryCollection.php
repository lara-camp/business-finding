<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\ResourceCollection;

class IndustryCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(
                function($industry) {
                    return [
                        'id' => $industry->id,
                        'name' => $industry->name,
                        'url' => $industry->image->url != null  ? Storage::url($industry->image->url) : "" ,
                        'created_at' => $industry->created_at->toFormattedDateString(),
                    ];
                }
            ),
        ];
    }
}
