<?php

namespace App\Http\Controllers\Backend\Owner;

use App\Http\Controllers\Controller;
use App\Models\Business;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardContoller extends Controller
{
    public function index() {
        $total_businesses = Business::where('user_id', auth()->id())->count();
        $drafts = Business::where('stage', 'draft')->where('user_id', auth()->id())->count();
        $published = Business::where('stage', 'published')->where('user_id', auth()->id())->count();
        $sold = Business::where('status', 'sold')->where('user_id', auth()->id())->count();
        return Inertia::render('Owner/Dashboard', [
            'total_businesses' => $total_businesses,
            'drafts' => $drafts,
            'published' => $published,
            'sold' => $sold,
        ]);
    }
}
