import React from 'react';
import WeatherTile from './WeatherTile';
import ConditionIcon from './conditionicon/ConditionIcon';
const WeatherReport = (props) => {
    return (
        <div className="forecastbox">
            <div className="currentWeather">
                <em > {props.weather.current} </em>
                <ConditionIcon condition={props.weather.condition} />
            </div>
            {props.forecast.map(day => <WeatherTile key={day.day} {...day} />)}
        </div>
    )
}
export default WeatherReport;