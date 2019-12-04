import React from 'react'
import countries from '../../data/countries'
import cities from '../../data/cities'

const Finish = ({ values }) => {
  const { avatar, firstname, lastname, email, phone, country, city } = values

  const countryName = countries.find(item => item.id === +country).name

  const cityName = cities[city].name

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-4">
          <img src={avatar} alt="" width="100%" />
        </div>
        <div className="col-8 d-flex align-items-center">
          <h4>
            {firstname} {lastname}
          </h4>
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
            <strong>Location:</strong> {countryName}, {cityName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Finish
