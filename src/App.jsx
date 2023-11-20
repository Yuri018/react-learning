import './App.css';
import Button from './components/Button/Button';

export const animal = "Dog";

function App() {
  // JSX позволят нам создавать переменные и передавать туда теги
  const name = <p>My name is Juri</p>;
  const job = "Frontend developer";
  const tegJobId = "Job";

  const characters = {
    hair: "black",
    height: "185",
  };

  const sum = (a, b) => a + b;

  const numberOfFriends = (count) => {
    if (count > 5) {
      return `У вас ${count} друзей`;
    }
  };

  const rich = true;

  return (
    <div className="App">
      {name}
      {/* JSX позволяет нам передавать переменные с помощью фигурных скобок в HTML дерево */}
      <p id={tegJobId}>I am {job}</p>
      <p>Возвращаемая функция: {sum(2, 2)}</p>
      <p>Характеристики</p>
      <ul>
        <li>Цвет волос: {characters.hair} </li>
        <li>Рост: {characters.height} </li>
      </ul>
      <p>Favorite animal: {animal}</p>
      <div> {numberOfFriends(7)} </div>
      <div>{rich ? "Yeu" : "No"}</div>

      <div className="button-container">
        <Button name="Отправить" type="submit" />
      </div>
      <div className="button-container">
        <Button name="Получить" />
      </div>
      <div className="button-container">
        <Button />
      </div>
      <div className="button-container">
        <Button />
      </div>
    </div>
  );
}

export default App;
