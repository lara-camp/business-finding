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
use App\Models\Industry;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->paginate(10);
        return Inertia::render('Backend/Blog/Index', ['blogs' => new BlogCollection($blogs),]);
    }

    public function create()
    {
        $industries = Industry::get();
        return Inertia::render('Backend/Blog/Create',[
            'blog' => new Blog(),
            'industries' => $industries,
        ]);
    }
    public function store(Request $request)
    {
        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tag' => 'required|string',
            'cover_image' => 'required',
            // 'image_attachment' => 'required',
            'content' => 'required',
            'industry_id' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.blog.create')
                ->withErrors($validator)
                ->withInput();
        }


        $blog = Blog::create([
            'title' => $request->title,
            'body' => $request->description,
            'tag' => $request->tag,
            'content' => $request->content,
            'industry_id' => $request->industry_id,
            'user_id' => auth()->user()->id,
            'status' => 1,
        ]);
        // dd($request->hasFile('cover_image'));
        if($request->hasFile('cover_image'))
        {
            $file = 'cover'.time().auth()->id().'-'.$_FILES['cover_image']['name'];
            // dd($file);k
            $path = Storage::disk('public')->put( $file,fopen($request->file('cover_image'), 'r+'));
            $blog->cover_image = $file ;
            $blog->save();

        }
        if($request->image_attachments)
        {
            foreach($request->image_attachments as $image)
            {
                $file = 'img_'.time().auth()->id().'-'.$image->getClientOriginalName();
                // dd($file);
                $path = Storage::disk('public')->put( $file,fopen($image, 'r+'));
                $blog->cover_image = $file ;
                Image::create([
                    'url' => $file ,
                    'imageable_id' => $blog->id,
                    'imageable_type' => 'App\Models\Blog',
                ]);
            }
        }

        // Optionally, you can redirect back or return a response
        return redirect()->route('admin.blog'); // Redirect to the index page or any other page as needed
    }

    public function edit($id, Request $request)
    {
        // dd($request->all());
        $blog = Blog::findOrFail($id);
        $urls = Image::where('imageable_id',$id)->where('imageable_type', 'App\Models\Blog')->pluck('url')->toArray();
        $images =[];
        $i=0;
        foreach($urls as $url)
        {
            $images[$i++] = Storage::url($url);
        }
        // dd($images);
        return Inertia::render('Backend/Blog/Edit', [
            'blog' => new BlogResource($blog),
            'industries' => Industry::get(),
            'images' => $images,
        ]);
    }

    // public function update($id, Request $request)
    // {
    //     $rules = [
    //         'title' => 'required|string|max:255',
    //         'description' => 'required|string',
    //         'tag' => 'required|string',
    //         'content' => 'required',
    //     ];

    //     // Validate the request data
    //     $validator = Validator::make($request->all(), $rules);

    //     // Check if validation fails
    //     if ($validator->fails()) {
    //         return redirect()->route('admin.blog.edit')
    //             ->withErrors($validator)
    //             ->withInput();
    //     }

    //     $blog = Blog::findOrFail($id);
    //     if($request->hasFile('cover_image'))
    //     {
    //         if ($blog->cover_image) {
    //             Storage::disk('public')->delete($blog->cover_image);
    //         }

    //         $file = 'cover'.time().auth()->id().'-'.$_FILES['cover_image']['name'];
    //         // dd($file);k
    //         $path = Storage::disk('public')->put( $file,fopen($request->file('cover_image'), 'r+'));

    //         $blog->update([
    //             'cover_image' => $file,
    //         ]);

    //     }
    //     if($request->image_attachments)
    //     {
    //         foreach($request->image_attachments as $image)
    //         {
    //             $file = 'img_'.time().auth()->id().'-'.$image->getClientOriginalName();
    //             // dd($file);
    //             $path = Storage::disk('public')->put( $file,fopen($image, 'r+'));

    //             Image::create([
    //                 'url' => $file ,
    //                 'imageable_id' => $blog->id,
    //                 'imageable_type' => 'App\Models\Blog',
    //             ]);
    //         }
    //     }
    //     $blog->update($request->all());
    //     return to_route('admin.blog');
    // }
    public function update($id, Request $request)
    {
        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'tag' => 'required|string',
            'content' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.blog.edit', $id)
                ->withErrors($validator)
                ->withInput();
        }

        $blog = Blog::findOrFail($id);

        if ($request->hasFile('cover_image')) {
            // Delete the old cover image if it exists
            if ($blog->cover_image) {
                Storage::disk('public')->delete($blog->cover_image);
            }

            $file = 'cover_' . time() . auth()->id() . '-' . $request->file('cover_image')->getClientOriginalName();
            $path = Storage::disk('public')->putFileAs('', $request->file('cover_image'), $file);

            $blog->cover_image = $file;
        }

        if ($request->image_attachments) {
            foreach ($request->image_attachments as $image) {
                $file = 'img_' . time() . auth()->id() . '-' . $image->getClientOriginalName();
                $path = Storage::disk('public')->put($file, fopen($image, 'r+'));

                Image::create([
                    'url' => $file,
                    'imageable_id' => $blog->id,
                    'imageable_type' => 'App\Models\Blog',
                ]);
            }
        }

        $blog->title = $request->input('title');
        $blog->body = $request->input('description');
        $blog->tag = $request->input('tag');
        $blog->content = $request->input('content');
        $blog->save();

        return redirect()->route('admin.blog');
    }


    public function show($id)
    {
        $blog = Blog::findOrFail($id);
        return Inertia::render('Backend/Blog/Show', ['blog' => new BlogResource($blog),]);
    }

    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $images = Image::where('imageable_id',$blog->id)->where('imageable_type', 'App\Models\Blog')->get();
        foreach($images as $image)
        {
            if(Storage::disk('public')->exists($image->url))
            {
                Storage::disk('public')->delete($image->url);
            }
            $image->delete();
        }
        if(Storage::disk('public')->exists($blog->cover_image))
        {
            Storage::disk('public')->delete($blog->cover_image);
        }
        $blog->delete();
        return to_route('admin.blog');
    }

    public function change_status($id) {
        $faq = Blog::find($id);
        if($faq->status == 1) {
            $status = 0;
        } else {
            $status = 1;
        }

        if($faq) {
            $faq->update([
                'status' => $status,
            ]);
            return to_route('admin.blog');
        }
    }
}
