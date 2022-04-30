import React from 'react'
import PropTypes from 'prop-types'
const Button = ({children,version,type,isDisable}) => {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>{children}</button>
  )
}
Button.defaultProps={
    version:'primary',
    disabled:false,
    type:'button'
}
Button.propTypes={
    version:PropTypes.string,
    isDisable:PropTypes.bool,
    children:PropTypes.node.isRequired,
    type:PropTypes.string,
}
export default Button