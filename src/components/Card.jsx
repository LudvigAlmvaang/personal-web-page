import parse from "html-react-parser";

const Card = ({ id, title, description, imageSrc }) => {
  return (
    <article id={id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:w-[100%] lg:max-w-3xl">
      <div className="lg:flex">
        <div className="lg:shrink-0">
          <img className="h-48 w-full object-contain lg:h-full lg:w-64" src={imageSrc} alt={title} />
        </div>
        <div className="p-8">
          <header className="uppercase tracking-wide text-sm text-zinc-800 font-semibold hover:underline">{parse(title, { html: true })}</header>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
      </div>
    </article>
  )
};

export default Card;
