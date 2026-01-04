import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [articleData, setArticleData] = useState(null);
  const [articleUrl, setArticleUrl] = useState(null);

  useEffect(() => {
    if (currentView !== 'landing' && articleUrl) {
      fetch(articleUrl)
        .then(response => response.json())
        .then(data => setArticleData(data))
        .catch(error => console.error('Error fetching article:', error));
    }
  }, [currentView, articleUrl]);

  const handleNavigateToArticle = (url) => {
    setArticleUrl(url);
    setCurrentView('article');
    setArticleData(null);
  };

  return (
    <div className="App">
      <Navbar onNavigate={setCurrentView} />
      <main>
        {currentView === 'landing' ? (
          <LandingPage onNavigate={handleNavigateToArticle} />
        ) : articleData ? (
          <ArticlePage article={articleData} />
        ) : (
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
