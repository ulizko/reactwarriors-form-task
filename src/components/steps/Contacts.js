import React, { Component, Fragment } from 'react'
import Field from '../inputs/Field'
import Select from '../inputs/Select'
import Buttons from '../inputs/Buttons'
import countries from '../../data/countries'
import cities from '../../data/cities'

export default class Contacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
    }

    this.stepNumber = 2
  }

  toNextStep = e => {
    e.preventDefault()
    const { email, phone, country, city } = this.props
    const errors = {}

    if (!/[a-z0-9-_.]+@[a-z0-9]+\.[a-z]{2,}/i.test(email))
      errors.email = 'Invalid email address'

    if (!email) errors.email = 'Required'

    if (!/^\d{10}$/.test(phone)) errors.phone = 'invalid mobile'

    if (!country) errors.country = 'Required'
    if (!city) errors.city = 'Required'

    this.setState({ errors }, () => {
      if (Object.keys(this.state.errors).length === 0) {
        this.props.incrementStep()
      }
    })
  }

  render() {
    const {
      email,
      phone,
      country,
      city,
      handleChange,
      decrementStep,
    } = this.props

    const countryCities = Object.entries(cities)
      .reduce((acc, city) => {
        return [...acc, { id: city[0], ...city[1] }]
      }, [])
      .filter(city => city.country === +country)

    return (
      <Fragment>
        <Field
          type="email"
          labelText="Email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          error={this.state.errors.email}
        />
        <Field
          type="tel"
          labelText="Phone"
          name="phone"
          id="phone"
          placeholder="Enter phone"
          value={phone}
          onChange={handleChange}
          error={this.state.errors.phone}
        />
        <Select
          items={countries}
          name="country"
          id="country"
          labelText="Country"
          value={country}
          handleChange={handleChange}
          error={this.state.errors.country}
        />
        <Select
          items={countryCities}
          name="city"
          id="city"
          labelText="City"
          value={city}
          placeholder="Select city"
          handleChange={handleChange}
          error={this.state.errors.city}
        />
        <Buttons
          currentStep={this.stepNumber}
          toNextStep={this.toNextStep}
          toPrevStep={decrementStep}
        />
      </Fragment>
    )
  }
}
