<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ownerDetail>
 */
class OwnerDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => $this->faker->randomElement(User::pluck('id')->toArray()),
            'address' => $this->faker->address,
            'company' => $this->faker->company,
            'frontend_img' => $this->faker->imageUrl(),
            'backend_img' => $this->faker->imageUrl(),
        ];
    }
}
