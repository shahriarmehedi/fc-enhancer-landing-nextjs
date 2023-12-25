import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="w-full bg-[#212126] text-white">
                <div className='flex justify-between items-center max-w-6xl mx-auto pt-4 pb-4 px-7 2xl:px-0'>
                    <div className="flex items-center gap-5">



                        <div className="drawer lg:hidden z-[999999]">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="drawer-button">
                                    <div className='lg:hidden'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </div>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-zinc-800 text-white">
                                    {/* close button */}
                                    <div className='flex justify-end '>
                                        <label htmlFor="my-drawer" className="drawer-button">
                                            <div className='lg:hidden border-2 border-zinc-200 rounded-md p-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </div>
                                        </label>
                                    </div>
                                    {/* Sidebar content here */}
                                    <li className='hover:bg-zinc-700 rounded-md'>
                                        <a href="#learnmore" className="hover:text-gray-300 py-2 text-xl">Learn more</a>
                                    </li>
                                    <li className='hover:bg-zinc-700 rounded-md'>
                                        <a href="https://apps.apple.com/us/app/fc-enhancer/id1590505179" target='_blank' className="hover:text-gray-300 py-2 text-xl">App Store</a>
                                    </li>
                                    <li className='hover:bg-zinc-700 rounded-md'>
                                        <a href="https://play.google.com/store/apps/details?id=com.fut.market.alert&hl=en_US" target='_blank' className="hover:text-gray-300 py-2 text-xl">Google Play</a>
                                    </li>

                                </ul>
                            </div>
                        </div>



                        <div className='flex items-center gap-3'>
                            <img src="/logo.png" alt="" className='h-10' />
                            <h2 className=" font-thin lg:text-xl">FC Enhancer</h2>
                        </div>
                    </div>
                    <div>
                        <ul className=" items-center gap-7 hidden lg:flex">
                            <li>
                                <a href="#learnmore" className=" font-thin transition duration-200 hover:text-violet-300">Learn more</a>
                            </li>
                            <li>
                                <a href="https://apps.apple.com/us/app/fc-enhancer/id1590505179" target='_blank' className=" font-thin transition duration-200 hover:text-violet-300">App Store</a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.fut.market.alert&hl=en_US" target='_blank' className=" font-thin transition duration-200 hover:text-violet-300">Google Play</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar