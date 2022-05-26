import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-6xl mt-5 text-center font-semibold'>Contact Us</h1>
            <p className='text-center text-4xl  font-thin'>Stay connected with us</p>
            <section style={{
                backgroundImage: " url(https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500)",
                backgroundSize: "cover",

            }} className='px-10 py-14 mt-10 rounded-lg'>
                <div>

                    <div className='grid grid-cols-1 justify-items-center gap-5 mt-10'>
                        <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                        <textarea type="text" placeholder="Your message" className="input input-bordered w-full max-w-xs lg:w-[450px] lg:h-[100px]" />
                        {/* <PrimaryButton>Submit</PrimaryButton> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;