import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaBar() {
  return (
    <div className="flex justify-center items-center w-full space-x-8 my-6">
      <SocialMediaIcon site={"github"} />
      <SocialMediaIcon site={"linkedn"} />
      <SocialMediaIcon site={"habr"} />
    </div>
  );
}

export default SocialMediaBar;
