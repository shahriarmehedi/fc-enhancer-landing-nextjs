import React from 'react'

function AppReviews() {

    return (
        <div className='bg-[#212126] text-white'>
            <div className='max-w-5xl mx-auto'>
                {/* 3 section, for each section - star, average review star, total review,  respectively for app store, google play store and worldwide */}
                <div className='px-5 lg:px-0 py-24 lg:py-44'>
                    <div className="flex justify-center">
                        <h1 className="text-3xl lg:text-4xl font-thin title-font text-white mb-12 text-center gold-gradient-text">
                            App Reviews
                        </h1>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>

                        <div className='flex flex-col items-center gap-5 bg-violet-500 bg-opacity-5 py-9 px-14 rounded-lg w-full'>
                            {/* app store */}

                            <div className="flex">
                                <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-appstore-icon-png-image-purepng-transparent-4.png" alt=""
                                    className='h-[60px]'
                                />
                            </div>

                            <h2
                                className='text-2xl lg:text-3xl font-thin gold-gradient-text'
                            >
                                App Store
                            </h2>

                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-xl font-bold'>4.6</span>
                                <span className='text-xl'>Average rating</span>
                            </div>
                            <div className='flex flex-col justify-center items-center border border-violet-500 px-5 py-3 rounded-full'>
                                <h3 className='text-xl'> <span className='text-xl font-bold'>400K+</span> Downloads</h3>
                            </div>

                        </div>
                        <div className='flex flex-col items-center gap-5 bg-violet-500 bg-opacity-5 py-10 px-14 rounded-lg w-full'>
                            {/* play store */}

                            <div className="flex">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPFf0oI8qmldGZy13ts6oaDcDuHGujHaD1s__vFUJPZw-8F2H0xlsvRBOVjP0R5Xtn5o&usqp=CAU" alt=""
                                    className='h-[50px] rounded-lg'
                                />
                            </div>

                            <h2
                                className='text-2xl lg:text-3xl font-thin gold-gradient-text'
                            >
                                Play Store
                            </h2>

                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1l2.598 6.776 6.902.502-5.25 4.518 1.6 6.84L10 14.697l-5.85 3.94 1.6-6.84L.5 8.278l6.902-.502L10 1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-xl font-bold'>4.2</span>
                                <span className='text-xl'>Average rating</span>
                            </div>
                            <div className='flex flex-col justify-center items-center border border-violet-500 px-5 py-3 rounded-full'>
                                <h3 className='text-xl'> <span className='text-xl font-bold'>100K+</span> Downloads</h3>
                            </div>

                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default AppReviews