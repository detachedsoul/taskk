"use client";

import Image from "next/image";
import User from "@/assets/img/3.webp";
import Link from "next/link";
import useTheme from "@/hooks/useTheme";
import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { NetworkIcon, HomeIcon, FolderIcon, PlusIcon, EllipsisVerticalIcon, ArrowLeftRightIcon, ClipboardListIcon, FileCheckIcon, CalendarCheckIcon, MousePointerClickIcon, UsersIcon, MessageCircleIcon, UserPlusIcon, ChevronRightIcon, ChevronUpIcon, SearchIcon, MicIcon, CommandIcon, ChevronsUpDownIcon, ShoppingCartIcon, ListTodoIcon, LayoutDashboardIcon } from "lucide-react";

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

    const { theme, toggleTheme } = useTheme();

    const [isExpanded, setIsExpanded] = useState<string>("");

    const toggleDropdown = (activeDropdown: string) => {
        if (isExpanded === activeDropdown) {
            setIsExpanded("");

            return;
        }

        setIsExpanded(activeDropdown);
    };

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

    const fileLinks: {
        id: string,
        categoryLink: string,
        categoryLinks: navLinks[]
    }[] = [
        {
            id: useId(),
            categoryLink: "File",
            categoryLinks:  [
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
            ]
        },
        {
            id: useId(),
            categoryLink: "Apps",
            categoryLinks:  [
                {
                    id: useId(),
                    routeName: "Task Management",
                    route: "/store",
                    icon: <LayoutDashboardIcon size={18} strokeWidth={1.5} />
                },
                {
                    id: useId(),
                    routeName: "ToDo App",
                    route: "/company",
                    icon: <ListTodoIcon size={18} strokeWidth={1.5} />
                },
                {
                    id: useId(),
                    routeName: "Inventory",
                    route: "/inventory",
                    icon: <ShoppingCartIcon size={18} strokeWidth={1.5} />
                }
            ]
        }
    ];

    return (
        <nav className={`fixed grid gap-6 border bg-black text-neutral-400 border-neutral-700 rounded-xl p-4 overflow-y-auto custom-scrollbar h-4/5 w-[90%] left-[5%] sm:w-4/5 sm:left-[10%] ${isActive ? 'bottom-4' : '-bottom-full'} z-first transition-all ease-in-out duration-500 lg:absolute lg:h-full lg:w-full lg:top-0 lg:left-0 lg:border-transparent lg:border-0 lg:rounded-none lg:pt-0 dark:bg-stone-100 dark:text-stone-600 dark:font-medium`}>
            <Link className="hidden font-bold text-2xl items-center gap-2 lg:flex lg:sticky lg:top-0 bg-inherit pt-4 pb-4 dark:text-black dark:bg-stone-100" href="/">
                <CommandIcon />

                Taskk
            </Link>

            <form className="lg:-mt-4">
                <label className="flex items-center gap-2 bg-neutral-900 text-neutral-400 dark:bg-stone-200 dark:text-stone-400 px-3 rounded-lg" htmlFor="search">
                    <SearchIcon strokeWidth={1.5} />

                    <input className="bg-inherit py-2 outline-none w-full placeholder:text-neutral-400 focus:text-white focus:placeholder:text-white dark:focus:text-stone-400 dark:focus:placeholder:text-stone-400" type="search" name="search" id="search" placeholder="Search" />

                    <MicIcon strokeWidth={1.5} />
                </label>
            </form>

            <div className="grid gap-20 lg:gap-32">
                <div className="grid gap-6">
                    <ul className="grid gap-2">
                        {links.map((link: navLinks): JSX.Element => (
                            <li key={link.id}>
                                <Link className={`flex items-center gap-2 btn border ${pathname === link.route ? 'bg-neutral-900 border-neutral-700 text-white font-bold dark:text-black dark:bg-white dark:border-slate-300' : 'border-transparent hover:bg-neutral-900 hover:border-neutral-700 hover:text-white dark:hover:text-black dark:hover:bg-white dark:hover:border-slate-300'}`} href={link.route}>
                                    {link.icon}

                                    {link.routeName}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {fileLinks.map((link): JSX.Element => (
                        <div className="grid gap-2" key={link.id}>
                            <div className="flex items-center gap-4 justify-between px-3">
                                <button className="flex items-center gap-2 w-full" type="button" onClick={() => toggleDropdown(link.categoryLink)}>
                                    {isExpanded === link.categoryLink ? (
                                        <ChevronUpIcon strokeWidth={1.5} size={18} />
                                    ) : (
                                        <ChevronRightIcon strokeWidth={1.5} size={18} />
                                    )}

                                    {link.categoryLink}
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

                            <div className={`grid transition-all ease-in-out duration-500 ${isExpanded === link.categoryLink ? '[grid-template-rows:1fr]' : '[grid-template-rows:0fr]'}`}>
                                <ul className="grid gap-2 overflow-hidden">
                                    {link.categoryLinks.map((link: navLinks): JSX.Element => (
                                        <li key={link.id}>
                                            <Link className={`flex items-center gap-2 btn border ${pathname === link.route ? 'bg-neutral-900 border-neutral-700 text-white font-bold dark:text-black dark:bg-white dark:border-slate-300' : 'border-transparent hover:bg-neutral-900 hover:border-neutral-700 hover:text-white dark:hover:text-black dark:hover:bg-white dark:hover:border-slate-300'}`} href={link.route}>
                                                {link.icon}

                                                {link.routeName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <div className="p-2 rounded-[6.25rem] flex justify-between items-center gap-2 mx-auto bg-neutral-800 dark:bg-stone-200">
                        <button className={`p-[0.46875rem] rounded-[5.875rem]  flex flex-col justify-center items-center gap-[0.58594rem] hover:bg-stone-100 ${theme === "dark" ? "bg-stone-100" : "bg-transparent"}`} type="button" aria-label="Switch to dark mode" onClick={() => toggleTheme("dark")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_1826_464)">
                                    <path className="fill-stone-400" d="M9 13.2188C11.33 13.2188 13.2188 11.33 13.2188 9C13.2188 6.67005 11.33 4.78125 9 4.78125C6.67005 4.78125 4.78125 6.67005 4.78125 9C4.78125 11.33 6.67005 13.2188 9 13.2188Z" fill="white" />
                                    <path className="fill-stone-400" d="M9 3.09345C8.53363 3.09345 8.15625 2.71564 8.15625 2.2497V1.40625C8.15625 0.940309 8.53363 0.5625 9 0.5625C9.46637 0.5625 9.84375 0.940309 9.84375 1.40625V2.2497C9.84375 2.71564 9.46637 3.09345 9 3.09345Z" fill="white" />
                                    <path className="fill-stone-400" d="M13.7734 5.07056C13.5576 5.07056 13.3417 4.98816 13.1769 4.82336C12.8473 4.49387 12.8473 3.95964 13.1769 3.63015L13.7734 3.03369C14.103 2.7043 14.637 2.7042 14.9666 3.03379C15.2961 3.36328 15.2961 3.89751 14.9666 4.227L14.37 4.82346C14.2052 4.98816 13.9893 5.07056 13.7734 5.07056Z" fill="white" />
                                    <path className="fill-stone-400" d="M16.5937 9.84375H15.75C15.2836 9.84375 14.9062 9.46594 14.9062 9C14.9062 8.53406 15.2836 8.15625 15.75 8.15625H16.5937C17.0601 8.15625 17.4375 8.53406 17.4375 9C17.4375 9.46594 17.0601 9.84375 16.5937 9.84375Z" fill="white" />
                                    <path className="fill-stone-400" d="M14.37 15.2133C14.1541 15.2133 13.9382 15.131 13.7734 14.9662L13.1769 14.3698C12.8473 14.0403 12.8473 13.5061 13.1769 13.1766C13.5065 12.847 14.0404 12.8469 14.37 13.1765L14.9666 13.7729C15.2961 14.1024 15.2961 14.6366 14.9666 14.9661C14.8018 15.1309 14.5859 15.2133 14.37 15.2133Z" fill="white" />
                                    <path className="fill-stone-400" d="M9 17.4374C8.53363 17.4374 8.15625 17.0596 8.15625 16.5937V15.7502C8.15625 15.2843 8.53363 14.9065 9 14.9065C9.46637 14.9065 9.84375 15.2843 9.84375 15.7502V16.5937C9.84375 17.0596 9.46637 17.4374 9 17.4374Z" fill="white" />
                                    <path className="fill-stone-400" d="M3.63037 15.2134C3.41449 15.2134 3.19861 15.131 3.03381 14.9662C2.70422 14.6367 2.70422 14.1025 3.03381 13.773L3.63037 13.1765C3.95996 12.8471 4.4939 12.847 4.82349 13.1766C5.15308 13.5061 5.15308 14.0403 4.82349 14.3698L4.22693 14.9663C4.06213 15.131 3.84625 15.2134 3.63037 15.2134Z" fill="white" />
                                    <path className="fill-stone-400" d="M2.25 9.84375H1.40625C0.93988 9.84375 0.5625 9.46594 0.5625 9C0.5625 8.53406 0.93988 8.15625 1.40625 8.15625H2.25C2.71637 8.15625 3.09375 8.53406 3.09375 9C3.09375 9.46594 2.71637 9.84375 2.25 9.84375Z" fill="white" />
                                    <path className="fill-stone-400" d="M4.22693 5.07063C4.01105 5.07063 3.79517 4.98833 3.63037 4.82354L3.03381 4.22708C2.70422 3.89759 2.70422 3.36335 3.03381 3.03386C3.3634 2.70427 3.89734 2.70417 4.22693 3.03376L4.82349 3.63022C5.15308 3.95971 5.15308 4.49395 4.82349 4.82344C4.65869 4.98823 4.44281 5.07063 4.22693 5.07063Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1826_464">
                                        <rect width="16.875" height="16.875" fill="white" transform="translate(0.5625 0.5625)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <button className={`p-[0.46875rem] rounded-[5.875rem] flex flex-col justify-center items-center gap-[0.58594rem] transition-colors duration-300 ease-in-out hover:bg-neutral-900 ${theme === "light" ? "bg-neutral-900" : "bg-transparent"} group`} type="button" aria-label="Switch to light mode" onClick={() => toggleTheme("light")}>
                            <svg className="group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="16.875" height="16.875" viewBox="0 0 30 30" fill="none">
                                <path className="group-hover:fill-white" d="M15 4.6875C15.2486 4.6875 15.4871 4.58873 15.6629 4.41291C15.8387 4.2371 15.9375 3.99864 15.9375 3.75V2.8125C15.9375 2.56386 15.8387 2.3254 15.6629 2.14959C15.4871 1.97377 15.2486 1.875 15 1.875C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V3.75C14.0625 3.99864 14.1613 4.2371 14.3371 4.41291C14.5129 4.58873 14.7514 4.6875 15 4.6875Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M15 25.3125C14.7514 25.3125 14.5129 25.4113 14.3371 25.5871C14.1613 25.7629 14.0625 26.0014 14.0625 26.25V27.1875C14.0625 27.4361 14.1613 27.6746 14.3371 27.8504C14.5129 28.0262 14.7514 28.125 15 28.125C15.2486 28.125 15.4871 28.0262 15.6629 27.8504C15.8387 27.6746 15.9375 27.4361 15.9375 27.1875V26.25C15.9375 26.0014 15.8387 25.7629 15.6629 25.5871C15.4871 25.4113 15.2486 25.3125 15 25.3125Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M27.1875 14.0625H26.25C26.0014 14.0625 25.7629 14.1613 25.5871 14.3371C25.4113 14.5129 25.3125 14.7514 25.3125 15C25.3125 15.2486 25.4113 15.4871 25.5871 15.6629C25.7629 15.8387 26.0014 15.9375 26.25 15.9375H27.1875C27.4361 15.9375 27.6746 15.8387 27.8504 15.6629C28.0262 15.4871 28.125 15.2486 28.125 15C28.125 14.7514 28.0262 14.5129 27.8504 14.3371C27.6746 14.1613 27.4361 14.0625 27.1875 14.0625Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M3.75 14.0625H2.8125C2.56386 14.0625 2.3254 14.1613 2.14959 14.3371C1.97377 14.5129 1.875 14.7514 1.875 15C1.875 15.2486 1.97377 15.4871 2.14959 15.6629C2.3254 15.8387 2.56386 15.9375 2.8125 15.9375H3.75C3.99864 15.9375 4.2371 15.8387 4.41291 15.6629C4.58873 15.4871 4.6875 15.2486 4.6875 15C4.6875 14.7514 4.58873 14.5129 4.41291 14.3371C4.2371 14.1613 3.99864 14.0625 3.75 14.0625Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M22.9549 5.71883L22.2921 6.38164C22.2025 6.46813 22.1311 6.57157 22.082 6.68595C22.0328 6.80033 22.007 6.92335 22.0059 7.04783C22.0048 7.17231 22.0285 7.29576 22.0757 7.41098C22.1228 7.52619 22.1924 7.63087 22.2804 7.71889C22.3685 7.80691 22.4731 7.87653 22.5884 7.92366C22.7036 7.9708 22.827 7.99452 22.9515 7.99344C23.076 7.99236 23.199 7.9665 23.3134 7.91736C23.4278 7.86823 23.5312 7.79681 23.6177 7.70727L24.2814 7.04539C24.3685 6.95829 24.4376 6.85488 24.4848 6.74108C24.5319 6.62727 24.5562 6.5053 24.5562 6.38211C24.5562 6.25893 24.5319 6.13695 24.4848 6.02315C24.4376 5.90934 24.3685 5.80594 24.2814 5.71883C24.1943 5.63173 24.0909 5.56263 23.9771 5.51549C23.8633 5.46835 23.7413 5.44409 23.6182 5.44409C23.495 5.44409 23.373 5.46835 23.2592 5.51549C23.1454 5.56263 23.042 5.63173 22.9549 5.71883Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M6.38185 22.292L5.7181 22.9548C5.631 23.0419 5.5619 23.1453 5.51476 23.2591C5.46762 23.3729 5.44336 23.4949 5.44336 23.6181C5.44336 23.7413 5.46762 23.8632 5.51476 23.977C5.5619 24.0909 5.631 24.1943 5.7181 24.2814C5.89401 24.4573 6.1326 24.5561 6.38138 24.5561C6.50456 24.5561 6.62654 24.5318 6.74035 24.4847C6.85415 24.4376 6.95756 24.3685 7.04466 24.2814L7.70747 23.6185C7.79458 23.5315 7.86368 23.4282 7.91085 23.3144C7.95801 23.2007 7.98231 23.0787 7.98235 22.9556C7.9824 22.8325 7.95819 22.7105 7.9111 22.5967C7.86402 22.483 7.79499 22.3796 7.70794 22.2925C7.6209 22.2054 7.51756 22.1362 7.40381 22.0891C7.29006 22.0419 7.16813 22.0176 7.04499 22.0176C6.7963 22.0175 6.55776 22.1162 6.38185 22.292Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M23.6171 22.292C23.4403 22.1212 23.2035 22.0267 22.9577 22.0288C22.7119 22.031 22.4767 22.1296 22.3029 22.3034C22.1291 22.4772 22.0305 22.7124 22.0284 22.9582C22.0262 23.204 22.1207 23.4408 22.2915 23.6176L22.9543 24.2814C23.1302 24.4573 23.3688 24.5561 23.6176 24.5561C23.8664 24.5561 24.1049 24.4573 24.2809 24.2814C24.4568 24.1054 24.5556 23.8668 24.5556 23.6181C24.5556 23.3693 24.4568 23.1307 24.2809 22.9548L23.6171 22.292Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M6.38185 7.70821C6.55866 7.87898 6.79548 7.97347 7.04129 7.97134C7.2871 7.9692 7.52223 7.87061 7.69605 7.69679C7.86987 7.52297 7.96847 7.28783 7.97061 7.04202C7.97274 6.79621 7.87825 6.5594 7.70747 6.38258L7.04466 5.71883C6.86875 5.54292 6.63016 5.44409 6.38138 5.44409C6.1326 5.44409 5.89401 5.54292 5.7181 5.71883C5.54219 5.89474 5.44336 6.13333 5.44336 6.38211C5.44336 6.63089 5.54219 6.86948 5.7181 7.04539L6.38185 7.70821Z" fill="#B2ABAB" />
                                <path className="group-hover:fill-white" d="M23.1567 16.3903C23.0357 16.271 22.8846 16.1867 22.7195 16.1466C22.5543 16.1065 22.3814 16.112 22.2192 16.1625C21.5901 16.3568 20.9351 16.4542 20.2767 16.4513C18.4926 16.4495 16.7821 15.7401 15.5205 14.4787C14.2589 13.2173 13.5493 11.5069 13.5473 9.72285C13.545 9.06465 13.643 8.40995 13.8379 7.78128C13.8888 7.61887 13.8945 7.44566 13.8544 7.28025C13.8144 7.11483 13.73 6.96344 13.6104 6.84232C13.4909 6.7212 13.3406 6.63492 13.1757 6.59273C13.0108 6.55055 12.8375 6.55404 12.6745 6.60285C11.2513 7.03321 9.96401 7.82507 8.9381 8.9012C7.91218 9.97733 7.18269 11.301 6.82077 12.7431C6.45885 14.1851 6.47687 15.6964 6.87306 17.1294C7.26925 18.5624 8.03008 19.8683 9.08136 20.9197C10.1326 21.9711 11.4385 22.732 12.8715 23.1283C14.3045 23.5247 15.8157 23.5428 17.2578 23.181C18.6999 22.8192 20.0236 22.0898 21.0999 21.064C22.1761 20.0382 22.9681 18.751 23.3985 17.3278C23.4473 17.1644 23.4506 16.9907 23.408 16.8255C23.3654 16.6603 23.2785 16.5098 23.1567 16.3903Z" fill="#B2ABAB" />
                            </svg>
                        </button>
                    </div>
                </div>


                <button className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 flex items-center justify-between dark:bg-stone-200 dark:border-stone-100 dark:text-neutral-700" type="button">
                    <div className="flex items-center gap-3">
                        <Image className="rounded-lg w-12 h-12 object-cover" src={User} alt="David Visuals" />

                        <div className="-space-y-0.5">
                            <h3 className="font-bold text-white text-left dark:text-stone-700/50">
                                David Visuals
                            </h3>

                            <p>
                                Product Designer
                            </p>
                        </div>
                    </div>

                    <ChevronsUpDownIcon strokeWidth={1.5} size={20} />
                </button>
            </div>
        </nav>
    );
};

export default NavLinks;
