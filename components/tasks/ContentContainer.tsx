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
                <h1 className="font-bold text-3xl text-white">
                    Project UI/UX
                </h1>

                <div className="flex items-center gap-8 justify-between flex-wrap">
                    <div className="flex items-center flex-wrap gap-4 divide-x-[2px] divide-neutral-700">
                        <ul className="bg-black flex items-center flex-wrap gap-1 rounded-lg p-1">
                            {boardSections.map((board: boards): JSX.Element => (
                                <li key={board.id}>
                                    <button className={`btn ${activeSection === board.boardName ? "bg-neutral-800 text-white font-bold" : "hover:bg-neutral-800 hover:text-white"}`} type="button" onClick={() => setActiveSection(board.boardName)}>
                                        {board.boardName}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center flex-wrap gap-3 pl-4">
                            <button className="flex items-center gap-2 text-white font-bold btn bg-neutral-800 border-2 border-transparent hover:border-neutral-700" type="button">
                                <CloudUploadIcon className="text-neutral-400" strokeWidth={1.5} />

                                Upload
                            </button>

                            <button className="flex items-center gap-2 text-white font-bold btn bg-sky-500 border-2 border-sky-600" type="button">
                                <PlusIcon strokeWidth={1.5} />

                                New Board
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 text-white font-bold btn bg-neutral-800 border-2 border-transparent hover:border-neutral-700" type="button">
                            <ListFilterIcon className="text-neutral-400" strokeWidth={1.5} />

                            Filter
                        </button>

                        <button className="flex items-center gap-2 text-white font-bold btn bg-neutral-800 border-2 border-transparent hover:border-neutral-700" type="button">
                            <ArrowDownUpIcon className="text-neutral-400" strokeWidth={1.5} />

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
