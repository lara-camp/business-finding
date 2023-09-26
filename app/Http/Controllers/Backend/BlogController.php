<?php

namespace App\Http\Controllers\Backend;

use App\Models\Blog;
use Inertia\Inertia;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Http\Resources\BlogCollection;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::paginate(10);

        // dd(Blog::first()->image->url);
        // dd(new BlogCollection($blogs), Blog::get());
        return Inertia::render('Backend/Blog/Index', ['blogs' => new BlogCollection($blogs),]);
    }

    public function create()
    {
        dd("hello");
        return Inertia::render('Backend/Blog/Create');
    }
    public function store(Request $request)
    {
        dd($request->all());
        // Validate the incoming request data (title and content)
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        // Create a new blog post using the validated data
        $blog = Blog::create([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
        ]);

        // Optionally, you can redirect back or return a response
        return redirect()->route('admin.blog.index'); // Redirect to the index page or any other page as needed
    }

    public function edit($id, Request $request)
    {
        dd($request->all());
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
