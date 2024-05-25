import Card from "./Card"
import img1 from "../assets/little-lemon-react.jpg";
import img2 from "../assets/Simple Working Calculator.jpg";
import img3 from "../assets/Little-Lemon.jpg";

const projects = [{
    id: 0,
    title: "<a href='https://github.com/LudvigAlmvaang/little-lemon-react'>little-lemon-react</a>",
    description: "This was my capstone project for the Meta Front-End developer professional certificate.",
    imageSrc: img1
  }, {
    id: 1,
    title: "<a href='https://github.com/LudvigAlmvaang/little-lemon-react'>Simple Working Calculator</a>",
    description: "This was my very first project while learning React.",
    imageSrc: img2
  }, {
    id: 2,
    title: "<a href='https://github.com/LudvigAlmvaang/little-lemon-react'>Little-Lemon</a>",
    description: "This was my very first project that I made for a course in HTML and CSS.",
    imageSrc: img3
  }];

const Highlights = () => {
  return (
    <>
      <section className="flex flex-col place-items-center m-[24px] gap-8">
        <h2 className="place-self-center lg:[grid-column:1/-1] text-xl">Projects</h2>
        {projects.map((project) => (
          <Card id={project.id} description={project.description} title={project.title} imageSrc={project.imageSrc} />
        ))}
      </section>
    </>
  );
}

export default Highlights;
