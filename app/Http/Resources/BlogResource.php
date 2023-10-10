<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            'url' => $this->cover_image ? Storage::url($this->cover_image): "",
            'title' => $this->title,
            'body' => $this->body,
            'tag' => $this->tag,
            'user_id' => $this->user_id,
            'industry_id' => $this->industry_id,
            'status' => $this->status,
        ];
    }
}
