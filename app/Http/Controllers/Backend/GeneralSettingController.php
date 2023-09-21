<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Resources\Backend\GeneralSettingCollection;
use App\Http\Resources\Backend\GeneralSettingResource;
use App\Models\GeneralSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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

    public function edit($id) {
        $gs = GeneralSetting::findOrFail($id);
        return Inertia::render('Backend/Setting/GeneralEdit', [
            'gs' => new GeneralSettingResource($gs),
        ]);
    }

    public function update(Request $request, $id) {
        $gs = GeneralSetting::findOrFail($id);
        $value = "";
        $request->validate([
            'name' => 'required',
            'value' => 'required',
        ]);

        try {
            if($request->hasFile('image') ) {
                $request->validate([
                    'image' => 'required|image|mimes:jpg,jpeg,png,bmp,gif,svg'
                ]);
                $file = $request->file('image');
                $filename = time() . "_" . $file->getClientOriginalName(); 
    
                if(Storage::exists($gs->value)) {
                    Storage::delete($gs->value);
                }
    
                $path = Storage::putFileAs('uploads/logo', $file, $filename);
                $value = $path;
            } else {
                $value = $request->value;
            }

            $gs->name = $request->name;
            $gs->value = $value;
            $gs->save();
    
            return to_route('admin.general');

        } catch(\Exception $e) {
            return redirect()->back()->with('message',  $e->getMessage());
        }
    }
}
