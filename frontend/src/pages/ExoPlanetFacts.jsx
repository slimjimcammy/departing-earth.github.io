import React, { useState, useEffect } from 'react';
import "../assets/styles/ExoPlanetFacts.css";
import BlackBox from '../components/BlackBox';
import ZoomablePlanet from '../components/ZoomablePlanet';
import { useLocation } from 'react-router-dom'; // Import useLocation to access the location object

const FactsPage = () => {
  const location = useLocation(); // Access the location object
  const exoplanetData = location.state?.planetData; // Get the planet data from the state

  // Removed the local state and mock data since we're now using data from the Wormhole component
  // const [exoplanetData, setExoplanetData] = useState(null);

  // Function to fetch data from the API (commented out since we're receiving data from Wormhole)
  // const fetchExoplanetData = async () => {
  //   try {
  //     const response = await fetch('API_URL_HERE'); // Replace with actual API URL
  //     const data = await response.json();
  //     setExoplanetData(data); // If you decide to fetch from an API instead
  //   } catch (error) {
  //     console.error('Error fetching exoplanet data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchExoplanetData();
  // }, []);

  // Show loading text if no data is received
  if (!exoplanetData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="FactsPageContainer">
      {exoplanetData && (
        <BlackBox
          title="Welcome To" // Title is now coming from the passed planet data
          planetname={exoplanetData.name} // Distance from Earth passed from the planet data
          maintext={`Click on the moons to see facts about ${exoplanetData.name}`}
        />
      )}
      {exoplanetData && (
        <div className="planet-corners">
          <ZoomablePlanet
            planetName={exoplanetData.name}
            facts={`Distance from Earth: ${exoplanetData.distanceFromEarth} light-years, Mass: ${exoplanetData.mass} times Earth's mass`}
          />
          <ZoomablePlanet
            planetName={exoplanetData.name}
            facts={`Radius: ${exoplanetData.radius} times Earth's radius, Temperature: ${exoplanetData.temperature} K`}
          />
          <ZoomablePlanet
            planetName={exoplanetData.name}
            facts={`Orbit Time: ${exoplanetData.orbitTime} days`}
          />
          <ZoomablePlanet
            planetName={exoplanetData.name}
            facts={`Distance from Earth: ${exoplanetData.distanceFromEarth} light-years, Mass: ${exoplanetData.mass} times Earth's mass`}
          />
        </div>
      )}
    </div>
  );
};

export default FactsPage;
