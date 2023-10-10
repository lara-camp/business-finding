<?php

namespace App\Http\Controllers;

use App\Models\City;
use Inertia\Inertia;
use App\Models\Region;
use Illuminate\Http\Request;
use App\Http\Resources\CityResource;
use App\Http\Resources\CityCollection;
use App\Http\Resources\RegionCollection;
use Illuminate\Support\Facades\Validator;

class CityController extends Controller
{
    //index
    public function index()
    {
        $cities = City::orderby('created_at', 'desc')->paginate(10);
        return Inertia::render('Backend/City/Index', [
            'cities' => new CityCollection($cities),
        ]);
    }

    // create
    public function create()
    {
        $cities = City::all();
        $regions = Region::all();
        return Inertia::render('Backend/City/Create', [
            'cities' => new CityCollection($cities),
            'regions' => new RegionCollection($regions)
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
        $regions = Region::all();
        return Inertia::render('Backend/City/Edit', [
            'city' => new CityResource($city),
            'regions' => new RegionCollection($regions)
        ]);
    }

    // update
    public function update($id, Request $request)
    {
        $rules = [
            'name' => 'required',
            'region_id' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.cities.edit', ['id' => $request->id])
                ->withErrors($validator)
                ->withInput();
        }
        $city = City::findOrFail($id);
        $city->update($request->all());
        return to_route('admin.cities');
    }

    public function destroy($id)
    {
        $user = City::findOrFail($id);
        $user->delete();
        return to_route('admin.cities');
    }
}
