<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\Storage;

class BlogCollection extends ResourceCollection
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
            function($blog)
            {
                return [
                    'id' => $blog->id,
                    'url' => $blog->cover_image ? Storage::url($blog->cover_image) : "",
                    'title' => $blog->title,
                    // 'body' => $blog->body,
                    'tag' => $blog->tag,
                    'user_name' => $blog->user->name,
                    'status' => $blog->status,
                    'created_at' => $blog->created_at->toFormattedDateString(),
                ];
            }),
        ];
    }
}
