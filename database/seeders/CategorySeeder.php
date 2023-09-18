<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name'=> 'Restaurant', 'slug'=> 'restaurant']);
        Category::create(['name'=> 'Retail', 'slug'=> 'retail']);
        Category::create(['name'=> 'Medical', 'slug'=> 'medical']);
        Category::create(['name'=> 'Technology', 'slug'=> 'tech']);
        Category::create(['name'=> 'Spa', 'slug'=> 'spa']);
        Category::create(['name'=> 'Hotel', 'slug'=> 'hotel']);
        Category::create(['name'=> 'House', 'slug'=> 'house']);
        Category::create(['name'=> 'Shopping Mall', 'slug'=> 'mall']);
        Category::create(['name'=> 'Fashion House', 'slug'=> 'fashion']);
    }
}
