<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserCollection;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Backend/User/Index', [
            'users' => new UserCollection($users),
        ]);
    }

    public function create()
    {
        return Inertia::render('Backend/User/Create');
    }

    public function store(Request $request)
    {

        $user = User::findOrFail(auth()->id());

        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($request->hasFile('image')) {
            // Delete file if exists 

            if ($user->image != null) {
                if (Storage::exists($user->image)) {
                    Storage::delete($user->image);
                }
            }

            // Update File 
            $file = $request->file('image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = Storage::putFileAs(
                'uploads/profile',
                $file,
                $filename
            );
            $user->image = $path;
            $user->save();
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => $request->password,
        ]);

        return to_route('admin.users')->with('message', 'User created successfully');
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Backend/User/Edit', [
            'user' => new UserResource($user),
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', Rule::unique('users')->ignore($id)],
            // 'phone' => []
        ]));
        return to_route('admin.users')->with('message', 'User Updated Successfully');
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Backend/User/Show', [
            'user' => new UserResource($user),
        ]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return to_route('admin.users');
    }
}
