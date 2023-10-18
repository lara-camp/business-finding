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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
        ) : (
          <div className="relative">
            <div className="flex-shrink-0">
              <button
                onClick={toggleDropdown}
                className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  src={auth.user.image || "/storage/profile.jpg"} // Replace with the actual image URL
                  alt={auth.user.name} // Replace with the user's name
                  className="w-12 h-12 rounded-full"
                />
              </button>
            </div>

            <Transition
              show={isOpen}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-48 py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      key={auth.user.id}
                      href={route("logout")}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Logout
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </div>
        )}
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
