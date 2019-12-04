import React from 'react'
import classNames from 'classnames'

const Step = ({ step, currentStep, completedStep }) => {
  const stepClasses = classNames({
    step: true,
    'is-active': step.number === currentStep,
    'is-completed': step.number <= completedStep,
  })
  return (
    <div className={stepClasses}>
      <div className="step__marker">{step.number}</div>
      <div className="step__title mt-1">{step.name}</div>
    </div>
  )
}

export default Step
