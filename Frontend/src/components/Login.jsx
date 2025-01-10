import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data to the console
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-xl">Login!</h3>
            <div>
              <h2 className="mt-8">Email</h2>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 mt-1 outline-none border-2 rounded-md p-2 dark:bg-slate-900 dark:text-white"
                {...register('email', { required: true })}
              />
              <br></br>
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <h2 className="mt-6">Password</h2>
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 mt-1 outline-none border-2 rounded-md p-2 dark:bg-slate-900 dark:text-white"
                {...register('password', { required: true })}
              />
              <br></br>
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            {/* Buttons */}
            <div className="flex justify-around mt-5">
              <button
                type="submit"
                className="bg-pink-500 text-white px-3 py-1 rounded-md active:scale-90 duration-200 hover:bg-pink-700"
              >
                Login
              </button>
              <p>
                Not registered?{' '}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
