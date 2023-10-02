<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;
    protected $guarded = [];


    public function images() {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function business_features() {
        return $this->hasMany(BusinessFeature::class);
    }

    public function city() {
        return $this->belongsTo(City::class);
    }
}
