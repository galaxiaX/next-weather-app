import cities from "@/lib/city.list.json";
import axios from "axios";
import Head from "next/head";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyWeather from "@/components/HourlyWeather";
import DailyWeather from "@/components/DailyWeather";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";
import Contact from "@/components/Contact";

export async function getServerSideProps(context) {
  const city = getCityId(context.params.city);

  if (!city) {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lon=${city.coord.lon}&lat=${city.coord.lat}&units=metric&exclude=minutely,alerts&appid=${process.env.API_KEY}`
    );

    return {
      props: {
        city: city,
        timezone: data.timezone,
        currentWeather: data.current,
        hourlyWeather: data.hourly,
        dailyWeather: data.daily,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}

const getCityId = (param) => {
  const cityParam = param.trim();
  // get the id of the city
  const splitCity = cityParam.split("-");
  const id = splitCity[splitCity.length - 1];

  if (!id) {
    return null;
  }

  const city = cities.find((city) => city.id.toString() == id);

  if (city) {
    return city;
  } else {
    return null;
  }
};

function City({ hourlyWeather, currentWeather, dailyWeather, timezone, city }) {
  return (
    <>
      <Head>
        <title>{city.name} Weather - Next</title>
        <meta name="description" content="Live Weather web app using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper">
        <div className="container">
          <div className="top-nav">
            <Link href="/" className="back-link">
              &larr; Home
            </Link>
            <Contact />
          </div>

          <SearchBox placeholder="Search for another city . . ." />
          <CurrentWeather
            city={city}
            currentWeather={currentWeather}
            timezone={timezone}
          />
          <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
          <DailyWeather dailyWeather={dailyWeather} timezone={timezone} />
        </div>
      </div>
    </>
  );
}

export default City;
