<?php

namespace App\Http\Controllers;

use App\Http\Resources\OwnerDetailCollection;
use App\Http\Resources\OwnerDetailResource;
use App\Models\OwnerDetail;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        $request->validate([
            'user_id' => 'required',
            'region_id' => 'required'
        ]);

        OwnerDetail::create([
            'user_id' => $request->user_id,
            'address' => $request->address,
            'company' => $request->company
        ]);
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
