import { Link } from 'react-router-dom';
import google from '../assets/icons8-google.svg';
const Signup = () => {
  return (
     <div className="flex items-center justify-center h-screen">
     <div className="pt-1 rounded-lg shadow-gray-200 shadow-md w-auto flex flex-col justify-start">
       <h1 className="text-2xl font-bold text-center">CREATE AN ACCOUNT</h1>
       <form className='mx-16 mb-6 mt-5'>
        <div className='flex flex-row gap-6 items-center justify-center font-normal'>
          <div className='flex flex-col'>
          <label className='block text-md my-1'>First Name</label>
          <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
            <input type='text' className="p-1 rounded-md focus:outline-none text-black"></input>
          </div>
          </div>
          <div className='flex flex-col'>
          <label className='block text-md my-1'>Last Name</label>
          <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
            <input type='text' className="p-1 rounded-md focus:outline-none text-black"></input>
          </div>
          </div>
        </div>
        <label className='block text-md my-1'>Email</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
          <input type='email' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <label className='block text-md my-1'>Password</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
          <input type='password' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <label className='block text-md my-1'>Confirm Password</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
          <input type='password' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <button className='bg-bggradient p-1 w-full text-center rounded mt-4 mb-4'>Register</button>
        <p>Already have an account, <Link to={'/login'}><button className="font-bold text-lg hover:text-indigo-500">Login</button></Link></p>
        <div className="flex flex-row items-center w-full pt-2">
            <span className="border border-b-0 border-gray-300 w-full"></span>
            <p className="px-2">OR</p>
            <span className="border border-b-0 border-gray-300 w-full"></span>
        </div>
        <div className='flex items-center justify-center'>
          <button className='flex flex-row items-center border rounded p-3 mt-2 justify-center'><img src={google} className='w-5 h-5 mr-2'></img><span>SIGN IN WITH GOOGLE</span></button>
        </div>
       </form>
     </div>
   </div>
  )
}
export default Signup;
