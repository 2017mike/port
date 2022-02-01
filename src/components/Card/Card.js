import React from 'react'

const Card = ({name, age, favoriteGame}) => {
  return (
    <>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{favoriteGame}</h4>
    </>
  )
}

export default Card
