import './Tool.css';

export default function Tool(props) {
  return (
    <div className="tool">
      <img
        src={"/tools/" + props.title + ".svg"}
        alt={props.title}
        title={props.title}
      />
    </div>
  )
}
