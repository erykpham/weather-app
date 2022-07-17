import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
function Inputs() {
   return (
      <div className='flex justify-center my-6'>
         <div className='flex justify-start items-center space-x-4 w-3/4'>
            <input
               type='text'
               placeholder='Search for city ...'
               className='px-2 py-[2px] border-0 focus:outline-none capitalize placeholder:lowercase'
            />
            <Unicons.UilSearch
               size='25'
               className='text-white cursor-pointer transition ease-out hover:scale-125'
            />
            <Unicons.UilLocationPoint
               size='25'
               className='text-white cursor-pointer transition ease-out hover:scale-125'
            />
         </div>
         <div className='flex justify-center items-center'>
            <button name='metric' className='text-white '>
               &#8451;
            </button>{' '}
            {/* do c */}
            <p className='text-white mx-2'>|</p>
            <button name='imperial' className='text-white '>
               &#8457;
            </button>{' '}
            {/* do f */}
         </div>
      </div>
   );
}

export default Inputs;
