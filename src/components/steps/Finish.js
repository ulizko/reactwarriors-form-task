import React, { Component, Fragment } from 'react'
import countries from '../../data/countries'
import cities from '../../data/cities'

export class Finish extends Component {
  render() {
    const {
      avatar,
      firstname,
      lastname,
      email,
      phone,
      country,
      city,
      resetForm,
    } = this.props
    const countryName = countries.find(item => item.id === +country).name
    const cityName = cities[city].name
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row mb-4">
            <div className="col-4">
              <img src={avatar} alt="" width="100%" />
            </div>
            <div className="col-8 d-flex align-items-center">
              <h4>{`${firstname} ${lastname}`}</h4>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Mobile:</strong> {phone}
              </p>
              <p>
                <strong>Location:</strong> {`${countryName}, ${cityName}`}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary" onClick={resetForm}>
            Reset
          </button>
        </div>
      </Fragment>
    )
  }
}

export default Finish
