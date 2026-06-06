import { useEffect } from 'react';

export default function Redirect() {
  useEffect(() => {
    window.location.href = '/postertoplaylist-under-construction';
  }, []);

  return <p>Redirecting to app.postertoplaylist.com...</p>;
}