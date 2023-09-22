<?php 
namespace App\Helper;

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
}