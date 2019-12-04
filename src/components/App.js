import React from 'react'
import Basic from './steps/Basic'
import Contacts from './steps/Contacts'
import Avatar from './steps/Avatar'
import Finish from './steps/Finish'
import Steps from './Steps'
import Buttons from './Buttons'
import validates from '../helpers/validator'

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

    this.validationRules = {
      firstname: {
        required: true,
        limit: 5,
      },
      lastname: {
        required: true,
        limit: 5,
      },
      password: {
        required: true,
        limit: 6,
      },
      repeatPassword: {
        equalTo: 'password',
      },
      email: {
        required: true,
        format: new RegExp('[a-z0-9-_.]+@[a-z0-9]+.[a-z]{2,}', 'i'),
      },
      phone: {
        required: true,
        format: new RegExp('^[0-9]{10}$'),
      },
      country: {
        required: true,
      },
      city: {
        required: true,
      },
      avatar: {
        required: true,
      },
    }

    this.state = this.initialState
  }

  validate = () => {
    const { values, currentStep } = this.state

    if (currentStep === 1) {
      const { firstname, lastname, password, repeatPassword } = values
      return validates(
        { firstname, lastname, password, repeatPassword },
        this.validationRules
      )
    }

    if (currentStep === 2) {
      const { email, phone, country, city } = values
      return validates({ email, phone, country, city }, this.validationRules)
    }

    if (currentStep === 3) {
      const { avatar } = values
      return validates({ avatar }, this.validationRules)
    }
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
    const errors = this.validate()

    if (Object.keys(errors).length === 0) {
      this.setState(prevState => {
        return {
          completedStep: prevState.currentStep,
          currentStep: prevState.currentStep + 1,
        }
      })
    } else {
      this.setState({ errors })
    }
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
