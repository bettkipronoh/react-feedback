import PropTypes from 'prop-types'
import React from "react";
const Header = ({tittle,bgColor,textColor}) => {
  const headerStyle={
    backgroundColor:bgColor,
    color:textColor
  }
  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{tittle}</h2>
        </div>
    </header>
  )
}
Header.defaultProps={
    tittle:'Feedback UI',
    bgColor:'rgba(0,0,0,0.45)',
    textColor:'#ff6a95'
}
Header.propTypes={
    tittle:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}
export default Header