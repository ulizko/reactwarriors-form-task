import React from 'react'
import Basic from './steps/Basic'
import Contacts from './steps/Contacts'
import Avatar from './steps/Avatar'
import Finish from './steps/Finish'
import Step from './Step'

import steps from '../data/steps'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      completedStep: '',
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      phone: '',
      country: 1,
      city: '',
      avatar: '',
      errors: {},
    }
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onChangeAvatar = e => {
    const reader = new FileReader()
    reader.onload = e => {
      this.setState({
        avatar: e.target.result,
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  incrementStep = () => {
    this.setState(prevState => {
      return {
        completedStep: prevState.currentStep,
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
    this.setState({
      currentStep: 1,
      completedStep: '',
      firstname: '',
      lastname: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      phone: '',
      country: 1,
      city: '',
      avatar: '',
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
      completedStep,
      email,
      phone,
      country,
      city,
      avatar,
    } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="steps mb-4">
            {steps.map(step => {
              return (
                <Step
                  key={step.number}
                  isCompleted={step.number <= completedStep}
                  currentStep={currentStep}
                  step={step}
                />
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
          {currentStep === 3 && (
            <Avatar
              image={avatar}
              handleChange={this.onChangeAvatar}
              incrementStep={this.incrementStep}
              decrementStep={this.decrementStep}
            />
          )}
          {currentStep === 4 && (
            <Finish
              avatar={avatar}
              email={email}
              phone={phone}
              lastname={lastname}
              firstname={firstname}
              country={country}
              city={city}
              resetForm={this.resetForm}
            />
          )}
        </form>
      </div>
    )
  }
}
