import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import InnerHeader from "../components/layout/InnerHeader";
import Clients from "../components/layout/Clients.js";
import Footer from "../components/layout/Footer.js";
import TeamCard from "../components/TeamCard";

function About({ data }) {
  const { banner, section2, statistics, video, work } = data.about;
  const team = data.team;
  const people = [team.people[5], team.people[6], team.people[3]];
  const clients = data.clients;

  return (
    <div className="About h-screen">
      <InnerHeader data={data} />

      <div className="w-[73%] mx-auto flex justify-between">
        <div className="font-bold flex flex-col gap-9 py-28 h-fit">
          <h5 className="text-base">{banner.subtitle}</h5>
          <h2 className="text-6xl leading-[5rem]">{banner.title}</h2>
          <p className="font-normal text-accent text-xl">
            {banner.description}
          </p>
          <button className="text-sm text-white border-0 border-solid rounded py-4 px-10 bg-secondary w-fit">
            {banner.button}
          </button>
        </div>
        <img src={banner.img} className="translate-x-32 translate-y-3" />
      </div>

      <div className="w-[73%] mx-auto mt-4 py-6 px-4 flex flex-col gap-6">
        <h6 className="text-error text-sm font-medium">{section2.subtitle}</h6>
        <div className="flex items-baseline gap-16">
          <h3 className="font-bold text-2xl w-[50%]">{section2.title}</h3>
          <p className="text-sm">{section2.description}</p>
        </div>
      </div>

      <div className="w-[73%] mx-auto py-20 flex justify-between font-bold">
        {statistics.map((stat, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <h4 className="text-6xl leading-[5rem]">{stat.metric}</h4>
              <h5 className="text-accent leading-6">{stat.title}</h5>
            </div>
          );
        })}
      </div>

      <div className="py-28 w-fit mx-auto">
        <img src={video} />
      </div>

      <div className="py-28 w-[73%] mx-auto flex flex-col items-center gap-28">
        <div className="w-3/5 flex flex-col gap-3 items-center">
          <h2 className="text-[2.5rem] leading-[3rem] font-bold">
            {team.title}
          </h2>
          <p className="text-center text-accent">{team.description}</p>
        </div>
        <div className="flex gap-7">
          {people.map((person, index) => {
            return <TeamCard key={index} person={person} />;
          })}
        </div>
      </div>

      <div className="bg-info p-20">
        <div className="flex flex-col items-center gap-7">
          <h2 className="font-bold text-[2.5rem] leading-[3rem]">
            {clients.title}
          </h2>
          <p className="text-sm text-accent text-center w-1/3">
            {clients.description}
          </p>
        </div>
        <Clients data={clients} />
      </div>

      <div className="flex border-2 border-solid border-primary-focus">
        <div className="px-48 flex flex-col justify-center gap-6 bg-primary-focus text-white">
          <h5 className="text-base font-bold">{work.subtitle}</h5>
          <h1 className="text-[1.5rem] leading-[3rem] font-bold">
            {work.title}
          </h1>
          <p className="text-sm">{work.description}</p>
          <button className="border border-solid border-white rounded py-4 px-10 w-fit">
            {work.button}
          </button>
        </div>
        <img src={work.img} />
      </div>

      <Footer data={data} inner={true} />
    </div>
  );
}

export default About;
