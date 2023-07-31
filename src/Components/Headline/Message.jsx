import { messages } from "../../language/languages";
import { useLanguage } from "../../store/store";

function Message({ messageNum }) {
  const lang = useLanguage((state) => state.lang);

  return (
    <div className="opacity-0 peer-hover:transition-opacity duration-100 ease-out peer-hover:opacity-100 flex justify-center items-center text-day-theme-text bg-day-theme-secondary dark:bg-night-theme-primary dark:text-night-theme-text  rounded-xl px-2 py-1">
      <span>{messages[messageNum][lang]}</span>
    </div>
  );
}

export default Message;
