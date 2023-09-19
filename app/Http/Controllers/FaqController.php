<?php

namespace App\Http\Controllers;

use App\Http\Resources\FaqCollection;
use App\Http\Resources\FaqResource;
use App\Models\Faq;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::paginate(10);
        return Inertia::render('Backend/Faq/Index', ['faqs' => new FaqCollection($faqs)]);
    }

    public function edit($id)
    {
        $faq = Faq::findOrFail($id);
        return Inertia::render('Backend/Faq/Edit', ['faq' => new FaqResource($faq)]);
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
}
