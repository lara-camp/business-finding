<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\BusinessFeature;
use App\Models\Notify;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(100)->create();

        \App\Models\User::factory()->create([
            'name' => 'user',
            'email' => 'user@gmail.com',
        ]);

        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            AdminSeeder::class,
            CategorySeeder::class,
            BlogSeeder::class,
            RegionSeeder::class,
            CitySeeder::class,
            NotifySeeder::class,
            BusinessSeeder::class,
            BusinessFeatureSeeder::class,
        ]);
    }
}
