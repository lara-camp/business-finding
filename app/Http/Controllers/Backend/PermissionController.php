<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PermissionController extends Controller
{
    public function index() {
        return Inertia::render('Backend/Setting/Permission');
    }

    public function create() {
        return Inertia::render('Backend/Setting/PermissionAdd');
    }

    public function edit($id) {
        return Inertia::render('Backend/Setting/PermissionEdit');
    }
}
