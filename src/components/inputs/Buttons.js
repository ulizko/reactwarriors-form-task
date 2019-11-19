import React, { Fragment } from 'react'

const Buttons = ({ currentStep, toNextStep, toPrevStep, resetForm }) => {
  return (
    <div className="d-flex justify-content-center">
      {currentStep < 4 ? (
        <Fragment>
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
        </Fragment>
      ) : (
        <button type="button" className="btn btn-primary" onClick={resetForm}>
          Reset
        </button>
      )}
    </div>
  )
}

export default Buttons
