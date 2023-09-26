<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Region;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\RegionResource;
use App\Http\Resources\RegionCollection;

class RegionController extends Controller
{
    public function index()
    {
        $regions = Region::paginate(10);
        return Inertia::render('Backend/Region/Index', [
            'regions' => new RegionCollection($regions),
        ]);
    }

    public function create()
    {
        $regions = Region::paginate(10);
        return Inertia::render('Backend/Region/Create', [
            'region' => new RegionResource($regions),
        ]);
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
        return Inertia::render('Backend/Region/Edit', [
            'region' => new RegionResource($regions),
        ]);
    }
}
