import React, { Component } from 'react'
import classNames from 'classnames'

import DefaultAvatar from '../../images/default-avatar.png'

export default class Avatar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
    }

    this.stepNumber = 3
  }

  onChangeAvatar = e => {
    const reader = new FileReader()
    reader.onload = event => {
      this.props.onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {
    const { avatar } = this.props.values
    const { errors } = this.state
    const labelClasses = classNames({
      'custom-file-label': true,
      invalid: errors.image,
    })
    return (
      <div>
        <img
          className="mb-4"
          width="100%"
          src={avatar || DefaultAvatar}
          alt=""
        ></img>
        <div className="mb-4">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={this.onChangeAvatar}
            />
            <label className={labelClasses} htmlFor="customFile">
              Choose avatar
            </label>
          </div>
          {errors.image && (
            <div className="invalid-feedback">{errors.image}</div>
          )}
        </div>
      </div>
    )
  }
}
