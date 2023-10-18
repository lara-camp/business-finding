<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Notify;
use App\Models\BusinessFeature;
use App\Models\OwnerDetail;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(100)->create();


        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            AdminSeeder::class,
            CategorySeeder::class,
            SubCategorySeeder::class,
            // BlogSeeder::class,
            FaqSeeder::class,
            RegionSeeder::class,
            CitySeeder::class,
            NotifySeeder::class,
            BusinessSeeder::class,
            BusinessFeatureSeeder::class,
            GeneralSettingSeeder::class,
            // OwnerDetailSeeder::class,
            // ImageSeeder::class,
            IndustrySeeder::class,
            SubCategorySeeder::class,
        ]);

        $user = User::factory()->create([
            'name' => 'user',
            'email' => 'user@gmail.com',
        ]);
        $user->assignRole('user');
    }
}
