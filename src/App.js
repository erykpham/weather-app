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
   return (
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700  text-white h-fit shadow-xl shadow-gray-400 selection:bg-white selection:text-blue-600  whitespace-pre'>
        <TopButtons setQuery={setQuery}/>
        <Inputs setQuery={setQuery}/>
         {weather && (
            <div>

               <TimeAndLocation weather={weather}/>
               <TemperatureAndDetails weather={weather}/>
               <Forecast title='hourly forecast' foreCast={weather.hourly}/>
               <Forecast title='daily forecast' foreCast={weather.daily}/>
            </div>
         )}
      </div>
   );
}

export default App;
