import NoContent from "@/components/NoContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Taskk | Oops! There's no content for this page yet.",
    description: "Page not found",
};

const Index = (): JSX.Element => {
    return (
        <NoContent />
    );
};

export default Index;
