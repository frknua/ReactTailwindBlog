export default function Projects() {
    return (
        <div className="bg-white dark:bg-gray-800 flex flex-grow">
            <div className="mx-auto max-w-2xl">
                <div className="pt-10 pb-10 pr-10 pl-5">
                    <ul
                        aria-label="Alternative changelog feed"
                        role="feed"
                        className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[5.5rem] lg:after:left-[5.5rem] dark:before:border-gray-700 dark:after:border-gray-700"
                    >
                        <li
                            role="article"
                            className="relative pl-2 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-gray-800 before:ring-2 before:ring-white lg:flex lg:gap-10 lg:pl-0 lg:before:left-[5.5rem] dark:before:bg-white"
                        >
                            <h4 className="hidden text-base font-medium leading-7 text-gray-900 dark:text-gray-200 lg:block lg:w-20 lg:text-right pr-3">
                                2024
                            </h4>
                            <div className="flex flex-col flex-1 gap-2">
                                <h3 className="text-base font-bold leading-7 text-gray-900 dark:text-white px-2">
                                    Mobile App
                                    <span className="font-normal text-gray-900 dark:text-white lg:hidden">
                                        {" "}
                                        - 2024
                                    </span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-200 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel. Curabitur vitae ante augue. Sed vulputate risus porta egestas venenatis. Morbi posuere lorem eu sem vestibulum accumsan.
                                </p>
                                <ul className="pl-5 list-disc text-gray-600 dark:text-gray-200 marker:text-gray-800 dark:marker:text-gray-200">
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                                <div className="flex flex-row pl-2 py-4 gap-x-2">
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="inline-flex max-w-md h-10 items-center justify-start gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-base font-semibold tracking-wide bg-gray-800 text-white hover:bg-gray-900 dark:text-gray-800 dark:bg-white dark:hover:bg-gray-300"
                                    >
                                        <svg className="h-5 w-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol" aria-label="Google play icon">
                                            <path d="M21.9219 19.6222L27.8405 13.7036L8.72367 2.95928C7.45668 2.27475 6.26976 2.17868 5.22895 2.92726L21.9219 19.6222ZM28.8316 26.5339L34.9843 23.0732C36.1853 22.4007 36.8438 21.4479 36.8438 20.3911C36.8438 19.3363 36.203 18.3993 35.0041 17.7267L29.4337 14.5983L23.1452 20.8495L28.8316 26.5339ZM4.20016 4.38239C4.07206 4.7767 4 5.21704 4 5.69941V35.1322C4 35.8948 4.16813 36.5513 4.47237 37.0738L20.6789 20.8652L4.20016 4.38239ZM21.9219 22.1061L5.8054 38.2246C6.11364 38.3427 6.4459 38.4048 6.79617 38.4048C7.42065 38.4048 8.07116 38.2206 8.73367 37.8524L27.258 27.4503L21.9219 22.1061Z" fill="currentColor"></path></svg>
                                        <span className="flex flex-col">
                                            <span className="text-sm font-medium">Play Store</span>
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="inline-flex max-w-md h-10 items-center justify-start gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-base font-semibold tracking-wide bg-gray-800 text-white hover:bg-gray-900 dark:text-gray-800 dark:bg-white dark:hover:bg-gray-300"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="graphics-symbol"
                                            aria-label="App store icon"
                                        >
                                            <path
                                                d="M30.293 21.0245C30.2769 18.0748 31.6111 15.8485 34.3116 14.209C32.8006 12.047 30.518 10.8575 27.5041 10.6244C24.6509 10.3993 21.5325 12.2881 20.3912 12.2881C19.1856 12.2881 16.4208 10.7047 14.2508 10.7047C9.76604 10.7771 5 14.2813 5 21.4103C5 23.516 5.38578 25.6914 6.15735 27.9365C7.18611 30.8861 10.8993 38.1196 14.7732 37.999C16.7986 37.9508 18.2292 36.5603 20.8654 36.5603C23.4212 36.5603 24.7473 37.999 27.0058 37.999C30.9119 37.9427 34.2714 31.3683 35.2519 28.4106C30.0117 25.9432 30.293 21.1772 30.293 21.0245ZM25.7439 7.82744C27.9381 5.2234 27.7372 2.85243 27.6729 2.00049C25.7359 2.11301 23.4935 3.31859 22.2156 4.80546C20.8091 6.39682 19.9813 8.36593 20.1581 10.5842C22.2558 10.7449 24.1687 9.66795 25.7439 7.82744Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="flex flex-col">
                                            <span className="text-sm font-medium">App Store</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li
                            role="article"
                            className="relative pl-2 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-gray-800 before:ring-2 before:ring-white lg:flex lg:gap-10 lg:pl-0 lg:before:left-[5.5rem] dark:before:bg-white"
                        >
                            <h4 className="hidden text-base font-medium leading-7 text-gray-900 dark:text-gray-200 lg:block lg:w-20 lg:text-right pr-3">
                                2023
                            </h4>
                            <div className="flex flex-col flex-1 gap-2">
                                <h3 className="text-base font-bold leading-7 text-gray-900 dark:text-white px-2">
                                    Web Project
                                    <span className="font-normal text-gray-900 dark:text-white lg:hidden">
                                        {" "}
                                        - 2023
                                    </span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-200 px-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel. Curabitur vitae ante augue. Sed vulputate risus porta egestas venenatis. Morbi posuere lorem eu sem vestibulum accumsan.
                                </p>
                                <ul className="pl-5 list-disc text-gray-600 dark:text-gray-200 marker:text-gray-800 dark:marker:text-gray-200">
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                    <li>Lorem ipsum</li>
                                </ul>
                                <div className="flex flex-row pl-2 py-4 gap-x-2">
                                <a
                                        href="#"
                                        target="_blank"
                                        className="inline-flex max-w-md h-10 items-center justify-start gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-base font-semibold tracking-wide bg-gray-800 text-white hover:bg-gray-900 dark:text-gray-800 dark:bg-white dark:hover:bg-gray-300"
                                    >
                                          <span className="flex flex-col">
                                            <span className="text-sm font-medium">Go To Project →</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}   