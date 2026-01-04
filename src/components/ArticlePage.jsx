import React from 'react';

const ArticlePage = ({ article }) => {
  const renderContent = (content, index) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4">
            {content.text}
          </p>
        );
      case 'image':
        return (
          <figure key={index} className="my-4 text-center">
            <img
              src={content.url}
              alt={content.altText || ''}
              className="img-fluid rounded shadow"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            {content.caption && (
              <figcaption className="mt-2 text-muted fst-italic">
                {content.caption}
              </figcaption>
            )}
          </figure>
        );
      case 'blockquote':
        return (
          <blockquote key={index} className="blockquote text-center my-4 fs-3 fw-light">
            <p className="mb-0">{content.text}</p>
            {content.attribution && (
              <footer className="blockquote-footer mt-2 fs-6">
                {content.attribution}
              </footer>
            )}
          </blockquote>
        );
      case 'bs':
        return (
          <div key={index} className={content.class}>
            {content.text}
          </div>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="py-5">
      <div className="hero-image mb-5 position-relative" style={{ height: '400px', overflow: 'hidden' }}>
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
        <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-4">
          <div className="container">
            <h1 className="display-4 fw-bold mb-2">{article.title}</h1>
            <time className="text-white-50" dateTime={article.date}>
              {formatDate(article.date)}
            </time>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="article-content">
              {article.content.map((content, index) => renderContent(content, index))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticlePage;
