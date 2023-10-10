<?php

namespace App\Http\Controllers\Backend;

use App\Models\Faq;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\FaqResource;
use App\Http\Controllers\Controller;
use App\Http\Resources\FaqCollection;
use Illuminate\Support\Facades\Validator;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::latest()->paginate(10);
        return Inertia::render('Backend/Faq/Index', ['faqs' => new FaqCollection($faqs)]);
    }

    public function create()
    {
        // dd("hi");
        return Inertia::render('Backend/Faq/Create',[
            'faq' => new Faq(),
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            'question' => 'required|string',
            'answer' => 'required|string',
            'status' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return redirect()->route('admin.faq.create')
                ->withErrors($validator)
                ->withInput();
        }

        Faq::create([
            'question' => $request->question,
            'answer' => $request->answer,
            'status' => $request->status,
        ]);
        return to_route('admin.faq');
    }

    public function edit($id)
    {
        $faq = Faq::findOrFail($id);
        return Inertia::render('Backend/Faq/Edit', ['faq' => new FaqResource($faq)]);
    }

    public function update($id, Request $request)
    {
        $rules = [
            'question' => 'required|string',
            'answer' => 'required|string',
            'status' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return redirect()->route('admin.faq.edit')
                ->withErrors($validator)
                ->withInput();
        }
        $faq = Faq::findOrFail($id);
        $faq->update($request->all());
        return to_route('admin.faq');

    }
    public function show($id)
    {
        $faq = Faq::findOrFail($id);
        return Inertia::render('Backend/Faq/Show', ['faq' => new FaqResource($faq)]);
    }

    public function destroy($id)
    {
        $faq = Faq::findOrFail($id);
        $faq->delete();
        return to_route('admin.faq');
    }

    public function change_status($id) {
        $faq = Faq::find($id);
        if($faq->status == 1) {
            $status = 0;
        } else {
            $status = 1;
        }

        if($faq) {
            $faq->update([
                'status' => $status,
            ]);
            return to_route('admin.faq');
        }
    }
}
