import React from 'react'

const Radio = props => {
  const { labelText, name, values, currentValue, onChange } = props
  return (
    <fieldset className="form-group">
      <div>{labelText}</div>
      {values.map(radio => {
        return (
          <div className="form-check">
            <input
              type="radio"
              name={name}
              id={radio.value}
              className="form-check-input"
              value={radio.value}
              checked={currentValue === radio.value}
              onChange={onChange}
            />
            <label htmlFor={radio.value} className="form-check-label">
              {radio.label}
            </label>
          </div>
        )
      })}
    </fieldset>
  )
}

export default Radio
