<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\GeneralSettingCollection;
use App\Models\GeneralSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralSettingController extends Controller
{
    public function index() {
        $data = GeneralSetting::latest('id')->paginate();
        return Inertia::render('Backend/Setting/General', [
            'gs' => new GeneralSettingCollection($data), 
        ]);
    }

    public function create() {
        return Inertia::render('Backend/Setting/GeneralAdd');
    }

    public function edit() {
        return Inertia::render('Backend/Setting/GeneralEdit');
    }
}
