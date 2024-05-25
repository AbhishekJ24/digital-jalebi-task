import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

function App() {
  const [resp, setResp] = useState(false)
  const [data, setData] = useState(null)
  const [seeMore, setseeMore] = useState(false)

  async function getResponse() {
    try {
      let response = await fetch("https://dummyjson.com/users")
      let jresponse = await response.json()
      setData(jresponse.users)
    } catch (error) {
      alert(error)
    }
    finally {
      setResp(true)
    }
  }
  useEffect(() => {
    getResponse()
  }, [])

  return (
    <>

      <Navbar />

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

      <div className="search my-11">

      </div>
      {resp && data && <table className='bg-slate-950 table-auto border border-slate-50 m-auto mb-36 text-center'>
        <thead className='text-violet-100 font-extrabold border'>
          <tr>
            <th className='w-36 h-12'>First Name</th>
            <th className='w-36 h-12'>Last Name</th>
            <th className='w-36 h-12'>Gender</th>
            <th className='w-36 h-12'>Email</th>
            <th className='w-36 h-12'>Username</th>
            <th className='w-36 h-12'>Password</th>
            <th className='w-12 h-12'> </th>
          </tr>
        </thead>
        <tbody className='text-slate-300 font-extralight'>
          {data.map((user) => (
            <tr key={user.id}>
              <td className='w-36 h-10'> {user.firstName} </td>
              <td className='w-36 h-10'> {user.lastName} </td>
              <td className='w-36 h-10'> {user.gender} </td>
              <td className='w-36 h-10'> {user.email} </td>
              <td className='w-36 h-10'> {user.username} </td>
              <td className='w-36 h-10'> {user.password} </td>
              <td className='w-12 h-10 flex items-center'> <button onClick={() => {
                setseeMore(!seeMore)
              }
              } className='border-none bg-transparent mt-1 hover:invert'> <img src="src/assets/more.svg" alt="" /> </button> </td>
            </tr>
          )
          )
          }
        </tbody>
      </table>}
      <div className='text-center text-xl'>{resp?"":"Couldn't fetch user details"}</div>

      <Footer />
    </>
  )
}

export default App
