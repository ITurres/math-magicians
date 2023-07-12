import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorOccurred, setErrorOccurred] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      try {
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
      } catch (error) {
        setErrorOccurred(true);
      } finally {
        setIsLoading(false);
      }
    };
    getQuote();
  }, []);

  return (
    <div className="quote-container container custom-alignment">
      {isLoading && <div className="loader container custom-alignment">Loading...</div>}
      {errorOccurred && <div className="error container custom-alignment">Error, please try again!</div>}
      {!isLoading && !errorOccurred && (
        <p className="quote">
          &quot;
          {quote.quote}
          &quot;
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
