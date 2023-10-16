<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogCollection;
use App\Http\Resources\BusinessCollection;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Models\Blog;
use App\Models\Business;
use App\Models\Category;
use App\Models\City;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index() {
        $categories = Category::latest('id')->limit(4)->get();
        $locations = City::latest('id')->limit(4)->get();
        $businesses = Business::latest()->limit(3)->get();
        $blogs = Blog::latest('id')->limit(3)->get();
        return Inertia::render('Frontend/Home', [
            'categories' => new CategoryCollection($categories),
            'lcoations' => new CityCollection($locations),
            'businesses' => new BusinessCollection($businesses),
            'blogs' => new BlogCollection($blogs),
        ]);
    }
}
