import { Link, router } from "@inertiajs/react";
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { usePage } from "@inertiajs/react";
import { BsSearch } from "react-icons/bs";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const Header = () => {
  const { nav_data, general_setting } = usePage().props;
  const [title, setTitle] = useState("");
  const [cat_id, setCatId] = useState("");

  const { auth } = usePage().props;
const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Define isDropdownOpen

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = () => {
    router.get(route("search.business"), { category: cat_id, title: title });
  };

  return (
    <div className="bg-yellow-200">
      {/* top header starts  */}
      <div className="flex mx-10 p-3 items-center">
        <div className="w-2/3">
          <BsGlobe size={20} className="inline" />
          <select
            name="lang"
            id=""
            className="rounded border-none bg-yellow-200"
          >
            <option value="en"> English </option>
          </select>
        </div>
        {!auth.user ? (
          <div className="w-1/3 text-end">
            <div className="flex">
              <div className="w-1/2">
                <Link href={route("login")}>
                  {" "}
                  <AiOutlineUser size={20} className="inline me-2" /> Sign In{" "}
                </Link>
              </div>
              <div className="w-1/2">
                <Link
                  href={route("register")}
                  className="p-2 border-spacing-1 border border-gray-950"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        ) :
            <div className="flex justify-end w-1/3">
                <div class="">
                <ul className="mr-2 list-none text-end" >
                <li className="relative">
                    <a href="#" className="block p-2 hover:bg-gray-200" onClick={toggleDropdown}>
                    {/* User Avatar */}
                    <img src={`${auth.user.image || "/storage/profile.jpg"}`} className="w-10 h-10 rounded-full" alt="user" />
                    </a>
                    <div
                    className={`absolute right-0 py-2 w-48 bg-white rounded-lg shadow-lg ${
                        isDropdownOpen ? 'block' : 'hidden'
                    }`}
                    >
                    <h3 className="block px-4 py-2 text-center text-gray-800 hover:bg-gray-200">{auth.user.name}</h3>
                    <Link href={route('logout')} className="block px-4 py-2 text-center text-gray-800 hover-bg-gray-200">Sign Out</Link>
                    </div>
                </li>
                </ul>
                </div>
            </div>
        }
      </div>
      {/* top header ends  */}
      {/* low header starts */}
      <div className="flex mx-10 p-3 items-center">
        <div className="w-1/6">
          <img src={general_setting.logo} alt="" width={50} height={50} />
        </div>
        <div className="w-2/6">
          <input
            type="text"
            placeholder="Search a business"
            className="w-full border-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-1/6">
          <select
            name="category"
            id=""
            className="border-none"
            onChange={(e) => setCatId(e.target.value)}
          >
            <option value="">Categories </option>
            {nav_data.categories.data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/6">
          <BsSearch size={30} onClick={handleSearch} />
        </div>
        <div className="w-1/6 ms-5 text-end">
          <Link
            href=""
            className="py-2 px-3 border bg-gray-900 text-white border-none"
          >
            Sell Your Business
          </Link>
        </div>
      </div>
      {/* low header ends  */}
    </div>
  );
};

export default Header;
