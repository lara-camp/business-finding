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
        $categories = Category::paginate(10);
        // dd(new CategoryCollection($categories));
        return Inertia::render('Backend/Category/Index', [
            'categories' => new CategoryCollection($categories),
        ]);
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
