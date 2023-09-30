<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Http\Resources\RegionCollection;
use App\Models\Category;
use App\Models\City;
use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index() {
        $categories = Category::latest('id')->get();
        $regions = Region::latest('id')->get();
        $cities = City::latest('id')->get();
        return Inertia::render('Owner/Business/Index', [
            'categories' => new CategoryCollection($categories),
            'regions'   => new RegionCollection($regions),
            'cities'    => new CityCollection($cities)
        ]);
    }

    public function show() {
        return Inertia::render('Owner/Business/Show');
    }

    public function create() {
        return Inertia::render('Owner/Business/Create');
    }

    public function store(Request $request) {
        dd($request->all());
    }

    public function edit() {
        return Inertia::render('Owner/Business/Edit');
    }
}
