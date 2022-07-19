import React from 'react';
function forecast({ title, foreCast }) {
   return (
      <>
         <div className='flex justify-start text-l uppercase text-white mt-6 mb-2'>
            <p>{title}</p>
         </div>

         <hr />

         <div className='flex justify-between items-center gap-2 mt-1 text-sm'>
            {foreCast.map((f, index) => (
               <div key={index} className='flex flex-col items-center justify-between gap-4 mt-1'>
                  <p>{f.title}</p>
                  <img
                     className='h-12 w-12 object-cover rounded-3xl'
                     src={f.icon}
                     alt='weather image'
                  />
                  <p>&nbsp;{f.temp}°</p>
               </div>
            ))}
         </div>
      </>
   );
}

export default forecast;
