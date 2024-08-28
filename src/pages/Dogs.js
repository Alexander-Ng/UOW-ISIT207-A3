import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dogNames = [
    "Max", "Bella", "Charlie", "Daisy", "Rocky", "Luna", "Buddy", "Sadie", "Duke", "Chloe", "Cooper", "Zoe", "Milo", "Bailey",
    "Ruby", "Tucker", "Rosie", "Jack", "Maggie", "Bear", "Sophie", "Leo", "Stella", "Finn", "Molly", "Riley", "Lola", "Bentley",
    "Milo", "Oliver", "Ginger", "Rex", "Penny", "Winston", "Ellie", "Oscar", "Nala", "Harley", "Gus", "Lilly", "Zeus", "Roxy",
    "Teddy", "Gracie", "Sam", "Macy", "Ranger", "Piper", "Moose", "Hazel"
  ];

  const getRandomDogName = () => {
    return dogNames[Math.floor(Math.random() * dogNames.length)];
  };

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=12&api_key=live_Nem7XhpnSDdh9dTFJRc94T2N7JUEX4jojR5n0RuHFXRto32u7iVE0uEUHKq0Tdhw');
        if (!response.ok) {
          throw new Error('Failed to fetch dogs');
        }
        const data = await response.json();
        const dogsWithNames = data.map(cat => ({
          ...cat,
          name: getRandomDogName()
        }));
        setDogs(dogsWithNames);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchDogs();
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
      <h1 style={styles.title}>Adopt a dog today!</h1>
      <p style={styles.description}>Here are some of our adorable dogs looking for a forever home:</p>
      <div style={styles.dogGrid}>
        {dogs.map((cat) => (
          <div key={cat.id} style={styles.dogCard} onClick={() => handleCatClick(cat)}>
            <img src={cat.url} alt={`Dog named ${cat.name}`} style={styles.dogImage} />
            <p style={styles.dogName}>Name: {cat.name}</p>
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
  dogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  dogCard: {
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
  dogImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  dogName: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#f4f4f423',
    margin: '0',
  },
};

export default Dogs;