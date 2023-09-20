<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\AccountResource;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AccountSettingController extends Controller
{
    public function index() {
        $user = User::findOrFail(auth()->id());
        if($user) {
            return Inertia::render('Backend/Setting/Account', [
                'user' => new AccountResource($user),
            ]);
        } else {
            // do something
        }
    }

    public function edit() {
        $user = User::findOrFail(auth()->id());
        if($user) {
            return Inertia::render('Backend/Setting/AccountEdit', [
                'user' => new AccountResource($user),
            ]);
        } else {
            // do something
        }
    }

    public function update(Request $request) {
        $user = User::findOrFail(auth()->id());
        
        if($request->hasFile('image')) {
            // Delete file if exists 

            if(Storage::exists($user->image)) {
                Storage::delete($user->image);
            }

            // Update File 
            $file = $request->file('image');
            $filename = time() . '_'. $file->getClientOriginalName();
            $path = Storage::putFileAs(
                'uploads/profile', $file, $filename 
            );
            $user->image = $path;
            $user->save();
        }

        if($user) {
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);

            return to_route('admin.account');
        } else {
            // do something
        }   
    }
}

