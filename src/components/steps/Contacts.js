import React, { Fragment } from 'react'
import Field from '../inputs/Field'
import Select from '../inputs/Select'
import countries from '../../data/countries'
import cities from '../../data/cities'

const Contacts = ({ values, errors, onChange }) => {
  const getCitiesByCountry = (cities, country) => {
    return Object.entries(cities).reduce((acc, city) => {
      if (city[1].country === +country) {
        acc.push({ id: city[0], ...city[1] })
      }
      return acc
    }, [])
  }

  const onChangeCountry = e => {
    onChange(e, () => {
      onChange({
        target: { name: 'city', value: '' },
      })
    })
  }

  const countryCities = getCitiesByCountry(cities, values.country)

  return (
    <Fragment>
      <Field
        type="email"
        labelText="Email"
        name="email"
        id="email"
        placeholder="Enter email"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <Field
        type="tel"
        labelText="Phone"
        name="phone"
        id="phone"
        placeholder="Enter phone"
        value={values.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <Select
        items={countries}
        name="country"
        id="country"
        labelText="Country"
        value={values.country}
        placeholder="Select country"
        onChange={onChangeCountry}
        error={errors.country}
      />
      <Select
        items={countryCities}
        name="city"
        id="city"
        labelText="City"
        value={values.city}
        placeholder="Select city"
        onChange={onChange}
        error={errors.city}
      />
    </Fragment>
  )
}

export default Contacts
