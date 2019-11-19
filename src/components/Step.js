import React from 'react'

const Step = ({ step, currentStep }) => {
  const isActiveClass = currentStep === step.number ? ' is-active' : ''
  const isCompletedClass = step.number < currentStep ? ' is-completed' : ''

  return (
    <div className={`step${isActiveClass}${isCompletedClass}`}>
      <div className="step__marker">{step.number}</div>
      <div className="step__title mt-1">{step.name}</div>
    </div>
  )
}

export default Step
