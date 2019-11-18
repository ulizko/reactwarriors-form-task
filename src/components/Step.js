import React from 'react'

const Step = props => {
  const { step } = props
  const isActiveClass = props.currentStep === step.number ? ' is-active' : ''

  return (
    <div className={`step${isActiveClass}`}>
      <div className="step__marker">{step.number}</div>
      <div className="step__title mt-1">{step.name}</div>
    </div>
  )
}

export default Step
