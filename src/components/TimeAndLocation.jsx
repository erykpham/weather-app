import React from 'react';

function TimeAndLocation({ weather: { localTime, name, country }, isMobile }) {
   return (
      <div className='flex flex-col items-center gap-4'>
         <p className='text-white opacity-70'>{isMobile ? localTime.replace('Local time: ', '') : localTime}</p>
         <h1 className='font-bold capitalize text-white font text-2xl'>{`${name}, ${country}`}</h1>
      </div>
   );
}

export default TimeAndLocation;
