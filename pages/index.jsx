import Head from "next/head";
import SearchBox from "@/components/SearchBox";
import HomePage from "@/components/HomePage";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather - Next</title>
        <meta name="description" content="Live Weather web app using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">
        <div className="home-container">
          <HomePage />
          <SearchBox placeholder="Search for a city . . ." />
        </div>
        <footer className="footer">
          <Contact />
        </footer>
      </div>
    </>
  );
}
