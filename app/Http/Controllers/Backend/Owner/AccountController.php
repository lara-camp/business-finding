<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Backend\AccountResource;

class AccountController extends Controller
{
    public function index() {
        $user = User::findOrFail(auth()->id());
        if($user) {
            return Inertia::render('Owner/Account/Index', [
                'user' => new AccountResource($user),
            ]);
        } else {
            // do something
        }
    }

    public function edit() {
        $user = User::findOrFail(auth()->id());
        if($user) {
            return Inertia::render('Owner/Account/Edit', [
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

            if($user->image != null) {
                if(Storage::exists($user->image)) {
                    Storage::delete($user->image);
                }
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

            return to_route('owner.account');
        } else {
            // do something
        }   
    }

    public function change_password(Request $request) {
        if($request->isMethod('post')) {
            $request->validate([
                'current_password' => 'required |min:8|max:16',
                'new_password' => 'required| min:8| max:16',
                'confirm_password' => 'required | same:new_password'
            ]);

            if(!Hash::check($request->current_password, auth()->user()->password)) {
                throw ValidationException::withMessages([
                    'current_password' => 'Password does not match.Please try again.',
                ]);
            } else {
                $user = User::findOrFail(auth()->id());
                $user->update([
                    'password' => $request->new_password,
                ]);
                return to_route('owner.account');
            }


        } else {
            return Inertia::render("Owner/Account/UpdatePassword");
        }
    }
}
