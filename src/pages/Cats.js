import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const catNames = [
    'Whiskers', 'Luna', 'Oliver', 'Bella', 'Leo', 'Milo', 'Lucy', 'Charlie', 'Nala', 'Simba',
    'Max', 'Kitty', 'Chloe', 'Tiger', 'Loki', 'Oreo', 'Jasper', 'Oscar', 'Smokey', 'Ziggy',
    'Felix', 'Mittens', 'Pepper', 'Shadow', 'Socks', 'Pumpkin', 'Gizmo', 'Boots', 'Bandit', 'Misty'
  ];

  const getRandomCatName = () => {
    return catNames[Math.floor(Math.random() * catNames.length)];
  };

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_ka5icAtHWu4kZYS4ixttpZAjGw5GGRzrnJqska0ef45WaCkjlFJ5YCoNYbcP11MK');
        if (!response.ok) {
          throw new Error('Failed to fetch cats');
        }
        const data = await response.json();
        const catsWithNames = data.map(cat => ({
          ...cat,
          name: getRandomCatName()
        }));
        setCats(catsWithNames);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCats();
  }, []);

  const handleCatClick = (cat) => {
    navigate('/adopt', { state: { cat } });
  };

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Adopt a cat today!</h1>
      <p style={styles.description}>Here are some of our adorable cats looking for a forever home:</p>
      <div style={styles.catGrid}>
        {cats.map((cat) => (
          <div key={cat.id} style={styles.catCard} onClick={() => handleCatClick(cat)}>
            <img src={cat.url} alt={`Cat named ${cat.name}`} style={styles.catImage} />
            <p style={styles.catName}>Name: {cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5em',
    textAlign: 'center',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.6em',
    color: '#cdcdcd',
    textAlign: 'center',
    marginBottom: '30px',
  },
  catGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  catCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  catImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  catName: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f4f4f423',
    margin: '0',
  },
};

export default Cats;