<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Resources\RegionCollection;
use App\Models\Region;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegionController extends Controller
{
    public function index() {
        $regions = Region::paginate(10);
        return Inertia::render('Backend/Region/Index', [
            'regions' => new RegionCollection($regions),
        ]);
    }
}
