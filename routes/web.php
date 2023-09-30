<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\FaqController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\RegionController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\PermissionController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use App\Http\Controllers\Backend\AccountSettingController;
use App\Http\Controllers\Backend\GeneralSettingController;

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

// Admin

Route::prefix('admin')->middleware(['auth', 'role:admin'])->group(function() {
    // Dashboard
    Route::inertia('/dashboard', 'Backend/Dashboard')->name('admin.dashboard');

    // User
    Route::prefix('user')->group(function() {
        Route::get('/', [UserController::class, 'index'])->name('admin.users');
        Route::get('/create', [UserController::class, 'create']);
        Route::get('/edit/{id}', [UserController::class, 'edit'])->name('admin.user.edit');
        Route::get('/{id}', [UserController::class, 'show'])->name('admin.user.show');
        Route::post('/{id}', [UserController::class, 'destroy'])->name('admin.user.delete');
    });

    // jCategory------------------------------------------------------------------------------------------------
    Route::get('/category', [CategoryController::class, 'index'])->name('admin.category');
    Route::get('/category/create',[CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/category/store',[CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/category/edit/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::get('/category/{id}', [CategoryController::class, 'show'])->name('admin.category.show');
    Route::post('/category/{id}', [CategoryController::class, 'destroy'])->name('admin.category.delete');
    // end---------------------------------------------------------------------------------------------------

    // Sub Category------------------------------------------------------------------------------------------------
    Route::get('/sub_category', [SubCategoryController::class, 'index'])->name('admin.sub_category');
    Route::get('/sub_category/create',[SubCategoryController::class, 'create'])->name('admin.sub_category.create');
    Route::post('/sub_category/store',[SubCategoryController::class, 'store'])->name('admin.sub_category.store');
    // Route::get('/sub_category/edit/{id}', [SubCategoryController::class, 'edit'])->name('admin.sub_category.edit');
    // Route::get('/sub_category/{id}', [SubCategoryController::class, 'show'])->name('admin.sub_category.show');
    // Route::post('/sub_category/{id}', [SubCategoryController::class, 'destroy'])->name('admin.sub_category.delete');
    // end---------------------------------------------------------------------------------------------------

    // Faq------------------------------------------------------------------------------------------------
    Route::get('/blog', [BlogController::class, 'index'])->name('admin.blog');
    Route::get('/blog/create', [BlogController::class, 'create'])->name('admin.blog.create');
    Route::post('/blog/store', [BlogController::class, 'store'])->name('admin.blog.store');
    Route::get('/blog/edit/{id}', [BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::get('/blog/{id}', [BlogController::class, 'show'])->name('admin.blog.show');
    Route::post('/blog/{id}', [BlogController::class, 'destroy'])->name('admin.blog.delete');
    // end---------------------------------------------------------------------------------------------------

    // Faq------------------------------------------------------------------------------------------------
    Route::get('/faq', [FaqController::class, 'index'])->name('admin.faq');
    Route::inertia('/faq/create', [FaqController::class, 'create']);
    Route::get('/faq/edit/{id}', [FaqController::class, 'edit'])->name('admin.faq.edit');
    Route::get('/faq/{id}', [FaqController::class, 'show'])->name('admin.faq.show');
    Route::post('/faq/{id}', [FaqController::class, 'destroy'])->name('admin.faq.delete');
    // end---------------------------------------------------------------------------------------------------

    // Setting

    Route::prefix('setting')->group(function() {
        // Account Setting
        Route::prefix('account')->group(function() {
            Route::get('/', [AccountSettingController::class, 'index'])->name('admin.account');
            Route::get('/edit', [AccountSettingController::class, 'edit']);
            Route::post('/edit', [AccountSettingController::class, 'update']);

            // Update password

            Route::match(['get', 'post'], '/change-password', [AccountSettingController::class, 'change_password']);
        });

        // General Setting
        Route::prefix('general')->group(function() {
            Route::get('/', [GeneralSettingController::class, 'index'])->name('admin.general');
            Route::get('/create', [GeneralSettingController::class, 'create'])->name('admin.general.create');
            Route::get('/edit/{id}', [GeneralSettingController::class, 'edit'])->name('admin.general.edit');
            Route::post('/edit/{id}', [GeneralSettingController::class, 'update'])->name('admin.general.update');
        });

        // Permission Setting
        Route::prefix('permission')->group(function() {
            Route::get('/', [PermissionController::class, 'index'])->name('admin.permission');
            Route::get('/create', [PermissionController::class, 'create'])->name('admin.permission.create');
            Route::get('/edit/{id}', [PermissionController::class, 'edit'])->name('admin.permission.edit');
            Route::post('/edit/{id}', [PermissionController::class, 'update'])->name('admin.permission.update');
        });


    });
});


Route::get('/admin/regions', [RegionController::class, 'index'])->name('admin.regions');





// User

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/logout', function() {
    Auth::logout();
});

require __DIR__.'/auth.php';
