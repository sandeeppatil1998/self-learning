import React, { useState } from 'react';
import './steps.css';

const messages = [
  "Learn React",
  "Apply for jobs",
  "Get a job"
];

function Steps() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1)
  }

  function handleNext() {
    if (step < 3) setStep(step + 1)
  }

  return (
    <>
      <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      { isOpen && (
        <div className="steps">
          <div className='numbers'>
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className='message'>Step {step}: {messages[step - 1]}</p>

          <div className='buttons'>
            <button className='btn' onClick={handlePrevious}>Previous</button>
            <button className='btn' onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;
