<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use App\Models\Region;
use Illuminate\Http\Request;
use App\Http\Resources\CityResource;
use App\Http\Resources\CityCollection;

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
        $cities = Region::all();
        // dd($cities);
        return Inertia::render('Backend/City/Create', [
            'cities' => new CityCollection($cities),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'region_id' => 'required'
        ]);

        City::create([
            'name' => $request->name,
            'region_id' => $request->region_id
        ]);
        return to_route('admin.cities');
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

    public function destroy($id)
    {
        $user = City::findOrFail($id);
        $user->delete();
        return to_route('admin.cities');
    }
}
