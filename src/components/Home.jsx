import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';

const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
}

const Home = () => {

    return (
        <>
            <div className=''>
                <div className='grad font-extrabold md:text-3xl text-2xl text-center leading-normal' >
                    <TypeAnimation sequence={['Welcome to  Searchify', 2500,]} wrapper="span" speed={10} style={{ fontSize: '60px', display: 'inline-block' }} repeat={Infinity} className='my-6' />
                </div>


                <div className='text-slate-50 text-2xl w-2/4 text-center m-auto mb-14 mt-4 font-semibold'> Harness the power of React.js to fetch an API and filter the responses while experiencing an immersive UI/UX</div>

                <div className='flex flex-wrap justify-center gap-10 mb-28'>

                    <Tilt options={defaultOptions}>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} className='bg-slate-100 md:w-96 md:h-80 w-40 h-48 py-5 px-8 rounded-2xl flex justify-center items-center text-center hover:bg-slate-300'>
                            <div>
                                <div className='font-extrabold md:text-5xl text-2xl mb-4'>
                                    FETCH
                                </div>
                                <div className='md:text-3xl text-base'>
                                    Fetch data from provided endpoints
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>


                    <Tilt options={defaultOptions}>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} className='bg-slate-100 md:w-96 md:h-96 w-40 h-48 py-5 px-8 rounded-2xl flex justify-center items-center text-center hover:bg-slate-300'>
                            <div>
                                <div className='font-extrabold md:text-5xl text-2xl mb-4'>
                                    DISPLAY
                                </div>
                                <div className='md:text-3xl text-base'>
                                    Display fetched response in tabular form
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>


                    <Tilt options={defaultOptions}>
                        <motion.div initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }} className='bg-slate-100 md:w-96 md:h-80 w-40 h-48 py-5 px-8 rounded-2xl flex justify-center items-center text-center hover:bg-slate-300'>
                            <div>
                                <div className='font-extrabold md:text-5xl text-2xl mb-4'>
                                    FILTER
                                </div>
                                <div className='md:text-3xl text-base'>
                                    Filter the data to display queries
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>


                </div>
            </div>

        </>
    )
}

export default Home
