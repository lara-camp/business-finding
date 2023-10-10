<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Image::factory()->count(10)->create();
        // ForIndustry
        Image::create(['url' => 'Health and Wellness.png', 'imageable_id'=>1 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'Financial Services.png', 'imageable_id'=>2 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'E-Commerce and Retail.png', 'imageable_id'=>3 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'Technology and Software.png', 'imageable_id'=>4 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'Hospitality and Tourism.png', 'imageable_id'=>5 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'Real Estate and Property.png', 'imageable_id'=>6 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'Creative Arts and Media.png', 'imageable_id'=>7 , 'imageable_type' => 'App\Models\Industry']);
        Image::create(['url' => 'Automotive and Transportation.png', 'imageable_id'=>8 , 'imageable_type' => 'App\Models\Industry']);

        // For Category
        Image::create(['url' => 'Retail Businesses.png', 'imageable_id'=>1 , 'imageable_type' => 'App\Models\Category']);
        Image::create(['url' => 'Food and Berverage.png', 'imageable_id'=>2 , 'imageable_type' => 'App\Models\Category']);
        Image::create(['url' => 'Service Businesses.png', 'imageable_id'=>3 , 'imageable_type' => 'App\Models\Category']);
        Image::create(['url' => 'Manufacturing.png', 'imageable_id'=>4 , 'imageable_type' => 'App\Models\Category']);
        Image::create(['url' => 'Technology and IT.png', 'imageable_id'=>5 , 'imageable_type' => 'App\Models\Category']);
    }
}
