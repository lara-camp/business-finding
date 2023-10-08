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
        Category::create(['name'=> 'Retail Businesses', 'slug'=> 'retail']);
        Category::create(['name'=> 'Food and Beverage', 'slug'=> 'food']);
            Category::create(['name'=> 'Service Businesses', 'slug'=> 'service']);
        Category::create(['name'=> 'Manufacturing', 'slug'=> 'manufacturing']);
        Category::create(['name'=> 'Technology and IT', 'slug'=> 'tech']);
        /* Category::create(['name'=> 'Hotel', 'slug'=> 'hotel']);
        Category::create(['name'=> 'House', 'slug'=> 'house']);
        Category::create(['name'=> 'Shopping Mall', 'slug'=> 'mall']);
        Category::create(['name'=> 'Fashion House', 'slug'=> 'fashion']); */
    }
}
