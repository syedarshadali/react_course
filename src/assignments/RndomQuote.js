import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomQuote = async () => {
    try {
      const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
      
      if (res.ok) {
        const data = await res.json();
        setQuote(data[0]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false); // Ensure loading is false in any case
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  if (loading) {
    return <p>Loading Quote....</p>;
  }

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={fetchRandomQuote}>
        Get Quote
      </button>
      <div style={styles.quoteContainer}>
        <h3 style={styles.quoteText}>"{quote.quote}"</h3>
        <h6 style={styles.authorText}>- {quote.author}</h6>
      </div>
    </div>
  );
};

// CSS styles as a JS object
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  quoteContainer: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    textAlign: 'center',
  },
  quoteText: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  authorText: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default RandomQuote;