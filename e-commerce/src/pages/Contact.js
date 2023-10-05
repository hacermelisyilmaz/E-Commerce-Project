import InnerHeader from "../components/layout/InnerHeader.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/layout/Footer.js";
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Contact({ data }) {
  const { section1, section2, section3 } = data.contact;

  return (
    <div className="Contact">
      <InnerHeader data={data} />

      <div className="pt-28 w-[73%] mx-auto flex">
        <div className="flex flex-col gap-9 font-bold">
          <h5 className="text-sm">{section1.subtitle}</h5>
          <h1 className="text-6xl leading-[5rem]">{section1.title}</h1>
          <p className="font-normal text-xl text-accent">
            {section1.description}
          </p>
          <div className="flex flex-col gap-5 font-bold text-2xl">
            <p>{section1.numbers.phone}</p>
            <p>{section1.numbers.fax}</p>
          </div>
          <div className="flex gap-8 text-2xl p-2">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <img src={section1.img} className="-translate-y-24 translate-x-32" />
      </div>

      <div className="pb-20 flex flex-col items-center">
        <div className="w-2/5 mb-20 font-bold text-center flex flex-col gap-2">
          <h5 className="text-sm">{section2.subtitle}</h5>
          <h2 className="text-[2.5rem] leading-[3rem]">{section2.title}</h2>
        </div>
        <div className="flex justify-center">
          {section2.ways.map((card, index) => {
            return (
              <div
                key={index}
                className={index === 1 ? "bg-primary text-white" : ""}
              >
                <div className="py-20 px-10 flex flex-col items-center gap-4 font-bold">
                  <div className="text-secondary text-7xl">
                    {index === 0 && <FontAwesomeIcon icon={faPhone} />}
                    {index === 1 && <FontAwesomeIcon icon={faLocationDot} />}
                    {index === 2 && <FontAwesomeIcon icon={faEnvelope} />}
                  </div>
                  <div className="text-sm text-center">
                    <p>{card.line1}</p>
                    <p>{card.line2}</p>
                  </div>
                  <p className="text-base">{card.support}</p>
                  <button className="border border-solid rounded-[37px] border-secondary text-secondary py-4 px-9">
                    {card.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pb-20 font-bold flex flex-col items-center gap-4">
        <FontAwesomeIcon
          icon={faArrowTurnDown}
          className="text-[5rem] text-secondary"
        />
        <h6 className="text-base">{section3.subtitle}</h6>
        <h2 className="text-[3.6rem] leading-[5rem]">{section3.title}</h2>
        <button className="text-sm text-white border-0 border-solid rounded py-4 px-10 bg-secondary w-fit">
          {section3.button}
        </button>
      </div>

      <Footer data={data} inner={true} />
    </div>
  );
}

export default Contact;
