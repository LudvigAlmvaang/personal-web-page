const Card = ({ id, title, description, repository, imageSrc }) => {
  return (
    <article id={id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:w-[100%] lg:max-w-3xl">
      <div className="lg:flex">
        <div className="lg:shrink-0">
          <a href={repository} target="_blank" rel="noopener noreferrer"><img className="h-48 w-full object-contain lg:h-full lg:w-64" src={imageSrc} alt={title} /></a>
        </div>
        <div className="p-8">
          <header className="uppercase tracking-wide text-sm text-zinc-800 font-semibold hover:underline"><a href={repository} target="_blank" rel="noopener noreferrer">{title}</a></header>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
      </div>
    </article>
  )
};

export default Card;
