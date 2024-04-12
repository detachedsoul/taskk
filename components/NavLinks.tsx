"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { NetworkIcon, HomeIcon, FolderIcon, PlusIcon, EllipsisVerticalIcon, ArrowLeftRightIcon, ClipboardListIcon, FileCheckIcon, CalendarCheckIcon, MousePointerClickIcon, UsersIcon, MessageCircleIcon, UserPlusIcon, ChevronDownIcon, SearchIcon, MicIcon, CommandIcon } from "lucide-react";

type navLinks = {
    id: string,
    routeName: string,
    route: string,
    icon: JSX.Element;
};

type component = {
    isActive: boolean
};

const NavLinks = ({isActive}: component): JSX.Element => {
    const pathname = usePathname();

    const links: navLinks[] = [
        {
            id: useId(),
            routeName: "Home",
            route: "/",
            icon: <HomeIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Tasks",
            route: "/tasks",
            icon: <ClipboardListIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Docs",
            route: "/docs",
            icon: <FileCheckIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Schedule",
            route: "/schedule",
            icon: <CalendarCheckIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Chat",
            route: "/chat",
            icon: <MessageCircleIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Payments",
            route: "/payments",
            icon: <ArrowLeftRightIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Customers",
            route: "/customers",
            icon: <UserPlusIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Automations",
            route: "/automations",
            icon: <MousePointerClickIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "User Management",
            route: "/user-management",
            icon: <UsersIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Workflows",
            route: "/workflows",
            icon: <NetworkIcon size={18} strokeWidth={1.5} />
        },
    ];

    const fileLinks: navLinks[] = [
        {
            id: useId(),
            routeName: "Store",
            route: "/store",
            icon: <FolderIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Company",
            route: "/company",
            icon: <FolderIcon size={18} strokeWidth={1.5} />
        },
        {
            id: useId(),
            routeName: "Employee",
            route: "/employee",
            icon: <FolderIcon size={18} strokeWidth={1.5} />
        }
    ];

    return (
        <nav className={`fixed grid gap-6 border bg-black text-neutral-400 border-neutral-900 rounded-xl p-4 overflow-y-auto custom-scrollbar h-4/5 w-[90%] left-[5%] ${isActive ? 'bottom-4' : '-bottom-full'} z-50 transition-all ease-in-out duration-500 lg:absolute lg:h-full lg:w-full lg:top-0 lg:left-0 lg:border-transparent lg:border-0 lg:rounded-none lg:pt-0`}>
            <Link className="hidden font-bold text-2xl items-center gap-2 lg:flex lg:sticky lg:top-0 bg-inherit pt-4 pb-4" href="/">
                <CommandIcon />

                Taskk
            </Link>

            <form className="bg-neutral-900 text-neutral-400 px-3 rounded-lg hidden lg:block lg:-mt-4">
                <label className="flex items-center gap-2" htmlFor="search">
                    <SearchIcon strokeWidth={1} />

                    <input className="bg-inherit py-2 outline-none w-full placeholder:text-neutral-400 focus:text-white focus:placeholder:text-white" type="search" name="search" id="search" placeholder="Search" />

                    <MicIcon strokeWidth={1} />
                </label>
            </form>

            <ul className="grid gap-2">
                {links.map((link: navLinks): JSX.Element => (
                    <li key={link.id}>
                        <Link className={`flex items-center gap-2 btn border ${pathname === link.route ? 'bg-neutral-900 border-neutral-700 text-white' : 'border-transparent hover:bg-neutral-900 hover:border-neutral-700 hover:text-white'}`} href={link.route}>
                            {link.icon}

                            {link.routeName}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="grid gap-2">
                <div className="flex items-center gap-4 justify-between px-3">
                    <button className="flex items-center gap-2" type="button">
                        <ChevronDownIcon strokeWidth={1.5} size={18} />

                        File
                    </button>

                    <div className="flex items-center gap-4">
                        <button type="button" aria-label="Add file link">
                            <PlusIcon strokeWidth={1} size={18} />
                        </button>

                        <button type="button" aria-label="Toggle more options">
                            <EllipsisVerticalIcon strokeWidth={1} size={18} />
                        </button>
                    </div>
                </div>

                <ul className="grid gap-2">
                    {fileLinks.map((link: navLinks): JSX.Element => (
                        <li key={link.id}>
                            <Link className={`flex items-center gap-2 btn border ${pathname === link.route ? 'bg-neutral-900 border-neutral-700 text-white' : 'border-transparent hover:bg-neutral-900 hover:border-neutral-700 hover:text-white'}`} href={link.route}>
                                {link.icon}

                                {link.routeName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid gap-2">
                <div className="flex items-center gap-4 justify-between px-3">
                    <button className="flex items-center gap-2" type="button">
                        <ChevronDownIcon strokeWidth={1.5} size={18} />

                        Apps
                    </button>

                    <div className="flex items-center gap-4">
                        <button type="button" aria-label="Add file link">
                            <PlusIcon strokeWidth={1} size={18} />
                        </button>

                        <button type="button" aria-label="Toggle more options">
                            <EllipsisVerticalIcon strokeWidth={1} size={18} />
                        </button>
                    </div>
                </div>

                <ul className="grid gap-2">
                    {fileLinks.map((link: navLinks): JSX.Element => (
                        <li key={link.id}>
                            <Link className={`flex items-center gap-2 btn border ${pathname === link.route ? 'bg-neutral-900 border-neutral-700 text-white' : 'border-transparent hover:bg-neutral-900 hover:border-neutral-700 hover:text-white'}`} href={link.route}>
                                {link.icon}

                                {link.routeName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavLinks;
