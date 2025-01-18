import React, { useEffect, useState } from "react";

const Effect = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPedro, setShowPedro] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Invoke the function
  }, []);

  useEffect(() => {
    console.log("Pedro visibility toggled:", showPedro);
  }, [showPedro]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="nam">
      <button onClick={() => setShowPedro((prev) => !prev)}>Toggle Pedro</button>
      {showPedro && (
        <div>
          <h1>Posts</h1>
          <ul>
            {data &&
              data.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Effect;
