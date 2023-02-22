import Image from "next/image";

//import img
import weatherLogo from "@/public/images/logo.png";

function HomePage() {
  return (
    <div className="title">
      <div className="title-container">
        <div className="title-icon">
          <Image src={weatherLogo} alt="weather logo" priority />
        </div>
        <div className="title-text">
          <h1>Weather</h1>
          <h3>live and forecast</h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
