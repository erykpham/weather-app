import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
// UilArrowUp/Down. UilTemperature. UilTear/Wind/Sun/Sunset
/**
 * 

feels_like: 39.16
​
humidity: 59
​
​
speed: 3.5
​
sunrise: 1658183104
​
sunset: 1658230820
​
temp: 33
​
temp_max: 33
​
temp_min: 33
​
weather: Array [ {
   description: "overcast clouds"
​​​
icon: "04d"
main: "Clouds"
}} ]
 */
function TemperatureAndDetails({
   weather: {
      feels_like,
      humidity,
      speed,
      sunrise,
      sunset,
      temp,
      temp_max,
      temp_min,
      description,
      icon,
      main,
   },
}) {
   return (
      <div>
         <div className='text-blue-400 font-medium text-center mt-8'>
            <p>{main}</p>
         </div>

         <div className='flex items-center justify-between mt-7'>
            <div className='w-1/3'>
               <img
                  className='h-15 w-15 object-cover rounded-3xl '
                  src={icon}
                  alt='weather image'
               />
            </div>

            <p className='w-1/3 text-5xl text-white text-center'>&nbsp;{temp}°</p>

            <div className='flex flex-col items-end gap-1 w-1/3'>
               <div className='flex justify-center items-center text-white text-sm'>
                  <Unicons.UilTemperature className='opacity-80' size='18' />
                  <p className='opacity-80'> Real fell: </p>
                  <span className='opacity-100 font-medium'>{feels_like}°</span>
               </div>

               <div className='flex justify-center items-center text-white text-sm'>
                  <Unicons.UilTear className='opacity-80' size='18' />
                  <p className='opacity-80'> Humidity: </p>
                  <span className='opacity-100 font-medium'>{humidity}%</span>
               </div>

               <div className='flex justify-center items-center text-white text-sm'>
                  <Unicons.UilWind className='opacity-80' size='18' />
                  <p className='opacity-80'> Wind: </p>
                  <span className='opacity-100 font-medium'>{speed} km/h</span>
               </div>
            </div>
         </div>
         <div className='flex justify-between  items-center mt-5'>
            <div className='flex justify-start xsm:justify-center items-center text-white text-sm'>
               <Unicons.UilSun className='opacity-80' size='18' />
               <p className='opacity-80'> Rise: </p>
               <span className='opacity-100 font-medium'>{sunrise}</span>
            </div>
            <p className='opacity-80 text-white'>|</p>
            <div className='flex justify-start xsm:justify-center items-center text-white text-sm'>
               <Unicons.UilSunset className='opacity-80' size='18' />
               <p className='opacity-80'> Set: </p>
               <span className='opacity-100 font-medium'>{sunset}</span>
            </div>
            <p className='opacity-80 text-white'>|</p>
            <div className='flex justify-start xsm:justify-center items-center text-white text-sm'>
               <Unicons.UilArrowUp className='opacity-80' size='18' />
               <p className='opacity-80'> High: </p>
               <span className='opacity-100 font-medium'>{temp_max}°</span>
            </div>
            <p className=' hidden xsm:block opacity-80 text-white'>|</p>
            <div className='hidden xsm:flex justify-start xsm:justify-center items-center text-white text-sm'>
               <Unicons.UilArrowDown className='opacity-80' size='18' />
               <p className='opacity-80'> Low: </p>
               <span className='opacity-100 font-medium'>{temp_min}°</span>
            </div>
         </div>
      </div>
   );
}

export default TemperatureAndDetails;
