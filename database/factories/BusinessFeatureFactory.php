<?php

namespace Database\Factories;

use App\Models\Business;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BusinessFeature>
 */
class BusinessFeatureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'business_id' => $this->faker->randomElement(Business::pluck('id')->toArray()),
            'subject' => $this->faker->paragraph(),
            'image' => $this->faker->imageUrl(1980, 1080),
            'position' => $this->faker->randomElement(['left', 'right']),
        ];
    }
}
