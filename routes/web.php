<?php

use App\Http\Controllers\Backend\AccountSettingController;
use App\Http\Controllers\Backend\GeneralSettingController;
use App\Http\Controllers\Backend\PermissionController;
use App\Http\Controllers\Backend\RegionController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
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
        });

        // Permission Setting 
        Route::prefix('permission')->group(function() {
            Route::get('/', [PermissionController::class, 'index'])->name('admin.permission');
            Route::get('/create', [PermissionController::class, 'create'])->name('admin.permission.create');
            Route::get('/edit/{id}', [PermissionController::class, 'edit'])->name('admin.permission.edit');
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
