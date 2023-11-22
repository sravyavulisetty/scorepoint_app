const Signup = () => {
  return (
     <div className="flex items-center justify-center m-8">
     <div className="pt-8 rounded-lg shadow-gray-200 shadow-md w-auto flex flex-col justify-start">
       <h1 className="text-2xl font-bold text-center">CREATE AN ACCOUNT</h1>
       <form className='mx-16 mb-16 mt-8'>
        <div className='flex flex-row gap-6 items-center justify-center font-normal'>
          <div className='flex flex-col'>
          <label className='block text-md my-1'>First Name</label>
          <div className="rounded-lg bg-gray-200 focus-within:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0.5 mb-3">
            <input type='text' placeholder='First Name' className="p-1 rounded-md focus:outline-none text-black"></input>
          </div>
          </div>
          <div className='flex flex-col'>
          <label className='block text-md my-1'>Last Name</label>
          <div className="rounded-lg bg-gray-200 focus-within:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0.5 mb-3">
            <input type='text' placeholder='Last name' className="p-1 rounded-md focus:outline-none text-black"></input>
          </div>
          </div>
        </div>
        <label className='block text-md my-1'>Email</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0.5 mb-3">
          <input type='email' placeholder='Email' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <label className='block text-md my-1'>Password</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0.5 mb-3">
          <input type='password' placeholder='Password' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <label className='block text-md my-1'>Confirm Password</label>
        <div className="rounded-lg bg-gray-200 focus-within:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-0.5 mb-3">
          <input type='password' placeholder='Confirm Password' className="w-full p-1 rounded-md focus:outline-none text-black"></input>
        </div>
        <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 w-full text-center rounded mt-8 mb-4'>Register</button>
        <p>Already have an account, <span className='font-bold text-lg'>Login</span></p>
       </form>
     </div>
   </div>
  )
}
export default Signup;
