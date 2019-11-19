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
      city: '',
      errors: {},
    }

    this.stepNumber = 2
  }

  toNextStep = e => {
    e.preventDefault()
    const { email, phone } = this.props
    const errors = {}

    if (email.length < 5) errors.email = 'Must be 5 characters or more'

    if (phone.length < 5) errors.phone = 'Must be 5 characters or more'

    this.setState({ errors }, () => {
      if (Object.keys(this.state.errors).length === 0) {
        this.props.incrementStep()
      }
    })
  }

  render() {
    const { email, phone, country, handleChange, decrementStep } = this.props
    console.log(country)
    const countryCities = Object.entries(cities)
      .reduce((acc, city) => {
        return [...acc, { id: city[0], ...city[1] }]
      }, [])
      .filter(city => city.country === country)
    console.log(countryCities)
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
          type="phone"
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
