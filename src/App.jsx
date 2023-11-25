import './App.css';
import Button from './components/Button/Button';

function App() {
  // JSX позволят нам создавать переменные и передавать туда теги
  const name = <p>My name is Juri</p>;
  const job = "Frontend developer";
  const tegJobId = "Job";

  const characters = {
    hair: "black",
    height: "185",
  };

  // const sum = (a, b) => a + b;

  // const numberOfFriends = (count) => {
  //   if (count > 5) {
  //     return `У вас ${count} друзей`;
  //   }
  // };

  // const rich = true;

  return (
    <div className="App">
      {name}
      {/* JSX позволяет нам передавать переменные с помощью фигурных скобок в HTML дерево */}


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
