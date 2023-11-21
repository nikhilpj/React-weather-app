import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';

function App() {
  const onhandleSearchChange =(searchData)=>{
    console.log(searchData)

  }
  return (
    <div className="container">
      <Search onSearchChange={onhandleSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
