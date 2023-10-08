<?php

namespace Database\Seeders;

use App\Models\Industry;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Industry::create(['name'=> 'Health and Wellness']);
        Industry::create(['name'=> 'Financial Services']);
        Industry::create(['name'=> 'E-Commerce and Retail']);
        Industry::create(['name'=> 'Technology and Software']);
        Industry::create(['name'=> 'Hospitality and Tourism']);
        Industry::create(['name'=> 'Real Estate and Property']);
        Industry::create(['name'=> 'Creative Arts and Media']);
        Industry::create(['name'=> 'Automotive and Transportation']);

    }
}
