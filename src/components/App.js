import React from 'react'
import Field from './Field'
import Radio from './Radio'
import Step from './Step'

import steps from '../data/steps'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      currentStep,
    } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="steps mb-4">
            {steps.map(step => {
              return <Step currentStep={currentStep} step={step} />
            })}
          </div>
          <Field
            labelText="Firstname"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your firstname"
            value={firstname}
            onChange={this.handleChange}
          />

          <Field
            labelText="Lastname"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your firstname"
            value={lastname}
            onChange={this.handleChange}
          />

          <Field
            labelText="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />

          <Field
            labelText="Repeat password"
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={this.handleChange}
          />

          <Radio
            labelText="Gender"
            name="gender"
            currentValue={gender}
            values={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
