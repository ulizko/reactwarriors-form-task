import React from 'react'

const Select = props => {
  const { items, name, labelText, id, handleChange, value } = props
  const optionsForSelect = items.map(item => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    )
  })
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className="form-control"
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
      >
        {optionsForSelect}
      </select>
    </div>
  )
}

export default Select
