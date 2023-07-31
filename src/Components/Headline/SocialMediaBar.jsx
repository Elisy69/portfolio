import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaBar() {
  return (
    <div className="flex justify-center items-center w-full space-x-8 my-6 lg:my-0 lg:relative">
      <SocialMediaIcon
        site={"github"}
        cssForLargerScreen={"lg:absolute lg:top-[-12rem] lg:left-[8rem]"}
      />
      <SocialMediaIcon
        site={"linkedn"}
        cssForLargerScreen={"lg:absolute lg:top-[-46vh] lg:left-[85vw]"}
      />
      <SocialMediaIcon
        site={"habr"}
        cssForLargerScreen={"lg:absolute lg:top-[-48vh] lg:left-[1vw]"}
      />
    </div>
  );
}

export default SocialMediaBar;
