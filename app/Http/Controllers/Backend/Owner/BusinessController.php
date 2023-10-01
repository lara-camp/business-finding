<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Http\Resources\RegionCollection;
use App\Http\Resources\SubCategoryCollection;
use App\Models\Business;
use App\Models\Category;
use App\Models\City;
use App\Models\Region;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index() {
        $categories = Category::latest('id')->get();
        $regions = Region::latest('id')->get();
        $cities = City::latest('id')->get();
        $subcategories = SubCategory::latest('id')->get();

        return Inertia::render('Owner/Business/Index', [
            'categories' => new CategoryCollection($categories),
            'regions'   => new RegionCollection($regions),
            'cities'    => new CityCollection($cities),
            'subcategories' => new SubCategoryCollection($subcategories),
        ]);
    }

    public function show() {
        return Inertia::render('Owner/Business/Show');
    }

    public function create() {
        return Inertia::render('Owner/Business/Create');
    }

    public function store(Request $request) {


        $data = $request->data;
        $name = $data['name'];
        $subcategory_id = $data['subcategory_id'];
        $city_id = $data['city_id'];
        $status = $data['status'];
        $property_status = $data['property_status'];
        $asking_price = $data['asking_price'];
        $revenue_price = $data['revenue_price'];
        $cash_flow = $data['cash_flow'];
        $inventory_value = $data['inventory_value'];
        $net_income = $data['net_income'];
        $cash_flow = $data['cash_flow'];
        $website_address = $data['website_address'];
        $embedded_video = $data['embedded_video'];

        // Create Business 
        $feature_info = $request->feature_info;


        // File 
        $documents = $data['documents'];

        foreach($feature_info as $index => $item) {
            $business = new Business();
            if(!empty($item['image'])) {
                // Store Business Feature Image 

                $file = $item['image'];
                $filename = time() . '_' . $file->getClientOriginalName();
                $path = Storage::putFile('uploads/business-features', $file, $filename);
                $business->image = $path;
            } 
        }
    }

    public function edit() {
        return Inertia::render('Owner/Business/Edit');
    }
}
