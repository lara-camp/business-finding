<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image' => $this->image->url,
            'title' => $this->title,
            'body' => $this->body,
            'tag' => $this->tag,
            'user_id' => $this->user_id,
            'status' => $this->status,
        ];
    }
}