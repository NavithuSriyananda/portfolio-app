'use client'

export default function ExperienceTimeline() {
    return (
        <ol className="border-l-2 border-black dark:border-blue-700-500 ml-10">
            {/* <!--First item--> */}
            <li>
                <div className="flex-start flex items-center">
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-blue-700-500 absolute animate-ping"></div>
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-blue-700-500 text-white"></div>
                    <h4 className="-mt-2 text-xl font-semibold ">Title of section 1</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <a
                        href="#!"
                        className="text-sm text-blue-700 transition duration-150 ease-in-out hover:text-blue-700-600 focus:text-blue-700-600 active:text-blue-700-700 dark:text-blue-700-400 dark:hover:text-blue-700-500 dark:focus:text-blue-700-500 dark:active:text-blue-700-600"
                    >
                        4 February, 2022
                    </a>
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            {/* <!--Second item--> */}
            <li>
                <div className="flex-start flex items-center">
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-blue-700-500"></div>
                    <h4 className="-mt-2 text-xl font-semibold">Title of section 2</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <a
                        href="#!"
                        className="text-sm text-blue-700 transition duration-150 ease-in-out hover:text-blue-700-600 focus:text-blue-700-600 active:text-blue-700-700 dark:text-blue-700-400 dark:hover:text-blue-700-500 dark:focus:text-blue-700-500 dark:active:text-blue-700-600"
                    >
                        12 January, 2022
                    </a>
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                </div>
            </li>
            {/* <!--Third item--> */}
            <li>
                <div className="flex-start flex items-center">
                    <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-blue-700-500"></div>
                    <h4 className="-mt-2 text-xl font-semibold">Title of section 3</h4>
                </div>
                <div className="mb-6 ml-6 pb-6">
                    <a
                        href="#!"
                        className="text-sm text-blue-700 transition duration-150 ease-in-out hover:text-blue-700-600 focus:text-blue-700-600 active:text-blue-700-700 dark:text-blue-700-400 dark:hover:text-blue-700-500 dark:focus:text-blue-700-500 dark:active:text-blue-700-600"
                    >
                        27 December, 2021
                    </a>
                    <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia
                        animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio.
                    </p>
                </div>
            </li>
        </ol>
    )
}