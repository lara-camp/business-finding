<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Industry extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
    ];

    public function image():MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
