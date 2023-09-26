<?php

namespace App\Http\Controllers;

use App\Http\Resources\CityCollection;
use App\Models\City;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CityController extends Controller
{
    //index
    public function index()
    {
        $cities = City::paginate(10);
        return Inertia::render('Backend/City/Index', [
            'cities' => new CityCollection($cities),
        ]);
    }
}
