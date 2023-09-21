<?php

use App\Http\Controllers\Backend\RegionController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\FaqController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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

Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function() {
    // Dashboard
    Route::inertia('/dashboard', 'Backend/Dashboard')->name('admin.dashboard');

    // User
    Route::get('/user', [UserController::class, 'index'])->name('admin.users');
    Route::get('/user/edit/{id}', [UserController::class, 'edit'])->name('admin.user.edit');
    Route::get('/user/{id}', [UserController::class, 'show'])->name('admin.user.show');
    Route::post('/user/{id}', [UserController::class, 'destroy'])->name('admin.user.delete');
    Route::inertia('/user/create', 'Backend/User/Create');
});


Route::get('/admin/regions', [RegionController::class, 'index'])->name('admin.regions');

// Category------------------------------------------------------------------------------------------------
Route::get('/admin/category', [CategoryController::class, 'index'])->name('admin.category');
Route::get('/admin/category/edit/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit');
Route::get('/admin/category/{id}', [CategoryController::class, 'show'])->name('admin.category.show');
Route::post('/admin/category/{id}', [CategoryController::class, 'destroy'])->name('admin.category.delete');
Route::inertia('/admin/category/create', 'Backend/Category/Create');
// end---------------------------------------------------------------------------------------------------

// Faq------------------------------------------------------------------------------------------------
Route::get('/admin/faq', [FaqController::class, 'index'])->name('admin.faq');
Route::get('/admin/faq/edit/{id}', [FaqController::class, 'edit'])->name('admin.faq.edit');
Route::get('/admin/faq/{id}', [FaqController::class, 'show'])->name('admin.faq.show');
Route::post('/admin/faq/{id}', [FaqController::class, 'destroy'])->name('admin.faq.delete');
Route::inertia('/admin/faq/create', 'Backend/Faq/Create');
// end---------------------------------------------------------------------------------------------------

// Faq------------------------------------------------------------------------------------------------
Route::get('/admin/blog', [BlogController::class, 'index'])->name('admin.blog');
Route::get('/admin/blog/edit/{id}', [BlogController::class, 'edit'])->name('admin.blog.edit');
Route::get('/admin/blog/{id}', [BlogController::class, 'show'])->name('admin.blog.show');
Route::post('/admin/blog/{id}', [BlogController::class, 'destroy'])->name('admin.blog.delete');
Route::inertia('/admin/blog/create', 'Backend/Blog/Create');
// end---------------------------------------------------------------------------------------------------


// User

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('dashboard');

Route::middleware(['user', 'role:user'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
