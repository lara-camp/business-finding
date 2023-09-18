<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(public_path('mmrc_cities.json'));
        $data = json_decode($json, true);

        foreach ($data['data'] as $city) {
            DB::table('cities')->insert([
                'name' => $city['name'],
                'region_id' => $city['region_id'],
            ]);
        }
    }
}
