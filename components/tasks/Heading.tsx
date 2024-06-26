import Image from "next/image";
import User from "@/assets/img/user.png";
import { ClipboardListIcon, UsersIcon, PlusIcon, ChevronRightIcon, SettingsIcon, BellIcon } from "lucide-react";

const NoContent = (): JSX.Element => {
    return (
        <section className="border-b border-neutral-700 flex items-center justify-between flex-wrap gap-4 px-4 pb-4 lg:px-8 dark:border-transparent">
            <div className="flex items-center gap-2 flex-wrap">
                <ClipboardListIcon strokeWidth={1.5} />

                <ChevronRightIcon strokeWidth={1.5} />

                Board

                <ChevronRightIcon strokeWidth={1.5} />

                <span className="btn bg-neutral-800 text-white dark:bg-stone-100 dark:text-stone-800">Overview</span>
            </div>

            <div className="items-center gap-4 flex-wrap hidden sm:flex">
                <div className="flex items-center">
                    <span className="rounded-full bg-neutral-900 p-1 dark:bg-transparent">
                        <Image className="rounded-full w-8 h-auto" src={User} alt="user icons" />
                    </span>

                    <span className="rounded-full bg-neutral-900 p-1 -ml-4 dark:bg-transparent">
                        <Image className="rounded-full w-8 h-auto" src={User} alt="user icons" />
                    </span>

                    <span className="rounded-full bg-neutral-900 p-1 -ml-4 dark:bg-transparent">
                        <Image className="rounded-full w-8 h-auto" src={User} alt="user icons" />
                    </span>

                    <span className="bg-neutral-800 rounded-full py-2 px-2.5 -ml-4 text-sm dark:bg-stone-100">
                        +2
                    </span>
                </div>

                <button className="flex items-center gap-2 rounded-full py-2 px-2.5 bg-neutral-800 text-white text-sm dark:bg-stone-100 dark:text-stone-800" type="button">
                    Find memebers

                    <PlusIcon strokeWidth={1.5} size={18} />
                </button>

                <button className="hidden lg:block" type="button" aria-label="Toggle setting menu">
                    <SettingsIcon strokeWidth={1.5} />
                </button>

                <button className="relative z-0" type="button" aria-label="View notifications">
                    <BellIcon strokeWidth={1.5} />

                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400 absolute -top-0.5 right-0.5 animate-pulse border-2 border-neutral-900 z-0 dark:border-transparent dark:bg-orange-600"></span>
                </button>
            </div>
        </section>
    );
};

export default NoContent;
