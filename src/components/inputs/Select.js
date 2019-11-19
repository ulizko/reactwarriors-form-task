import React from 'react'

const Select = props => {
  const {
    items,
    name,
    labelText,
    id,
    handleChange,
    value,
    placeholder,
    error,
  } = props
  const optionsForSelect = items.map(item => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    )
  })

  const errorClass = error ? ' invalid' : ''
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={`form-control${errorClass}`}
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
      >
        {placeholder && <option>{placeholder}</option>}
        {optionsForSelect}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default Select
