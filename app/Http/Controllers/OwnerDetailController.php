<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Image;
use App\Models\OwnerDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\OwnerDetailResource;
use App\Http\Resources\OwnerDetailCollection;
use App\Http\Resources\UserCollection;

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
        $users = User::all();
        // dd($users);
        return Inertia::render('Backend/Owner_Detail/Create', [
            'users' => new UserCollection($users),
        ]);
    }

    public function store(Request $request)
    {
       
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

        if ($request->hasFile('frontend_img')) {
            // Update
            $file = $request->file('frontend_img');
            $filename = time() . '_' . $file->getClientOriginalName();
            $frontend_img = Storage::putFileAs(
                'uploads/profile',
                $file,
                $filename
            );
        }

        if ($request->hasFile('backend_img')) {
            // Update backendFile
            $file = $request->file('backend_img');
            $filename = time() . '_' . $file->getClientOriginalName();
            $backend_img = Storage::putFileAs(
                'uploads/profile',
                $file,
                $filename
            );
        }

        $owner = User::find($request->user_id);
        try {
            OwnerDetail::create([
                'user_id' => $request->user_id,
                'address' => $request->address,
                'company' => $request->company,
                'frontend_img' => $frontend_img,
                'backend_img' => $backend_img,
            ]);
        } catch (\Throwable $th) {
            throw $th;
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
