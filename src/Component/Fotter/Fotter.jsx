import criket from '../../assets/image/logo-footer.png'
const Fotter = () => {
    return (
        <div className="bg-[#000000] relative">
            <div className='border border-white p-5 absolute left-1/2 transform -translate-x-1/2 rounded-xl w-full lg:max-w-7xl top-[-18%] lg:top-[-25%]'>
                    <div className='bg-white bg-gradient-to-tr from-[#7fbbd7] to-[#d88f45] rounded-xl flex flex-col items-center justify-center gap-4 px-2 py-10 sm:py-20'>
                        <h1 className='text-3xl font-bold text-center'>Subscribe to our Newsletter</h1>
                        <p className=' text-white font-semibold text-center'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex flex-col sm:flex-row items-center justify-center gap-2'>
                            <input className='bg-white p-3 md:w-96 outline-none rounded-lg' type="email" placeholder='Enter your email' />
                            <button className='btn btn-info w-full sm:w-auto'>Subscribe</button>
                        </div>
                    </div>
            </div>
            <div className='pt-52 pb-2 flex flex-col justify-center items-center lg:max-w-7xl mx-auto px-5'>
                <img src={criket} alt="" />
                <div className='grid lg:grid-cols-3 lg:place-items-center py-10 gap-10 '>
                    <div>
                        <h4 className='text-xl font-semibold text-white'>About Us</h4>
                        <ul className='mt-3'>
                            <p className='text-[#FFFFFF99]'>At BPL Team Draft, we bring you the ultimate player selection experience, showcasing the finest talents as teams gear up for the Bangladesh Premier League.</p>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-white'>Quick Link</h4>
                        <ul className='text-[#FFFFFF99] mt-3 list-disc'>
                            <li className='ml-7'>Home</li>
                            <li className='mt-2 ml-7'>Service</li>
                            <li className='mt-2 ml-7'>About</li>
                            <li className='mt-2 ml-7'>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold text-white'>Subcribe</h4>
                        <ul className='text-[#FFFFFF99] mt-3'>
                            <p> Subscribe to our newsletter for the latest updates.</p>
                            <div className='mt-4 flex items-center'>
                                <input className='py-3 px-2 rounded-l-md outline-none text-black' type="text" />
                                <button className='py-3 bg-sky-400 px-2 rounded-r-md text-white'>Subcribe</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <hr className='py-2' /> */}
            <div className='border-t-2 border-dashed'></div>
            <p className='text-center text-sm text-[#FFFFFF99] py-4'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Fotter;