const About = () => {
  return (
    <article>
      <div className="flex flex-col place-items-center m-[24px] my-40 gap-4 ">
        <div id="header">
          <h1 className="text-xl text-bold">About this web application</h1>
        </div>
        <div className="max-w-3xl text-justify">
          <p>
            This web application is in it's current state a work in progress, however,
            it works already as a functioning demo of my abilities as a Front-end developer.
            What you see in front of you is a responsive web application built with React, Vite, TailwindCSS, Locomotive Scroll v5 Beta and TypeIt. <br />
            &ensp; Please have a look at other projects in the project section of the home page, or visit my GitHub profile :)
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
