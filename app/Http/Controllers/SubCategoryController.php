<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use App\Http\Resources\SubCategoryCollection;

class SubCategoryController extends Controller
{
    public function index()
    {
        $subcategories = SubCategory::latest()->paginate(10);
        // dd(new SubCategoryCollection($subcategories));
        return Inertia::render('Backend/Sub_Category/Index', [
            'subcategories' => new SubCategoryCollection($subcategories),
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Backend/Sub_Category/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $cat = new SubCategory();
        $cat->name =  $request->name;
        $cat->slug =  $request->slug;
        $cat->category_id = $request->category_id;
        $cat->save();

        return redirect()->route('admin.sub_category');
    }

}
