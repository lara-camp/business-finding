<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{
    public function index() {
        $categories = Category::latest('id')->get();
        return Inertia::render('Owner/Business/Index', [
            'categories' => new CategoryCollection($categories),
        ]);
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
