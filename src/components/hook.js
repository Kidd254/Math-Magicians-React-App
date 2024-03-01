import { useEffect, useState } from 'react';
import '../index.css';
import light from '../assets/images/light.jpg'; // Replace with the correct path to your image

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
    <div className="container mx-auto p-4">
      <img
        src={light}
        alt="Quote"
        className="w-450 max-h-64 object-cover mx-auto mb-4"
      />
      <ul className="list-none text-center">
        {data.map((quote) => (
          <li key={quote.id} className="text-lg text-gray-700 mb-4">
            {quote.quote}
            {' '}
            -
            {quote.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayQuotes;
