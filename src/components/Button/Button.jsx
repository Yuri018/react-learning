import "./styles.css";

function Button({ name = "Send", type = "button", onClick }) {
  console.log(name);
  return (
    <button onClick={onClick} className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
