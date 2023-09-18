<?php

namespace Database\Seeders;

use App\Models\OwnerDetail;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OwnerDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OwnerDetail::factory()->count(50)->create();
    }
}
