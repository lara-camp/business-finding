<?php

use App\Http\Controllers\Backend\AccountSettingController;
use App\Http\Controllers\Backend\GeneralSettingController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\RegionController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\FaqController;
use App\Http\Controllers\Backend\Owner\AccountController;
use App\Http\Controllers\Backend\Owner\BusinessController;
use App\Http\Controllers\Backend\Owner\DashboardContoller;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\ProfileController;
use App\Models\Business;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', [HomeController::class,'index'])->name('home');

// Admin 

Route::inertia('/admin/login', 'Backend/Auth/Login')->name('admin.login');
Route::prefix('admin')->middleware(['auth', 'role:admin|editor'])->group(function() {
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

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/logout', function() {
    Auth::logout();
});

// Ownner 

Route::prefix('owner')->middleware('auth', 'role:owner')->group(function() {
    Route::get('/dashboard', [DashboardContoller::class, 'index'])->name('owner.dashboard');

    Route::prefix('setting')->group(function() {
        Route::prefix('account')->group(function() {
            Route::get('/', [AccountController::class, 'index'])->name('owner.account');
            Route::get('/edit', [AccountController::class, 'edit'])->name('owner.account.edit');
            Route::post('/edit', [AccountController::class, 'update'])->name('owner.account.update');
            
            // Update password 

            Route::match(['get', 'post'], '/change-password', [AccountController::class, 'change_password'])->name('owner.account.change-password');
        });
    });

    Route::prefix('business')->group(function() {
        Route::get('/', [BusinessController::class, 'index'])->name('owner.business');
        Route::get('/{id}', [BusinessController::class, 'show'])->name('owner.business.show');
        Route::get('/create', [BusinessController::class, 'create'])->name('owner.business.create');
        Route::get('/edit/{id}', [BusinessController::class, 'edit'])->name('owner.business.edit');
    });
});

require __DIR__.'/auth.php';
