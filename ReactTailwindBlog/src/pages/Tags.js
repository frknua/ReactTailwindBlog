import { Link } from 'react-router-dom';
export default function Tags() {
    return (
        <div className="bg-white dark:bg-gray-800 flex flex-grow">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
                <div className="flex flex-wrap h-full content-center items-center justify-center gap-x-2 gap-y-2 text-xs max-w-2xl py-2">
                    {
                        <>
                            <Link
                                key={1}
                                to={"/tags/microservice"}
                                className="uppercase relative z-10 rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
                            >
                                #MICROSERVICE
                                <span className="ml-1 text-gray-400">(1)</span>
                            </Link>
                            <Link
                                key={2}
                                to={"/tags/solid"}
                                className="uppercase relative z-10 rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
                            >
                                #SOLID
                                <span className="ml-1 text-gray-400">(1)</span>
                            </Link>
                            <Link
                                key={3}
                                to={"/tags/mssql"}
                                className="uppercase relative z-10 rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
                            >
                                #MSSQL
                                <span className="ml-1 text-gray-400">(6)</span>
                            </Link>
                            <Link
                                key={4}
                                to={"/tags/web"}
                                className="uppercase relative z-10 rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
                            >
                                #WEB
                                <span className="ml-1 text-gray-400">(1)</span>
                            </Link>
                            <Link
                                key={5}
                                to={"/tags/sql"}
                                className="uppercase relative z-10 rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-300"
                            >
                                #SQL
                                <span className="ml-1 text-gray-400">(8)</span>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}