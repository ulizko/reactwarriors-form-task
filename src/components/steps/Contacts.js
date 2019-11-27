import React, { Component, Fragment } from 'react'
import Field from '../inputs/Field'
import Select from '../inputs/Select'
import countries from '../../data/countries'
import cities from '../../data/cities'

export default class Contacts extends Component {
  getCitiesByCountry = (cities, country) => {
    return Object.entries(cities).reduce((acc, city) => {
      if (city[1].country === +country) {
        acc.push({ id: city[0], ...city[1] })
      }
      return acc
    }, [])
  }

  onChangeCountry = e => {
    this.props.onChange(e, () => {
      this.props.onChange({
        target: { name: 'city', value: '' },
      })
    })
  }

  render() {
    const { values, errors, onChange } = this.props

    const countryCities = this.getCitiesByCountry(cities, values.country)

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
          onChange={this.onChangeCountry}
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
}
