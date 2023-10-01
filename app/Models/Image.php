<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Image extends Model
{
    use HasFactory;
    protected $fillable = [
        'url',
        'imageable_id',
        'imageable_type',
    ];

    public function blog(): MorphTo
    {
        return $this->morphTo();
    }
    public function category(): MorphTo
    {
        return $this->morphTo();
    }

}
