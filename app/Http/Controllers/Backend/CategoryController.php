<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Image;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\CategoryResource;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\CategoryCollection;

class CategoryController extends Controller
{
    public function index() {
        // dd("hello");
        $categories = Category::latest()->paginate(10);
        return Inertia::render('Backend/Category/Index', [
            'categories' => new CategoryCollection($categories),
        ]);
    }

    public function create()
    {
        // dd("create");
        return Inertia::render('Backend/Category/Create', [
            'category' => new Category(),
            ]

        );
    }

    public function store(Request $request)
    {
        $rules = [
            'category_name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories',
            'image' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.category.create')
                ->withErrors($validator)
                ->withInput();
        }
        $category = Category::create([
            'name' => $request->category_name,
            'slug' => $request->slug,
        ]);

        if($request->hasFile('image'))
        {
            $file = 'cat'.auth()->id().'-'.$_FILES['image']['name'];
            // dd($file);
            $path = Storage::disk('public')->put( $file,fopen($request->file('image'), 'r+'));
            Image::create([
                'url' => $file ,
                'imageable_id' => $category->id,
                'imageable_type' => 'App\Models\Category',
            ]);

        }
        return redirect()->route('admin.category');
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Backend/Category/Edit', [
            'category' => new CategoryResource($category),
        ]);
    }
    public function update($id, Request $request)
    {
        $rules = [
            'category_name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:categories',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.category.edit', ['id'=>$request->id])
                ->withErrors($validator)
                ->withInput();
        }
        $category = Category::findOrFail($id);
        $category->update($request->all());
        return redirect()->route('admin.category');
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Backend/Category/Show', ['category' => new CategoryResource($category)]);
    }

    public function destroy($id) {
        $category = Category::findOrFail($id);
        $image = Image::findOrFail($category->id);
        // dd(Storage::disk('public')->exists($image->url), $image->url);
        if(Storage::disk('public')->exists($image->url))
        {
            Storage::disk('public')->delete($image->url);
        }
        $image->delete();
        $category->delete();
        return to_route('admin.category');
    }
}
