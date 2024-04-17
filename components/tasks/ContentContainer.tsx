"use client";

import Sections from "@/components/tasks/Sections";
import { CloudUploadIcon, PlusIcon, ArrowDownUpIcon, ListFilterIcon } from "lucide-react";
import { useState, useId } from "react";

type boards = {
    id: string,
    boardName: string
};

const ContentContainer = (): JSX.Element => {
    const [activeSection, setActiveSection] = useState("Board");

    const boardSections: boards[] = [
        {
            id: useId(),
            boardName: "Board"
        },
        {
            id: useId(),
            boardName: "List"
        },
        {
            id: useId(),
            boardName: "Timeline"
        },
        {
            id: useId(),
            boardName: "Due Tasks"
        }
    ];

    return (
        <section className="grid gap-8 p-4 lg:p-8">
            <div className="grid gap-4">
                <h1 className="font-bold text-3xl text-white dark:text-black">
                    Project UI/UX
                </h1>

                <div className="flex items-center gap-8 justify-between flex-wrap">
                    <div className="flex items-center flex-wrap gap-4 divide-x-[2px] divide-neutral-700">
                        <ul className="bg-black flex items-center flex-wrap gap-1 rounded-lg p-1 dark:bg-stone-100 dark:text-stone-600">
                            {boardSections.map((board: boards): JSX.Element => (
                                <li key={board.id}>
                                    <button className={`btn ${activeSection === board.boardName ? "bg-neutral-800 text-white font-bold dark:bg-white dark:text-black" : "hover:bg-neutral-800 hover:text-white dark:hover:bg-white dark:hover:text-black"}`} type="button" onClick={() => setActiveSection(board.boardName)}>
                                        {board.boardName}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center flex-wrap gap-3 pl-4">
                            <button className="flex items-center gap-2 text-white font-bold btn bg-neutral-800 border-2 border-transparent hover:border-neutral-700 dark:bg-white dark:border-neutral-400 dark:text-neutral-700 dark:hover:bg-neutral-900 dark:hover:border-black dark:hover:text-white group" type="button">
                                <CloudUploadIcon className="text-neutral-400 dark:text-neutral-700 dark:group-hover:text-white" strokeWidth={1.5} />

                                Upload
                            </button>

                            <button className="flex items-center gap-2 text-white font-bold btn bg-sky-500 border-2 border-sky-600 dark:bg-black dark:border-black dark:text-white dark:hover:bg-neutral-900" type="button">
                                <PlusIcon strokeWidth={1.5} />

                                New Board
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 text-white font-bold btn bg-neutral-800 border-2 border-transparent hover:border-neutral-700 dark:bg-black dark:hover:border-black dark:text-white dark:hover:bg-neutral-900" type="button">
                            <ListFilterIcon className="text-neutral-400 dark:text-neutral-200" strokeWidth={1.5} />

                            Filter
                        </button>

                        <button className="flex items-center gap-2 text-white font-bold btn bg-neutral-800 border-2 border-transparent hover:border-neutral-700 dark:bg-black dark:hover:border-black dark:text-white dark:hover:bg-neutral-900" type="button">
                            <ArrowDownUpIcon className="text-neutral-400 dark:text-neutral-200" strokeWidth={1.5} />

                            Sort
                        </button>
                    </div>
                </div>
            </div>

            <Sections />
        </section>
    );
};

export default ContentContainer;
