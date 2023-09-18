<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'create user',
            'edit user',
            'view user',
            'delete user',
        ];

        foreach ($permissions as $key => $permission) {
            Permission::create([
                'name' => $permission,
            ]);
        }

        $role = Role::findByName('admin');
        $role->givePermissionTo($permissions);
    }
}
