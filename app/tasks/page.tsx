import Heading from "@/components/tasks/Heading";
import ContentContainer from "@/components/tasks/ContentContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Taskk | View tasks",
    description: "Information on different tasks",
};

const Tasks = (): JSX.Element => {
    return (
        <>
            <Heading />

            <ContentContainer />
        </>
    );
};

export default Tasks;
