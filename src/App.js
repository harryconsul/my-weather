import React from 'react';
import WeatherReport from './components/WeatherReport'
import './App.css';
import { getCurrentWeather, getForeCast } from './helpers/getforecast';

class App extends React.Component {
  state = {
    weather: {},
    forecast: [],
    city: "",
    error:"",
  }
  searchForeCast = (event) => {

    const { city } = this.state;
    getCurrentWeather(city)
      .then(response => this.setState({ weather: response,error:"" }))
      .catch(reason=>this.setState({error:reason,weather:{},forecast:[]}));
    getForeCast(city)
      .then(response => this.setState({ forecast: response,error:"" }))
      .catch(reason=>this.setState({error:reason,forecast:[],weather:{}}));
    event.preventDefault();
  }
  render() {
    const { forecast, weather, city, error } = this.state;
    return (
      <div >
        <header >
          <h1>
            Welcome to my myWeather Service!
        </h1>

        </header>
        <section>
          <form>
            <div className="formcontrol">
              <label for="city">City you want to consult </label>
              <input type="text" value={city} placeholder="example: Berlin,GER" id="city"
               name="city"  onChange={(event) => this.setState({ city: event.target.value })} />               
            </div>
            <button onClick={this.searchForeCast}> Get Forecast </button>
                                   
          </form>
       
          { forecast.length?
            <WeatherReport weather={weather} forecast={forecast} />
            : <div className="errormsg">{error}</div>
          }
        

        </section>
      </div >
    );
  }
}

export default App;
