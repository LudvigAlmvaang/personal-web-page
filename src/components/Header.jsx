import Nav from "./NavLinks"

const Header = () => {
  return (
    <header className="bg-amber-300 h-[85px] lg:h-[100px] relative z-10">
      <nav className="grid lg:grid-cols-3 grid-cols-2 h-[100%]">
        <Nav />
        <h1 className="lg:justify-self-center self-center justify-self-end font-bold text-2xl lg:mr-[0px] mr-[32px] prevent-select">Header</h1>
        <ul className="lg:flex hidden font-bold mr-[64px] text-[#333333] text-xl space-x-8 justify-self-end self-center">
          <li><a href="https://github.com/LudvigAlmvaang/personal-web-page" className="hover:underline">Github Repository</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
