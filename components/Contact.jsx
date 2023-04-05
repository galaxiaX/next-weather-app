import Image from "next/image";
import Link from "next/link";

import githubIcon from "@/public/images/github.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <Link
          href="https://github.com/galaxiaX/next-weather-app"
          target="_blank"
        >
          <Image src={githubIcon} alt="github" />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
