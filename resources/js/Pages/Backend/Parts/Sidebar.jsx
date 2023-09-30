import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";

import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

import {
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const Sidebar = ({ setSideBarOpen, sideBarOpen }) => {

    const navigation = [
        { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
        {
            name: "Users",
            href: "/admin/users",
            icon: UsersIcon,
            current: false,
        },
        {
            name: "Regions",
            href: "/admin/regions",
            icon: FolderIcon,
            current: false,
        },
        {
            name: "Cities",
            href: "/admin/cities",
            icon: FolderIcon,
            current: false,
        },
        { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
        {
            name: "Documents",
            href: "#",
            icon: DocumentDuplicateIcon,
            current: false,
        },
        { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}

            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    />
                </div>

                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-gray-800 text-white"
                                                    : "text-gray-400 hover:text-white hover:bg-gray-800",

                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                            )}
                                        >
                                            <item.icon
                                                className="h-6 w-6 shrink-0"
                                                aria-hidden="true"
                                            />

                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="mt-auto">
                            <a
                                href="#"
                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                            >
                                <Cog6ToothIcon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                />
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
