import React from 'react';
import { useState, memo } from 'react';
import * as Unicons from '@iconscout/react-unicons';
function Inputs({setQuery}) {
   console.log('inputs')
   const [city, setCity] = useState('')
   return (
      <div className='flex justify-between my-6'>
         <div className='flex justify-start items-center space-x-4 w-3/4 mr-6'>
            <input
               type='text'
               placeholder='Search for city ...'
               className='px-2 py-[2px] border-0 focus:outline-none capitalize placeholder:lowercase min-w-0 text-black'
               onChange={e => setCity(e.target.value)}
            />
            <Unicons.UilSearch
               size='25'
               className='w-[18px] shrink-0  cursor-pointer transition ease-out hover:scale-125'
               onClick={() => setQuery({q: city})}
            />
            <Unicons.UilLocationPoint
               size='25'
               className='w-[18px] shrink-0  cursor-pointer transition ease-out hover:scale-125'
            />
         </div>
         <div className='flex justify-center items-center'>
            <button name='metric' className=' '>
               &#8451;
            </button>{' '}
            {/* do c */}
            <p className=' mx-2'>|</p>
            <button name='imperial' className=' '>
               &#8457;
            </button>{' '}
            {/* do f */}
         </div>
      </div>
   );
}

export default memo(Inputs);
