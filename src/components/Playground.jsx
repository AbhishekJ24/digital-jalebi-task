import { useEffect, useState } from 'react'


const Playground = () => {
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
                        <th className='w-12 h-12 sm:visible hidden'> </th>
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
                            <td className='w-12 h-10 sm:visible hidden'> <button onClick={() => {
                                setseeMore(!seeMore)
                            }
                            } className='border-none bg-transparent mt-1 hover:invert'> <img src="src/assets/more.svg" alt="" /> </button> </td>
                        </tr>
                    )
                    )
                    }
                </tbody>
            </table>}
            <div className='text-center text-xl'>{resp ? "" : "Couldn't fetch user details"}</div>

        </>
    )
}

export default Playground
