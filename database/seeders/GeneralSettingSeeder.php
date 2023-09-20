<?php

namespace Database\Seeders;

use App\Models\GeneralSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GeneralSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        GeneralSetting::create([
            'name' => "logo",
            'value' => "logo.png",
            'type' => "file",
        ]);
        GeneralSetting::create([
            'name' => "title",
            'value' => "Business Finding Website",
            'type' => "string",
        ]);
        GeneralSetting::create([
            'name' => "Website Name",
            'value' => "Business Finding Website",
            'type' => "file",
        ]);
    }
}
