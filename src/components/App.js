import React from 'react'
import Basic from './steps/Basic'
import Contacts from './steps/Contacts'
import Step from './Step'

import steps from '../data/steps'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 2,
      completedStep: 1,
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      phone: '',
      country: 1,
      city: '',
      errors: {},
    }
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleErrors = () => {}

  incrementStep = () => {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep + 1,
      }
    })
  }
  decrementStep = () => {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep - 1,
      }
    })
  }

  resetForm = () => {
    this.setState({ currentStep: 1 })
  }

  render() {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      gender,
      currentStep,
      email,
      phone,
      country,
      city,
    } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="steps mb-4">
            {steps.map(step => {
              return (
                <Step key={step.number} currentStep={currentStep} step={step} />
              )
            })}
          </div>
          {currentStep === 1 && (
            <Basic
              firstname={firstname}
              lastname={lastname}
              password={password}
              repeatPassword={repeatPassword}
              gender={gender}
              handleChange={this.handleChange}
              incrementStep={this.incrementStep}
              decrementStep={this.decrementStep}
            />
          )}
          {currentStep === 2 && (
            <Contacts
              email={email}
              phone={phone}
              country={country}
              city={city}
              handleChange={this.handleChange}
              incrementStep={this.incrementStep}
              decrementStep={this.decrementStep}
            />
          )}
        </form>
      </div>
    )
  }
}
