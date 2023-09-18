<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\Business;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index() {
        $users = User::paginate(10);
        return Inertia::render('Backend/User/Index', [
            'users' => new UserCollection($users),
        ]);
    }

    public function edit($id) {
        $user = User::findOrFail($id);
        return Inertia::render('Backend/User/Edit', [
            'user' => new UserResource($user),
        ]);
    }

    public function show($id) {
        $user = User::findOrFail($id);
        return Inertia::render('Backend/User/Show', [
            'user' => new UserResource($user),
        ]);
    }

    public function destroy($id) {
        $user = User::findOrFail($id);
        $user->delete();
        return to_route('admin.users');
    }
}
