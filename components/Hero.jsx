import React from 'react'

function Hero() {
    return (
        <div className='
        bg-[url("/background.png")] bg-cover bg-center bg-no-repeat min-h-screen
        '>
            <div className='flex flex-col items-center justify-center min-h-screen text-center'>
                <div className='max-w-4xl px-7 2xl:px-0'>
                    <h1 className='text-3xl lg:text-[80px] lg:leading-[90px] font-bold gold-gradient-text'>Improve Your Online</h1>
                    <h1 className='text-3xl lg:text-[80px] lg:leading-[90px] font-bold gold-gradient-text'>Trading Experience</h1>
                    <p className='text-white mt-5 px-5 lg:text-2xl pt-3 lg:pt-5'> with real-time market prices and automated challenge solutions.
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
        </div>
    )
}

export default Hero