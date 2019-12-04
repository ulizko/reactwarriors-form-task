import React from 'react'

import Step from './Step'

const Steps = ({ currentStep, completedStep }) => {
  const steps = [
    { number: 1, name: 'Basic' },
    { number: 2, name: 'Contacts' },
    { number: 3, name: 'Avatar' },
    { number: 4, name: 'Finish' },
  ]

  const mappedSteps = steps.map(step => (
    <Step
      key={step.number}
      step={step}
      currentStep={currentStep}
      completedStep={completedStep}
    />
  ))
  return <div className="steps mb-4">{mappedSteps}</div>
}

export default Steps
