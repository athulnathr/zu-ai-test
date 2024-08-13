// pages/index.js or pages/index.tsx
import { useState } from 'react';

export default function Home() {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event:any) => {
//     // setFile(event.target.files[0]);
//   };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg flex">
        {/* Form Section */}
        <div className="w-2/3 p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Hey IB Folks! Unsure about the quality of your answers? <span className="text-purple">We get you.</span></h1>

          <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
            //   onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              {/* {file ? file?.name : 'Upload your file'} */}
            </label>
            <p className="text-sm text-gray-500 mt-2">Limit 25 MB per file.</p>
          </div>

          <div className="mt-6">
            <label htmlFor="courseworkType" className="block text-sm font-medium text-gray-700">Select your course & subjects*</label>
            <div className="mt-2">
              <select id="courseworkType" className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Coursework Type</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <div className="mt-2">
              <select id="subject" className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Subject</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="essayTitle" className="block text-sm font-medium text-gray-700">Enter your essay title*</label>
            <div className="mt-2">
              <input
                type="text"
                id="essayTitle"
                className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="how nation works..."
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
              Evaluate your Score
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/3 bg-indigo-50 p-6 flex flex-col justify-center items-center rounded-r-lg">
          <img
            src="/robot.png" // Replace with the actual path to your image
            alt="Robot"
            className="w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-bold text-purple mb-2 text-center">Evaluate your Coursework with a single click</h2>
          <p className="text-gray-600 text-center">Get your coursework evaluated instantly with our smart tool.</p>
        </div>
      </div>
    </div>
  );
}
