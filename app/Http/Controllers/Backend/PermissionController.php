<?php

namespace App\Http\Controllers\Backend;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use Spatie\Permission\Models\Permission;
use App\Http\Resources\Backend\PermissionCollection;

class PermissionController extends Controller
{
    public function index() {
        $roles = Role::where('name', '!=', 'user')->paginate(10);
        return Inertia::render('Backend/Setting/Permission', [
            'roles' => new UserCollection($roles),
        ]);
    }

    public function create() {
        return Inertia::render('Backend/Setting/PermissionAdd');
    }

    public function edit($id) {
        $role = Role::findById($id);
        $user_permissions = $role->getAllPermissions()->pluck('name');
        $permissions = Permission::latest('id')->get(['id', 'name']);
        return Inertia::render('Backend/Setting/PermissionEdit', [
            'user_permissions' => $user_permissions,
            'all_permissions' => $permissions,
            'role' => $role,
        ]);
    }

    public function update(Request $request, $id) {
        $role = Role::findOrFail($id);
        $permission = Permission::findById($request->permission_id);
        if($role->hasDirectPermission($permission)) {
            $role->revokePermissionTo($permission->name);
        } else {
            $role->givePermissionTo($permission);
        }
    }
}
