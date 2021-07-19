import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1 className = "heading">Calorie Read Only</h1>
      <div className = "scroll-area">
      <Card item = "Pizza" calories = "56"/>
      <Card item = "Burger" calories = "69"/>
      <Card item = "Coke" calories = "500"/>
      <Card item = "Brownie" calories = "180"/>
      <Card item = "Fried Rice" calories = "90"/>
      <Card item = "Lassania" calories = "200"/>
      <Card item = "Pani Puri" calories = "10"/>
      </div>
    </div>
  );
}

export default App;
