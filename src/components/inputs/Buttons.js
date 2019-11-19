import React from 'react'

const Buttons = ({ currentStep, toNextStep, toPrevStep }) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-light mr-4"
        disabled={currentStep === 1}
        onClick={toPrevStep}
      >
        Previous
      </button>
      <button type="button" className="btn btn-secondary" onClick={toNextStep}>
        Next
      </button>
    </div>
  )
}

export default Buttons
