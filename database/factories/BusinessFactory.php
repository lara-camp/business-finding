<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\User;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $info = array(
            'no_of_employee' => 3,
            'estiblished_date' => now(),
            'rent_for_sale' => "What",
        );

        return [
            'user_id' => $this->faker->randomElement(User::pluck('id')->toArray()),
            'sub_category_id' => $this->faker->randomElement(SubCategory::pluck('id')->toArray()),
            'city_id' => $this->faker->randomElement(City::pluck('id')->toArray()),
            'street' => $this->faker->streetAddress(),
            'name' => $this->faker->name(),
            'description' => $this->faker->paragraph(),
            'asking_price' => $this->faker->randomNumber(5, false),
            'documents' => json_encode(['doc1', 'doc2', 'doc3']),
            'info' => json_encode($info),
            'views' => $this->faker->randomNumber(5, false),
            'likes' => $this->faker->randomNumber(5, false),
        ];
    }
}
