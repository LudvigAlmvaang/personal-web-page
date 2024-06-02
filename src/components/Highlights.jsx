import Card from "./Card"
import img1 from "../assets/little-lemon-react.jpg";
import img2 from "../assets/Simple Working Calculator.jpg";
import img3 from "../assets/Little-Lemon.jpg";

const projects = [{
    id: 0,
    title: "little-lemon-react",
    description: "This was my capstone project for the Meta Front-End developer professional certificate.",
    repository: "https://github.com/LudvigAlmvaang/little-lemon-react",
    imageSrc: img1
  }, {
    id: 1,
    title: "Simple Working Calculator",
    description: "This was my very first React project.",
    repository: "https://github.com/LudvigAlmvaang/Simple-Working-Calculator",
    imageSrc: img2
  }, {
    id: 2,
    title: "Little-Lemon",
    description: "This was my very first project that I made for a course in HTML and CSS.",
    repository: "https://github.com/LudvigAlmvaang/Little-Lemon",
    imageSrc: img3
  }];

const Highlights = () => {
  return (
    <>
      <section className="flex flex-col place-items-center m-[24px] gap-8">
        <h2 className="place-self-center lg:[grid-column:1/-1] text-xl">Projects</h2>
        {projects.map((project) => (
          <Card id={project.id} title={project.title} description={project.description} repository={project.repository} imageSrc={project.imageSrc} />
        ))}
      </section>
    </>
  );
}

export default Highlights;
