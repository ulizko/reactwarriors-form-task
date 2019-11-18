import React from 'react'

const Field = props => {
  const { id, labelText, type, name, value, onChange, palcaholder } = props
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        className="form-control"
        type={type}
        id={id}
        name={name}
        palcaholder={palcaholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Field
