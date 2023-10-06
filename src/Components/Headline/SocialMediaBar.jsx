import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaBar() {
  return (
    <div className="flex justify-center items-center w-full space-x-8 my-6 lg:my-0 lg:relative">
      <a href="https://github.com/Elisy69" rel="noreferrer" target="_blank">
        <SocialMediaIcon
          site={"github"}
          cssForLargerScreen={"lg:absolute lg:top-[-12rem] lg:left-[8rem]"}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/elisei-strashevskii-5ab82a15b/"
        rel="noreferrer"
        target="_blank"
      >
        <SocialMediaIcon
          site={"linkedn"}
          cssForLargerScreen={"lg:absolute lg:top-[-46vh] lg:left-[85vw]"}
        />
      </a>
      <a href="https://career.habr.com/elsi95" rel="noreferrer" target="_blank">
        {" "}
        <SocialMediaIcon
          site={"habr"}
          cssForLargerScreen={"lg:absolute lg:top-[-48vh] lg:left-[1vw]"}
        />
      </a>
    </div>
  );
}

export default SocialMediaBar;
