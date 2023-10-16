<?php

namespace Database\Seeders;

use App\Models\Business;
use App\Models\BusinessFeature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessFeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BusinessFeature::factory(100)->create();
    }
}
