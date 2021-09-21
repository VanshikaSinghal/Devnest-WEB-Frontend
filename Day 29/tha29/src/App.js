import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import ToggleThemeComp from "./components/ToggleTheme";
import store from "./store";
import { Provider, useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={theme ? "App Dark" : "App"}>
      <Provider store={store}>
        <ToggleThemeComp />
        <Form />
        <WeatherCard />
      </Provider>
    </div>
  );
}

export default App;
