<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;

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
        Category::create([
            'name' => $request->category_name,
            'slug' => $request->slug,
        ]);
        return redirect()->route('admin.category');
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Backend/Category/Edit', [
            'category' => new CategoryResource($category),
        ]);
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Backend/Category/Show', ['category' => new CategoryResource($category)]);
    }

    public function destroy($id) {
        $category = Category::findOrFail($id);
        $category->delete();
        return to_route('admin.category');
    }
}
