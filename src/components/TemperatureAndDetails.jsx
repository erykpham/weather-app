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

            <p className='w-1/3 text-2xl text-white text-center'>34°</p>

            <div className='flex flex-col gap-5 items-center w-1/3'>
               <div>
                  <div className='flex justify-center items-center text-white text-sm'>
                     <Unicons.UilTemperature className='opacity-70' size="18"  />
                     <p className='opacity-70'>&nbsp;Real fell:&nbsp;</p>
                     <span className='opacity-100 font-medium'>57°</span>
                  </div>

                  <div className='flex justify-center items-center text-white text-sm'>
                     <Unicons.UilTear className='opacity-70' size="18" />
                     <p className='opacity-70'>&nbsp;Humidity:&nbsp;</p>
                     <span className='opacity-100 font-medium'>64%</span>
                  </div>

                  <div className='flex justify-center items-center text-white text-sm'>
                     <Unicons.UilWind className='opacity-70' size="18"  />
                     <p className='opacity-70'>&nbsp;Wind:&nbsp;</p>
                     <span className='opacity-100 font-medium'>10 km/h</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TemperatureAndDetails;
