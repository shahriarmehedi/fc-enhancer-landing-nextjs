import React from 'react'
import Discord from '@/components/Discord'
import Extension from '@/components/Extension'
import Youtube from '@/components/Youtube'
function SingleViewData() {
    return (
        <div className='bg-[#212126] text-white'>
            <div className='max-w-5xl mx-auto'>
                {/* 3 section, for each section - star, average review star, total review,  respectively for app store, google play store and worldwide */}
                <div className='px-5 lg:px-0 pt-10'>
                    <div className="flex justify-center">
                        <h1 className="text-3xl lg:text-4xl font-thin title-font text-white mb-12 text-center gold-gradient-text">
                            Other Metrics
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <Extension />
                    <Discord />
                    <Youtube />
                </div>




            </div>


        </div>
    )
}

export default SingleViewData