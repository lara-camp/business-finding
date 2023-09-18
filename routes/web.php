<?php

use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/userLogin', function(){
    dd(Blog::all());
     return Inertia::render('Test/UserLogin');
});
Route::get('/sidebar', function(){
     return Inertia::render('Test/Sidebar');
});
Route::get('/table', function(){
     return Inertia::render('Test/Table');
});

// Admin 

Route::inertia('/admin/dashboard', 'Backend/Dashboard');
Route::get('/admin/users', [UserController::class, 'index']);


// User

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
