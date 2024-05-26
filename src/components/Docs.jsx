import { motion } from "framer-motion";

const Docs = () => {
  const docs = [
    { title: 'Introduction', description: 'Searchify is a tool to fetch user data using an API call. It is a part of the task given by Digital Jalebi as part of the internship hiring process. It is based on the principle, Fetch, Display and Filter.' },
    { title: 'Usage', description: 'For usage through local system, you may clone the repository from GitHub.' },
    { title: 'Configuration', description: 'For configuring the project, we can utilize npm. After cloning the repository, simple run the command npm i to install all of the required dependenices and finally running the command npm run dev to run the project on local host with port 5173.' },
    { title: 'API Reference', description: 'The API used here is the dummy API which generates a JSON object of random users with their different details including first name, last name, gender, etc.' },
    { title: 'Technology Stack', description: 'JavaScript (scripting language), React.js (JS framework), Tailwind CSS (utility library for styling), TypeAnimation (react-type-animation), Tilt (react-tilt), motion (framer-motion).' }
  ];

  return (
    <>
      <div>

        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Documentation</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((doc, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-white">{doc.title}</h2>
                <p className="text-gray-300">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <motion.a whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }} className='bg-slate-700 p-5 rounded-xl ml-4 text-gray-300' href="https://github.com/AbhishekJ24/digital-jalebi-task.git" target='_blank'>
            Visit GitHub Repository
          </motion.a>
        </div>
      </div>
    </>
  );
}

export default Docs
