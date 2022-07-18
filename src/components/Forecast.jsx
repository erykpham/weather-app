import React from 'react'

function forecast({title}) {
  return (
    <div>
      <div className="flex justify-start text-l uppercase text-white mt-6 mb-2">
         <p>{title}</p>
      </div>
      <hr />
      <div className="flex justify-between items-center gap-2 mt-1 text-sm">
         <div className="flex flex-col items-center justify-between gap-4 mt-1">
            <p>12:00 PM</p>
            <img
                  className='h-7 w-7 object-cover rounded-3xl'
                  src='https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png'
                  alt='weather image'
               />
            <p>&nbsp;&nbsp;59°</p>
         </div>
         <div className="flex flex-col items-center justify-between gap-4 mt-1">
            <p>12:00 PM</p>
            <img
                  className='h-7 w-7 object-cover rounded-3xl'
                  src='https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png'
                  alt='weather image'
               />
            <p>&nbsp;&nbsp;59°</p>
         </div>
         <div className="flex flex-col items-center justify-between gap-4 mt-1">
            <p>12:00 PM</p>
            <img
                  className='h-7 w-7 object-cover rounded-3xl'
                  src='https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png'
                  alt='weather image'
               />
            <p>&nbsp;&nbsp;59°</p>
         </div>
         <div className="flex flex-col items-center justify-between gap-4 mt-1">
            <p>12:00 PM</p>
            <img
                  className='h-7 w-7 object-cover rounded-3xl'
                  src='https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png'
                  alt='weather image'
               />
            <p>&nbsp;&nbsp;59°</p>
         </div>
         <div className="flex flex-col items-center justify-between gap-4 mt-1">
            <p>12:00 PM</p>
            <img
                  className='h-7 w-7 object-cover rounded-3xl'
                  src='https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png'
                  alt='weather image'
               />
            <p>&nbsp;&nbsp;59°</p>
         </div>
      </div>
    </div>
  )
}

export default forecast