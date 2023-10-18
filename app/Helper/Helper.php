<?php 
namespace App\Helper;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Models\Category;
use App\Models\City;
use App\Models\GeneralSetting;
use Illuminate\Support\Facades\Storage;

class Helper {
    public static function generalSetting($name) {
        $gs = GeneralSetting::where('name', $name)->first();
        if($gs && $gs->type == "file") {
            return Storage::url($gs->value);
        } else {
            return $gs->value;
        }
    }

    public static function getStoragePathFromFullUrl($path) {
       $text =  str_replace(env('APP_URL').'/storage', '', $path);
       return $text;
    }

    public static function getCategories() {
        $categories = Category::all();
        return new CategoryCollection($categories);
    }

    public static function getLocations() {
        $locations = City::all();
        return new CityCollection($locations);
    }
}