<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Resources\BusinessCollection;
use App\Http\Resources\BusinessResource;
use App\Models\Business;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request) {
        $query = Business::latest('id');
        if($category = $request->category) {
            $query->whereHas('category', function($q) use($category) {
                $q->where('id', $category);
            });
        }

        if($loc = $request->location) {
            $query->whereHas('city', function($q) use($loc) {
                $q->where('id', $loc);
            });
        }

        $businesses = $query->paginate(6)->appends($request->except('page'));;
        return Inertia::render('Frontend/SearchBus', [
            'businesses' => new BusinessCollection($businesses),
        ]);
    }
}
