import Tool from "./Tool";
import "./Project.css";

export default function Project(props) {
  const tools = props.tools;
  let toolImages;
  if (tools) {
    toolImages = tools.map((tool) => <Tool key={tool} title={tool} />);
  }

  let link, source;

  if (props.link) {
    link = (
      <a className="anchor" href={props.link} target="_blank" rel="noreferrer">
        Acessar
      </a>
    );
  }

  if (props.source) {
    source = (
      <a
        className="anchor"
        href={props.source}
        target="_blank"
        rel="noreferrer"
      >
        Código-fonte
      </a>
    );
  }

  let links;

  if (link || source) {
    links = (
      <nav className="links">
        {link}
        {source}
      </nav>
    );
  }

  return (
    <div className="project">
      <img
        src={"/prints/" + props.title + ".png"}
        alt={props.title}
        className="print"
      />
      <div className="about">
        <h3>
          {props.title}
          {props.obs && <span className="obs"> – {props.obs}</span>}
        </h3>
        <p className="description">{props.about}</p>
        <div className="tools">{toolImages}</div>
      </div>
      {links}
    </div>
  );
}
