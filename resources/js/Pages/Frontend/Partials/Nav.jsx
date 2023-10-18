import { Link, usePage } from "@inertiajs/react";
import { SlEarphones } from "react-icons/sl";
import { router } from "@inertiajs/react";

const Nav = () => {
  const { nav_data } = usePage().props;
    const currentRoute = usePage().url;
    
    const handleCatChange = (id) => {
        router.get(route('search.business', {"category" : id}));
    }

    const handleLocChange = (id) => {
        router.get(route('search.business', {'location' : id}));
    }


  return (
    <nav className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="w-4/5 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href={route("home")}
                  className={`text-dark hover:text-yellow-400 rounded-md px-3 py-2 text-sm font-medium ${
                    currentRoute === '/' ? "text-yellow-400" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>

                <select
                  className="border-0"
                  onChange={(e) => handleCatChange(e.target.value)}
                >
                  <option value="">Categories </option>
                  {nav_data.categories.data.map((item) => (
                    <option value={item.id} key={item.id}>
                      {" "}
                      {item.name}{" "}
                    </option>
                  ))}
                </select>
                <select
                  className="border-0"
                  onChange={(e) => handleLocChange(e.target.value)}
                >
                  <option value=""> Locations </option>
                  {nav_data.locations.data.map((item) => (
                    <option value={item.id} key={item.id}>
                      {" "}
                      {item.name}{" "}
                    </option>
                  ))}
                </select>
                <Link
                  href={route("blog")}
                  className={`text-dark rounded-md px-3 py-2 text-sm font-medium ${
                    currentRoute === '/blog' ? "text-yellow-400" : "hover:text-yellow-400"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  href={route("about-us")}
                  className={`text-dark rounded-md px-3 py-2 text-sm font-medium ${
                    currentRoute === '/about-us' ? "text-yellow-400" : "hover:text-yellow-400"
                  }`}
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/5">
            <Link
              href={route("contact-us")}
              className={`hover:text-yellow-400 ${
                currentRoute === '/contact-us' ? "text-yellow-400" : ""
              }`}
            >
              <SlEarphones className="inline me-3" size={30} /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
