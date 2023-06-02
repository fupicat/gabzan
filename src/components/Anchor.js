import "./Anchor.css";

function Anchor(props) {
  return (
    <a
      className="anchor"
      href={"#" + props.text.toLowerCase().replace(/ /g, "-")}
    >
      <i className={"fas fa-" + props.icon}></i>
      <p>{props.text}</p>
    </a>
  );
}

export default Anchor;
