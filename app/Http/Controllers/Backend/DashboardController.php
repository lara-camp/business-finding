<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        $total_users = User::whereHas('roles', function($query) {
            $query->where('name', 'user');
        })->count();
        $total_owners = User::whereHas('roles', function($query) {
            $query->where('name', 'owner');
        })->count();
        $daily_users = User::whereHas('roles', function($query) {
            $query->where('name', 'user');
        })->whereDate('created_at', now())->count();

        $blogs = Blog::count();

        return Inertia::render('Backend/Dashboard', [
            'total_users' => $total_users,
            'total_owners' => $total_owners,
            'daily_users' => $daily_users,
            'blogs' => $blogs,
        ]);
    }
}
