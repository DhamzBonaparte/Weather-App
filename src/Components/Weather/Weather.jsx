import clear from "../Images/clear.png";
import clouds from "../Images/clouds.png";
import drizzle from "../Images/drizzle.png";
import humid from "../Images/humid.png";
import mist from "../Images/mist.png";
import dew from "../Images/dew.png";
import gguusstt from "../Images/gguusstt.png";
import wind from "../Images/wind.png";
import rain from "../Images/rain.png";
import snow from "../Images/snow.png";
import "./Weather.scss";

export default function Weather({ location, current }) {
  function change() {
    switch (current.condition.text) {
      case "Sunny":
        return clear;

      case "Clear":
        return clear;

      case "Cloudy":
        return clouds;

      case "Light rain":
        return drizzle;

      case "Moderate rain":
        return rain;

      case "Blowing snow":
        return snow;

      case "Mist":
        return mist;

      default:
        return current?.condition?.icon || "";
    }
  }

  return (
    <>
      <div className="main">
        <h1 className="place">
          {location.name},{location.country}
        </h1>
        <div className="position">
          <p className="le">Latitude: {location.lat}</p>
          <p className="re">Longitutde: {location.lon}</p>
        </div>
        <div className="picture">
          <img src={change()} alt={current?.condition?.icon + "_img"} />
          <p className="main">{current?.condition?.text}</p>
        </div>
        <div className="wea">
          <div className="left">
            <div className="sep">
              <p>
                <img src={dew} alt="" height="20px" /> Dew: {current.dewpoint_c}
              </p>
              <p>
                <img src={gguusstt} alt="" height="20px" /> Gust:{" "}
                {current.gust_kph}
              </p>
            </div>
          </div>
          <div className="right">
            <div className="sep">
              <p>
                <img src={humid} alt="" height="20px" /> Humidity:{" "}
                {current.humidity}
              </p>
              <p>
                <img src={wind} alt="" height="20px" />
                Wind: {current.wind_kph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
