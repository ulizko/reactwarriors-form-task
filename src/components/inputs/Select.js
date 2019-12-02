import React from 'react'
import classNames from 'classnames'

const Select = props => {
  const {
    items,
    name,
    labelText,
    id,
    onChange,
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

  const inputClasses = classNames({ 'form-control': true, invalid: error })
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <select
        className={inputClasses}
        id={id}
        name={name}
        onChange={onChange}
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
