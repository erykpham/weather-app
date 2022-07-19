import React, { memo } from 'react';

function TopButtons({ setQuery }) {
   console.log('topbuttons')
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

   return (
      <div className='flex justify-between items-center'>
         {cities.map((city, index) => (
            <button
               key={index}
               className='text-white capitalize'
               onClick={() => setQuery({q: city.title})}
            >
               {city.title}
            </button>
         ))}
      </div>
   );
}

export default memo(TopButtons);
