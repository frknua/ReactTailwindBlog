import { Link } from 'react-router-dom';
export default function NoPage() {
    return (
        <div className="bg-white dark:bg-gray-800 flex flex-grow justify-center">
            <main className="grid h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-200">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-gray-100">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}