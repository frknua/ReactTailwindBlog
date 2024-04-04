import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { currentArticle, setArticles } from '../redux/articleReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import ArticleItem from './article-item';
const posts = [
  {
    id: 1,
    title: 'Article 1',
    href: 'article',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'microservice', href: 'microservice' }]
  },
  {
    id: 2,
    title: 'Article 2',
    href: 'article2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'solid', href: 'solid' }, { title: 'web', href: 'web' }]
  },
  {
    id: 3,
    title: 'Article 3',
    href: 'article3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'mssql', href: 'mssql' }, { title: 'sql', href: 'sql' }]
  },
  {
    id: 4,
    title: 'Article 4',
    href: 'article4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'mssql', href: 'mssql' }, { title: 'sql', href: 'sql' }]
  },
  {
    id: 5,
    title: 'Article 5',
    href: 'article5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'mssql', href: 'mssql' }, { title: 'sql', href: 'sql' }]
  },
  {
    id: 6,
    title: 'Article 6',
    href: 'article6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'mssql', href: 'mssql' }, { title: 'sql', href: 'sql' }]
  },
  {
    id: 7,
    title: 'Article 7',
    href: 'article7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'mssql', href: 'mssql' }, { title: 'sql', href: 'sql' }]
  },
  {
    id: 8,
    title: 'Article 8',
    href: 'article8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'mssql', href: 'mssql' }, { title: 'sql', href: 'sql' }]
  },
  {
    id: 9,
    title: 'Article 9',
    href: 'article9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'sql', href: 'sql' }]
  },
  {
    id: 10,
    title: 'Article 10',
    href: 'article10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at tellus ac ipsum hendrerit mattis. Ut molestie tortor a orci euismod, non vehicula quam consectetur. Duis ornare ultricies eros, et accumsan elit elementum vel.',
    date: 'Apr 20, 2024',
    datetime: '2020-03-16',
    categories: [{ title: 'sql', href: 'sql' }]
  }
]
export default function Articles() {
  const { url } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterUrl, setFilterUrl] = useState(null);
  const pageSize = 5;
  const [filterIndex, setFilterIndex] = useState(1);
  
  useEffect(() => {
    setFilterIndex(1);
    setFilterUrl(url);
    dispatch(setArticles(posts));
  }, [url, navigate]);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 flex justify-center flex-grow">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto pt-5 pb-5 grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {
              posts.filter(i => i.categories.some(i => i.href == filterUrl || filterUrl == null || filterUrl == undefined)).map((post, index) => (
                index < (pageSize * filterIndex) &&
                <ArticleItem key={post.id} post={post} showReadMore={true} />
              ))
            }
            {
              posts.filter(i => i.categories.some(i => i.href == filterUrl || filterUrl == null || filterUrl == undefined)).length >= (pageSize * filterIndex) &&
              <button className="relative z-10 rounded-md bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700"
                onClick={() => {
                  let count = filterIndex + 1;
                  setFilterIndex(count)
                }}
              >
                Load More
              </button>}
          </div>
        </div>
      </div>
    </>
  )
}
