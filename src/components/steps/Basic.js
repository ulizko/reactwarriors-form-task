import React, { Fragment, Component } from 'react'
import Field from '../inputs/Field'
import Radio from '../inputs/Radio'
import Buttons from '../inputs/Buttons'

import genders from '../../data/genders'

class Basic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
    }
    this.stepNumber = 1
  }

  toNextStep = e => {
    e.preventDefault()
    const { firstname, lastname, password, repeatPassword, gender } = this.props
    const errors = {}

    if (firstname.length < 5) errors.firstname = 'Must be 5 characters or more'
    if (!firstname) errors.firstname = 'Required'

    if (lastname.length < 5) errors.lastname = 'Must be 5 characters or more'
    if (!lastname) errors.lastname = 'Required'

    if (password.length < 6) errors.password = 'Must be 6 characters or more'
    if (!password) errors.password = 'Required'

    if (repeatPassword !== password)
      errors.repeatPassword = 'Must be equal password'

    if (gender === '' || gender === undefined) errors.gender = 'Required'

    this.setState({ errors }, () => {
      if (Object.keys(this.state.errors).length === 0) {
        this.props.incrementStep()
      }
    })
  }

  render() {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      handleChange,
      decrementStep,
    } = this.props
    return (
      <Fragment>
        <Field
          labelText="Firstname"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your firstname"
          value={firstname}
          onChange={handleChange}
          error={this.state.errors.firstname}
        />

        <Field
          labelText="Lastname"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your firstname"
          value={lastname}
          onChange={handleChange}
          error={this.state.errors.lastname}
        />

        <Field
          labelText="Password"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          error={this.state.errors.password}
        />

        <Field
          labelText="Repeat password"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Repeat your password"
          value={repeatPassword}
          onChange={handleChange}
          error={this.state.errors.repeatPassword}
        />

        <Radio
          labelText="Gender"
          name="gender"
          currentValue={gender}
          values={genders}
          onChange={handleChange}
          error={this.state.errors.gender}
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

export default Basic
