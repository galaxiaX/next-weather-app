import Head from "next/head";
import SearchBox from "@/components/SearchBox";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App - Next</title>
      </Head>
      <div className="home">
        <div className="home-container">
          <HomePage />
          <SearchBox placeholder="Search for a city . . ." />
        </div>
      </div>
    </div>
  );
}
