import React from 'react'
import Basic from './steps/Basic'
import Contacts from './steps/Contacts'
import Avatar from './steps/Avatar'
import Finish from './steps/Finish'
import Steps from './Steps'
import Buttons from './Buttons'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.initialState = {
      currentStep: 1,
      completedStep: 0,
      values: {
        firstname: '',
        lastname: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        phone: '',
        country: '',
        city: '',
        avatar: '',
      },
      errors: {},
    }

    this.state = this.initialState
  }

  validate = callback => {
    const { values, currentStep } = this.state
    const errors = {}
    // validate first step
    if (currentStep === 1 && values.firstname.length < 5)
      errors.firstname = 'Must be 5 characters or more'
    if (currentStep === 1 && !values.firstname) errors.firstname = 'Required'

    if (currentStep === 1 && values.lastname.length < 5)
      errors.lastname = 'Must be 5 characters or more'
    if (currentStep === 1 && !values.lastname) errors.lastname = 'Required'

    if (currentStep === 1 && values.password.length < 6)
      errors.password = 'Must be 6 characters or more'
    if (currentStep === 1 && !values.password) errors.password = 'Required'

    if (currentStep === 1 && values.repeatPassword !== values.password)
      errors.repeatPassword = 'Must be equal password'

    if (currentStep === 1 && !values.gender) errors.gender = 'Required'
    // validate first step
    if (
      currentStep === 2 &&
      !/[a-z0-9-_.]+@[a-z0-9]+\.[a-z]{2,}/i.test(values.email)
    )
      errors.email = 'Invalid email address'

    if (currentStep === 2 && !values.email) errors.email = 'Required'

    if (currentStep === 2 && !/^\d{10}$/.test(values.phone))
      errors.phone = 'invalid mobile'

    if (currentStep === 2 && !values.country) errors.country = 'Required'
    if (currentStep === 2 && !values.city) errors.city = 'Required'
    // validate first step
    if (currentStep === 3 && !values.avatar) errors.avatar = 'Required'

    this.setState({ errors }, callback)
  }

  onChange = (e, callback) => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [e.target.name]: e.target.value,
        },
        errors: {
          ...this.state.errors,
          [e.target.name]: '',
        },
      },
      callback
    )
  }

  incrementStep = () => {
    const callback = () => {
      if (Object.keys(this.state.errors).length === 0) {
        this.setState(prevState => {
          return {
            completedStep: prevState.currentStep,
            currentStep: prevState.currentStep + 1,
          }
        })
      }
    }

    this.validate(callback)
  }

  decrementStep = () => {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep - 1,
      }
    })
  }

  resetForm = () => {
    this.setState(this.initialState)
  }

  render() {
    const { values, errors, currentStep, completedStep } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps currentStep={currentStep} completedStep={completedStep} />

          {currentStep === 1 && (
            <Basic
              values={values}
              errors={errors}
              onChange={this.onChange}
              incrementStep={this.incrementStep}
              decrementStep={this.decrementStep}
            />
          )}

          {currentStep === 2 && (
            <Contacts
              values={values}
              errors={errors}
              onChange={this.onChange}
              incrementStep={this.incrementStep}
              decrementStep={this.decrementStep}
            />
          )}

          {currentStep === 3 && (
            <Avatar
              values={values}
              errors={errors}
              onChange={this.onChange}
              incrementStep={this.incrementStep}
              decrementStep={this.decrementStep}
            />
          )}

          {currentStep === 4 && (
            <Finish values={values} resetForm={this.resetForm} />
          )}

          <Buttons
            currentStep={currentStep}
            toNextStep={this.incrementStep}
            toPrevStep={this.decrementStep}
            resetForm={this.resetForm}
          />
        </form>
      </div>
    )
  }
}
