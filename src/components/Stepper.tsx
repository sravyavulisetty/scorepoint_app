import React, { useEffect, useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Button from './Button';
interface Step{
    title: string,
    element: JSX.Element
}
interface StepperProps{
    steps: Step[]
}
const Stepper:React.FC<StepperProps> = ({steps}) => {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const handlePrev = ()=>{
        if(stepIndex>0)
        setStepIndex((prevStep) => prevStep-1)
    }
    const handleNext = ()=>{
        if(stepIndex < steps.length-1)
        setStepIndex((prevStep)=> prevStep+1)
    }
  return (
    <div className='mx-32 my-10 h-screen flex flex-col'>
        <div className='flex flex-row justify-between items-center mx-48'>
        {steps.map((step,i) => (
        <React.Fragment key={i}>
          <div className='flex flex-col items-center'>
            {i < stepIndex? 
            <p className='relative border rounded-full h-10 w-10 border-green-500 text-center pt-2'>{i+1}</p> :
            <p className='relative border rounded-full h-10 w-10 border-blue-500 text-center pt-2'>{i+1}</p>}
            <p className='absolute top-40'>{step.title}</p>
          </div>
          {i < steps.length-1 ? <div className=' bg-gray-200 w-full mx-5 h-px'></div> : ""}
          </React.Fragment>
        ))}
        </div>
        <div className='pt-16'>{steps[stepIndex].element}</div>
        <div className='flex justify-between flex-row items-center pt-16 mx-48'>
            <Button onClick={handlePrev} disabled={stepIndex===0} color='green' borderRadius={50}><FaAngleLeft/></Button>
            <Button onClick={handleNext} disabled={stepIndex===steps.length-1} color='green' borderRadius={50}><FaAngleRight/></Button>
        </div>
    </div>
  )
}

export default Stepper


