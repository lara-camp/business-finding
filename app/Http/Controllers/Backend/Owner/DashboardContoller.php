<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardContoller extends Controller
{
    public function index() {
        return Inertia::render('Owner/Dashboard');
    }
}
