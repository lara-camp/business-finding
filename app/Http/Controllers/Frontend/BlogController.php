<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogCollection;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $news = Blog::where('tag', 'News')->latest()->limit(3)->get();
        // dd(new BlogCollection($news));
        return Inertia::render('Frontend/Blog/Index', [
            'news' => new BlogCollection($news),
        ]);
    }

    public function detail($tag, $id)
    {
        $blog = Blog::where('id', $id)->where('tag', $tag)->get();
        dd($blog);
    }

    public function tags(Request $request)
    {
        // dd($request->tags);
        $tag  = str_replace("'", '', $request->tags);
        $blogs = Blog::where('tag', $tag)->latest()->paginate(9);
        // dd($blogs);
        return Inertia::render('Frontend/Blog/Tags', [
            'tag' => $request->tags,
            'blogs' => new BlogCollection($blogs),
        ]);
    }
}
