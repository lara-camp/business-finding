<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FaqCollection extends ResourceCollection
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
                function($faq) {
                    return [
                        'id' => $faq->id,
                        'question' => substr($faq->question, 0, 30),
                        'answer' => $faq->answer,
                        'status' => $faq->status,
                        'created_at' => $faq->created_at->toFormattedDateString(),
                    ];
                }
            ),
        ];
    }
}
