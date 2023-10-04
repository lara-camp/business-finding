<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\BusinessCollection;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Http\Resources\RegionCollection;
use App\Http\Resources\SubCategoryCollection;
use App\Models\Business;
use App\Models\Category;
use App\Models\City;
use App\Models\Region;
use App\Models\SubCategory;
use App\Services\BusinessService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index() {
        $businesses = Business::where('user_id', auth()->id())->latest('id')->paginate(5);
        return Inertia::render('Owner/Business/Index', [
            'businesses' => new BusinessCollection($businesses),
            'total_count' => Business::where('user_id', auth()->id())->count(),
        ]);
    }

    public function show() {
        return Inertia::render('Owner/Business/Show');
    }

    public function create() {
        $categories = Category::latest('id')->get();
        $regions = Region::latest('id')->get();
        $cities = City::latest('id')->get();
        $subcategories = SubCategory::latest('id')->get();

        return Inertia::render('Owner/Business/Create', [
            'categories' => new CategoryCollection($categories),
            'regions'   => new RegionCollection($regions),
            'cities'    => new CityCollection($cities),
            'subcategories' => new SubCategoryCollection($subcategories),
        ]);
    }

    public function store(Request $request) {
        $data = $request->data;
        $feature_info = $request->feature_info;
        $showcase_images = $data['show_case_images'];
        
        // File 
        $documents = $data['documents'];
        $doc_arr = array();
        foreach($documents as $file) {
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = Storage::putFileAs('uploads/documents', $file, $filename);
            array_push($doc_arr, $path);
        }
        // Create Business 

        try {
            DB::transaction(function () use ($data, $doc_arr, $feature_info, $showcase_images) {
                // Create Business 
                $business_service = new BusinessService($data);
                $business = $business_service->createBusiness($doc_arr);
    
                // Save show case images 
                $business_service->createShowCaseImages($business, $showcase_images);
    
                // Save Business Feature Info
                $business_service->createBusinessFeature($feature_info, $business);
            });
            return to_route('owner.business');
        } catch(\Exception $e) {
            return redirect()->back()->with('message', $e->getMessage());
        }
    }

    public function edit() {
        return Inertia::render('Owner/Business/Edit');
    }

    public function destroy($id) {
        $business = Business::find($id);
        if($business) {
            DB::transaction(function() use($business) {
                // Delete Images for business show case gallery 
                $business->images()->delete();
                // Delete business features 
                $business->with('business_features')->delete();
                return to_route('owner.business')->with('message', 'Business Deleted Successfully');
            });
        } else {
            throw new Exception('Business not found');
        }
    }
}


