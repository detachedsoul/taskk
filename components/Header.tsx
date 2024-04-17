"use client";

import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SettingsIcon, MenuIcon, XIcon, CommandIcon, PlusIcon, BellIcon } from "lucide-react";

const Header = (): JSX.Element => {
    const pathname = usePathname();

    const [navBarIsActive, setNavBarIsActive] = useState<boolean>(false);
    const [settingPopupIsActive, setSettingPopupIsActive] = useState<boolean>(false);

    useEffect(() => {
        setNavBarIsActive(false);
    }, [pathname]);

    return (
        <header className="flex items-center gap-4 justify-between p-4 bg-black sticky top-0 z-[1024] lg:col-span-3 lg:block lg:p-0 lg:h-screen dark:bg-stone-100">
            <Link className="font-bold text-2xl flex items-center gap-2 lg:hidden dark:text-black" href="/">
                <CommandIcon />

                Taskk
            </Link>

            <div className="flex items-center gap-4 lg:hidden">
                <div className="relative">
                    <button className="bg-neutral-900 p-2 rounded-lg sm:hidden dark:bg-stone-200 dark:text-neutral-800" type="button" aria-label="Toggle settings" onClick={() => setSettingPopupIsActive(!settingPopupIsActive)}>
                        <SettingsIcon strokeWidth={1} />
                    </button>

                    <ul className={`rounded-lg border border-neutral-800 bg-black p-2 grid gap-4 absolute min-w-max -left-[calc(200%+0.2rem)] top-[calc(100%+1.5rem)] transition-transform ease-in-out duration-500 z-50 dark:bg-stone-100 dark:border-stone-300 dark:text-stone-600 ${settingPopupIsActive ? 'translate-y-0' : '-translate-y-[200%]'}`}>
                        <li>
                            <button className="btn flex items-center gap-2 hover:bg-neutral-900 dark:hover:bg-stone-300" type="button">
                                <PlusIcon strokeWidth={1} size={20} />

                                Find Memebers
                            </button>
                        </li>

                        <li>
                            <button className="flex items-center gap-2 w-full btn hover:bg-neutral-900 dark:hover:bg-stone-300" type="button">
                                <BellIcon strokeWidth={1} size={20} />

                                Notificatins
                            </button>
                        </li>

                        <li>
                            <button className="flex items-center gap-2 w-full btn hover:bg-neutral-900 dark:hover:bg-stone-300" type="button">
                                <SettingsIcon strokeWidth={1} size={20} />

                                Settings
                            </button>
                        </li>
                    </ul>
                </div>

                <button className="bg-neutral-900 p-2 rounded-lg dark:bg-stone-200 dark:text-neutral-800" type="button" onClick={() => setNavBarIsActive(!navBarIsActive)} aria-label="Toggle mobile menu">
                    {navBarIsActive ? (
                        <XIcon strokeWidth={1} />
                    ) : (
                        <MenuIcon strokeWidth={1} />
                    )}
                </button>
            </div>

            <NavLinks isActive={navBarIsActive} />
        </header>
    );
};

export default Header;
