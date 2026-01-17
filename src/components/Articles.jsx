import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

const Articles = ({ onNavigate }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jpenn84.github.io/data/joshualeepenn.com/articles/articles.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="interest-details" className="container py-2">
        <h2 className="text-center mb-5 fw-bold">Articles</h2>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  // Flatten all articles from all sections into a single array
  const allArticles = data.flatMap(section => section.articles);

  return (
    <section id="interest-details" className="container py-2">
      <h2 className="text-center m-3 fw-bold">Articles</h2>
      <div className="row g-4">
        {allArticles.map((article, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <ArticleCard
              title={article.title}
              text={article.text}
              image={article.image}
              source={article.source}
              topics={article.topics}
              onNavigate={onNavigate}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
