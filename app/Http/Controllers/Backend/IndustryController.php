<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Image;
use App\Models\Industry;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\IndustryCollection;
use App\Http\Resources\IndustryResource;

class IndustryController extends Controller
{
    public function index()
    {
        $industries = Industry::latest()->paginate(10);
        return Inertia::render('Backend/Industry/Index', [
            'industries' => new IndustryCollection($industries),
        ]);
    }

    public function create()
    {
        return Inertia::render('Backend/Industry/Create', [
            'industry' => new Industry(),
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $rules = [
            'name' => 'required|string|max:255',
            'image' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.industry.create')
                ->withErrors($validator)
                ->withInput();
        }
        $industry = Industry::create([
            'name' => $request->name,
        ]);

        if($request->hasFile('image'))
        {
            $file = 'In'.time().auth()->id().'-'.$_FILES['image']['name'];
            // dd($file);
            $path = Storage::disk('public')->put( $file,fopen($request->file('image'), 'r+'));
            Image::create([
                'url' => $file ,
                'imageable_id' => $industry->id,
                'imageable_type' => 'App\Models\Industry',
            ]);

        }
        return redirect()->route('admin.industry');
    }

    public function edit($id)
    {
        $industry = Industry::findOrFail($id);
        return Inertia::render('Backend/Industry/Edit', [
            'industry' => new IndustryResource($industry),
        ]);
    }

    public function update($id, Request $request)
    {
        $rules = [
            'name' => 'required|string|max:255',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return redirect()->route('admin.industry.create')
                ->withErrors($validator)
                ->withInput();
        }
        $industry = Industry::findOrFail($id);
        if ($request->hasFile('image')) {

            $image = Image::where('imageable_id',$id)->where('imageable_type','App\Models\Industry')->first();
            // dd($image);
            if ($image->url) {
                Storage::disk('public')->delete($image->url);

            }
            $image->delete();
            $file = 'In'.time().auth()->id().'-'.$_FILES['image']['name'];
            $path = Storage::disk('public')->put( $file,fopen($request->file('image'), 'r+'));

            Image::create([
                'url' => $file ,
                'imageable_id' => $industry->id,
                'imageable_type' => 'App\Models\Industry',
            ]);
            // dd(Image::where('imageable_id',$id)->where('imageable_type','App\Models\Industry')->first());
        }
        $industry->update($request->all());
        return to_route('admin.industry');
    }

    public function destroy($id) {
        $industry = Industry::findOrFail($id);
        $image = Image::where('imageable_id',$industry->id)->where('imageable_type', 'App\Models\Industry')->first();
        // dd( $image->url);
        if(Storage::disk('public')->exists($image->url))
        {
            Storage::disk('public')->delete($image->url);
        }
        $image->delete();
        $industry->delete();
        return to_route('admin.industry');
    }
}
