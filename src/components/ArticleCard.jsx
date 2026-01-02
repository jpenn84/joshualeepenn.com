import React from 'react';

const ArticleCard = ({ title, text, image }) => {
  return (
    <div className="card shadow-sm overflow-hidden">
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
