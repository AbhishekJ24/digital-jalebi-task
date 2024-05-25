import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Home = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-4'>
                <Tilt>
                    <motion.div initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 30, damping: 10, duration: 3000, ease: 'easeInOut' }} className='bg-slate-100 md:w-60 w-40 py-5 px-8 rounded-2xl text-center'>
                        <div className='font-bold text-xl mb-4'>
                            FETCH
                        </div>
                        <div>
                            Fetch data from provided endpoints
                        </div>
                    </motion.div>
                </Tilt>
                <Tilt>
                    <motion.div initial={{ x: "100vw" }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 30, damping: 10, duration: 3000, ease: 'easeInOut' }} className='bg-slate-100 md:w-60 w-40 py-5 px-8 rounded-2xl text-center'>
                        <div className='font-bold text-xl mb-4'>
                            DISPLAY
                        </div>
                        <div>
                            Display fetched response in tabular form
                        </div>
                    </motion.div>
                </Tilt>
                <Tilt>
                    <motion.div initial={{ x: "-100vw" }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 30, damping: 10, duration: 3000, ease: 'easeInOut' }} className='bg-slate-100 md:w-60 w-40 py-5 px-8 rounded-2xl text-center'>
                        <div className='font-bold text-xl mb-4'>
                            FILTER
                        </div>
                        <div>
                            Filter the data to display queries
                        </div>
                    </motion.div>
                </Tilt>
            </div>

        </>
    )
}

export default Home
