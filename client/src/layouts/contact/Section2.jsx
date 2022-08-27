import React from 'react'

export default function Section2() {
    return (
        <div className='relative w-full h-auto flex flex-col items-center bg-white pt-80 md:py-10 gap-10 border border-gray-200 '>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-2xl md:text-5xl text-gray-800 text-center font-semibold'>Connect with Our Physical Office</h1>
                <hr className='border-2 border-gray-500 bg-gray-500 w-1/4 rounded-xl' />
            </div>
            <div className='w-full h-auto px-5 md:px-28 '>
                <div className='relative w-full md:h-[82vh] md:grid grid-cols-12 border border-gray-300 shadow-xl'>
                    <div className='w-full h-auto bg-slate-700 col-span-8 border border-gray-200'>
                        <iframe 
                        className='h-[400px] md:h-full'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d492.5580250523021!2d38.79231357531903!3d9.021348927233465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1658590825198!5m2!1sen!2set" 
                        width="100%" 
                        // height="400px" 
                        style={{
                            border: 0,
                        }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-full h-auto bg-[#F5F8FA] col-span-4 px-5 md:px-10 py-5 md:py-10 flex flex-col gap-5 '>
                        {/* Office Address */}
                        <div className='flex flex-col items-start gap-5'>
                            <h1 className='text-2xl md:text-3xl font-semibold'>Head Offce</h1>
                            <div className='flex flex-col gap-1 text-lg font-light'>
                                <p>Building Name</p>
                                <p>Kenenisa Ave</p>
                                <p>Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                        {/* Phone Address */}
                        <div className='flex flex-col items-start gap-5'>
                            <h1 className='text-2xl md:text-3xl font-semibold'>Phone / Fax</h1>
                            <div className='flex flex-col gap-1 text-lg font-light'>
                                <p>+251 911 753 962</p>
                                <p>Fax Number</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
