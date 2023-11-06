import { useState } from "react";
import AvatarImg from "./AvatarImg";
import Message from "./Message";
import { messages } from "/src/language/languages.js";

function AvatarSection() {
  const [messageNum, setMessageNum] = useState(0);

  const handleAvatarClick = () => {
    if (messageNum <= messages.length - 2) {
      setMessageNum((prev) => prev + 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <AvatarImg onClick={handleAvatarClick} />
      ``
      <Message messageNum={messageNum} />
    </div>
  );
}

export default AvatarSection;
