import React, { Component } from 'react'
import Buttons from '../inputs/Buttons'

import defaultAvatar from '../../images/default-avatar.png'

export default class Avatar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
    }

    this.stepNumber = 3
  }

  toNextStep = e => {
    e.preventDefault()
    const { image } = this.props
    const errors = {}

    if (!image) errors.image = 'Required'

    this.setState({ errors }, () => {
      if (Object.keys(this.state.errors).length === 0) {
        this.props.incrementStep()
      }
    })
  }

  render() {
    const { image, decrementStep, handleChange } = this.props
    const { errors } = this.state
    const errorClass = errors.image ? ' invalid' : ''
    return (
      <div>
        <img
          className="mb-4"
          width="100%"
          src={image || defaultAvatar}
          alt=""
        ></img>
        <div className="mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={handleChange}
            />
            <label
              className={`custom-file-label${errorClass}`}
              htmlFor="customFile"
            >
              Choose avatar
            </label>
          </div>
          {errors.image && (
            <div className="invalid-feedback">{errors.image}</div>
          )}
        </div>

        <Buttons
          currentStep={this.stepNumber}
          toNextStep={this.toNextStep}
          toPrevStep={decrementStep}
        />
      </div>
    )
  }
}
