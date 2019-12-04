import React from 'react'
import classNames from 'classnames'

import DefaultAvatar from '../../images/default-avatar.png'

const Avatar = ({ values, errors, onChange }) => {
  const onChangeAvatar = e => {
    const reader = new FileReader()

    reader.onload = event => {
      onChange({
        target: {
          name: 'avatar',
          value: event.target.result,
        },
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const { avatar } = values
  const labelClasses = classNames({
    'custom-file-label': true,
    invalid: errors.avatar,
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
            onChange={onChangeAvatar}
          />
          <label className={labelClasses} htmlFor="customFile">
            Choose avatar
          </label>
        </div>
        {errors.avatar && (
          <div className="invalid-feedback">{errors.avatar}</div>
        )}
      </div>
    </div>
  )
}

export default Avatar
