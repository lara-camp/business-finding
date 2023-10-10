<?php

namespace Database\Seeders;

use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SubCategory::Create(['name'=> 'Convenience Stores', 'slug'=>'convenience', 'category_id'=>1]);
        SubCategory::Create(['name'=> 'clothing Boutiques', 'slug'=>'clothing', 'category_id'=>1]);
        SubCategory::Create(['name'=> 'Electronics Shops', 'slug'=>'electronic', 'category_id'=>1]);
        SubCategory::Create(['name'=> 'Grocery STores', 'slug'=>'grocery', 'category_id'=>1]);
        SubCategory::Create(['name'=> 'Bookstores', 'slug'=>'bookstores', 'category_id'=>1]);
        SubCategory::Create(['name'=> 'Restaurants', 'slug'=>'restaurants', 'category_id'=>2]);
        SubCategory::Create(['name'=> 'Bars and Pubs', 'slug'=>'bars and pubs', 'category_id'=>2]);
        SubCategory::Create(['name'=> 'Bakeries', 'slug'=>'bakeries', 'category_id'=>2]);
        SubCategory::Create(['name'=> 'Food Trucks', 'slug'=>'food trucks', 'category_id'=>2]);
        SubCategory::Create(['name'=> 'Consulting Firms', 'slug'=>'consulting', 'category_id'=>3]);
        SubCategory::Create(['name'=> 'Law Firms', 'slug'=>'law', 'category_id'=>3]);
        SubCategory::Create(['name'=> 'Accounting Service', 'slug'=>'accounting', 'category_id'=>3]);
        SubCategory::Create(['name'=> 'Cleaning Services', 'slug'=>'cleaning', 'category_id'=>3]);
        SubCategory::Create(['name'=> 'Event Planning', 'slug'=>'event', 'category_id'=>3]);
        SubCategory::Create(['name'=> 'Industrial Equipment', 'slug'=>'industrial', 'category_id'=>4]);
        SubCategory::Create(['name'=> 'Food Production', 'slug'=>'food', 'category_id'=>4]);
        SubCategory::Create(['name'=> 'Automotive', 'slug'=>'automotive', 'category_id'=>4]);
        SubCategory::Create(['name'=> 'Manufacturing', 'slug'=>'manufacturing', 'category_id'=>4]);
        SubCategory::Create(['name'=> 'Textile Mills', 'slug'=>'textile', 'category_id'=>4]);
        SubCategory::Create(['name'=> 'Software Development', 'slug'=>'software', 'category_id'=>5]);
        SubCategory::Create(['name'=> 'IT Consulting', 'slug'=>'IT Consulting', 'category_id'=>5]);
        SubCategory::Create(['name'=> 'Web Development', 'slug'=>'web', 'category_id'=>5]);
        SubCategory::Create(['name'=> 'Data Centers', 'slug'=>'data', 'category_id'=>5]);
        SubCategory::Create(['name'=> 'Cybersecurity', 'slug'=>'cybersecurity', 'category_id'=>5]);
    }
}
