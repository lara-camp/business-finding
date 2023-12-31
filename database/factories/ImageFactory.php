<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $imageableId = $this->faker->unique()->numberBetween(1, 10);
        return [
            'url' => '',
            'imageable_id' => '',
            'imageable_type' => '',
        ];
    }
}
