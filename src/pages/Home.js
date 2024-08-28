import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const apis = [
          'https://api.thedogapi.com/v1/images/search?size=full',
          'https://api.thecatapi.com/v1/images/search?size=full'
        ];
        const randomApi = apis[Math.floor(Math.random() * apis.length)];
        const response = await fetch(randomApi);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const data = await response.json();
        setBackgroundImage(data[0].url);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchRandomImage();
  }, []);

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={{...styles.container, backgroundImage: `url(${backgroundImage})`}}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to Pet Heaven!</h1>
        <p style={styles.subtitle}>Where every pet deserves a loving home!</p>
        <div style={styles.buttonContainer}>
          <Link to="/cats" style={styles.button}>View Adoptable Cats</Link>
          <Link to="/dogs" style={styles.button}>View Adoptable Dogs</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(23, 23, 23, 0.8)',
    padding: '2rem',
    borderRadius: '10px',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1.5rem',
    transition: 'background-color 0.3s',
  },
  loading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '50px',
    color: '#333',
  },
  error: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginTop: '50px',
    color: '#ff0000',
  },
};

export default Home;