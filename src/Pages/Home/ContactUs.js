import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-6xl mt-5 text-center font-semibold'>Contact Us</h1>
            <p className='text-center text-4xl  font-thin'>Stay connected with us</p>
            <section style={{
                backgroundImage: " url(https://i.ibb.co/n7Tqqm4/jamaal-cooks-X0t-Gwo-H7-Vq-U-unsplash.jpg)",
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