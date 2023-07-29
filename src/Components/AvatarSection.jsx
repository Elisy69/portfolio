import { useState } from "react";
import { messages } from "../language/languages";
import AvatarImg from "./AvatarImg";
import Message from "./Message";

function AvatarSection() {
  const [messageNum, setMessageNum] = useState(0);

  const handleAvatarClick = () => {
    messageNum <= messages.length - 2 ? setMessageNum((prev) => prev + 1) : "";
  };

  return (
    <div className="flex items-center gap-4">
      <AvatarImg onClick={handleAvatarClick} />
      <Message messageNum={messageNum} />
    </div>
  );
}

export default AvatarSection;
