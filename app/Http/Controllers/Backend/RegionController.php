<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Region;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\RegionResource;
use App\Http\Resources\RegionCollection;
use Illuminate\Support\Facades\Redis;

class RegionController extends Controller
{
    public function index()
    {
        $regions = Region::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Backend/Region/Index', [
            'regions' => new RegionCollection($regions),
        ]);
    }

    public function create()
    {
        return Inertia::render('Backend/Region/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'name_mm' => 'required'
        ]);
        Region::create([
            'name' => $request->name,
            'type' => $request->type,
            'name_mm' => $request->name_mm
        ]);
        return to_route('admin.regions')->with('message', 'Region created successfully');
    }

    public function show($id)
    {
        $region = Region::findOrFail($id);
        return Inertia::render('Backend/Region/Show', [
            'region' => $region,
        ]);
    }

    public function edit($id)
    {
        $regions = Region::findOrFail($id);
        // dd($regions);
        return Inertia::render('Backend/Region/Edit', [
            'region' => new RegionResource($regions),
        ]);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required',
            'type' => 'required',
            'name_mm' => 'required'
        ]);
        $region = Region::findOrFail($id);
        // dd($region);
        $region->update([
            // 'id' => $request->id,
            'name' => $request->name,
            'type' => $request->type,
            'name_mm' => $request->name_mm
        ]);

        return to_route('admin.regions')->with('message', 'Region Updated Successfully');
    }

    public function destroy($id)
    {
        $faq = Region::findOrFail($id);
        $faq->delete();
        return to_route('admin.regions');
    }
}
