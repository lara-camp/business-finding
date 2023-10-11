import { Link, } from "@inertiajs/react";
import Home from "../Home";

const Nav = () => {
    return (
        <>
            <nav class="bg-gray-200">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">

                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href={route("home")} class="bg-gray-200 text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a
                                      href={route("category")}
                                      className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                      Categories
                                    </a>
                                    <a
                                      href={route("blog")}
                                      className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                      Blog
                                    </a>
                                    <a href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Location</a>
                                    <a href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">

                        <a href={route('home')} className="bg-gray-200 text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                        <a href={route('category')} className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Categories</a>
                        <a href={route('blog')} className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</a>
                        <a href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Location</a>
                        <a href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</a>
                    </div>
                </div>
            </nav>
            {/* Hello */}

        </>
    );
}

export default Nav;
