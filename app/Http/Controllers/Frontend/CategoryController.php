<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogCollection;

class CategoryController extends Controller
{
    public function category() {
        $blogs = Blog::latest()->get();
        // dd($blogs->items);
        return Inertia::render('Frontend/Category',[
            'blogs' => new BlogCollection($blogs),
        ]);
    }
}
