<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\BusinessCollection;
use App\Http\Resources\BusinessResource;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Http\Resources\RegionCollection;
use App\Http\Resources\SubCategoryCollection;
use App\Models\Business;
use App\Models\BusinessFeature;
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
    public function index(Request $request) {
        $query = Business::where('user_id', auth()->id());

        if($status = $request->status) {
            switch ($status) {
                case 'draft': case 'published':
                    $query->where('stage', $status);
                    break;
                case 'sold':
                    $query->where('status', 'sold');
                    break;
                default:
                    $query;
                    break;
            }
        }
        $businesses = $query->latest('id')->paginate(5);
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

    public function edit($id) {
        $business = Business::find($id);
        $categories = Category::latest('id')->get();
        $regions = Region::latest('id')->get();
        $cities = City::latest('id')->get();
        $subcategories = SubCategory::latest('id')->get();
        return Inertia::render('Owner/Business/Edit', [
            'business'=> new BusinessResource($business),
            'categories' => new CategoryCollection($categories),
            'regions'   => new RegionCollection($regions),
            'cities'    => new CityCollection($cities),
            'subcategories' => new SubCategoryCollection($subcategories),
        ]);
    }

    public function update(Request $request, $id) {
        $data = $request->data;
        $feature_info = $request->feature_info;
        $showcase_images = $data['show_case_images'];
        
        // File 
        $documents = $data['documents'];
        $doc_arr = $this->storeDocs($documents);
        // Create Business 

        try {
            DB::transaction(function () use ($id, $data, $doc_arr, $feature_info, $showcase_images) {
                // Create Business 
                $business_service = new BusinessService($data);
                $business = $business_service->editBusiness($id, $doc_arr);
    
                // Save show case images 
                if(array_key_exists('show_case_images', $data)) {
                    $business_service->createShowCaseImages($business, $showcase_images);
                }
    
                // Save Business Feature Info
                if(array_key_exists('documents', $data)) {
                    $business_service->createBusinessFeature($feature_info, $business);
                }
            });
            return to_route('owner.business');
        } catch(\Exception $e) {
            return redirect()->back()->with('message', $e->getMessage());
        }
    }

    public function destroy($id) {
        $business = Business::find($id);
        if($business) {
            try {
                DB::transaction(function() use($business) {
                    // Delete Images for business show case gallery 
                    if(!$business->images->isEmpty()) {
                        $business->images()->delete();
                    }
                    
    
                    // Delete Business Feature 
                    $business_features = BusinessFeature::where('business_id', $business->id)->get();
                    if(count($business_features) > 0) {
                        foreach($business_features as $item) {
                            // Delele local images 
                            Storage::delete($item->image);
        
                            // Delete Business feature 
                            $item->delete();
                        }
                    }

                    // Delete business  
                    $business->delete();
                    
                    return to_route('owner.business')->with('message', 'Business Deleted Successfully');
                });
            } catch (\Exception $e) {
                return redirect()->back()->with('message',  $e->getMessage());
            }
        } else {
            throw new Exception('Business not found');
        }
    }

    private function storeDocs($documents) {
        $doc_arr = array();
        foreach($documents as $file) {
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = Storage::putFileAs('uploads/documents', $file, $filename);
            array_push($doc_arr, $path);
        }
        return $doc_arr;
    }
}


