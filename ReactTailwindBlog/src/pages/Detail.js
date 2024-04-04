import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { allArticles, filterArticle } from '../redux/articleReducer';
import { useSelector } from 'react-redux';
import ArticleItem from '../components/article-item';

export default function Detail() {
  const { url } = useParams();
  const navigate = useNavigate();
  const articles = useSelector(allArticles);
  const [article, setArticle] = useState();

  useEffect(() => {
    let filteredArticle = articles.filter(i => i.href == url);
    if (filteredArticle.length > 0) {
      setArticle(filteredArticle[0]);
    }
    else {
      navigate("/404", { replace: true });
    }
  }, [url, navigate]);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 h-full min-h-screen">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="mx-auto pt-5 pb-5 grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <ArticleItem key={article?.id} post={article} showReadMore={false} />
          </div>
        </div>
      </div>
    </>
  );
}