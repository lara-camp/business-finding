<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryCollection extends ResourceCollection
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
                function($category) {
                    // dd($category->image->url);
                    return [
                        'id' => $category->id,
                        'name' => $category->name,
                        'slug' => $category->slug,
                        'url' => $category->image->url !== null ? Storage::url($category->image->url) : "",
                        'business_count' => $category->businesses->count(),
                        'created_at' => $category->created_at->toFormattedDateString(),
                    ];
                }
            ),
        ];
    }
}
