<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
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
use Exception;
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
        $street = $data['street'];
        $description = $data['description'];
        $subcategory_id = $data['subcategory_id'];
        $city_id = $data['city_id'];
        $status = $data['status'];
        $property_status = $data['property_status'];
        $asking_price = $data['asking_price'];
        $revenue_price = $data['revenue_price'];
        $cash_flow = $data['cash_flow'];
        $inventory_value = $data['inventory_value'];
        $net_income = $data['net_income'];
        $website_address = $data['website_address'];
        $embedded_video = $data['embedded_video'];
        $showcase_images = $data['show_case_images'];

        $info = array(
            'revenue_price' => $revenue_price,
            'cash_flow' => $cash_flow,
            'inventory_value' => $inventory_value,
            'net_income' => $net_income,
            'website_address' => $website_address,
            'embedded_video' => $embedded_video,
        );

        
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
            $business = Business::create([
                'user_id' => auth()->id(),
                'sub_category_id' => $subcategory_id,
                'city_id' => $city_id,
                'street' => $street,
                'name' => $name,
                'description' => $description,
                'status' => $status,
                'property_status' => $property_status,
                'asking_price' => $asking_price,
                'info' => json_encode($info),
                'documents' => json_encode($doc_arr),
                'views' => 0,
                'likes' => 0,
            ]);

            // Save show case images 

            foreach($showcase_images as $file) {
                $filename = time() . '_' . $file->getClientOriginalName();
                $path = Storage::putFileAs('uploads/showcase-images', $file, $filename);
                $business->images()->create([
                    'url' => $path,
                ]);
            }

            // Save Business Feature Info

            $feature_info = $request->feature_info;
            foreach($feature_info as $index => $item) {
                $text = $item['text'];
                $position =  $item['flex_direction'];
                $image_path = "";
                if(!empty($item['image'])) {
                    // Store Business Feature Image 
    
                    $file = $item['image'];
                    $filename = time() . '_' . $file->getClientOriginalName();
                    $path = Storage::putFileAs('uploads/business-features', $file, $filename); 
                    $image_path = $path;
                } 
    
                if($text || $position) {
                    BusinessFeature::create([
                        'business_id' => $business->id,
                        'subject' => $text ?? "",
                        'position' => $position ?? "",
                        'image' => $image_path,
                    ]);
                }
            }
            return to_route('owner.business');
        } catch(\Exception $e) {
            return redirect()->back()->with('message', $e->getMessage());
        }
    }

    public function edit() {
        return Inertia::render('Owner/Business/Edit');
    }
}
