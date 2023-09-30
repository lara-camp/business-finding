<?php

namespace App\Http\Controllers;

use App\Http\Resources\CityCollection;
use App\Http\Resources\CityResource;
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

    // create
    public function create()
    {
        return Inertia::render('Backend/City/Create');
    }

    // show 
    public function show($id)
    {
        $city = City::findOrFail($id);
        return Inertia::render('Backend/City/Show', [
            'city' => new CityResource($city),
        ]);
    }

    // edit
    public function edit($id)
    {
        $city = City::findOrFail($id);
        return Inertia::render('Backend/City/Edit', [
            'city' => new CityResource($city)
        ]);
    }
}
