import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
// UilArrowUp/Down. UilTemperature. UilTear/Wind/Sun/Sunset
function TemperatureAndDetails() {
   return (
      <div>
         <div className='text-blue-400 font-medium text-center mt-8'>
            <p>Clouds</p>
         </div>

         <div className='flex items-center justify-between mt-7'>
            <div className='w-1/3'>
               <img
                  className='h-10 w-10 object-cover rounded-3xl'
                  src='https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png'
                  alt='weather image'
               />
            </div>

            <p className='w-1/3 text-5xl text-white text-center'>&nbsp;34°</p>

            <div className='flex flex-col items-end gap-1 w-1/3'>
               <div className='flex justify-center items-center text-white text-sm'>
                  <Unicons.UilTemperature className='opacity-80' size='18' />
                  <p className='opacity-80'> Real fell: </p>
                  <span className='opacity-100 font-medium'>57°</span>
               </div>

               <div className='flex justify-center items-center text-white text-sm'>
                  <Unicons.UilTear className='opacity-80' size='18' />
                  <p className='opacity-80'> Humidity: </p>
                  <span className='opacity-100 font-medium'>64%</span>
               </div>

               <div className='flex justify-center items-center text-white text-sm'>
                  <Unicons.UilWind className='opacity-80' size='18' />
                  <p className='opacity-80'> Wind: </p>
                  <span className='opacity-100 font-medium'>10 km/h</span>
               </div>
            </div>
         </div>
         <div className='flex justify-between items-center mt-5'>
            <div className='flex justify-center items-center text-white text-sm'>
               <Unicons.UilSun className='opacity-80' size='18' />
               <p className='opacity-80'> Rise: </p>
               <span className='opacity-100 font-medium'>04:50 </span>
            </div>
            <p className='opacity-80 text-white'>|</p>
            <div className='flex justify-center items-center text-white text-sm'>
               <Unicons.UilSunset className='opacity-80' size='18' />
               <p className='opacity-80'> Set: </p>
               <span className='opacity-100 font-medium'>09:06 PM</span>
            </div>
            <p className='opacity-80 text-white'>|</p>
            <div className='flex justify-center items-center text-white text-sm'>
               <Unicons.UilArrowUp className='opacity-80' size='18' />
               <p className='opacity-80'> High: </p>
               <span className='opacity-100 font-medium'>62°</span>
            </div>
            <p className='opacity-80 text-white'>|</p>
            <div className='flex justify-center items-center text-white text-sm'>
               <Unicons.UilArrowDown className='opacity-80' size='18' />
               <p className='opacity-80'> Low: </p>
               <span className='opacity-100 font-medium'>54°</span>
            </div>
         </div>
      </div>
   );
}

export default TemperatureAndDetails;
