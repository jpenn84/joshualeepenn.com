import React, { useRef, useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

const InterestSection = ({ title, icon, iconColor, articles, onNavigate }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300 + 24; // Card width + gap
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-center mb-4">
        <i className={`fas ${icon} me-2 ${iconColor}`}></i>{title}
      </h2>
      <div className="horizontal-scroll-wrapper bg-light rounded shadow-sm">
        <button className="scroll-zone scroll-zone-left" onClick={() => scroll(-1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="horizontal-scroll" ref={scrollRef}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              text={article.text}
              image={article.image}
              source={article.source}
              onNavigate={onNavigate}
            />
          ))}
        </div>
        <button className="scroll-zone scroll-zone-right" onClick={() => scroll(1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

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

  return (
    <section id="interest-details" className="container py-2">
      <h2 className="text-center mb-5 fw-bold">Interest area articles</h2>
      {data.map((section, index) => (
        <InterestSection
          key={index}
          title={section.title}
          icon={section.icon}
          iconColor={section.iconColor}
          articles={section.articles}
          onNavigate={onNavigate}
        />
      ))}
    </section>
  );
};

export default Articles;
