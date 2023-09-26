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
            'view user',
            'delete user',
            'edit user',

            'create region',
            'view region',
            'delete region',
            'edit region',

            'create general',
            'view general',
            'delete general',
            'edit general',

            'create category',
            'view category',
            'delete category',
            'edit category',

            'create faq',
            'view faq',
            'delete faq',
            'edit faq',
            
            'create blog',
            'view blog',
            'delete blog',
            'edit blog',

            'create permission',
            'view permission',
            'delete permission',
            'edit permission',

            'view dashboard',
            'view setting',
            
            'view city',
            'edit city',
            'delete city'
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
