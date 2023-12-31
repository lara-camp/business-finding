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
        $news = Blog::where('tag', 'News')->where('status', 1)->latest()->limit(3)->get();
        $guide = Blog::where('tag', 'Guide')->where('status', 1)->latest()->limit(3)->get();
        $buyers = Blog::where('tag', 'Advice for buyers')->where('status', 1)->latest()->limit(3)->get();
        $sellers = Blog::where('tag', 'Advice for sellers')->where('status', 1)->latest()->limit(3)->get();
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
        $blog = Blog::where('id', $id)->where('tag', $tag)->where('status', 1)->get();
        $urls = Image::where('imageable_id',$id)->where('imageable_type', 'App\Models\Blog')->pluck('url')->toArray();
        $images =[];
        $i=0;
        foreach($urls as $url)
        {
            $images[$i++] = Storage::url($url);
        }

        $related_articles = Blog::where('tag', $tag)->where('status', 1)->where('industry_id', $blog[0]->industry_id)->whereNot('id',$id)->latest()->limit(3)->get();
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
        $blogs = Blog::where('tag', $tag)->where('status', 1)->latest()->paginate(6)->appends($request->except('page'));
        // dd($blogs);
        return Inertia::render('Frontend/Blog/Tags', [
            'tag' => $request->tags,
            'blogs' => new BlogCollection($blogs),
        ]);
    }
    public function industries($id)
    {
        // dd($id);
        // $tag  = str_replace("'", '', $request->tags);
        $blogs = Blog::where('industry_id', $id)->where('status', 1)->latest()->paginate(6)->appends(request()->except('page'));
        $industry_name = Industry::whereId($id)->pluck('name')->toArray();
        return Inertia::render('Frontend/Blog/Industries', [
            'industry_name' => $industry_name,
            'blogs' => new BlogCollection($blogs),
        ]);
    }
}
