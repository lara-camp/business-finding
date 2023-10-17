<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Image;
use App\Models\OwnerDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\OwnerDetailResource;
use App\Http\Resources\OwnerDetailCollection;

class OwnerDetailController extends Controller
{
    public function index()
    {
        $ownerdetails = OwnerDetail::latest()->paginate(10);
        return Inertia::render('Backend/Owner_Detail/Index', [
            'ownerdetails' => new OwnerDetailCollection($ownerdetails),
        ]);
    }

    public function create()
    {
        return Inertia::render('Backend/Owner_Detail/Create');
    }

    public function store(Request $request)
    {   
        dd($request->all());
        $owner = OwnerDetail::findOrFail(auth()->id());
        $rules = [
            'user_id' => 'required',
            'frontend_img' => 'required',
            'address' => 'required',
            'company' => 'required',
            'backend_img' => 'required',
        ];

        // Validate the request data
        $validator = Validator::make($request->all(), $rules);

        // Check if validation fails
        if ($validator->fails()) {
            return to_route('admin.owner.create')
                ->withErrors($validator)
                ->withInput();
        }

        OwnerDetail::create([
            'user_id' => $request->user_id,
            'address' => $request->address,
            'company' => $request->company
        ]);

        if ($request->hasFile('frontend_img', 'backend_img')) {
            // Delete file if exists
            if ($owner->frontend_img != null) {
                if (Storage::exists($owner->frontend_img)) {
                    Storage::delete($owner->frontend_img);
                }
            }

            // Update File
            $file = $request->file('frontend_img', 'backend_img');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = Storage::putFileAs(
                'uploads/profile',
                $file,
                $filename
            );
            $owner->frontend_img = $path;
            $owner->backend_img = $path;
            $owner->save();
        }

        return to_route('admin.owner');
    }

    public function show($id)
    {
        $ownerdetail = OwnerDetail::findOrFail($id);
        return Inertia::render('Backend/Owner_Detail/Show', [
            'ownerdetail' => new OwnerDetailResource($ownerdetail),
        ]);
    }

    // edit
    public function edit($id)
    {
        $ownerdetail = OwnerDetail::findOrFail($id);
        return Inertia::render('Backend/City/Edit', [
            'ownerdetail' => new OwnerDetailResource($ownerdetail)
        ]);
    }
}
