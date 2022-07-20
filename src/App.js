import Inputs from './components/Inputs';
import {
   TemperatureAndDetails,
   TimeAndLocation,
   TopButtons,
   Forecast,
} from './components';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
//---
function App() {
   console.log(1);
   const [query, setQuery] = useState({ q: 'hanoi' });
   const [units, setUnits] = useState('metric');
   const [weather, setWeather] = useState(null);

   useEffect(() => {
      const fetch = async () => {
         const data = await getFormattedWeatherData({ ...query, units });
         setWeather(data);
      };
      fetch();
   }, [query, units]);
   const [isMobile, setMobile] = useState(window.innerWidth < 576);
   useEffect(() => {
      window.onresize = function () {
         setMobile(this.innerWidth < 576);
      };
   }, []);
   return (
      <div className={'mx-auto max-w-screen-md md:mt-5 pt-20 xsm:pt-4 pb-6 xsm:pb-10 px-3 xsm:px-7 md:px-28 bg-gradient-to-br from-cyan-700 to-blue-700  text-white h-fit shadow-xl shadow-gray-400 selection:bg-white selection:text-blue-600  whitespace-pre relative'}>
         <TopButtons setMobile={setMobile} isMobile={isMobile} setQuery={setQuery} />
         <Inputs
            setMobile={setMobile}
            isMobile={isMobile}
            setQuery={setQuery}
            setUnits={setUnits}
         />
         {weather && (
            <div>
               <TimeAndLocation weather={weather} isMobile={isMobile}/>
               <TemperatureAndDetails weather={weather} />
               <Forecast title='hourly forecast' forecast={weather.hourly} />
               <Forecast title='daily forecast' forecast={weather.daily} />
            </div>
         )}
         <div></div>
      </div>
   );
}

export default App;
