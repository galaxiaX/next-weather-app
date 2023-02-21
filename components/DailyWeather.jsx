import moment from "moment-timezone";
import Image from "next/image";

function DailyWeather({ dailyWeather, timezone }) {
  return (
    <div className="daily">
      <h3 className="daily__title">
        Daily <span>Weather Forecast</span>
      </h3>

      {dailyWeather.length > 0 &&
        dailyWeather.map((weather, index) => {
          return (
            <div className="daily__card" key={weather.dt}>
              <div className="daily__inner">
                <div className="daily__left-content">
                  <div>
                    <h3>
                      {index === 0
                        ? "Today"
                        : moment
                            .unix(weather.dt)
                            .tz(timezone)
                            .format("ddd, MMM DD")}
                    </h3>

                    <h4>
                      <span>{weather.temp.min.toFixed(0)}&deg;</span>
                      <span> / </span>
                      <span>{weather.temp.max.toFixed(0)}&deg;</span>
                    </h4>
                  </div>
                </div>

                <div className="daily__right-content">
                  <div className="daily__icon-wrapper">
                    <div>
                      <Image
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        fill
                        sizes="10vw"
                      />
                    </div>
                  </div>
                  <h5>{weather.weather[0].description}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default DailyWeather;
