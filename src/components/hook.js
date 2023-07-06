import { useEffect, useState } from 'react';

function DisplayQuotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = 'D5q8niB700jxi57PqkJC6Q==D1xzw7ooFWM5nyYD';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [setData, setIsLoading]);

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
    <ul style={{
      listStyle: 'none',
      fontWeight: 'bolder',
    }}
    >
      {data.map((quote) => (
        <li
          key={quote.id}
        >

          {quote.quote}
          {' '}
          -
          {' '}
          {quote.author}
        </li>
      ))}
    </ul>
  );
}

export default DisplayQuotes;
