import moment from "moment-timezone";
import Image from "next/image";

//import images
import humidityIcon from "@/public/images/humidity.png";
import windIcon from "@/public/images/wind.png";

function CurrentWeather({ city, currentWeather, timezone }) {
  const weatherHW = [
    {
      icon: humidityIcon,
      description: "humidity level",
      info: `${currentWeather.humidity}%`,
    },
    {
      icon: windIcon,
      description: "wind speed",
      info: `${currentWeather.wind_speed} m/s`,
    },
  ];
  return (
    <div className="current">
      <div className="current__inner">
        <div className="current__left-content">
          <div className="city-name">
            <h1>{city.name}</h1>
          </div>

          <div className="temp-humidity-wind">
            <div className="city-temp">
              <h1>{currentWeather.temp.toFixed(0)}&deg;C</h1>
            </div>
            <div className="humidity-wind">
              {weatherHW.map((weather, index) => {
                return (
                  <div className="humidity-wind__each" key={index}>
                    <div className="humidity-wind__each__icon-wrapper">
                      <div>
                        <Image
                          src={weather.icon}
                          alt={weather.description}
                          width="100"
                          height="100"
                        />
                      </div>
                    </div>
                    <span>{weather.info}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="current__right-content">
          <div className="right-inner">
            <h3 className="current-timestamp">
              {moment.unix(currentWeather.dt).tz(timezone).format("LT")}
            </h3>
            <div className="icon-wrapper">
              <div>
                <Image
                  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  alt={currentWeather.weather[0].description}
                  fill
                  sizes="30vw"
                />
              </div>
            </div>
            <h3>{currentWeather.weather[0].description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
