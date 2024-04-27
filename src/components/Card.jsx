const Card = ({ title, description, imageSrc}) => {
  return (
    <article>
      <img src={imageSrc} alt={title}></img>
      <footer>{description}</footer>
    </article>
  );
}

export default Card
