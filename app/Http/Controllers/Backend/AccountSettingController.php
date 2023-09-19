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
            $file = $request->file('image');
            $filename = time() . '_'. $file->getClientOriginalName();
            $file->storeAs('uploads/profile', $filename);
            $user->image = $filename;
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

