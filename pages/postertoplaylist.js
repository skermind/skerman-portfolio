import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    window.location.href = 'https://app.postertoplaylist.com';
  }, []);

  return <p>Redirecting to app.postertoplaylist.com...</p>;
}