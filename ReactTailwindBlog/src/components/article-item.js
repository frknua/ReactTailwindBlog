import { Link } from 'react-router-dom';
export default function ArticleItem(props) {
  return (
    <article key={props?.post?.id} className="flex max-w-2xl flex-col items-start justify-between mb-5">
      <div className="group relative">
        <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
          <Link to={"/" + props?.post?.href}>
            <span className="relative inset-0" />
            {props?.post?.title}
          </Link>
        </h3>
        <p className="relative mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{props?.post?.description}</p>
      </div>
      {
        props?.showReadMore &&
        <div className="flex items-center gap-x-4 text-xs mt-2">
          <Link to={"/" + props?.post?.href} className="text-sm font-semibold leading-6 text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-300">
            Read more <span aria-hidden="true">→</span>
          </Link>
        </div>
      }
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs mt-2">
        <time dateTime={props?.post?.datetime} className="text-gray-500 dark:text-gray-400">
          {props?.post?.date}
        </time>
        {
          props?.post?.categories.map((category, id) =>
            <Link
              key={category.title + id}
              to={"/tags/" + category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              #{category.title}
            </Link>
          )
        }
      </div>
    </article>
  );
}