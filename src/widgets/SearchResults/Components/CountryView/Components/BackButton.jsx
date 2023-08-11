import React from 'react'

const BackButton = ({changeCardPageStatus, fullData}) => {
  return (
    <button onClick={()=> changeCardPageStatus()}>back</button>
  )
}

export default BackButton