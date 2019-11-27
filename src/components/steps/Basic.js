import React, { Fragment } from 'react'
import Field from '../inputs/Field'
import Radio from '../inputs/Radio'

const Basic = ({ values, errors, onChange }) => {
  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ]

  return (
    <Fragment>
      <Field
        labelText="Firstname"
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Enter your firstname"
        value={values.firstname}
        onChange={onChange}
        error={errors.firstname}
      />

      <Field
        labelText="Lastname"
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Enter your firstname"
        value={values.lastname}
        onChange={onChange}
        error={errors.lastname}
      />

      <Field
        labelText="Password"
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={onChange}
        error={errors.password}
      />

      <Field
        labelText="Repeat password"
        type="password"
        name="repeatPassword"
        id="repeatPassword"
        placeholder="Repeat your password"
        value={values.repeatPassword}
        onChange={onChange}
        error={errors.repeatPassword}
      />

      <Radio
        labelText="Gender"
        name="gender"
        currentValue={values.gender}
        values={genders}
        onChange={onChange}
        error={errors.gender}
      />
    </Fragment>
  )
}

export default Basic
