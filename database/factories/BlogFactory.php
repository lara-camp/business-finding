<?php

namespace Database\Factories;

use App\Models\Industry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->name,
            'body' => $this->faker->text,
            'content' => $this->faker->paragraph,
            'cover_image' => 'Service Businesses.png',
            'tag' => $this->faker->randomElement(['News', 'Guide', 'Advice for buyers', 'Advice for sellers']),
            'user_id' => $this->faker->randomElement(User::pluck('id')->toArray()),
            'industry_id' => $this->faker->numberBetween(1 , 8),
            'status' => $this->faker->randomElement(['0', '1']),
        ];
    }
}
