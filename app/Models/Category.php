<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
    ];

    public function image():MorphOne
    {
        // dd($this->morphOne(Image::class,'imageable'));
        return $this->morphOne(Image::class, 'imageable');
    }
}
