import React from 'react'

const Buttons = ({ currentStep, toNextStep, toPrevStep, resetForm }) => {
  return (
    <div className="d-flex justify-content-center">
      {currentStep <= 3 && (
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-light mr-4"
            disabled={currentStep === 1}
            onClick={toPrevStep}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toNextStep}
          >
            Next
          </button>
        </div>
      )}
      {currentStep === 4 && (
        <button type="button" className="btn btn-primary" onClick={resetForm}>
          Reset
        </button>
      )}
    </div>
  )
}

export default Buttons
