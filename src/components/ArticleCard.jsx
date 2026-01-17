import React from 'react';

const ArticleCard = ({ title, text, image, source, topics, onNavigate }) => {
  const handleClick = () => {
    if (source && onNavigate) {
      onNavigate(source);
    }
  };

  const cardClass = source ? 'card shadow-sm overflow-hidden' : 'card shadow-sm overflow-hidden';
  const cardStyle = { 
    height: '25rem',
    ...(source ? { cursor: 'pointer' } : {})
  };

  return (
    <div className={cardClass} style={cardStyle} onClick={handleClick}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: '160px', objectFit: 'cover', flexShrink: 0 }}
        />
      )}
      <div className="card-body d-flex flex-column overflow-hidden">
        <h5 className="card-title fw-bold mb-1 text-truncate-multi line-clamp-2 flex-shrink-0" style={{ minHeight: '1.5rem' }}>
          {title}
        </h5>
        {topics && topics.length > 0 && (
          <div className="mb-2 flex-shrink-0">
            {topics.map((topic, index) => (
              <span key={index} className="badge rounded-pill text-bg-info me-1">
                {topic}
              </span>
            ))}
          </div>
        )}
        <p className="card-text text-muted text-truncate-multi flex-grow-1" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
