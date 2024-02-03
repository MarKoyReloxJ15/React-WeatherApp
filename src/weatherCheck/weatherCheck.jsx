import  './style/weath.css'
import AppWeather from './AppWeather.jsx'
import WeatherMap from './Map/windyMap.jsx'
import React, { useState } from 'react';


function WeatherCheck() {
    function myFunctionClose() {
        var x = document.getElementById("contWM");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }

    function myFunctionOpen() {
        var x = document.getElementById("contWM");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }


      function openNav() {
        document.getElementById("contWM").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("contWM").style.width = "0";
      }

    
    return (
        <>
            <div className='cont'>
                <AppWeather/>
            </div>

            <div className="contWeathMap sidenav" id='contWM'>
                <button onClick={closeNav} className='closebtn'>Close</button> {/* Corrected onClick */}
                <WeatherMap />
            </div>
        </>
    )
}

export default WeatherCheck;
