import { Link, router, } from "@inertiajs/react";
import Home from "../Home";
import {usePage} from "@inertiajs/react";

const Nav = () => {
    const {nav_data} = usePage().props;
    
    const handleCatChange = (id) => {
        router.get(route('search.business', {"category" : id}));
    }

    const handleLocChange = (id) => {
        router.get(route('search.business', {'location' : id}));
    }

    return (
        <>
            <nav class="bg-slate-50">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">

                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <Link href={route("home")} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                                    <select name="" id="" className="border-0" onChange={(e) => handleCatChange(e.target.value)}>
                                        <option value="">Categories </option>
                                        {
                                            nav_data.categories.data.map(item => (
                                                <option value={item.id} key={item.id} > {item.name}  </option>
                                            ))
                                        }
                                    </select>
                                    <select name="" id="" className="border-0" onChange={e => handleLocChange(e.target.value)}>
                                        <option value=""> Locations </option>
                                        {
                                            nav_data.locations.data.map(item => (
                                                <option value={item.id} key={item.id}> {item.name}  </option>
                                            ))
                                        }
                                    </select>
                                    <Link
                                      href={route("category")}
                                      className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                    >
                                      Blog
                                    </Link>
                                    <Link href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">

                        <Link href={route('home')} className="bg-gray-200 text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>

                        <Link href={route('category')} className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Categories</Link>
                        <Link href={route('category')} className="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                        <Link href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Location</Link>
                        <Link href={route('home')} class="text-dark hover:bg-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About Us</Link>
                    </div>
                </div>
            </nav>
            {/* Hello */}

        </>
    );
}

export default Nav;
