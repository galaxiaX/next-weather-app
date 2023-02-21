import moment from "moment-timezone";
import Image from "next/image";

function HourlyWeather({ hourlyWeather, timezone }) {
  return (
    <div className="hourly">
      <div className="hourly__inner">
        {hourlyWeather.map((weather, index) =>
          index > 23 ? null : (
            <div className="hourly__box-wrapper" key={weather.dt}>
              <div className="hourly__box">
                <span
                  className={index === 0 ? "hourly__time--now" : "hourly__time"}
                >
                  {index === 0
                    ? "Now"
                    : moment.unix(weather.dt).tz(timezone).format("LT")}
                </span>

                <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  width="200"
                  height="200"
                />

                <span>{weather.temp.toFixed(0)}&deg;</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default HourlyWeather;
