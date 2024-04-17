import Link from "next/link";

const NoContent = (): JSX.Element => {
    return (
        <section className="grid place-content-center px-[10%] h-screen">
            <p className="text-xl leading-8">
                What you are looking for is not here. There’s no design for this page yet, but I’m pretty sure if you head over to <Link className="text-white underline decoration-wavy font-bold underline-offset-4 hover:text-purple-600 dark:text-purple-700 dark:hover:text-purple-800" href="/tasks">Tasks</Link> you might see <span className="font-bold underline underline-offset-8 decoration-double">something.</span> 😌
            </p>
        </section>
    );
};

export default NoContent;
