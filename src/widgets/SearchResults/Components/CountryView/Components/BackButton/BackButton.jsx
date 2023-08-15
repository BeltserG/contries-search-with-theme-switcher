import React from 'react';
import "./styles/BackButton.scss";
import arrow from "./assets/keyboard_backspace_FILL0_wght400_GRAD0_opsz24.svg"

const BackButton = ({changeCardPageStatus}) => {
  return (
    <button className='btn-back' onClick={()=> changeCardPageStatus()}>
      <img className="btn-back__img" src={arrow}></img>back</button>
  )
}

export default BackButton