import { Link } from 'react-router-dom';
import google from '../assets/icons8-google.svg';
const Login = () => {
  return (
    <div className='flex items-center justify-center mx-8 mt-8 mb-11'>
        <div className='pt-10 p-5 rounded-lg shadow-gray-200 shadow-md flex flex-col justify-start'>
        <h1 className="text-2xl font-bold text-center">SIGN IN</h1>
       <form className='mx-16 mb-16 mt-6 flex flex-col justify-center'>
        <label className='block text-md my-1'>Email Address</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
          <input type='email' placeholder='Email' className="w-full p-1 rounded-md focus:outline-none text-black text-sm"></input>
        </div>
        <label className='block text-md my-1'>Password</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-bggradient p-0.5 mb-3">
          <input type='password' placeholder='Password' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <button className='bg-bggradient p-1 w-full text-center rounded mt-2 mb-4'>Login</button>
        <div className="flex flex-row items-center w-full">
            <span className="border border-b-0 border-gray-300 w-full"></span>
            <p className="px-2">OR</p>
            <span className="border border-b-0 border-gray-300 w-full"></span>
        </div>
        <button className='flex flex-row items-center border rounded p-3 mt-2 justify-center'><img src={google} className='w-5 h-5 mr-2'></img><span>SIGN IN WITH GOOGLE</span></button>
        <p className='pt-4'>Don't have an account, <Link to={'/signup'}><button className='font-semibold text-lg hover:text-sky-500'>Create One</button></Link></p>
       </form>
        </div>
    </div>
  )
}

export default Login;
