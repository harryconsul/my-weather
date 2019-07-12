import React from 'react';
import ConditionIcon from './conditionicon/ConditionIcon'
const WeatherTile=(props)=>{
    return(
        <div className={"weathertile"}>
            <div>
                {props.day}
            </div>

            <div>
                <sub>{props.min} </sub> <strong>{props.current}</strong> <sub> {props.max} </sub>
            </div>
           <ConditionIcon condition={props.condition} />
        </div>
    )
}
export default WeatherTile;