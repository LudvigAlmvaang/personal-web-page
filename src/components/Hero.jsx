import TypeIt from "typeit-react";
import avatar from "../assets/avatar.jpeg";

const Hero = () => {
  return (
      <div id="hero-wrapper" className="bg-zinc-800 lg:h-[680px]">
      <section className="grid lg:grid-cols-2 lg:h-[680px] min-h-[600px] lg:gap-x-[5rem]">
        <div id="avatar" className="place-self-center lg:place-self-end lg:self-center"><img className="object-cover lg:max-w-[300px] max-w-[200px]" src={avatar}></img></div>
        <div id="introduction" className="place-self-center lg:place-self-start lg:self-center">
          <TypeIt className="text-white"
            options={{
              strings: ["Hello! My name is Ludvig S.W. Almvång.", "I am a Meta certified Front-End Developer.", "Currently, I am available for hiring :)", "See my contact info in the footer."],
              speed: 30,
              waitUntilVisible: true,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
