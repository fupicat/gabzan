import './Category.css';

export default function Category(props) {
  return (
    <section id={props.title.toLowerCase().replace(/ /g, "-")} className="category container">
      <h2>{props.title}</h2>
      <div className="projList">
        {props.children}
      </div>
    </section>
  )
}
