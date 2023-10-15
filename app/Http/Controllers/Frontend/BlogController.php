<?php

namespace App\Http\Controllers\Frontend;

use App\Models\Blog;
use Inertia\Inertia;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Http\Resources\BlogCollection;
use App\Http\Resources\IndustryCollection;
use App\Models\Industry;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function index()
    {
        $news = Blog::where('tag', 'News')->latest()->limit(3)->get();
        $guide = Blog::where('tag', 'Guide')->latest()->limit(3)->get();
        $buyers = Blog::where('tag', 'Advice for buyers')->latest()->limit(3)->get();
        $sellers = Blog::where('tag', 'Advice for sellers')->latest()->limit(3)->get();
        $industries = Industry::get();
        // dd(new BlogCollection($news));
        return Inertia::render('Frontend/Blog/Index', [
            'news' => new BlogCollection($news),
            'guide' => new BlogCollection($guide),
            'buyers' => new BlogCollection($buyers),
            'sellers' => new BlogCollection($sellers),
            'industries' => new IndustryCollection($industries),
        ]);
    }

    public function detail($tag, $id)
    {
        $blog = Blog::where('id', $id)->where('tag', $tag)->get();
        $urls = Image::where('imageable_id',$id)->where('imageable_type', 'App\Models\Blog')->pluck('url')->toArray();
        $images =[];
        $i=0;
        foreach($urls as $url)
        {
            $images[$i++] = Storage::url($url);
        }

        $related_articles = Blog::where('tag', $tag)->latest()->limit(3)->get();
        // dd($images);
        return Inertia::render('Frontend/Blog/Details', [
            'blog' => new BlogCollection($blog),
            'images' => $images,
            'related_articles' => new BlogCollection($related_articles),
        ]);
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
