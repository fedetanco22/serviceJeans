import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({ path, content, callback, className }) {
  return (
    <Link to={path}>
      {content.startsWith("http") || content.startsWith("/static/") ? (
        <img src={content} alt={`${content}`} className={className} />
      ) : (
        <button id="Button" className={className} onClick={callback}>
          {content}
        </button>
      )}
    </Link>
  );
}
