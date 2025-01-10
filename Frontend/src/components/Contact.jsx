import React from 'react'

const Contact = () => {
    return (
        <>  
           <div>
           <div className=' flex h-screen items-center justify-center '>
                <div className='w-[400px] '>
                    <div className='modal-box dark:bg-gray-700 dark:text-white h-fit '>
                    <h3 className="font-bold text-xl flex items-center justify-center text-center">Contact Us!</h3>
                        <div>
                            <h2 className='mt-8'>Name</h2>
                            <input type='text' placeholder='Enter your fullname' className='w-80 mt-1 outline-none border-2 rounded-md p-2  dark:bg-gray-700 dark:text-white' />
                        </div>
                        <div>
                            <h2 className='mt-8'>Email</h2>
                            <input type='text' placeholder='Enter your Email' className='w-80 mt-1 outline-none border-2 rounded-md p-2  dark:bg-gray-700 dark:text-white' />
                        </div>
                        <div>
                            <h2 className='mt-8'>Message</h2>
                            <textarea type='text' className=" border-2 w-80 h-24  mt-1 outline-none rounded-md p-2 dark:bg-gray-700 dark:text-white" placeholder="Type your message!!"></textarea>
                        </div>
                        <div>
                        <button className="btn btn-primary mt-2">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
           </div>
        </>
    )
}

export default Contact