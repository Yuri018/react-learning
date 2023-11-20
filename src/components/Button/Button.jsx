import "./styles.css";

function Button({ name = "Send", type = "button" }) {
  console.log(name);
  return (
    <button className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
