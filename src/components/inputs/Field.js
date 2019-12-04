import React from 'react'
import classNames from 'classnames'

const Field = props => {
  const {
    id,
    labelText,
    type,
    name,
    value,
    onChange,
    placeholder,
    error,
  } = props
  const inputClasses = classNames({ 'form-control': true, invalid: error })

  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        className={inputClasses}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default Field
