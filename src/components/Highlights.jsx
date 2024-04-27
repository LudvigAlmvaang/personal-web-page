import Card from "./Card"

const projects = [
  {
    title: "",
    description: "I'm a card",
    imageSrc: ""
  },
  {
    title: "",
    description: "I'm a card",
    imageSrc: ""
  },
  {
    title: "",
    description: "I'm a card",
    imageSrc: ""
  },
  {
    title: "",
    description: "I'm a card",
    imageSrc: ""
  },
  {
    title: "",
    description: "I'm a card",
    imageSrc: ""
  },
  {
    title: "",
    description: "I'm a card",
    imageSrc: ""
  }
];

const Highlights = () => {
  return (
    <section className="grid">
      {projects.map((project) => (
        <Card description={project.description} title={project.title} imageSrc={project.imageSrc} />
      ))}
    </section>
  );
}

export default Highlights;
