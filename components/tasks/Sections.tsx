import Image from "next/image";
import { useId } from "react";
import { PlusIcon, EllipsisVerticalIcon, UsersIcon, FolderIcon, MessageCircleMoreIcon, HistoryIcon, RefreshCcwIcon } from "lucide-react";

type tags = {
    id: string,
    tagName: string,
    backgroundColor: string,
    textColor: string
}

type cards = {
    id: string,
    clientName: string,
    cardTitle: string,
    authorName: string,
    authorImage: string,
    folderCount: number,
    completionRate: number,
    comments: number,
    dateCreated: string,
    tags: tags[];
}

type sections = {
    id: string,
    sectionName: string,
    sectionCardCount: number,
    sectionBackgroundColor: string,
    cards: cards[];
};

const Sections = (): JSX.Element => {
    const cardSections: sections[] = [
        {
            id: useId(),
            sectionName: "To Do",
            sectionCardCount: 3,
            sectionBackgroundColor: "bg-sky-600",
            cards: [
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "Change top CTA button text",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        },
                        {
                            id: useId(),
                            tagName: "SaaS",
                            backgroundColor: "bg-orange-600/50",
                            textColor: "text-orange-300"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "Redesign analytics dashboard",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        },
                        {
                            id: useId(),
                            tagName: "Mobile",
                            backgroundColor: "bg-purple-600/50",
                            textColor: "text-purple-300"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Taskez",
                    cardTitle: "Create landing page",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        },
                        {
                            id: useId(),
                            tagName: "SaaS",
                            backgroundColor: "bg-orange-600/50",
                            textColor: "text-orange-300"
                        }
                    ],
                }
            ]
        },
        {
            id: useId(),
            sectionName: "In Progress",
            sectionCardCount: 2,
            sectionBackgroundColor: "bg-orange-600",
            cards: [
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "Redesign news page",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Taskez",
                    cardTitle: "Copywrite",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        }
                    ],
                }
            ]
        },
        {
            id: useId(),
            sectionName: "In Review",
            sectionCardCount: 3,
            sectionBackgroundColor: "bg-purple-600",
            cards: [
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "UI animation for onboarding...",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        },
                        {
                            id: useId(),
                            tagName: "SaaS",
                            backgroundColor: "bg-orange-600/50",
                            textColor: "text-orange-300"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "UI dark mode improvements",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "SaaS",
                            backgroundColor: "bg-orange-600/50",
                            textColor: "text-orange-300"
                        },
                        {
                            id: useId(),
                            tagName: "Mobile",
                            backgroundColor: "bg-purple-600/50",
                            textColor: "text-purple-300"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Taskez",
                    cardTitle: "Mobile redesign",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Mobile",
                            backgroundColor: "bg-purple-600/50",
                            textColor: "text-purple-300"
                        }
                    ],
                }
            ]
        },
        {
            id: useId(),
            sectionName: "Completed",
            sectionCardCount: 4,
            sectionBackgroundColor: "bg-green-500",
            cards: [
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "Navigation improvements",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Taskez",
                    cardTitle: "Text animation adjustments",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "Change CTA top buttom text",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "Visual assets for graphic",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        }
                    ],
                }
            ]
        },
        {
            id: useId(),
            sectionName: "Backlog",
            sectionCardCount: 2,
            sectionBackgroundColor: "bg-pink-600",
            cards: [
                {
                    id: useId(),
                    clientName: "Taskez",
                    cardTitle: "Create landing page",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        },
                        {
                            id: useId(),
                            tagName: "SaaS",
                            backgroundColor: "bg-orange-600/50",
                            textColor: "text-orange-300"
                        }
                    ],
                },
                {
                    id: useId(),
                    clientName: "Stellar",
                    cardTitle: "UI animation for onboarding...",
                    authorName: "Phoenix Baker",
                    authorImage: "/img.jpg",
                    folderCount: 4,
                    completionRate: 50,
                    comments: 2,
                    dateCreated: "4d",
                    tags: [
                        {
                            id: useId(),
                            tagName: "Web",
                            backgroundColor: "bg-blue-800/50",
                            textColor: "text-blue-400"
                        },
                        {
                            id: useId(),
                            tagName: "SaaS",
                            backgroundColor: "bg-orange-600/50",
                            textColor: "text-orange-300"
                        }
                    ],
                },
            ]
        },
    ];

    return (
        <div className="grid gap-4 items-start sm:flex sm:min-w-full sm:overflow-x-auto sm:custom-scrollbar">
            {cardSections.map((card: sections): JSX.Element => (
                <div className="grid gap-8 bg-black rounded-xl px-4 py-8 sm:min-w-[70%] md:min-w-[45%] lg:min-w-[40%]" key={card.id}>
                    <div className="flex items-center gap-4 justify-between flex-wrap">
                        <div className="flex items-center gap-3">
                            <div className={`w-1.5 h-8 rounded-full ${card.sectionBackgroundColor}`}></div>

                            <h2 className="font-bold text-xl text-white">
                                {card.sectionName}
                            </h2>

                            <span className="inline-block py-1 px-3 rounded-lg bg-neutral-900 font-bold">
                                {card.sectionCardCount}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button type="button" aria-label="More options">
                                <PlusIcon strokeWidth={1.5} />
                            </button>

                            <button type="button" aria-label="More options">
                                <EllipsisVerticalIcon strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {card.cards.map((sectionCard: cards): JSX.Element => (
                            <div className="bg-neutral-900 border border-neutral-700 rounded-2xl" key={sectionCard.id}>
                                <p className="p-4 border-b border-neutral-700">
                                    Client: <span className="font-bold">{sectionCard.clientName}</span>
                                </p>

                                <div className="p-4 grid gap-12">
                                    <div className="grid gap-3">
                                        <h3 className="font-bold text-white text-lg">
                                            {sectionCard.cardTitle}
                                        </h3>

                                        <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
                                            <UsersIcon strokeWidth={1.5} />

                                            <div className="rounded-full py-1.5 px-2 flex items-center gap-2 bg-neutral-700 text-white font-semibold">
                                                <Image className="rounded-full w-6 h-6" src={sectionCard.authorImage} alt={sectionCard.authorName} width={10} height={10} />

                                                {sectionCard.authorName}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {sectionCard.tags.map((tag): JSX.Element => (
                                                    <span className={`${tag.backgroundColor} ${tag.textColor} rounded-full py-1 px-2 font-semibold text-sm`} key={tag.id}>
                                                        {tag.tagName}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <p className="flex items-center gap-1">
                                                <FolderIcon strokeWidth={1.5} size={18} />
                                                {sectionCard.folderCount}
                                            </p>

                                            <p className="flex items-center gap-1">
                                                <RefreshCcwIcon strokeWidth={1.5} size={18} />
                                                {sectionCard.completionRate}
                                            </p>

                                            <p className="flex items-center gap-1">
                                                <MessageCircleMoreIcon strokeWidth={1.5} size={18} />
                                                {sectionCard.comments}
                                            </p>
                                        </div>

                                        <p className="flex items-center gap-1">
                                            <HistoryIcon strokeWidth={1.5} size={18} />
                                            {sectionCard.dateCreated}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="text-white font-bold flex items-center gap-2" type="button">
                        <PlusIcon className="text-neutral-400" strokeWidth={1.5} />

                        Add More
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Sections;
