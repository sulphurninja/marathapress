

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9  }}
                className=' rounded-2xl  mx-4 mt-4 '
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.9 }}
            >
            <div className=' absolute'>
            <span className=' p-1 font-bold text-red-500  bg-yellow-200 rounded-l-xl rounded-b-none text-xs'>Ad</span>
            </div>

          <img src='advertisement01.jpg' className='object-cover h-48 rounded-xl w-full ' />
          
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9  }}
                
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
              <h1 className='text-center text-5xl font-cool  md:mt-12 '> Vaavdi -&nbsp;
                <span className='font-bold text-[#4F200D]'>वावडी</span> </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9  }}
                className='bg-white rounded-2xl mx-4 mt-4 '
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.9 }}
            >
                    <div className=' absolute'>
             <span className=' p-1 font-bold text-red-500  bg-yellow-200 rounded-l-xl rounded-b-none text-xs'>Ad</span>
             </div>
          <img src='advertisement02.png' className='object-contain h-48 rounded-xl w-full ' />
            </motion.div>
        </div>
    )
}
