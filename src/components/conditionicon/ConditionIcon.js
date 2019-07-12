import React from 'react';
import './ConditionIcon.css';
const ConditionIcon = (props)=>{
   return(
       <em className='conditionicon'>
           {getConditionChar(props.condition)}
       </em>
   )
}
const getConditionChar=(condition)=>{
    if(condition.indexOf("clouds")>=0){
        return 'C';
    }
    if(condition.indexOf("snow")>=0){
        return 'o';
    }
    switch(condition){
        case 'light intensity drizzle':
        case 'drizzle':	
        case 'heavy intensity drizzle':
        case 'light intensity drizzle rain':
        case 'drizzle rain':
        case 'heavy intensity drizzle rain':
        case 'shower rain and drizzle':
        case 'heavy shower rain and drizzle':
        case 'shower drizzle':
            return 'd';
        case 'light rain':
        case 'moderate rain':
        case 'heavy intensity rain':
        case 'very heavy rain':
        case 'extreme rain':
        case 'freezing rain':
        case 'light intensity shower rain':
        case 'shower rain':
        case 'heavy intensity shower rain':
        case 'ragged shower rain':
            return 'Y';
        case 'thunderstorm':
        case 'heavy thunderstorm':
        case 'light thunderstorm':
        case 'ragged thunderstorm':
            return 'Z';
        case 'thunderstorm with light drizzle':
        case 'thunderstorm with drizzle':
        case 'thunderstorm with heavy drizzle':
        case 'thunderstorm with rain':
            return 'a';
        case 'thunderstorm with heavy rain':        
            return 'b';
        case 'few clouds':
            return 'C';
        default:
            return 'A';
    }
}
export default ConditionIcon;