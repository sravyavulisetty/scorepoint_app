import React, { useEffect, useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Button from './Button';
interface Step{
    title: string,
}
interface StepperProps{
    steps: Step[]
}
const Stepper:React.FC<StepperProps> = ({steps}) => {
    const [stepIndex, setStepIndex] = useState<number>(0);
    const [isCompleted, setisCompleted]=useState([] as any);
    const handlePrev = ()=>{
        if(stepIndex>0)
        setStepIndex((prevStep) => prevStep-1)
    }
    const handleNext = ()=>{
        setisCompleted((prevComp: any) => [...prevComp, stepIndex]);
        if(stepIndex < steps.length-1)
        setStepIndex((prevStep)=> prevStep+1)
    }
    useEffect(()=>{
        console.log(isCompleted);
        console.log(stepIndex);
    })
  return (
    <div className='mx-32 my-10 h-screen'>
        <div className='flex flex-row justify-between items-center mx-48'>
        {steps.map((step,i) => (
        <>
          <div key={i} className='flex flex-col items-center'>
            {i < stepIndex? 
            <p className='relative border rounded-full h-10 w-10 border-green-500 text-center pt-2'>{i+1}</p> :
            <p className='relative border rounded-full h-10 w-10 border-blue-500 text-center pt-2'>{i+1}</p>}
            <p className='absolute top-40'>{step.title}</p>
          </div>
          {i < steps.length-1 ? <div className=' bg-gray-200 w-full mx-5 h-px'></div> : ""}
          </>
        ))}
        </div>
        <div className='flex justify-between flex-row items-center pt-20 mx-48'>
            <Button onClick={handlePrev} disabled={stepIndex===0}><FaAngleLeft/></Button>
            <Button onClick={handleNext} disabled={stepIndex===steps.length-1}><FaAngleRight/></Button>
        </div>
    </div>
  )
}

export default Stepper


