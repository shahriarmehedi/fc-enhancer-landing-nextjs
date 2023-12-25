import React from 'react'

function CTA() {
    return (
        <div className='bg-[#212126] text-white'>
            <div className="bg-violet-500 bg-opacity-5 flex flex-col justify-center items-center text-center mx-auto py-24 lg:py-44 px-5 2xl:px-0">
                <h2 className='text-3xl lg:text-6xl font-bold pt-7 gold-gradient-text'>
                    Everything you need. <br />
                    Nothing you don't.
                </h2>
                <p className='lg:text-xl pt-10 lg:w-2/3 mx-auto text-gray-500 font-semibold'>
                    <span className='text-white'> FC Enhancer has all the features</span>. Supersets, Custom plan, CSV Export, Calculator, Siri Shortcuts, 3rd Party Integrations, Dark Mode, RPE, Advanced Charts, Measurements and more. <span className='text-white'> You do the work.</span>
                </p>

                <div className='lg:mt-12 mt-16 flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center px-5 lg:px-0'>
                    <a href="https://apps.apple.com/us/app/fc-enhancer/id1590505179" target='_blank'>
                        <img src="https://uploads-ssl.webflow.com/60656f5fc7baf6df6e77b7dd/60950fbacbbc057805556e16_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="" className=' h-12 lg:h-16' />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.fut.market.alert&hl=en_US" target='_blank'>
                        <img src="https://uploads-ssl.webflow.com/60656f5fc7baf6df6e77b7dd/60950fe7ecc819988ce8610b_google-play-badge.png" alt="" className=' h-16 lg:h-24' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CTA