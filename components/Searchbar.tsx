import { NetworkIcon, HomeIcon, FolderIcon, PlusIcon, EllipsisVerticalIcon, ArrowLeftRightIcon, ClipboardListIcon, FileCheckIcon, CalendarCheckIcon, MousePointerClickIcon, UsersIcon, MessageCircleIcon, UserPlusIcon, ChevronDownIcon, SearchIcon, MicIcon } from "lucide-react";

type component = {
    isActive: boolean
};

const Searchbar = ({isActive}: component): JSX.Element => {
    return (
        <form className={`fixed border bg-neutral-900 text-neutral-400 border-neutral-700 rounded-lg w-[90%] left-[5%] px-3 ${isActive ? 'bottom-[calc(100%-7.5rem)]' : '-bottom-full'} transition-all ease-in-out duration-500 lg:hidden`}>
            <label className="flex items-center gap-2" htmlFor="search">
                <SearchIcon strokeWidth={1} />

                <input className="bg-inherit py-3 outline-none w-full focus:text-white focus:placeholder:text-white" type="search" name="search" id="search" placeholder="Search" />

                <MicIcon strokeWidth={1} />
            </label>
        </form>
    );
};

export default Searchbar;
