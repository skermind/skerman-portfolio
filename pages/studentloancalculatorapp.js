import { useEffect } from "react";

export default function Redirect() {
  useEffect(() => {
    window.location.href = "https://studentloancalculator.danielskerman.com/";
  }, []);

  return <p>Redirecting to studentloancalculator.danielskerman.com...</p>;
}
