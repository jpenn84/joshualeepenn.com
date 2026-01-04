import React from 'react';

const ArticleCard = ({ title, text, image, source, onNavigate }) => {
  const handleClick = () => {
    if (source && onNavigate) {
      onNavigate(source);
    }
  };

  const cardClass = source ? 'card shadow-sm overflow-hidden' : 'card shadow-sm overflow-hidden';
  const cardStyle = source ? { cursor: 'pointer' } : {};

  return (
    <div className={cardClass} style={cardStyle} onClick={handleClick}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: '160px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-3 text-truncate-multi line-clamp-2" style={{ minHeight: '3rem' }}>
          {title}
        </h5>
        <p className={`card-text text-muted text-truncate-multi ${image ? 'line-clamp-4' : 'line-clamp-10'}`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
