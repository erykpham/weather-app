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
   return (
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700  text-white h-fit shadow-xl shadow-gray-400 selection:bg-white selection:text-blue-600  whitespace-pre'>
         <TopButtons setQuery={setQuery} />
         <Inputs setQuery={setQuery} setUnits={setUnits}/>
         {weather && (
            <div>
               <TimeAndLocation weather={weather} />
               <TemperatureAndDetails weather={weather} />
               <Forecast title='hourly forecast' forecast={weather.hourly} />
               <Forecast title='daily forecast' forecast={weather.daily} />
            </div>
         )}
         <div>

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953718.7082188143!2d105.0921435889076!3d20.974041513128146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135008e13800a29%3A0x2987e416210b90d!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1658248276093!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </div>
   );
}

export default App;
