import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Log the form data to the console
    };
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[400px]   ">
                <div className=" modal-box dark:bg-slate-900 dark:text-white h-fit ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                    <h3 className="font-bold text-xl flex items-center justify-center text-center">Signup!</h3>
                    <div>
                        <h2 className='mt-8'>Name</h2>
                        <input type='text' placeholder='Enter your fullname' className='w-80 mt-1 outline-none border-2 rounded-md p-2 dark:bg-slate-900 dark:text-white'
                        {...register('name', { required: true })}
                         />
                         <br></br>
              {errors.name && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
                    </div>
                    <div>
                        <h2 className='mt-8'>Email</h2>
                        <input type='email' placeholder='Enter your email' className='w-80 mt-1 outline-none border-2 rounded-md p-2 dark:bg-slate-900 dark:text-white'
                        {...register('email', { required: true })} 
                        />
                        <br></br>
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
                    </div>
                    <div>
                        <h2 className='mt-6'>Password</h2>
                        <input type='password' placeholder='Enter your Password' className='w-80 mt-1 outline-none border-2 rounded-md p-2 dark:bg-slate-900 dark:text-white'
                        {...register('password', { required: true })} 
                        />
                        <br></br>
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
                    </div>
                    {/* {Button} */}
                    <div className='flex justify-around mt-5'>
                        <button className='bg-pink-500 text-white px-3 py-1 rounded-md active:scale-90 duration-200 hover:bg-pink-700'>Signup</button>
                        <p>Have account?{" "}
                            <button className='underline text-blue-500 cursor-pointer'
                                onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                }
                            >Login
                            </button>{""}
                            <Login />
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup