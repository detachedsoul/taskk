"use client";

import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import Searchbar from "@/components/Searchbar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SettingsIcon, MenuIcon, XIcon, SearchIcon, CommandIcon } from "lucide-react";

const Header = (): JSX.Element => {
    const pathname = usePathname();

    const [navBarIsActive, setNavBarIsActive] = useState<boolean>(false);
    const [searchBarIsActive, setSearchBarIsActive] = useState<boolean>(false);

    useEffect(() => {
        setNavBarIsActive(false);
        setSearchBarIsActive(false);
    }, [pathname]);

    return (
        <header className="flex items-center gap-4 justify-between p-4 bg-black sticky top-0 lg:col-span-3 lg:block lg:p-0 lg:h-screen">
            <Link className="font-bold text-2xl flex items-center gap-2 lg:hidden" href="/">
                <CommandIcon />

                Taskk
            </Link>

            <div className="flex items-center gap-4 lg:hidden">
                <button className="bg-neutral-700 p-2 rounded-lg" type="button" aria-label="Toggle settings">
                    <SettingsIcon strokeWidth={1} />
                </button>

                <button className="bg-neutral-700 p-2 rounded-lg" type="button" aria-label="Toggle searchbar" onClick={() => setSearchBarIsActive(!searchBarIsActive)}>
                    <SearchIcon strokeWidth={1} />
                </button>

                <button className="bg-neutral-700 p-2 rounded-lg" type="button" onClick={() => setNavBarIsActive(!navBarIsActive)} aria-label="Toggle mobile menu">
                    {navBarIsActive ? (
                        <XIcon strokeWidth={1} />
                    ) : (
                        <MenuIcon strokeWidth={1} />
                    )}
                </button>
            </div>

            <NavLinks isActive={navBarIsActive} />

            <Searchbar isActive={searchBarIsActive} />
        </header>
    );
};

export default Header;
