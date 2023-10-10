<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->constrained('cities')->onDelete('cascade');
            $table->foreignId('sub_category_id')->constrained('sub_categories')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users');
            $table->string('street');
            $table->string('name');
            $table->text('description');
            $table->string('status')->comment('for_sale/under_offer/sold')->default('for_sale');
            $table->string('property_status')->comment('real_property/lease/both_freehold_and_leasehold/n-a')->default('real_property');
            $table->integer('asking_price');
            $table->json('documents');
            $table->json('info');
            $table->string('stage')->default('draft')->comment('published, draft');
            $table->integer('views')->default(0);
            $table->integer('likes')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businesses');
    }
};
