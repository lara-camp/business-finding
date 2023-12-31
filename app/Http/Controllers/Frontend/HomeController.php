<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogCollection;
use App\Http\Resources\BusinessCollection;
use App\Http\Resources\BusinessResource;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Mail\ContactFormMail;
use App\Models\Blog;
use App\Models\Business;
use App\Models\Category;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $categories = Category::withCount('businesses')->latest('id')->limit(4)->get();
        $locations = City::withCount('businesses')->latest('id')->limit(4)->get();
        $businesses = Business::where('stage', 'published')->latest('id')->limit(3)->get();
        $blogs = Blog::latest('id')->limit(3)->get();
        return Inertia::render('Frontend/Home', [
            'categories' => fn() =>  new CategoryCollection($categories),
            'locations' => fn() =>  new CityCollection($locations),
            'businesses' => fn() =>  new BusinessCollection($businesses),
            'blogs' => fn() => new BlogCollection($blogs),
        ]);
    }

    public function business_detail($id) {
        $business = Business::find($id);

        return Inertia::render('Frontend/BusinessDetail', [
            'business' => new BusinessResource($business),
        ]);
    }

    public function contact_us(Request $request) {
        if(request()->isMethod('post')) {
            $data = array(
                'first_name' => $request->first_name,
                "last_name" => $request->last_name,
                "location" => $request->location,
                "phone_one" => $request->phone_one,
                "phone_two" => $request->phone_two,
                "email" => $request->email,
                "remark" => $request->remark,
            );
            
            Mail::to("minthetpaing376@gmail.com")->send(new ContactFormMail($data));
            return to_route('contact-us');
        }
        return Inertia::render('Frontend/Contact');
    }

    public function about_us() {
        return Inertia::render('Frontend/AboutUs');
    }

    public function pricing() {
        return Inertia::render('Frontend/Pricing');
    }

    public function drinkBeerToday($day) {
        $drink = false;
        $weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'suday'];
        if(in_array($day, $weekdays)) {
            $drink = true;
        } else {
            $drink = true;
        }
        return $drink;
    }
}
