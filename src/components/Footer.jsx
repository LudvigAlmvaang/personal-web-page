import {SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 h-[85px] lg:h-[100px]">
      <div className="flex items-center justify-between min-h-[100%] text-white gap-8 mx-[32px] lg:mx-[64px]">
        <div className="flex mr-[40px] gap-4">
          <SocialIcon bgColor="white" fgColor="black" url="https://linkedin.com/in/ludvig-almvaang" />
          <SocialIcon bgColor="white" fgColor="black" url="https://github.com/LudvigAlmvaang" />
          <SocialIcon bgColor="white" fgColor="black" url="mailto:email@almvaang.com " />
        </div>
        <div>
          <p className="italic">Authored by Ludvig S.W. Almvång</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
