<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\SubCategoryCollection;
use App\Http\Resources\SubCategoryResource;

class SubCategoryController extends Controller
{
    public function index()
    {
        $subcategories = SubCategory::latest()->orderBy('id','desc')->paginate(10);
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
        $rules = [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories',
            'category_id' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.sub_category.create')
                ->withErrors($validator)
                ->withInput();
        }
        $cat = new SubCategory();
        $cat->name =  $request->name;
        $cat->slug =  $request->slug;
        $cat->category_id = $request->category_id;
        $cat->save();

        return redirect()->route('admin.sub_category');
    }

    public function edit($id)
    {
        // dd("Hello");
        $categories = Category::all();
        $sub_cat = SubCategory::findOrFail($id);
        // dd(new SubCategoryResource($sub_cat));
        return Inertia::render('Backend/Sub_Category/Edit', [
            'categories' => $categories,
            'sub_category' => new SubCategoryResource($sub_cat),
        ]);
    }

    public function update($id, Request $request)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories',
            'category_id' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.sub_category.edit', ['id'=>$request->id])
                ->withErrors($validator)
                ->withInput();
        }
        $sub_cat = SubCategory::findOrFail($id);
        $sub_cat->update($request->all());
        return to_route('admin.sub_category');
    }

    public function destroy($id)
    {
        $cat = SubCategory::findOrFail($id);
        $cat->delete();
        return to_route('admin.sub_category');
    }

}
