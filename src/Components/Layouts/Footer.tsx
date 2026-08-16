const Footer = () => {
    return (
        <div className='text-white pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-black'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <p className='text-lg font-semibold '>Exclusive</p>
                    <p className="mt-3 font-poppins">Subscribe</p>
                    <p className='mt-3 text-[16px] text-[#FAFAFA]'>
                        Get 10% off your first order
                    </p>
                    <div className='flex items-center mt-4 rounded-sm bg-black rounded-l border border-gray-300'>
                        <input type="text" className='  h-9 px-3 outline-none' placeholder='Enter your email' />

                        
                    </div>
                </div>
                <div className='max-w-40'>
                    <p className='text-lg '>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">+88015-88888-9999</a></li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg '>Account</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>
                <div className='max-w-40'>
                    <p className='text-lg '>Quick Link</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                
                <div className='max-w-80'>
                    <p className='mb-4 h-8 md:h-9'>Download App</p>
                    <p className='text-sm'>
                        Save $3 with App New User Only
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Facebook */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
                        </svg>
                        {/* Twitter */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
                        </svg>
                        {/* Instagram */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
                        </svg>
                        {/* LinkedIn */}
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
                        </svg>
                    </div>
                </div>

            </div>
            
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 justify-center justify-between py-5 '>
               <p>@ Copyright Rimel 2022. All right reserved</p>
            </div>
               

        </div>
    );
};
export default Footer;
