import './App.css';
import WeatherFC from "./components/WeatherFC";
import WeatherCC from "./components/WeatherCC";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <WeatherCC
          status={'karlı'}
          style={{backgroundColor:'aqua',color:'gray',padding:'5px'}}
      />
      <br/>
      <WeatherCC
          status={'parçalı bulutlu'}
          style={{backgroundColor:'lightgray',color:'black',padding:'5px'}}
      />
      <br/>
      <WeatherFC
          status={'güneşli'}
          style={{backgroundColor:'yellow',color:'gray',padding:'5px'}}
      />
      <br/>
      <WeatherFC
          status={'yağmurlu'}
          style={{backgroundColor:'cyan',color:'gray',padding:'5px'}}
      />

        <Counter/>
    </div>
  );
}

export default App;
