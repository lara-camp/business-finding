<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        $editor = User::create([
            'name' => 'editor',
            'email' => 'editor@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);
        
        $admin->assignRole(['admin', 'user']);
        $editor->assignRole('editor');
    }
}
