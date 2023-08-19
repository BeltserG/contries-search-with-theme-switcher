import React from 'react';
import classNames from 'classnames';
import { DarkModeContext } from '../../../../../../app/context/DarkModeContext';
import "./styles/BackButton.scss";
import arrow from "./assets/keyboard_backspace_FILL0_wght400_GRAD0_opsz24.svg"

const BackButton = ({changeCardPageStatus}) => {
  const {darkMode} = React.useContext(DarkModeContext)
  return (
    <button className={classNames("btn-back", darkMode ? "dark" : "")} onClick={()=> changeCardPageStatus()}>
      <img className="btn-back__img" src={arrow}></img>back</button>
  )
}

export default BackButton