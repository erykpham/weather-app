import React, { memo, useState } from 'react';
import { UilAngleDown } from '@iconscout/react-unicons';
function TopButtons({ setQuery, setMobile, isMobile }) {
   const cities = [
      {
         id: 1,
         title: 'ha noi',
      },
      {
         id: 2,
         title: 'ho chi minh',
      },
      {
         id: 3,
         title: 'tokyo',
      },
      {
         id: 4,
         title: 'jakarta',
      },
      {
         id: 5,
         title: 'seoul',
      },
   ];

   const [currentCity, setCurrentCity] = useState(cities[0].title);
   // :)
   const [isChooseCity, setChooseCity] = useState(false);
   const handleChooseCity = () => {
      setChooseCity(!isChooseCity);
   };
   return (
      <>
         {isMobile ? (
            <div
               className='flex flex-col border-2 border-white rounded-md overflow-hidden absolute top-3 cursor-pointer w-[82px] z-10'
               onClick={handleChooseCity}
            >
               <p className='leading-6 ml-1 pr-[20px] overflow-hidden text-center text-ellipsis relative'>
                  {currentCity}
                  <UilAngleDown size='20' className='inline-block absolute top-[50%] right-0 translate-y-[-50%]' />
               </p>
               {isChooseCity ? (
                  <div className='flex flex-col bg-white w-[82px]'>
                     {cities.map((city, index) => (
                        <button
                           key={index}
                           className='bg-[#2193c7] border-t-2 text-sm py-1 pl-3 pr-1 overflow-hidden text-left text-ellipsis'
                           onClick={() => {
                              setQuery({ q: city.title });
                              setCurrentCity(city.title);
                           }}
                        >
                           {city.title}
                        </button>
                     ))}
                  </div>
               ) : null}
            </div>
         ) : (
            <div className='flex justify-between items-center'>
               {cities.map((city, index) => (
                  <button
                     key={index}
                     className='text-white capitalize'
                     onClick={() => setQuery({ q: city.title })}
                  >
                     {city.title}
                  </button>
               ))}
            </div>
         )}
      </>
   );
}

export default memo(TopButtons);
