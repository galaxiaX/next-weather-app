import Image from "next/image";
import githubIcon from "@/public/images/github.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <a href="https://github.com/galaxiaX">
          <Image src={githubIcon} alt="github" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
