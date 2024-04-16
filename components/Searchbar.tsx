import { NetworkIcon, HomeIcon, FolderIcon, PlusIcon, EllipsisVerticalIcon, ArrowLeftRightIcon, ClipboardListIcon, FileCheckIcon, CalendarCheckIcon, MousePointerClickIcon, UsersIcon, MessageCircleIcon, UserPlusIcon, ChevronDownIcon, SearchIcon, MicIcon } from "lucide-react";

type component = {
    isActive: boolean
};

const Searchbar = ({isActive}: component): JSX.Element => {
    return (
        <form className={`fixed border bg-black text-neutral-400 border-neutral-700 rounded-lg w-[90%] left-[5%] md:w-4/5 md:left-[10%] px-3 ${isActive ? 'bottom-[calc(100%-8rem)]' : '-bottom-full'} transition-all ease-in-out duration-500 lg:hidden`}>
            <label className="flex items-center gap-2" htmlFor="mobile-search">
                <SearchIcon strokeWidth={1} />

                <input className="bg-inherit py-3 outline-none w-full placeholder:text-neutral-400 focus:text-white focus:placeholder:text-white" type="search" name="search" id="mobile-search" placeholder="Search" />

                <MicIcon strokeWidth={1} />
            </label>
        </form>
    );
};

export default Searchbar;
