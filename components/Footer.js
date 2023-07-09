import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white  w-full mt-4 text-black border-t-2 pt-2 font-nice  text-lg  font-bold -300">
      <div className=''>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-24 w-24"
            />
            <span className="ml-2 text-xl font-bold">Maratha Club    <span className='font-medium'> </span> </span>
          </div>
          <div className='ml-12'>
            <h3 className="text-lg underline font-semibold mb-4 ">Contact Us</h3>
            <p className="mb-2 cursor-pointer hover:text-white">
              Address: Maratha Press, Beed-431122
            </p>
            <p className="mb-2 cursor-pointer hover:text-white">Phone: +91 7038972972</p>
            <p className='cursor-pointer hover:text-white'>Email: adityabalasaheb@gmail.com</p>
          </div>
          <div className='ml-12'>
            <h3 className="text-lg underline font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 cursor-pointer hover:text-white">
                <a href="/">Home</a>
              </li>
              <li className="mb-2 cursor-pointer hover:text-white">
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
