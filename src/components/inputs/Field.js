import React from 'react'

const Field = props => {
  const {
    id,
    labelText,
    type,
    name,
    value,
    onChange,
    palcaholder,
    error,
  } = props
  const errorClass = error ? ' invalid' : ''
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        className={`form-control${errorClass}`}
        type={type}
        id={id}
        name={name}
        palcaholder={palcaholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default Field
