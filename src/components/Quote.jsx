import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    try {
      const getQuote = async () => {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning&limit=1',
          {
            headers: {
              'X-Api-Key': '6NhfE4BsHsFH1rW0Vb28yQ==vUD4CgFHjZ62VMgC',
            },
          },
        );
        const [data] = await response.json();
        setQuote(data);
        setIsLoading(false);
      };

      getQuote();
    } catch (error) {
      setErrorOccurred(true);
      throw new Error(error);
    }
  }, []);

  return (
    <div className="quote-container">
      {isLoading && <div className="loader">Loading...</div>}
      {errorOccurred && <div className="error">Error, please try again!</div>}
      {!isLoading && !errorOccurred && (
        <p className="quote">
          {quote.quote}
          <span className="quote__author">
            -
            {quote.author}
          </span>
        </p>
      )}
    </div>
  );
};

export default Quote;
