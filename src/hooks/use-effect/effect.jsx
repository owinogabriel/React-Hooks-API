import React, { useEffect, useState } from "react";

// Functional component to demonstrate fetching data and conditional rendering
const Effect = () => {
  // State variables for managing fetched data, error, loading status, and toggle status
  const [data, setData] = useState(null); // Holds the fetched data
  const [error, setError] = useState(null); // Holds any errors that occur during data fetching
  const [loading, setLoading] = useState(true); // Tracks whether the data is currently loading
  const [showPedro, setShowPedro] = useState(false); // Tracks whether "Pedro" section is visible

  // useEffect for fetching data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Fetch data from the API
        const result = await response.json(); // Parse the JSON response
        setData(result); // Store the fetched data in state
      } catch (error) {
        setError(error); // Store any error that occurs in state
      } finally {
        setLoading(false); // Ensure loading is set to false after the fetch completes
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this effect runs only once, after the component mounts

  // useEffect for logging changes to the "showPedro" state
  useEffect(() => {
    console.log("Pedro visibility toggled:", showPedro); // Log visibility state whenever it changes
  }, [showPedro]); // Dependency array ensures this effect runs only when "showPedro" changes

  // Display a loading message while data is being fetched
  if (loading) return <div>Loading...</div>;

  // Display an error message if an error occurred during data fetching
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="nam">
      {/* Button to toggle the visibility of the "Pedro" section */}
      <button onClick={() => setShowPedro((prev) => !prev)}>Toggle Pedro</button>

      {/* Conditional rendering: Show this section only when "showPedro" is true */}
      {showPedro && (
        <div>
          <h1>Posts</h1>
          <ul>
            {/* Map through the data and render each post title in a list */}
            {data &&
              data.map((item) => (
                <li key={item.id}>{item.title}</li> // Each list item must have a unique key
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Effect; // Export the component for use in other parts of the application
