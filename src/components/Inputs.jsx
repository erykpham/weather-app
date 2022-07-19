import React from 'react';
import { useState, memo } from 'react';
import * as Unicons from '@iconscout/react-unicons';
function Inputs({setQuery, setUnits}) {
   console.log('inputs')
   const [city, setCity] = useState('')
   const [isCdegActive, setCdegActive] = useState(true)
   const handleUseCurrentPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
         const lat = position.coords.latitude
         const lon = position.coords.longitude
         setQuery({lat, lon})
      })
   }
   return (
      <div className='flex justify-between my-6'>
         <div className='flex justify-start items-center space-x-4 w-3/4 mr-6'>
            <input
               type='text'
               placeholder='Search for city ...'
               className='px-2 py-[2px] border-0 focus:outline-none capitalize placeholder:lowercase min-w-0 text-black'
               onChange={e => setCity(e.target.value)}
               onKeyUp={e => {if(e.key === 'Enter') setQuery({q: city})}}
            />
            <Unicons.UilSearch
               size='25'
               className='w-[18px] shrink-0  cursor-pointer transition ease-out hover:scale-125'
               onClick={() => setQuery({q: city})}
            />
            <Unicons.UilLocationPoint
               size='25'
               className='w-[18px] shrink-0  cursor-pointer transition ease-out hover:scale-125'
               onClick={handleUseCurrentPosition}
            />
         </div>
         <div className='flex justify-center items-center'>
            <button name='metric' className={isCdegActive ?'opacity-100' : 'opacity-70'} onClick={() => {setUnits('metric')
         setCdegActive(true)}}>
               &#8451;
            </button>
            <p className=' mx-2'>|</p>
            <button name='imperial' className={isCdegActive ?'opacity-70' : 'opacity-100'} onClick={() => {setUnits('imperial')
         setCdegActive(false)}}>
               &#8457;
            </button>
         </div>
      </div>
   );
}

export default memo(Inputs);
