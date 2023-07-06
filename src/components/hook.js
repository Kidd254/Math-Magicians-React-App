import { useEffect, useState } from 'react';

function DisplayQuotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetch('https://api-ninjas.com/api/quotes');
        const json = await results.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [data, setData]);
  if (hasError) {
    return (
      <article>
        <p>Something went wrong!</p>
      </article>
    );
  }
  if (isLoading) {
    return (
      <article>
        <p>Loading...</p>
      </article>
    );
  }
  return (
    <ul>
      {data.map((quote) => (
        <li key={quote}>
          {quote.quote}
          {' '}
          {quote.author}
        </li>
      ))}
    </ul>
  );
}

export default DisplayQuotes;
