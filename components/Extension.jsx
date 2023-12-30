import React from 'react'

function Extension() {
    return (
        <div className='bg-[#212126] text-white'>
            <div className='max-w-5xl mx-auto'>
                {/* 3 section, for each section - star, average review star, total review,  respectively for app store, google play store and worldwide */}
                <div className='px-5 lg:px-0 pb-10'>

                    <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>

                        <div className='flex flex-col items-center gap-5 bg-violet-500 bg-opacity-5 border border-violet-500 border-opacity-20 py-14 px-14 rounded-lg w-full'>

                            <div className="flex">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/free-chrome-4761993-3955506.png" alt=""
                                    className='h-[60px]'
                                />
                            </div>

                            <h2
                                className='text-2xl font-thin text-center'
                            >
                                Google Chrome Extension Installs
                            </h2>
                            <div className='flex flex-col justify-center items-center border border-violet-500 px-5 py-3 rounded-full'>
                                <h3 className='text-xl'> <span className='text-xl font-bold'>80K+</span></h3>
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        </div>
    )
}

export default Extension