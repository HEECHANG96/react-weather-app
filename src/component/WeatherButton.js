import React from 'react';
import { Button } from 'react-bootstrap';

// WeatherButton은 어떠한 state도 가지고 있지 않음.

const WeatherButton = ({cities, setCity, getCurrentLocation}) => {
  console.log("Cities?", cities);
  
  
  return (
    <div className="menu-container">
         <Button 
                variant={`${setCity == null ? "outline-warning" : "warning"}`}
                onClick={getCurrentLocation}
          >
            Current Location
         </Button>

         {cities.map((item, index)=> (
          <Button 
              variant="warning" 
              key={index}
              onClick={
                ()=>setCity(item)
                
              } 
          >
              {item}
          </Button>
         ))}
    </div>
  )
}

export default WeatherButton