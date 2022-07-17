import React from 'react'

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'London'
    },
    {
      id: 2,
      title: 'Sydney'
    },
    {
      id: 3,
      title: 'Tokyo'
    },
    {
      id: 4,
      title: 'Toronto'
    },
    {
      id: 5,
      title: 'Paris'
    }
  ]
  return (
    <div className="flex justify-between items-center ">
      {cities.map((city, index) => (
        <button key={index} className="text-white ">{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtons