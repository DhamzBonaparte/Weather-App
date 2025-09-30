import { useState } from "react";
import Weather from "../Weather/Weather";
import { useEffect } from "react";
import "./Search.scss";

export default function Search() {
  const [location, setLocation] = useState("Kathmandu");
  const [show, setShow] = useState({});
  const [curr, setCurr] = useState({});

  const key = "2f105e8297604a7c8ad93557253009";
  
  async function handleSend() {
    const api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
    try {
      const response = await fetch(api);
      const result = await response.json();

      if (result.error) {
        alert(`Location not in Database`);
      } else {
        setShow(result.location);
        setCurr(result.current);
      }
    } catch (err) {
      console.log(`An Error Occured!`);
    }
  }

  useEffect(() => {
  handleSend(); 
}, []);

  return (
    <>
      <h1>Weather App</h1>
      <div className="card">
        <div className="items">
          <input
            type="text"
            className="task"
            value={location}
            placeholder="Enter the location..."
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSend}>Enter</button>
          <Weather className="color" location={show} current={curr} />
        </div>
      </div>
    </>
  );
}
