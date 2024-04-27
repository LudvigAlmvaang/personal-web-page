import TypeIt from "typeit-react";

const Hero = () => {
  return (
    <section className="page">
      <TypeIt
        options={{
          strings: ["Hello! My name is Ludvig S.W. Almvång.", "I am a Front-End Developer.", "Currently, I am available for hiring :)", "See my contact info in the footer."],
          speed: 30,
          waitUntilVisible: true,
        }}
      />
    </section>
  );
};

export default Hero;
