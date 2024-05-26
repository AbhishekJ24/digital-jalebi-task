import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Playground = () => {
    
    const [resp, setResp] = useState(false);
    const [data, setData] = useState(null);
    const [seeMore, setseeMore] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    async function handleSearch(e) {
        e.preventDefault();
        try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${searchTerm}`);
            const result = await response.json();
            setData(result.users);
        } catch (error) {
            console.error(error);
        }
    }

    async function getResponse() {
        try {
            let response = await fetch('https://dummyjson.com/users');
            let jresponse = await response.json();
            setData(jresponse.users);
        } catch (error) {
            alert(error);
        } finally {
            setResp(true);
        }
    }

    useEffect(() => {
        getResponse();
    }, []);

    return (
        <>
            <div className="my-11 flex justify-center">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="md:w-96 w-56 py-1 px-4 border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.6 }}
                        className="search-btn py-1 px-4 ml-4 rounded-lg bg-slate-300 hover:bg-slate-400"
                        type="submit"
                    >
                        Filter
                    </motion.button>
                </form>
            </div>

            {resp && data && (
                <table className="bg-slate-950 table-auto border border-slate-50 m-auto mb-36 text-center">
                    <thead className="text-violet-100 font-extrabold border">
                        <tr>
                            <th className="w-36 h-12">First Name</th>
                            <th className="w-36 h-12">Last Name</th>
                            <th className="w-36 h-12 hidden md:table-cell">Gender</th>
                            <th className="w-36 h-12 hidden lg:table-cell">Email</th>
                            <th className="w-36 h-12 hidden lg:table-cell">Username</th>
                            <th className="w-36 h-12 hidden lg:table-cell">Password</th>
                            <th className="w-12 h-12 xl:hidden"></th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-300 font-extralight">
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td className="w-36 h-10">{user.firstName}</td>
                                <td className="w-36 h-10">{user.lastName}</td>
                                <td className="w-36 h-10 hidden md:table-cell">{user.gender}</td>
                                <td className="w-36 h-10 hidden lg:table-cell">{user.email}</td>
                                <td className="w-36 h-10 hidden lg:table-cell">{user.username}</td>
                                <td className="w-36 h-10 hidden lg:table-cell">{user.password}</td>
                                <td className="w-12 h-10 xl:hidden">
                                    <button
                                        onClick={() => {
                                            setseeMore(!seeMore);
                                            let pr = confirm("Want to redirect to " + user.firstName + " object url?")
                                            if (pr)
                                                location.href = "https://dummyjson.com/users/search?q=" + user.firstName

                                        }}
                                        className="border-none bg-transparent mt-1 hover:invert"
                                    >
                                        <img src="src/assets/more.svg" alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className={resp && data ? '' : 'loader'}></div>
        </>
    );
};

export default Playground;
