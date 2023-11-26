import "./App.css";
import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard/ProfilCard";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <ProfileCard
          avatar="https://super-avatara.ru/images/trueimg/pictures/69/08010C5B042B-69.gif"
          firstName="John"
          lastName="Smith"
          occupation="React-developer"
          hairColor="Blue"
          height="160 sm"
          hobby="Computer games"
        />
        <ProfileCard
          avatar="https://super-avatara.ru/images/trueimg/pictures/69/62164C9D620F-69.gif"
          firstName="Иван"
          lastName="Иванов"
          occupation="Фронтендер"
          hairColor="Серый"
          height="175 см"
          hobby="Рыбалка"
        />
        <ProfileCard
          avatar="https://super-avatara.ru/images/trueimg/pictures/69/94B37D6DE14F-69.gif"
          firstName="Tina"
          lastName="Turner"
          occupation="Singer"
          hairColor="Gold"
          height="170 sm"
          hobby="Music"
        />
      </div>

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
