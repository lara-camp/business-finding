<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Backend\FaqController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Backend\RegionController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\Owner\AccountController;
use App\Http\Controllers\Backend\AccountSettingController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\GeneralSettingController;
use App\Http\Controllers\Backend\IndustryController;
use App\Http\Controllers\Backend\Owner\BusinessController;
use App\Http\Controllers\Backend\Owner\DashboardContoller;
use App\Http\Controllers\OwnerDetailController;
use App\Http\Controllers\SubCategoryController;

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

Route::get('/', [HomeController::class, 'index'])->name('home');

// Admin

Route::inertia('/admin/login', 'Backend/Auth/Login')->name('admin.login');
Route::prefix('admin')->middleware(['auth', 'role:admin|editor'])->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

    // User
    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('admin.users');
        Route::get('/create', [UserController::class, 'create'])->name('admin.user.create');
        Route::post('/create', [UserController::class, 'store'])->name('admin.user.store');
        Route::get('/edit/{id}', [UserController::class, 'edit'])->name('admin.user.edit');
        Route::put('/edit/{id}', [UserController::class, 'update'])->name('admin.user.update');
        Route::get('/{id}', [UserController::class, 'show'])->name('admin.user.show');
        Route::post('/{id}', [UserController::class, 'destroy'])->name('admin.user.delete');
    });

    // jCategory------------------------------------------------------------------------------------------------
    Route::get('/category', [CategoryController::class, 'index'])->name('admin.category');
    Route::get('/category/create', [CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/category/store', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/category/edit/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::get('/category/{id}', [CategoryController::class, 'show'])->name('admin.category.show');
    Route::post('/category/{id}', [CategoryController::class, 'destroy'])->name('admin.category.delete');
    Route::post('/category/update/{id}', [CategoryController::class, 'update'])->name('admin.category.update');
    // end---------------------------------------------------------------------------------------------------

    // Sub Category------------------------------------------------------------------------------------------------
    Route::get('/sub_category', [SubCategoryController::class, 'index'])->name('admin.sub_category');
    Route::get('/sub_category/create', [SubCategoryController::class, 'create'])->name('admin.sub_category.create');
    Route::post('/sub_category/store', [SubCategoryController::class, 'store'])->name('admin.sub_category.store');
    Route::get('/sub_category/{id}', [SubCategoryController::class, 'show'])->name('admin.sub_category.show');
    Route::post('/sub_category/{id}', [SubCategoryController::class, 'destroy'])->name('admin.sub_category.delete');
    Route::get('/sub_category/edit/{id}', [SubCategoryController::class, 'edit'])->name('admin.sub_category.edit');
    Route::post('/sub_category/update/{id}', [SubCategoryController::class, 'update'])->name('admin.sub_category.update');
    // end---------------------------------------------------------------------------------------------------

    // Faq------------------------------------------------------------------------------------------------
    Route::get('/blog', [BlogController::class, 'index'])->name('admin.blog');
    Route::get('/blog/create', [BlogController::class, 'create'])->name('admin.blog.create');
    Route::post('/blog/store', [BlogController::class, 'store'])->name('admin.blog.store');
    Route::get('/blog/edit/{id}', [BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::post('/blog/update/{id}', [BlogController::class, 'update'])->name('admin.blog.update');
    Route::get('/blog/{id}', [BlogController::class, 'show'])->name('admin.blog.show');
    Route::post('/blog/{id}', [BlogController::class, 'destroy'])->name('admin.blog.delete');
    // end---------------------------------------------------------------------------------------------------

    // Faq------------------------------------------------------------------------------------------------
    Route::get('/faq', [FaqController::class, 'index'])->name('admin.faq');
    Route::get('/faq/create', [FaqController::class, 'create'])->name('admin.faq.create');
    Route::post('/faq/store', [FaqController::class, 'store'])->name('admin.faq.store');
    Route::get('/faq/edit/{id}', [FaqController::class, 'edit'])->name('admin.faq.edit');
    Route::post('/faq/update/{id}', [FaqController::class, 'update'])->name('admin.faq.update');
    Route::get('/faq/{id}', [FaqController::class, 'show'])->name('admin.faq.show');
    Route::post('/faq/{id}', [FaqController::class, 'destroy'])->name('admin.faq.delete');
    Route::post('/faq/change-status/{id}', [FaqController::class, 'change_status'])->name('admin.faq.change_status');
    // end---------------------------------------------------------------------------------------------------
    // industry------------------------------------------------------------------------------------------------
    Route::get('/industry', [IndustryController::class, 'index'])->name('admin.industry');
    Route::get('/industry/create', [IndustryController::class, 'create'])->name('admin.industry.create');
    Route::post('/industry/store', [IndustryController::class, 'store'])->name('admin.industry.store');
    Route::get('/industry/edit/{id}', [IndustryController::class, 'edit'])->name('admin.industry.edit');
    Route::post('/industry/update/{id}', [IndustryController::class, 'update'])->name('admin.industry.update');
    Route::get('/industry/{id}', [IndustryController::class, 'show'])->name('admin.industry.show');
    Route::post('/industry/{id}', [IndustryController::class, 'destroy'])->name('admin.industry.delete');
    // end---------------------------------------------------------------------------------------------------

    // Setting

    Route::prefix('setting')->group(function () {
        // Account Setting
        Route::prefix('account')->group(function () {
            Route::get('/', [AccountSettingController::class, 'index'])->name('admin.account');
            Route::get('/edit', [AccountSettingController::class, 'edit']);
            Route::post('/edit', [AccountSettingController::class, 'update']);

            // Update password

            Route::match(['get', 'post'], '/change-password', [AccountSettingController::class, 'change_password']);
        });

        // General Setting
        Route::prefix('general')->group(function () {
            Route::get('/', [GeneralSettingController::class, 'index'])->name('admin.general');
            Route::get('/create', [GeneralSettingController::class, 'create'])->name('admin.general.create');
            Route::get('/edit/{id}', [GeneralSettingController::class, 'edit'])->name('admin.general.edit');
            Route::post('/edit/{id}', [GeneralSettingController::class, 'update'])->name('admin.general.update');
        });

        // Permission Setting
        Route::prefix('permission')->group(function () {
            Route::get('/', [PermissionController::class, 'index'])->name('admin.permission');
            Route::get('/create', [PermissionController::class, 'create'])->name('admin.permission.create');
            Route::get('/edit/{id}', [PermissionController::class, 'edit'])->name('admin.permission.edit');
            Route::post('/edit/{id}', [PermissionController::class, 'update'])->name('admin.permission.update');
        });
    });
});

// region
Route::get('/admin/regions', [RegionController::class, 'index'])->name('admin.regions');
Route::get('/admin/region/create', [RegionController::class, 'create'])->name('admin.region.create');
Route::post('/admin/region/create', [RegionController::class, 'store'])->name('adim.region.store');
Route::get('/admin/region/{id}', [RegionController::class, 'show'])->name('admin.region.show');
Route::put('/admin/region/edit/{id}', [RegionController::class, 'update'])->name('admin.region.update');
Route::get('/admin/region/edit/{id}', [RegionController::class, 'edit'])->name('admin.region.edit');
Route::post('/admin/region/{id}', [RegionController::class, 'destroy'])->name('admin.region.delete');

// cities
Route::get('/admin/cities', [CityController::class, 'index'])->name('admin.cities');
Route::get('/admin/cities/create', [CityController::class, 'create'])->name('admin.cities.create');
Route::post('/admin/cities/create', [CityController::class, 'store'])->name('admin.store');
Route::get('/admin/cities/{id}', [CityController::class, 'show'])->name('admin.cities.show');
Route::get('/admin/cities/edit/{id}', [CityController::class, 'edit'])->name('admin.cities.edit');
Route::post('/admin/cities/{id}', [CityController::class, 'destroy'])->name('admin.region.delete');

// owner_detail
Route::get('/admin/owner', [OwnerDetailController::class, 'index'])->name('admin.owner');
Route::get('/admin/owner/create', [OwnerDetailController::class, 'create'])->name('admin.owner.create');
Route::get('/admin/owner/{id}}', [OwnerDetailController::class, 'show'])->name('admin.owner.show');
Route::get('/admin/owner/edit/{id}}', [OwnerDetailController::class, 'edit'])->name('admin.owner.edit');






// User

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/logout', function () {
    Auth::logout();
});

// Ownner

Route::prefix('owner')->middleware('auth', 'role:owner')->group(function () {
    Route::get('/dashboard', [DashboardContoller::class, 'index'])->name('owner.dashboard');

    Route::prefix('setting')->group(function () {
        Route::prefix('account')->group(function () {
            Route::get('/', [AccountController::class, 'index'])->name('owner.account');
            Route::get('/edit', [AccountController::class, 'edit'])->name('owner.account.edit');
            Route::post('/edit', [AccountController::class, 'update'])->name('owner.account.update');

            // Update password

            Route::match(['get', 'post'], '/change-password', [AccountController::class, 'change_password'])->name('owner.account.change-password');
        });
    });

    Route::prefix('business')->group(function () {
        Route::get('/', [BusinessController::class, 'index'])->name('owner.business');
        Route::get('/create', [BusinessController::class, 'create'])->name('owner.business.create');
        Route::post('/create', [BusinessController::class, 'store'])->name('owner.business.store');
        Route::get('/{id}', [BusinessController::class, 'show'])->name('owner.business.show');
        Route::get('/edit/{id}', [BusinessController::class, 'edit'])->name('owner.business.edit');
        Route::post('/edit/{id}', [BusinessController::class, 'update'])->name('owner.business.update');
        Route::post('/delete/{id}', [BusinessController::class, 'destroy'])->name('owner.business.destroy');
        Route::post('/change-stage/{id}', [BusinessController::class, 'change_stage'])->name('owner.business.change-stage');
    });
});

require __DIR__ . '/auth.php';
