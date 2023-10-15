<?php

namespace App\Http\Middleware;

use App\Helper\Helper;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {   

        if(request()->segment(1) != 'admin' || request()->segment(1) != 'owner') {
            $frontend_data = true;
        }
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'permissions' => $request->user() ? $request->user()->getAllPermissions()->pluck('name')->toArray() : "",
            'general_setting' => array(
                'logo'         => Helper::generalSetting('logo'),
                'website-name' => Helper::generalSetting('Website Name'),
                'title'        => Helper::generalSetting('title'),
            ),
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'nav_data' => fn () => $frontend_data ? [
                'categories' => Helper::getCategories(),
                'locations' => Helper::getLocations(), 
            ] : [],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
