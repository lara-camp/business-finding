<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index() {
        return Inertia::render('Owner/Business/Index');
    }

    public function show() {
        return Inertia::render('Owner/Business/Show');
    }

    public function create() {
        return Inertia::render('Owner/Business/Create');
    }

    public function edit() {
        return Inertia::render('Owner/Business/Edit');
    }
}
