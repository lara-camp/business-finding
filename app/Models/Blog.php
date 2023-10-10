<?php

namespace App\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'body',
        'tag',
        'content',
        'cover_image',
        'user_id',
        'industry_id',
        'status',
    ];

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function user()
    {
        // dd($this->belongsTo('App\Models\User'), User::findOrFail(107));
        return $this->belongsTo(User::class, 'user_id');
    }
}
