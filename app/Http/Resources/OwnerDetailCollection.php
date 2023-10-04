<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OwnerDetailCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($ownerdetails) {
                return [
                    'id' => $ownerdetails->id,
                    'user_id' => $ownerdetails->user_id,
                    'address' => $ownerdetails->address,
                    'company' => $ownerdetails->company,
                    'frontend_img' => $ownerdetails->frontend_img,
                    'backend_img' => $ownerdetails->backend_img
                ];
            }),
        ];
    }
}
