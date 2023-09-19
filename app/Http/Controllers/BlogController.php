<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogCollection;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::paginate(10);
        // dd(new BlogCollection($blogs), Blog::get());
        return Inertia::render('Backend/Blog/Index', ['blogs' => new BlogCollection($blogs),]);
    }

    public function edit($id)
    {
        $blog = Blog::findOrFail($id);
        return Inertia::render('Backend/Blog/Edit', ['blog' => new BlogResource($blog),]);
    }

    public function show($id)
    {
        $blog = Blog::findOrFail($id);
        return Inertia::render('Backend/Blog/Show', ['blog' => new BlogResource($blog),]);
    }

    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->delete();
        return to_route('admin.blog');
    }
}
