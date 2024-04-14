import Image from "next/image";
import User from "@/assets/img/user.png";
import { ClipboardListIcon, UsersIcon, PlusIcon, ChevronRightIcon, SettingsIcon, BellIcon } from "lucide-react";

const NoContent = (): JSX.Element => {
    return (
        <section className="border-b border-neutral-700 flex items-center justify-between flex-wrap gap-4 px-4 pb-4 lg:px-8">
            <div className="flex items-center gap-2 flex-wrap">
                <ClipboardListIcon strokeWidth={1.5} />

                <ChevronRightIcon strokeWidth={1.5} />

                Board

                <ChevronRightIcon strokeWidth={1.5} />

                <span className="btn bg-neutral-800 text-white">Overview</span>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center">
                    <span className="rounded-full bg-neutral-900 p-2 text-white">
                        <Image className="rounded-full w-8 h-auto" src={User} alt="user icons" />
                    </span>

                    <span className="rounded-full bg-neutral-900 p-1 text-white -ml-4">
                        <Image className="rounded-full w-8 h-auto" src={User} alt="user icons" />
                    </span>

                    <span className="rounded-full bg-neutral-900 p-1 text-white -ml-4">
                        <Image className="rounded-full w-8 h-auto" src={User} alt="user icons" />
                    </span>

                    <span className="bg-neutral-800 rounded-full py-2 px-2.5 -ml-4 text-sm">
                        +2
                    </span>
                </div>

                <button className="flex items-center gap-2 rounded-full py-2 px-2.5 bg-neutral-800 text-white text-sm" type="button">
                    Find memebers

                    <PlusIcon strokeWidth={1.5} size={18} />
                </button>

                <button className="hidden lg:block" type="button" aria-label="Toggle setting menu">
                    <SettingsIcon strokeWidth={1.5} />
                </button>

                <button className="relative" type="button" aria-label="View notifications">
                    <BellIcon strokeWidth={1.5} />

                    <span className="w-3 h-3 rounded-full inline-block bg-orange-500 absolute top-0 right-0 border-2 border-neutral-900"></span>
                </button>
            </div>
        </section>
    );
};

export default NoContent;
