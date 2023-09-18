<?php

namespace Database\Seeders;

use App\Models\Region;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = File::get(public_path('mmrc_regions.json'));
        $data = json_decode($file, true);

        foreach ($data['data'] as $region) {
            Region::create([
                'name' => $region['name'],
                'name_mm' => $region['name_mm'],
                'type' => $region['type'],
            ]);
        }
    }
}
